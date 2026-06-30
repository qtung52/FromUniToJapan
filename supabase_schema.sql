-- ============================================================================
-- SUPABASE SCHEMA DOCUMENTATION - NIHON CAREER READY
-- ============================================================================
-- The application utilizes a key-value storage model in a single table called 
-- `app_state` to store schema-less JSON arrays of application data.
-- This file details the actual SQL table structure and the conceptual JSON schemas
-- for users, forum threads, and rulebooks.
-- ============================================================================

-- 1. Main Key-Value Storage Table
CREATE TABLE IF NOT EXISTS app_state (
    id SERIAL PRIMARY KEY,
    key TEXT UNIQUE NOT NULL, -- e.g., 'users', 'threads', 'dictionary'
    value JSONB NOT NULL DEFAULT '[]'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Trigger to automatically update updated_at timestamp on row update
CREATE OR REPLACE FUNCTION update_app_state_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER tr_update_app_state_timestamp
    BEFORE UPDATE ON app_state
    FOR EACH ROW
    EXECUTE FUNCTION update_app_state_timestamp();


-- ============================================================================
-- CONCEPTUAL JSON SCHEMAS (Stored as JSONB arrays inside 'value' column)
-- ============================================================================

------------------------------------------------------------------------------
-- KEY: 'users'
-- Represents registered member accounts in the system.
------------------------------------------------------------------------------
/*
[
  {
    "email": "user@example.com",           -- TEXT (Unique ID)
    "name": "Nguyen Van A",                -- TEXT (Display Name)
    "password": "hashed_or_plain_string",  -- TEXT (Auth password)
    "avatar": "🧑‍💻",                       -- TEXT (Emoji character or Base64 data URL)
    "bio": "Sinh viên ngành Nhật Bản học", -- TEXT (Biography introduction)
    "careerGoal": "Bridge SE",             -- TEXT (Selected from CAREER_GOALS list)
    "securityQuestion": "Pet name?",       -- TEXT (For password recovery verification)
    "securityAnswer": "Mimi",              -- TEXT (Encrypted or plain recovery answer)
    "isAdmin": false,                      -- BOOLEAN (System administrator rights flag)
    "isSenpai": true,                      -- BOOLEAN (Mentor/Senpai identifier flag)
    "customRole": "Senpai",                -- TEXT (Optional custom display role label)
    "selfDeclaredExperience": "3 năm IT"   -- TEXT [NEW] (Self-declared experience tag for Senpais)
  }
]
*/

------------------------------------------------------------------------------
-- KEY: 'threads' (Community Forum Posts & Q&A)
-- Stores forum topics, replies, likes, and helpful votes.
------------------------------------------------------------------------------
/*
[
  {
    "id": 1,                               -- INTEGER (Unique Thread ID)
    "tag": "culture-shock",             -- TEXT (Corresponds to FORUM_TOPICS ID)
    "tagName": "Sốc văn hóa",           -- TEXT (Display label of the tag)
    "title": "Văn hóa Nomikai (Tiệc rượu công sở) - Có bắt buộc tham gia không?",  -- TEXT (Title of the post)
    "author": "Kouhai_A",                  -- TEXT (Author display name)
    "authorEmail": "kouhai@example.com",   -- TEXT (Author email ID)
    "date": "2026-06-11T07:40:00Z",        -- TEXT (ISO 8601 creation timestamp)
    "content": "Em muốn hỏi quy tắc...",   -- TEXT (Body content of the post)
    "likes": [                             -- ARRAY of TEXT (Emails of users who liked the post)
      "user1@example.com",
      "user2@example.com"
    ],
    "answers": [                           -- ARRAY of JSON objects (List of replies/comments)
      {
        "id": 101,                         -- INTEGER (Unique Reply ID)
        "author": "Senpai_Minh",           -- TEXT (Reply author name)
        "authorEmail": "minh@example.com", -- TEXT (Reply author email)
        "role": "Senpai",                  -- TEXT (Fallback role description)
        "date": "2026-06-11T09:40:00Z",    -- TEXT (ISO 8601 reply timestamp)
        "content": "Chào em, quy tắc...", -- TEXT (Body content of the reply)
        "helpfulVotes": [                  -- ARRAY of TEXT [NEW] (Emails of users voting this helpful)
          "user1@example.com",
          "user3@example.com"
        ]
      }
    ]
  }
]
*/

------------------------------------------------------------------------------
-- KEY: 'dictionary' (Culture Handbook/Flashcards)
-- Stores Dos & Don'ts rules and interactive situational quizzes.
------------------------------------------------------------------------------
/*
[
  {
    "id": "ojigi-15",                       -- TEXT (Unique rule card ID)
    "category": "ojigi",                    -- TEXT (Card category index)
    "titleJp": "会釈 (Meshaku)",             -- TEXT (Japanese Kanji/Kana title)
    "titleVi": "Cúi chào xã giao - 15 độ",  -- TEXT (Vietnamese translation/display title)
    "frontDesc": "Cúi chào nhẹ nhàng...",   -- TEXT (Brief intro text shown on the card front)
    "dos": [                                -- ARRAY of TEXT (Rules of what to do)
      "Gập người góc khoảng 15 độ",
      "Đứng lại chào rồi đi tiếp"
    ],
    "donts": [                              -- ARRAY of TEXT (Rules of what to avoid)
      "Không vừa đi vừa cúi đầu"
    ],
    "scenarios": [                          -- ARRAY of JSON objects [NEW] (8-10 interactive scenario quizzes)
      {
        "situation": "Bạn gặp sếp...",      -- TEXT (Description of the situation)
        "options": [                        -- ARRAY of TEXT (3 multiple-choice options)
          "Cúi chào 15 độ",
          "Chạy qua vẫy tay",
          "Phớt lờ sếp"
        ],
        "correctOption": 0,                 -- INTEGER (0-based index of the correct answer)
        "explanation": "Giải thích..."      -- TEXT (Detail explanation after answering)
      }
    ]
  }
]
*/
