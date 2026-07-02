import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

// ─── XP / Level logic (mirror of Dictionary.jsx) ──────────────────────────
const LEVEL_CONFIG = [
  { rank: 'E', label: 'Tân binh',       minXp: 0,    maxXp: 99,   color: '#78909c', bg: 'rgba(120,144,156,0.12)', gradient: 'linear-gradient(135deg,#78909c,#546e7a)',     topPercent: 100 },
  { rank: 'D', label: 'Người học',      minXp: 100,  maxXp: 399,  color: '#27ae60', bg: 'rgba(39,174,96,0.12)',  gradient: 'linear-gradient(135deg,#27ae60,#1e8449)',    topPercent: 80  },
  { rank: 'C', label: 'Học viên',       minXp: 400,  maxXp: 999,  color: '#2980b9', bg: 'rgba(41,128,185,0.12)', gradient: 'linear-gradient(135deg,#2980b9,#21618c)',    topPercent: 55  },
  { rank: 'B', label: 'Thực thụ',       minXp: 1000, maxXp: 2499, color: '#8e44ad', bg: 'rgba(142,68,173,0.12)', gradient: 'linear-gradient(135deg,#8e44ad,#6c3483)',    topPercent: 30  },
  { rank: 'A', label: 'Bậc thầy',       minXp: 2500, maxXp: 4999, color: '#e67e22', bg: 'rgba(230,126,34,0.12)', gradient: 'linear-gradient(135deg,#e67e22,#d35400)',    topPercent: 15  },
  { rank: 'S', label: 'Huyền thoại',    minXp: 5000, maxXp: Infinity, color: '#c0392b', bg: 'rgba(192,57,43,0.12)', gradient: 'linear-gradient(135deg,#f39c12,#c0392b)', topPercent: 2   },
];

function getUserLevel(xp) {
  for (let i = LEVEL_CONFIG.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_CONFIG[i].minXp) {
      const cfg = LEVEL_CONFIG[i];
      const next = LEVEL_CONFIG[i + 1];
      const progressInLevel = next ? ((xp - cfg.minXp) / (next.minXp - cfg.minXp)) : 1;
      return { ...cfg, xp, nextRank: next ? next.rank : null, nextXp: next ? next.minXp : null, progressInLevel: Math.min(1, progressInLevel) };
    }
  }
  return { ...LEVEL_CONFIG[0], xp, nextRank: LEVEL_CONFIG[1].rank, nextXp: LEVEL_CONFIG[1].minXp, progressInLevel: xp / 100 };
}

function loadUserStats() {
  try {
    const challenges = JSON.parse(localStorage.getItem('nihon_challenges_completed')) || [];
    const flipped = Array.from(new Set(JSON.parse(localStorage.getItem('nihon_cards_flipped')) || []));
    const bookmarks = Array.from(new Set(JSON.parse(localStorage.getItem('nihon_bookmarked_cards')) || []));
    const audioCount = parseInt(localStorage.getItem('nihon_audio_listened_count')) || 0;
    const streakData = JSON.parse(localStorage.getItem('nihon_streak_data')) || { streak: 0 };

    // XP from challenges
    const challengeXp = challenges.reduce((acc, c) => {
      const xpPerQ = c.difficulty === 'easy' ? 5 : c.difficulty === 'medium' ? 10 : c.difficulty === 'hard' ? 20 : c.difficulty === 'extreme' ? 40 : 10;
      return acc + Math.round((c.score || 0) * xpPerQ);
    }, 0);
    // XP from flipping cards (+2 each)
    const cardXp = flipped.length * 2;
    // XP from bookmarks (+1 each)
    const bookmarkXp = bookmarks.length * 1;
    // XP from audio (+1 each)
    const audioXp = audioCount * 1;
    const totalXp = challengeXp + cardXp + bookmarkXp + audioXp;

    const learnedCards = flipped.length;

    return {
      xp: totalXp,
      learnedCards,
      totalCards: Math.max(learnedCards, 20),
      streak: streakData.streak || 0,
    };
  } catch {
    return { xp: 0, learnedCards: 0, totalCards: 20, streak: 0 };
  }
}
// ──────────────────────────────────────────────────────────────────────────

export default function Hero({ onViewChange, currentUser }) {
  const heroRef = useRef(null);
  const [stats, setStats] = useState(() => loadUserStats());

  // Re-read localStorage when the component mounts / when user changes
  useEffect(() => {
    const handleUpdate = () => {
      setStats(loadUserStats());
    };
    window.addEventListener('nihon_stats_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    // Initial load
    handleUpdate();

    return () => {
      window.removeEventListener('nihon_stats_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [currentUser]);

  const levelInfo = getUserLevel(stats.xp);
  const pct = Math.round(levelInfo.progressInLevel * 100);

  // Avatar: base64 image or relative path starting with / or absolute URL starting with http → <img>
  const renderAvatar = () => {
    if (!currentUser) return <span style={{ fontSize: '1.6rem' }}>👩‍💻</span>;
    const av = currentUser.avatar;
    if (av && (av.startsWith('data:') || av.startsWith('http') || av.startsWith('/'))) {
      return <img src={av} alt={currentUser.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />;
    }
    if (av && av.length <= 4) return <span style={{ fontSize: '1.6rem' }}>{av}</span>;
    // Initials fallback
    const initials = (currentUser.name || 'U').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    return <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--jp-blue)' }}>{initials}</span>;
  };

  // Staggered reveal for hero children on mount
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const children = el.querySelectorAll('[data-hero-reveal]');
    children.forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(24px)';
      child.style.transition = `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        });
      });
    });
  }, []);

  return (
    <div className={styles.heroSection} ref={heroRef}>
      <div className={styles.heroContentWrapper}>
        {/* ── Left: Text Content ── */}
        <div className={styles.textContent}>
          <div className={styles.tagWrapper} data-hero-reveal>
            <span className={styles.tag}>
              <Sparkles size={13} style={{ marginRight: '6px', flexShrink: 0 }} />
              ỨNG DỤNG CHO SINH VIÊN VIỆT NAM
            </span>
          </div>

          <h1 className={styles.title} data-hero-reveal>
            Bệ phóng vững chắc tới <br />
            <span className={styles.textGradient}>Công sở Nhật Bản</span>
          </h1>

          <p className={styles.subtitle} data-hero-reveal>
            Trải nghiệm học tập văn hóa doanh nghiệp Nhật Bản theo phong cách hoàn toàn mới.
            Nắm bắt quy tắc ứng xử và thực hành giải quyết tình huống công sở chỉ trong vài phút.
          </p>

          <div className={styles.ctaGroup} data-hero-reveal>
            <button className={styles.btnPrimary} onClick={() => onViewChange('survey')}>
              Bắt đầu hành trình <ArrowRight size={18} />
            </button>
            <button className={styles.btnSecondary} onClick={() => onViewChange('dictionary')}>
              Khám phá Sổ tay
            </button>
          </div>
        </div>

        {/* ── Right: Live Stats Card ── */}
        <div className={styles.illustration} data-hero-reveal>
          <div className={styles.glassCardPrimary}>
            {/* Header: real user avatar + name */}
            <div className={styles.mockupHeader}>
              <div className={styles.mockupAvatar}>
                {renderAvatar()}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className={styles.mockupTitle}>
                  {currentUser?.name || 'From Uni to Japan'}
                </div>
                <div className={styles.mockupSubtitle}>
                  {stats.streak > 0
                    ? `🔥 Chuỗi ${stats.streak} ngày`
                    : 'Hành trình của bạn'}
                </div>
              </div>
            </div>

            {/* XP Progress bar */}
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  '--progress-width': `${pct}%`,
                  background: levelInfo.gradient
                }}
              />
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--jp-text-muted)', marginTop: '0.4rem' }}>
              {stats.xp} XP
              {levelInfo.nextXp
                ? ` · Còn ${levelInfo.nextXp - stats.xp} XP để Hạng ${levelInfo.nextRank} ⚡`
                : ' · Đã đạt hạng tối đa! 🎉'}
            </div>

            {/* Floating rank badge */}
            <div className={styles.glassCardSecondary}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: levelInfo.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 900, fontSize: '1rem',
                flexShrink: 0
              }}>
                {levelInfo.rank}
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--jp-text-muted)', fontWeight: 600 }}>
                  Hạng {levelInfo.rank} — {levelInfo.label}
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--jp-text)' }}>
                  {stats.xp} XP · {stats.learnedCards} thẻ đã học
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
