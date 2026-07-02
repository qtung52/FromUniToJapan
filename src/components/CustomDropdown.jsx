import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CustomDropdown({
  options = [], // Array of options: [{ value, label }] or [strings]
  value,
  onChange,
  placeholder = 'Chọn...',
  style = {},
  menuStyle = {},
  buttonStyle = {},
  disabled = false,
  showSearch = false,
  searchPlaceholder = 'Tìm kiếm...'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    if (isOpen && !isClosing) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        setSearchTerm('');
      }, 150);
    }
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isClosing]);

  const normalizedOptions = options.map(opt => {
    if (typeof opt === 'object' && opt !== null) {
      return opt;
    }
    return { value: opt, label: opt };
  });

  const filteredOptions = normalizedOptions.filter(opt =>
    (opt.label || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOption = normalizedOptions.find(opt => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  return (
    <div 
      ref={dropdownRef} 
      style={{ 
        position: 'relative', 
        display: 'inline-block', 
        width: '100%',
        zIndex: isOpen ? 101 : 1,
        ...style 
      }}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => isOpen ? closeDropdown() : setIsOpen(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0.65rem 1rem',
          borderRadius: 'var(--jp-radius, 8px)',
          border: '1px solid var(--jp-border, #e2e8f0)',
          backgroundColor: 'var(--jp-surface-raised, #ffffff)',
          color: 'var(--jp-text, #2c3e50)',
          fontSize: '0.9rem',
          fontWeight: 500,
          cursor: disabled ? 'not-allowed' : 'pointer',
          textAlign: 'left',
          transition: 'all 0.2s ease',
          outline: 'none',
          boxShadow: isOpen ? '0 0 0 3px rgba(15, 44, 89, 0.15)' : 'none',
          borderColor: isOpen ? 'var(--jp-blue, #0f2c59)' : 'var(--jp-border, #e2e8f0)',
          minHeight: '42px',
          ...buttonStyle
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {displayLabel}
        </span>
        <ChevronDown 
          size={16} 
          style={{ 
            marginLeft: '0.5rem',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            color: 'var(--jp-text-muted, #4a5568)',
            flexShrink: 0
          }} 
        />
      </button>

      {(isOpen || isClosing) && (
        <div
          style={{
            position: 'absolute',
            top: '105%',
            left: 0,
            width: 'max-content',
            minWidth: '100%',
            backgroundColor: 'var(--jp-card-bg, #ffffff)',
            borderRadius: 'var(--jp-radius, 8px)',
            border: '1px solid var(--jp-border, #e2e8f0)',
            boxShadow: 'var(--jp-shadow, 0 10px 30px rgba(15, 44, 89, 0.1))',
            maxHeight: '260px',
            overflowY: 'auto',
            padding: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            animation: isClosing
              ? 'dropdownFadeOut 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards'
              : 'dropdownFadeIn 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            ...menuStyle
          }}
        >
          {showSearch && (
            <div style={{ 
              padding: '6px', 
              borderBottom: '1px solid var(--jp-border)', 
              position: 'sticky', 
              top: 0, 
              background: 'var(--jp-card-bg)', 
              zIndex: 10,
              boxSizing: 'border-box'
            }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={searchPlaceholder}
                onClick={(e) => e.stopPropagation()} // prevent closing dropdown
                style={{
                  width: '100%',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid var(--jp-border)',
                  outline: 'none',
                  fontSize: '0.85rem',
                  background: 'var(--jp-surface)',
                  color: 'var(--jp-text)',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflowY: 'auto', flex: 1 }}>
            {filteredOptions.length === 0 ? (
              <div style={{ padding: '0.8rem 1rem', fontSize: '0.85rem', color: 'var(--jp-text-muted)', textAlign: 'center' }}>
                Không tìm thấy kết quả
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <div
                    key={opt.value}
                    onClick={() => {
                      onChange(opt.value);
                      closeDropdown();
                    }}
                    style={{
                      padding: '0.6rem 0.85rem',
                      borderRadius: '6px',
                      fontSize: '0.88rem',
                      color: isSelected ? 'var(--jp-blue, #0f2c59)' : 'var(--jp-text, #2c3e50)',
                      backgroundColor: isSelected ? 'var(--jp-blue-light, #e6eefc)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s, color 0.2s',
                      fontWeight: isSelected ? 600 : 400,
                      textAlign: 'left',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--jp-soft-surface, rgba(15, 44, 89, 0.03))';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {opt.label}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
