import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';

// SVG icons rendered by category — không lưu vào localStorage
function CategoryIcon({ category, id }) {
  if (category === 'ojigi') {
    const deg = id?.includes('15') ? 15 : id?.includes('45') ? 45 : 30;
    return (
      <svg viewBox="0 0 100 100" width="60" height="60">
        <circle cx="50" cy="22" r="10" fill="var(--jp-blue)" />
        <line x1="50" y1="32" x2="50" y2="62" stroke="var(--jp-blue)" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="62" x2="40" y2="85" stroke="var(--jp-blue)" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="62" x2="60" y2="85" stroke="var(--jp-blue)" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="42" x2="30" y2={42 + deg} stroke="var(--jp-red)" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="42" x2="70" y2={42 + deg * 0.3} stroke="var(--jp-red)" strokeWidth="4" strokeLinecap="round" />
        <text x="68" y="28" fontSize="9" fill="var(--jp-red)" fontWeight="bold">{deg}°</text>
      </svg>
    );
  }
  if (category === 'meishi') {
    return (
      <svg viewBox="0 0 100 100" width="60" height="60">
        <rect x="15" y="32" width="70" height="44" rx="3" fill="none" stroke="var(--jp-blue)" strokeWidth="3" />
        <line x1="22" y1="45" x2="55" y2="45" stroke="var(--jp-red)" strokeWidth="2" />
        <line x1="22" y1="55" x2="45" y2="55" stroke="var(--jp-border)" strokeWidth="2" />
        <circle cx="72" cy="50" r="8" fill="var(--jp-blue-light)" stroke="var(--jp-blue)" strokeWidth="2" />
        <path d="M68 50 L71 53 L76 47" stroke="var(--jp-blue)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M22 82 Q50 72 78 82" fill="none" stroke="var(--jp-text-muted)" strokeWidth="2" />
      </svg>
    );
  }
  if (category === 'seating') {
    return (
      <svg viewBox="0 0 100 100" width="60" height="60">
        <rect x="10" y="15" width="80" height="70" rx="4" fill="none" stroke="var(--jp-border)" strokeWidth="2" />
        <rect x="20" y="25" width="60" height="50" rx="3" fill="var(--jp-blue-light)" stroke="var(--jp-blue)" strokeWidth="2" />
        <text x="50" y="47" fontSize="7" fill="var(--jp-red)" textAnchor="middle" fontWeight="bold">KAMIZA</text>
        <text x="50" y="58" fontSize="6" fill="var(--jp-text-muted)" textAnchor="middle">(Ghế danh dự)</text>
      </svg>
    );
  }
  if (category === 'dresscode') {
    return (
      <svg viewBox="0 0 100 100" width="60" height="60">
        <path d="M32 20 L68 20 L72 35 L60 40 L60 85 L40 85 L40 40 L28 35 Z" fill="var(--jp-blue)" />
        <path d="M43 20 L50 40 L57 20 Z" fill="#fff" />
        <rect x="47" y="42" width="6" height="30" fill="var(--jp-red)" rx="2" />
      </svg>
    );
  }
  if (category === 'nomikai') {
    return (
      <svg viewBox="0 0 100 100" width="60" height="60">
        <path d="M30 45 L42 45 L38 75 L30 75 Z" fill="none" stroke="var(--jp-blue)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M30 52 L36 52" stroke="var(--jp-blue)" strokeWidth="2" />
        <path d="M30 62 L35 62" stroke="var(--jp-blue)" strokeWidth="2" />
        <path d="M26 50 C22 50 22 65 26 65" fill="none" stroke="var(--jp-blue)" strokeWidth="2.5" />
        <path d="M70 45 L58 45 L62 75 L70 75 Z" fill="none" stroke="var(--jp-blue)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M70 52 L64 52" stroke="var(--jp-blue)" strokeWidth="2" />
        <path d="M70 62 L65 62" stroke="var(--jp-blue)" strokeWidth="2" />
        <path d="M74 50 C78 50 78 65 74 65" fill="none" stroke="var(--jp-blue)" strokeWidth="2.5" />
        <path d="M50 35 L50 42" stroke="var(--jp-red)" strokeWidth="2" strokeLinecap="round" />
        <path d="M43 38 L48 41" stroke="var(--jp-red)" strokeWidth="2" strokeLinecap="round" />
        <path d="M57 38 L52 41" stroke="var(--jp-red)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (category === 'email_phone') {
    return (
      <svg viewBox="0 0 100 100" width="60" height="60">
        <rect x="15" y="25" width="50" height="32" rx="3" fill="none" stroke="var(--jp-blue)" strokeWidth="3" />
        <path d="M15 28 L40 45 L65 28" fill="none" stroke="var(--jp-blue)" strokeWidth="2.5" />
        <rect x="50" y="45" width="32" height="42" rx="5" fill="var(--jp-surface)" stroke="var(--jp-blue)" strokeWidth="3" />
        <circle cx="66" cy="80" r="3" fill="var(--jp-red)" />
        <line x1="56" y1="52" x2="76" y2="52" stroke="var(--jp-text-muted)" strokeWidth="2" strokeLinecap="round" />
        <line x1="56" y1="60" x2="70" y2="60" stroke="var(--jp-text-muted)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (category === 'omiyage') {
    return (
      <svg viewBox="0 0 100 100" width="60" height="60">
        <rect x="22" y="32" width="56" height="46" rx="3" fill="none" stroke="var(--jp-blue)" strokeWidth="3" />
        <line x1="22" y1="55" x2="78" y2="55" stroke="var(--jp-red)" strokeWidth="3" />
        <line x1="50" y1="32" x2="50" y2="78" stroke="var(--jp-red)" strokeWidth="3" />
        <path d="M50 55 C42 45 42 65 50 55" fill="none" stroke="var(--jp-red)" strokeWidth="2.5" />
        <path d="M50 55 C58 45 58 65 50 55" fill="none" stroke="var(--jp-red)" strokeWidth="2.5" />
        <circle cx="50" cy="55" r="4" fill="var(--jp-red)" />
      </svg>
    );
  }
  if (category === 'workrules') {
    return (
      <svg viewBox="0 0 100 100" width="60" height="60">
        <rect x="25" y="25" width="50" height="58" rx="4" fill="none" stroke="var(--jp-border)" strokeWidth="2" />
        <path d="M42 25 L42 18 L58 18 L58 25 Z" fill="var(--jp-blue)" />
        <circle cx="50" cy="21" r="2" fill="#fff" />
        <line x1="42" y1="40" x2="65" y2="40" stroke="var(--jp-text-muted)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="42" y1="52" x2="65" y2="52" stroke="var(--jp-text-muted)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="42" y1="64" x2="65" y2="64" stroke="var(--jp-text-muted)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 38 L35 41 L39 36" fill="none" stroke="var(--jp-red)" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 50 L35 53 L39 48" fill="none" stroke="var(--jp-red)" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 62 L35 65 L39 60" fill="none" stroke="var(--jp-red)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  // Default (admin-added cards)
  return (
    <svg viewBox="0 0 100 100" width="60" height="60">
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--jp-red)" strokeWidth="3" />
      <path d="M30 50 L45 65 L70 35" fill="none" stroke="var(--jp-blue)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const MANNERS_DATA = [
  {
    id: 'ojigi-15',
    category: 'ojigi',
    titleJp: '会釈 (Meshaku)',
    titleVi: 'Cúi chào xã giao - 15 độ',
    frontDesc: 'Cúi chào nhẹ nhàng khi gặp nhau ở hành lang, thang máy hoặc chào hỏi đồng nghiệp cùng cấp.',
    dos: [
      'Gập người góc khoảng 15 độ.',
      'Hai tay đặt tự nhiên bên sườn (nam) hoặc chụm trước đùi (nữ).',
      'Đứng lại chào rồi đi tiếp, tránh vừa đi vừa cúi đầu.'
    ],
    donts: [
      'Không cúi đầu quá nhanh hoặc quá hời hợt.',
      'Không vừa đi vừa cúi đầu.',
      'Không nhìn chằm chằm vào mặt đối phương khi đang cúi.'
    ]
  },
  {
    id: 'ojigi-30',
    category: 'ojigi',
    titleJp: '敬礼 (Keirei)',
    titleVi: 'Cúi chào kính trọng - 30 độ',
    frontDesc: 'Chào hỏi cấp trên, khách hàng, đối tác hoặc khi bắt đầu cuộc họp trang trọng.',
    dos: [
      'Cúi gập lưng góc khoảng 30 độ.',
      'Lưng thẳng, cổ thẳng theo trục sống lưng.',
      'Dành khoảng 1 giây ở vị trí cúi thấp rồi từ từ đứng lên.'
    ],
    donts: [
      'Không cong lưng hoặc ngẩng cổ nhìn lên.',
      'Không chắp hai tay trước ngực kiểu Phật giáo.',
      'Không chào quá vội vàng.'
    ]
  },
  {
    id: 'ojigi-45',
    category: 'ojigi',
    titleJp: '最敬礼 (Saikeirei)',
    titleVi: 'Cúi chào trang trọng nhất - 45 độ',
    frontDesc: 'Dùng khi muốn bày tỏ lòng biết ơn sâu sắc, xin lỗi chân thành hoặc chào đón bậc bề trên.',
    dos: [
      'Cúi gập sâu góc từ 45 đến 90 độ.',
      'Giữ tư thế cúi sâu trong khoảng 2–3 giây để thể hiện sự chân thành.',
      'Tập trung toàn bộ ý chí hướng về đối phương.'
    ],
    donts: [
      'Không ngẩng mặt lên quá nhanh.',
      'Không nói lời xin lỗi/cảm ơn khi đang ở tư thế cúi thấp (nói trước rồi cúi sau).'
    ]
  },
  {
    id: 'ojigi-5',
    category: 'ojigi',
    titleJp: '黙礼 (Mokurei)',
    titleVi: 'Gật đầu chào nhẹ',
    frontDesc: 'Chào nhẹ bằng ánh mắt hoặc gật đầu nhẹ khi chạm mặt cấp trên/đồng nghiệp nhiều lần trong ngày.',
    dos: [
      'Mắt nhìn đối phương nhẹ nhàng và mỉm cười lịch sự.',
      'Cúi nhẹ đầu góc khoảng 5 độ trong tư thế thẳng lưng.',
      'Giữ thái độ tự nhiên, thân thiện chốn văn phòng.'
    ],
    donts: [
      'Không cúi chào quá sâu nhiều lần liên tục (gây phiền toái cho người khác).',
      'Không làm ngơ, tránh mặt khi gặp đồng nghiệp ở khoảng cách gần.'
    ]
  },
  {
    id: 'ojigi-general',
    category: 'ojigi',
    titleJp: 'お辞儀 (Ojigi)',
    titleVi: 'Nghệ thuật cúi chào',
    frontDesc: 'Nét văn hóa đặc trưng thể hiện sự tôn trọng, lòng biết ơn và vị thế xã hội trong giao tiếp Nhật.',
    dos: [
      'Giữ thẳng cột sống và cổ, gập người từ phần hông.',
      'Thực hiện nguyên tắc Chào trước - Cúi sau (Bunri-reishi) trong bối cảnh trang trọng.',
      'Khép ngón tay thẳng: nam đặt tay dọc sườn, nữ đan tay trước bụng.'
    ],
    donts: [
      'Không vừa đi vừa cúi chào hoặc vừa nói vừa cúi đầu.',
      'Tránh cúi gập liên tục như gật gà gật gù (gây cảm giác không chân thành).'
    ]
  },
  {
    id: 'ojigi-chikoku',
    category: 'ojigi',
    titleJp: '遅刻連絡 (Chikoku Renraku)',
    titleVi: 'Báo cáo khi đi muộn',
    frontDesc: 'Quy tắc ứng xử và liên lạc xin lỗi thành khẩn khi không thể đến văn phòng đúng giờ hẹn.',
    dos: [
      'Gọi điện trực tiếp báo cáo cấp trên trước giờ làm ít nhất 10-15 phút.',
      'Giải thích rõ lý do khách quan (trễ tàu, sự cố...) và ước lượng thời gian tới.',
      'Cúi chào xin lỗi sếp và đồng nghiệp xung quanh khi bước vào bàn làm việc.'
    ],
    donts: [
      'Tuyệt đối không gửi tin nhắn mạng xã hội (Line/Zalo) hời hợt trừ khi có quy định khác.',
      'Không đi muộn mà không báo trước hoặc báo sát giờ làm.'
    ]
  },
  {
    id: 'meishi-1',
    category: 'meishi',
    titleJp: '名刺交換 (Meishi Koukan)',
    titleVi: 'Cách trao danh thiếp',
    frontDesc: 'Nghi thức bắt buộc khi gặp đối tác kinh doanh lần đầu. Thể hiện sự tôn trọng tuyệt đối.',
    dos: [
      'Dùng cả hai tay nâng danh thiếp hướng về phía đối phương.',
      'Mặt chữ ngửa lên và đầu chữ hướng về đối phương.',
      'Chủ động đưa thấp hơn vị trí danh thiếp của đối tác để tỏ ý khiêm nhường.'
    ],
    donts: [
      'Không dùng một tay đưa danh thiếp.',
      'Không che khuất logo hoặc thông tin trên danh thiếp bằng ngón tay.',
      'Không viết đè lên danh thiếp đã nhận.'
    ]
  },
  {
    id: 'meishi-2',
    category: 'meishi',
    titleJp: '名刺の置き方 (Meishi Okikata)',
    titleVi: 'Cách đặt danh thiếp trên bàn họp',
    frontDesc: 'Sau khi nhận danh thiếp, không được cất ngay vào ví mà phải đặt trên bàn họp đúng quy tắc.',
    dos: [
      'Đặt danh thiếp lên trên chiếc hộp đựng danh thiếp (Meishiire) của bạn.',
      'Xếp danh thiếp theo vị trí ngồi của đối tác để dễ nhớ tên.',
      'Đặt ở phía bên trái vị trí ngồi của bạn.'
    ],
    donts: [
      'Tuyệt đối không đè tài liệu hay tách trà lên trên danh thiếp đối tác.',
      'Không nghịch danh thiếp hoặc uốn cong danh thiếp trong cuộc họp.'
    ]
  },
  {
    id: 'meishi-aisatsu',
    category: 'meishi',
    titleJp: '挨拶 (Aisatsu)',
    titleVi: 'Chào hỏi hàng ngày',
    frontDesc: 'Chào hỏi đầu ngày khi đến văn phòng và trước khi ra về để thể hiện thái độ tôn trọng đồng nghiệp.',
    dos: [
      'Chào to, rõ ràng khi đến văn phòng (Ohayou gozaimasu).',
      'Chào mọi người trước khi ra về (Osaki ni shitsurei shimasu).',
      'Đáp lại lời chào của người khác một cách thân thiện.'
    ],
    donts: [
      'Không đi làm hoặc ra về lặng lẽ mà không nói lời nào.',
      'Tránh chào lí nhí trong miệng khiến người khác không nghe rõ.'
    ]
  },
  {
    id: 'seating-1',
    category: 'seating',
    titleJp: '上座と下座 (Kamiza & Shimoza)',
    titleVi: 'Vị trí ghế ngồi danh dự',
    frontDesc: 'Quy tắc phân chia chỗ ngồi trong phòng họp, ô tô, thang máy thể hiện thứ bậc lễ nghi.',
    dos: [
      'Kamiza (Ghế tôn kính) là ghế ở xa cửa ra vào nhất.',
      'Shimoza (Ghế thấp kém) là ghế nằm sát cửa, chịu trách nhiệm đón tiếp, gọi món hoặc bấm thang máy.',
      'Mời khách hàng hoặc sếp lớn vào ngồi ở vị trí Kamiza trước.'
    ],
    donts: [
      'Người trẻ/người mới không được tự ý ngồi vào vị trí trong cùng khi chưa được mời.',
      'Đừng đứng chắn trước mặt người ngồi ở Kamiza.'
    ]
  },
  {
    id: 'seating-ousetsu',
    category: 'seating',
    titleJp: '応接室 (Ousetsushitsu)',
    titleVi: 'Ghế ngồi phòng tiếp khách',
    frontDesc: 'Quy tắc sắp xếp chỗ ngồi khi đón tiếp đối tác/khách hàng tại ghế Sofa phòng khách.',
    dos: [
      'Khách hoặc đối tác ngồi ghế Sofa dài (ghế chính) ở vị trí trong cùng xa cửa nhất.',
      'Chủ nhà hoặc người tiếp tiếp đón ngồi ghế đơn ở phía gần cửa ra vào.',
      'Luôn nhường ghế thoải mái nhất cho khách hàng tôn quý.'
    ],
    donts: [
      'Không ngồi ghế Sofa dài nếu bạn là bên tiếp đón hoặc cấp bậc thấp hơn.',
      'Không để khách ngồi ghế gần cửa ra vào nơi ồn ào và nhiều người đi qua.'
    ]
  },
  {
    id: 'seating-entaku',
    category: 'seating',
    titleJp: '円卓 (Entaku)',
    titleVi: 'Chỗ ngồi bàn ăn tròn',
    frontDesc: 'Thứ tự vị trí ngồi tại bàn tiệc ẩm thực hoặc phòng họp sử dụng bàn tròn.',
    dos: [
      'Khách hàng hoặc sếp lớn ngồi ở vị trí đối diện trực tiếp với cửa ra vào (Kamiza).',
      'Cấp bậc giảm dần khi vị trí xa dần khỏi Kamiza.',
      'Người có vị trí thấp nhất (Kouhai/Nhân viên mới) ngồi gần cửa ra vào nhất.'
    ],
    donts: [
      'Không tự ý kéo ghế chọn chỗ ngẫu nhiên khi chưa được chỉ định.',
      'Không ngồi chiếm vị trí đối diện cửa chính trừ khi được phân công trực tiếp.'
    ]
  },
  {
    id: 'seating-2',
    category: 'seating',
    titleJp: '乗り物の席 (Norimono no Seki)',
    titleVi: 'Thứ tự trong ô tô & thang máy',
    frontDesc: 'Khi đi cùng sếp hay khách hàng bằng taxi/ô tô công ty hoặc thang máy, thứ tự rất quan trọng.',
    dos: [
      'Trong taxi: Ghế sau bên trái (sau ghế phụ) là ghế danh dự nhất, dành cho khách/sếp.',
      'Trong thang máy: Người mới phải đứng gần bảng điều khiển để bấm tầng và giữ cửa cho mọi người.',
      'Mời khách lên xe hoặc vào thang máy trước, bạn lên sau cùng.'
    ],
    donts: [
      'Không tự ý chọn ngồi ghế sau bên trái khi đi cùng cấp trên.',
      'Không bỏ tay khỏi nút giữ cửa thang máy khi mọi người chưa vào hết.'
    ]
  },
  {
    id: 'seating-kaigishitsu',
    category: 'seating',
    titleJp: '会議室 (Kaigishitsu)',
    titleVi: 'Chỗ ngồi phòng họp dài',
    frontDesc: 'Quy tắc sắp xếp vị trí xung quanh bàn họp dài chữ nhật cho thành viên và đối tác.',
    dos: [
      'Khách hàng hoặc người có chức vụ cao nhất ngồi ở giữa bàn, xa cửa chính nhất.',
      'Thành viên thuyết trình hoặc thư ký ngồi gần cửa ra vào để tiện thao tác thiết bị.',
      'Chủ động đứng dậy nhường ghế trong cùng khi sếp lớn bước vào.'
    ],
    donts: [
      'Không ngồi vào dãy ghế trung tâm trong cùng nếu bạn chỉ là người dự thính có bậc thấp.',
      'Tránh ngồi chắn tầm nhìn của người chủ trì cuộc họp.'
    ]
  },
  {
    id: 'seating-taxi',
    category: 'seating',
    titleJp: 'タクシー (Takushii)',
    titleVi: 'Chỗ ngồi xe taxi 4 chỗ',
    frontDesc: 'Quy tắc phân chia vị thế ngồi trên taxi khi đi công tác cùng đối tác và cấp trên.',
    dos: [
      'Mời sếp lớn/khách hàng ngồi ghế sau bên trái tài xế (vị trí an toàn và lịch sự nhất).',
      'Người có vị trí thấp nhất ngồi ở ghế phụ phía trước bên cạnh tài xế.',
      'Người ngồi ghế phụ chịu trách nhiệm thanh toán tiền và chỉ đường cho tài xế.'
    ],
    donts: [
      'Không để khách hàng hoặc cấp trên phải ngồi ở ghế phụ phía trước.',
      'Tránh tranh chấp vị trí ghế ngồi sau khi xe đã đỗ.'
    ]
  },
  {
    id: 'dresscode-1',
    category: 'dresscode',
    titleJp: '身だしなみ (Midashinami)',
    titleVi: 'Trang phục công sở chuẩn mực',
    frontDesc: 'Trang phục chỉnh tề (Midashinami) thể hiện tinh thần ngăn nắp, lịch sự và tôn trọng tổ chức.',
    dos: [
      'Mặc bộ vest công sở tối màu (Recruit Suit: đen, navy, xám đậm).',
      'Ủi phẳng áo sơ mi trắng, cài kín nút cổ.',
      'Tóc gọn gàng, móng tay cắt ngắn sạch sẽ, nước hoa nhẹ hoặc không dùng.'
    ],
    donts: [
      'Không đi giày bẩn, giày da sờn rách.',
      'Không đeo đồ trang sức quá lòe loẹt, nổi bật.',
      'Tránh nhuộm tóc màu quá sáng khi phỏng vấn hoặc mới vào công ty.'
    ]
  },
  {
    id: 'dresscode-coolbiz',
    category: 'dresscode',
    titleJp: 'クールビズ (Cool Biz)',
    titleVi: 'Trang phục mùa hè Cool Biz',
    frontDesc: 'Quy chuẩn trang phục công sở Nhật Bản từ tháng 5 đến tháng 10 nhằm tiết kiệm năng lượng làm mát.',
    dos: [
      'Cho phép cởi bỏ cà vạt và áo khoác vest ngoài khi làm việc tại văn phòng.',
      'Mặc áo sơ mi cộc tay lịch sự hoặc áo polo trơn màu trung tính.',
      'Quần âu dài mỏng thoáng mát phẳng phiu.'
    ],
    donts: [
      'Tuyệt đối không mặc áo thun ba lỗ, quần lửng hay đi dép lê tại nơi làm việc.',
      'Tránh áo sơ mi quá mỏng, hở hang hoặc có họa tiết sặc sỡ.'
    ]
  },
  {
    id: 'dresscode-officecasual',
    category: 'dresscode',
    titleJp: 'オフィスカジュアル (Office Casual)',
    titleVi: 'Phong cách Office Casual',
    frontDesc: 'Quy chuẩn trang phục tự do thoải mái hơn nhưng vẫn giữ được tính lịch sự tại nơi công sở.',
    dos: [
      'Phối hợp áo thun trơn màu nhã nhặn kèm áo khoác Blazer ngoài.',
      'Mặc quần Kaki dài phẳng hoặc quần Chino trung tính dáng thanh lịch.',
      'Sử dụng giày Loafer da hoặc sneaker phong cách tối giản màu tối sạch sẽ.'
    ],
    donts: [
      'Không mặc quần Jeans rách rưới phá cách, áo phông in hình lòe loẹt.',
      'Tránh giày thể thao chạy bộ hầm hố, màu neon chói mắt.'
    ]
  },
  {
    id: 'dresscode-2',
    category: 'dresscode',
    titleJp: 'ビジネスカジュアル (Business Casual)',
    titleVi: 'Trang phục Business Casual',
    frontDesc: 'Nhiều công ty Nhật hiện đại cho phép mặc Business Casual nhưng vẫn cần giữ chuẩn mực nhất định.',
    dos: [
      'Áo sơ mi có cổ, quần âu hoặc chân váy công sở dưới đầu gối.',
      'Giày da hoặc giày lịch sự, gọn gàng, sạch sẽ.',
      'Màu sắc trung tính: be, trắng, xanh nhạt, xám.'
    ],
    donts: [
      'Không mặc Jeans, áo thun in hình, giày thể thao khi không được phép.',
      'Không để lộ vai hoặc mặc váy quá ngắn trong giờ làm việc.',
      'Không mặc quần áo nhàu nát, bẩn dù là Business Casual.'
    ]
  },
  {
    id: 'meishi-nomikai',
    category: 'nomikai',
    titleJp: '飲み会 (Nomikai)',
    titleVi: 'Văn hóa tiệc rượu giao lưu',
    frontDesc: 'Quy tắc ứng xử và giao lưu ăn uống sau giờ làm để gắn kết tình đồng nghiệp chốn công sở.',
    dos: [
      'Dùng cả hai tay rót bia/rượu cho sếp hoặc đồng nghiệp lớn tuổi hơn.',
      'Để miệng ly cụng của bạn thấp hơn miệng ly đối phương khi nâng ly.',
      'Chú ý quan sát và chủ động gọi thêm đồ uống khi ly của người khác gần cạn.'
    ],
    donts: [
      'Tuyệt đối không tự rót rượu cho bản thân mình trước.',
      'Tránh nói quá nhiều về công việc gây căng thẳng trừ khi được sếp chủ động khơi gợi.'
    ]
  },
  {
    id: 'meishi-mail',
    category: 'email_phone',
    titleJp: 'ビジネスメール (Business Mail)',
    titleVi: 'Viết email công sở chuẩn',
    frontDesc: 'Quy tắc trao đổi thư điện tử chuyên nghiệp, có cấu trúc rõ ràng và kính ngữ chuẩn mực.',
    dos: [
      'Ghi tiêu đề ngắn gọn, bắt đầu bằng lời chào tiêu chuẩn (Osewa ni natte orimasu).',
      'Viết câu ngắn, phân đoạn rõ ràng bằng cách xuống dòng hợp lý.',
      'Luôn kiểm tra kỹ các file đính kèm và ký tên đầy đủ ở cuối thư.'
    ],
    donts: [
      'Không gửi email trống tiêu đề hoặc viết nội dung quá suồng sã.',
      'Tránh viết sai tên đối tác hoặc tên công ty của họ.'
    ]
  },
  {
    id: 'meishi-3',
    category: 'email_phone',
    titleJp: '電話応対 (Denwa Outai)',
    titleVi: 'Nhận điện thoại công sở',
    frontDesc: 'Quy tắc trả lời điện thoại chuyên nghiệp khi đối tác/khách hàng gọi tới văn phòng.',
    dos: [
      'Nhấc máy nhanh trước tiếng chuông thứ 3.',
      'Nói lời chào tiêu chuẩn và xác nhận tên công ty/bộ phận rõ ràng.',
      'Ghi chép thông tin người gọi và cúp máy sau khi đối phương cúp.'
    ],
    donts: [
      'Không để chuông reo quá 3 lần mà không xin lỗi vì sự chậm trễ.',
      'Không cúp máy trước đối tác.',
      'Không ăn uống hoặc nhai kẹo khi nghe điện thoại.'
    ]
  },
  {
    id: 'dresscode-temiyage',
    category: 'omiyage',
    titleJp: '手土産 (Temiyage)',
    titleVi: 'Văn hóa quà tặng đối tác',
    frontDesc: 'Nghi thức trao quà tặng đặc sản địa phương khi đi công tác về hoặc đến thăm đối tác.',
    dos: [
      'Chọn các món bánh kẹo đặc sản đóng hộp lịch sự, chia phần sẵn dễ ăn.',
      'Trao bằng cả hai tay kèm câu nói nhún nhường biểu đạt lòng thành.',
      'Đưa quà sau khi cuộc chào hỏi xã giao ban đầu kết thúc.'
    ],
    donts: [
      'Không tặng quà có số lượng 4 hoặc 9 vì đây là số không may mắn.',
      'Tránh tặng quà quá đắt tiền gây cảm giác mang ơn khó xử cho đối phương.'
    ]
  },
  {
    id: 'meishi-hourenso',
    category: 'workrules',
    titleJp: '報連相 (Hou-Ren-So)',
    titleVi: 'Báo cáo - Liên lạc - Thảo luận',
    frontDesc: 'Quy tắc giao tiếp cốt lõi để duy trì luồng thông tin thông suốt và hiệu quả trong doanh nghiệp Nhật.',
    dos: [
      'Báo cáo (Houkoku) kịp thời tiến độ công việc kể cả khi chưa hoàn thành.',
      'Liên lạc (Renraku) ngay lập tức khi xảy ra sự cố hay thay đổi kế hoạch.',
      'Thảo luận (Soudan) để xin lời khuyên của sếp hoặc đồng nghiệp khi gặp bế tắc.'
    ],
    donts: [
      'Không tự ý giấu lỗi sai hoặc tự giải quyết sự cố lớn mà không báo cáo.',
      'Không trì hoãn việc báo cáo các thông tin khẩn cấp.'
    ]
  },
  {
    id: 'dresscode-5s',
    category: 'workrules',
    titleJp: '整理整頓 (Seiri Seiton)',
    titleVi: 'Bàn làm việc ngăn nắp (5S)',
    frontDesc: 'Quy tắc dọn dẹp vệ sinh không gian làm việc và bảo mật thông tin tài liệu tại công ty.',
    dos: [
      'Dọn dẹp mặt bàn làm việc sạch sẽ, gọn gàng trước khi ra về.',
      'Khóa tài liệu quan trọng vào tủ hồ sơ riêng biệt.',
      'Luôn khóa màn hình máy tính cá nhân khi rời khỏi vị trí ngồi.'
    ],
    donts: [
      'Không để tài liệu bừa bãi trên bàn qua đêm.',
      'Tránh để lộ thông tin mật ra ngoài do không dọn dẹp bàn ghế.'
    ]
  },
  {
    id: 'nomikai-okaikei',
    category: 'nomikai',
    titleJp: 'お会計 (Okaikei)',
    titleVi: 'Ứng xử khi thanh toán',
    frontDesc: 'Cách xử lý tinh tế khi thanh toán hóa đơn sau bữa tiệc công ty hoặc tiệc với đối tác.',
    dos: [
      'Chờ cấp trên hoặc đối tác thanh toán trước rồi hỏi ý kiến đóng góp sau.',
      'Cố gắng chuẩn bị sẵn tiền lẻ hoặc tiền chẵn để chia nhanh nếu là tiệc chia đều (Waribashi).',
      'Chủ động nói lời cảm ơn (Gochisousama deshita) ngay sau khi được mời.'
    ],
    donts: [
      'Không giành trả tiền trước mặt khách hàng/đối tác khi mình là bên được mời.',
      'Không đứng kỳ kèo, tính toán tiền quá chi tiết ngay tại quầy thanh toán của nhà hàng.'
    ]
  },
  {
    id: 'nomikai-chuumon',
    category: 'nomikai',
    titleJp: '注文 (Chuumon)',
    titleVi: 'Quy tắc gọi món ăn',
    frontDesc: 'Cách lựa chọn món ăn khôn khéo và lịch sự khi đi ăn uống cùng sếp và đồng nghiệp.',
    dos: [
      'Nhường quyền chọn món chính cho khách hàng hoặc sếp lớn trước.',
      'Chọn các món dễ chia phần, dễ ăn, tránh các món quá cay hoặc quá mùi.',
      'Hỏi trước về dị ứng hoặc sở thích ăn uống của mọi người trước khi gọi món.'
    ],
    donts: [
      'Không tự ý gọi các món quá đắt đỏ khi người khác chiêu đãi.',
      'Tránh gọi món ăn quá chậm làm mất thời gian của cả bàn.'
    ]
  },
  {
    id: 'nomikai-orei',
    category: 'nomikai',
    titleJp: 'お礼のメール (Orei no Mail)',
    titleVi: 'Email cảm ơn sau bữa tiệc',
    frontDesc: 'Quy tắc bắt buộc gửi thư cảm ơn sếp hoặc đối tác sau khi kết thúc bữa tiệc giao lưu.',
    dos: [
      'Gửi email hoặc tin nhắn cảm ơn vào sáng sớm ngày hôm sau trước khi bắt đầu làm việc.',
      'Bày tỏ sự biết ơn cụ thể về món ăn ngon hoặc cuộc trò chuyện thú vị trong bữa tiệc.',
      'Thể hiện sự nhiệt huyết muốn cống hiến hơn nữa trong công việc sắp tới.'
    ],
    donts: [
      'Không trì hoãn việc gửi lời cảm ơn quá 24 giờ.',
      'Tránh viết email cảm ơn quá ngắn hoặc quá suồng sã.'
    ]
  },
  {
    id: 'email-toritsugi',
    category: 'email_phone',
    titleJp: '電話取り次ぎ (Denwa Toritsugi)',
    titleVi: 'Quy trình chuyển máy điện thoại',
    frontDesc: 'Cách chuyển tiếp cuộc gọi điện thoại cho đồng nghiệp hoặc cấp trên một cách chuyên nghiệp.',
    dos: [
      'Yêu cầu người gọi chờ giây lát (Shoushou omachi kudasai) và nhấn nút giữ máy (Hold).',
      'Xác nhận rõ tên người gọi và công ty của họ trước khi chuyển máy.',
      'Thông báo ngắn gọn cho người nhận về danh tính người gọi trước khi nối máy.'
    ],
    donts: [
      'Không hét to gọi đồng nghiệp trong văn phòng mà không nhấn nút giữ máy.',
      'Tuyệt đối không cúp máy nhầm hoặc làm mất cuộc gọi của khách hàng.'
    ]
  },
  {
    id: 'email-kinkyuu',
    category: 'email_phone',
    titleJp: '緊急連絡 (Kinkyuu Renraku)',
    titleVi: 'Liên lạc khẩn cấp',
    frontDesc: 'Quy tắc gửi thông báo khẩn cấp khi gặp sự cố nghiêm trọng hoặc xin nghỉ ốm đột xuất.',
    dos: [
      'Gọi điện trực tiếp cho người quản lý trực tiếp thay vì chỉ gửi email/tin nhắn.',
      'Nêu rõ lý do ngắn gọn và bàn giao công việc dang dở khẩn cấp nếu có.',
      'Cập nhật tình hình thường xuyên cho đến khi sự cố được khắc phục.'
    ],
    donts: [
      'Tuyệt đối không tự ý nghỉ làm mà không báo cáo kịp thời.',
      'Không giấu giếm thông tin khi xảy ra sự cố lớn làm ảnh hưởng đến dự án.'
    ]
  },
  {
    id: 'email-tenpu',
    category: 'email_phone',
    titleJp: '添付ファイル (Tenpu Fairu)',
    titleVi: 'Quy tắc gửi file đính kèm',
    frontDesc: 'Quy chuẩn gửi tệp tin qua email công sở đảm bảo an toàn thông tin và tính chuyên nghiệp.',
    dos: [
      'Nén các file dung lượng lớn và đặt mật khẩu bảo mật (zip/pdf protection).',
      'Gửi mật khẩu giải nén trong một email riêng biệt để tránh rò rỉ dữ liệu.',
      'Kiểm tra kỹ dung lượng file và định dạng trước khi gửi.'
    ],
    donts: [
      'Không gửi email chứa file đính kèm quá nặng trực tiếp mà không báo trước.',
      'Tránh quên đính kèm file khi email đã nhắc đến nội dung đính kèm.'
    ]
  },
  {
    id: 'omiyage-shuchou',
    category: 'omiyage',
    titleJp: '出張連絡 (Shuchou Renraku)',
    titleVi: 'Liên lạc và chuẩn bị công tác',
    frontDesc: 'Lập kế hoạch, chuẩn bị hồ sơ và giữ liên lạc thông suốt trong suốt chuyến công tác xa.',
    dos: [
      'Lập lịch trình chi tiết và gửi cho người quản lý trước khi đi.',
      'Báo cáo tình hình công việc hàng ngày hoặc ngay sau khi kết thúc các buổi họp quan trọng.',
      'Chuẩn bị đầy đủ tài liệu, danh thiếp và quà tặng đối tác nếu cần.'
    ],
    donts: [
      'Không mất liên lạc hoặc không trả lời email khẩn cấp từ văn phòng chính khi đang đi công tác.',
      'Không chi tiêu cá nhân vượt quá định mức công tác phí cho phép.'
    ]
  },
  {
    id: 'omiyage-kubarikata',
    category: 'omiyage',
    titleJp: 'お土産の配り方 (Omiyage no Kubarikata)',
    titleVi: 'Cách chia quà lưu niệm',
    frontDesc: 'Quy tắc tặng quà lưu niệm, đặc sản địa phương cho đồng nghiệp sau chuyến đi du lịch hoặc công tác.',
    dos: [
      'Chọn mua quà đã được chia thành từng gói nhỏ tiện lợi để mọi người dễ lấy.',
      'Đặt quà ở khu vực sinh hoạt chung hoặc đến từng bàn để gửi tặng đồng nghiệp.',
      'Đính kèm lời cảm ơn vì mọi người đã hỗ trợ công việc khi mình vắng mặt.'
    ],
    donts: [
      'Không mua quà quá hạn chế số lượng khiến người có người không.',
      'Tránh mua đồ ăn có mùi quá nồng hoặc hạn sử dụng quá ngắn.'
    ]
  },
  {
    id: 'omiyage-kangei',
    category: 'omiyage',
    titleJp: '歓迎の礼 (Kangei no Rei)',
    titleVi: 'Đón tiếp đối tác đến văn phòng',
    frontDesc: 'Nghi thức chuẩn bị và tiếp đón khách hàng hoặc đối tác từ nơi khác đến thăm công ty.',
    dos: [
      'Dọn dẹp phòng họp sạch sẽ, chuẩn bị sẵn nước uống và tài liệu trước khi khách đến.',
      'Chờ sẵn ở sảnh đón tiếp trước giờ hẹn 5-10 phút để đón khách.',
      'Hướng dẫn khách di chuyển và nhường lối đi ưu tiên cho khách.'
    ],
    donts: [
      'Không để khách phải tự tìm phòng họp hoặc tự rót nước uống.',
      'Không tỏ thái độ thờ ơ, thiếu đón tiếp chu đáo khi khách mới bước vào sảnh.'
    ]
  },
  {
    id: 'workrules-shinchoku',
    category: 'workrules',
    titleJp: '進捗報告 (Shinchoku Houkoku)',
    titleVi: 'Báo cáo tiến độ công việc',
    frontDesc: 'Cách báo cáo tiến độ công việc định kỳ hoặc khi gặp sự cố khó khăn để sếp nắm bắt tình hình.',
    dos: [
      'Báo cáo theo định dạng định lượng (phần trăm hoàn thành, số lượng cụ thể).',
      'Chủ động báo cáo sớm khi nhận thấy dự án có nguy cơ chậm tiến độ (Bad news first).',
      'Đề xuất giải pháp khắc phục đi kèm khi báo cáo khó khăn.'
    ],
    donts: [
      'Không im lặng hoặc giấu thông tin cho đến sát deadline mới báo cáo không kịp.',
      'Tránh báo cáo chung chung như đang tiến hành ổn mà không có số liệu chứng minh.'
    ]
  },
  {
    id: 'workrules-gofunmae',
    category: 'workrules',
    titleJp: '5分前の行動 (Gofun Mae no Koudou)',
    titleVi: 'Quy tắc 5 phút trước giờ hẹn',
    frontDesc: 'Tác phong quản lý thời gian vàng ngọc, luôn có mặt trước giờ hẹn ít nhất 5 phút.',
    dos: [
      'Đến địa điểm họp hoặc chuẩn bị cuộc gọi trực tuyến trước giờ bắt đầu 5 phút.',
      'Hoàn tất việc chuẩn bị tài liệu, công cụ làm việc trước khi cuộc họp chính thức bắt đầu.',
      'Chủ động thông báo nếu nhận thấy có nguy cơ đến muộn dù chỉ 1-2 phút.'
    ],
    donts: [
      'Không bước vào phòng họp đúng giờ khít hoặc trễ giờ làm gián đoạn mọi người.',
      'Tránh bắt đầu chuẩn bị tài liệu khi cuộc họp đã diễn ra.'
    ]
  },
  {
    id: 'workrules-kimitsu',
    category: 'workrules',
    titleJp: '機密処理 (Kimitsu Shori)',
    titleVi: 'Xử lý tài liệu bảo mật',
    frontDesc: 'Quy tắc tiêu hủy và bảo mật thông tin trên giấy tờ in ấn chốn công sở.',
    dos: [
      'Sử dụng máy hủy tài liệu (Shredder) cho tất cả các giấy tờ chứa thông tin khách hàng hoặc dự án.',
      'Úp mặt tài liệu xuống khi để trên bàn làm việc hoặc máy in.',
      'Kiểm tra kỹ khay máy in để tránh bỏ quên tài liệu quan trọng.'
    ],
    donts: [
      'Không vứt tài liệu chứa thông tin nội bộ hoặc khách hàng trực tiếp vào thùng rác thường.',
      'Tuyệt đối không chụp ảnh hoặc mang tài liệu mật ra ngoài văn phòng mà chưa được phép.'
    ]
  },
  {
    id: 'nomikai-sekijun',
    category: 'nomikai',
    titleJp: '席順 (Sekijun)',
    titleVi: 'Vị trí ngồi tiệc rượu',
    frontDesc: 'Quy tắc phân chia chỗ ngồi trong bàn tiệc rượu dựa trên cấp bậc.',
    dos: [
      'Mời sếp lớn ngồi ở Kamiza (thường là góc trong cùng, xa lối đi/cửa chính).',
      'Ngồi ở vị trí Shimoza (gần cửa hoặc lối đi nhất) để tiện phục vụ, gọi món.',
      'Giữ tư thế lịch sự, không tự ý chiếm vị trí trung tâm bàn tiệc.'
    ],
    donts: [
      'Không tự ý chọn chỗ ngồi ngẫu nhiên khi chưa được hướng dẫn.',
      'Tránh ngồi chắn lối đi của nhân viên phục vụ tiệc.'
    ]
  },
  {
    id: 'nomikai-kanpai',
    category: 'nomikai',
    titleJp: '乾杯 (Kanpai)',
    titleVi: 'Nghi thức nâng ly',
    frontDesc: 'Nghi thức cụng ly lịch sự trong tiệc công sở Nhật Bản.',
    dos: [
      'Đợi người có cấp bậc cao nhất phát biểu và hô nâng ly (Kanpai) trước.',
      'Giữ ly thấp hơn ly của cấp trên hoặc đối tác khi cụng ly.',
      'Dùng cả hai tay để nâng ly thể hiện sự kính trọng.'
    ],
    donts: [
      'Không uống trước khi mọi người cùng nâng ly.',
      'Tránh chạm ly quá mạnh gây vỡ hoặc làm đổ bia rượu.'
    ]
  },
  {
    id: 'email-kenmei',
    category: 'email_phone',
    titleJp: '件名 (Kenmei)',
    titleVi: 'Tiêu đề email công sở',
    frontDesc: 'Cách viết tiêu đề email ngắn gọn, rõ ràng và đúng quy chuẩn công sở Nhật.',
    dos: [
      'Viết tiêu đề rõ ràng, chứa tên công ty và tên người gửi ở trong dấu ngoặc vuông (VD: [Antigravity] Báo cáo tiến độ).',
      'Nêu rõ nội dung chính của email ngay trên dòng tiêu đề.',
      'Để từ khóa như [Khẩn cấp] hoặc [Thông báo] nếu cần thu hút sự chú ý.'
    ],
    donts: [
      'Không gửi email trống tiêu đề hoặc viết tiêu đề quá mơ hồ như "Xin chào" hay "Gửi sếp".',
      'Không viết tiêu đề quá dài dòng quá 30 ký tự.'
    ]
  },
  {
    id: 'email-kirikata',
    category: 'email_phone',
    titleJp: '電話の切り方 (Denwa no Kirikata)',
    titleVi: 'Cách tắt điện thoại',
    frontDesc: 'Quy tắc tắt máy sau khi kết thúc cuộc gọi điện thoại với khách hàng hoặc cấp trên.',
    dos: [
      'Đợi khách hàng hoặc đối tác cúp máy trước rồi mới nhẹ nhàng đặt ống nghe xuống.',
      'Nói lời chào kết thúc rõ ràng (Shitsurei itashimasu) trước khi cúp máy.',
      'Nhấn giữ nút ngắt cuộc gọi bằng tay nhẹ nhàng thay vì dập mạnh ống nghe.'
    ],
    donts: [
      'Không đột ngột cúp máy khi đối phương chưa dứt lời hoặc chưa cúp máy.',
      'Tuyệt đối không dập mạnh ống nghe điện thoại tạo ra tiếng ồn khó chịu.'
    ]
  },
  {
    id: 'omiyage-houkokusho',
    category: 'omiyage',
    titleJp: '出張報告書 (Shuchou Houkokusho)',
    titleVi: 'Báo cáo sau chuyến công tác',
    frontDesc: 'Cách viết và gửi báo cáo kết quả sau khi hoàn thành chuyến đi công tác xa.',
    dos: [
      'Gửi báo cáo công tác bằng văn bản cho sếp trong vòng 1-2 ngày sau khi trở về.',
      'Tóm tắt rõ ràng các kết quả đạt được, chi phí phát sinh và các bước tiếp theo.',
      'Đính kèm hóa đơn chi phí hợp lệ để làm thủ tục thanh toán.'
    ],
    donts: [
      'Không trì hoãn việc gửi báo cáo quá một tuần sau chuyến đi.',
      'Tránh viết báo cáo quá chung chung mà không có số liệu cụ thể.'
    ]
  },
  {
    id: 'omiyage-noshigami',
    category: 'omiyage',
    titleJp: 'のし紙 (Noshigami)',
    titleVi: 'Giấy bọc quà truyền thống',
    frontDesc: 'Quy tắc sử dụng giấy bọc quà Noshigami khi tặng quà trang trọng cho đối tác.',
    dos: [
      'Sử dụng giấy Noshigami có thắt nơ Mizuhiki phù hợp với từng dịp (chúc mừng, chia buồn...).',
      'Viết tên công ty và tên người tặng rõ ràng trên phần dưới của giấy Noshigami.',
      'Đảm bảo giấy bọc quà phẳng phiu, sạch sẽ trước khi mang đi tặng.'
    ],
    donts: [
      'Không dùng nhầm loại nơ Mizuhiki (VD: dùng nơ thắt nút chết cho dịp đám cưới nhưng lại mang đi tặng khai trương).',
      'Tránh viết sai chính tả tên đối tác trên giấy bọc quà.'
    ]
  },
  {
    id: 'workrules-schedule',
    category: 'workrules',
    titleJp: 'スケジュール管理 (Schedule Kanri)',
    titleVi: 'Quản lý lịch trình',
    frontDesc: 'Cách quản lý thời gian và đăng ký lịch làm việc chung với phòng ban.',
    dos: [
      'Cập nhật lịch trình của mình lên lịch chung của nhóm (Google Calendar/Outlook) để mọi người theo dõi.',
      'Đăng ký trước lịch nghỉ phép hoặc đi ra ngoài văn phòng ít nhất vài ngày.',
      'Kiểm tra lịch làm việc của đồng nghiệp trước khi lên lịch họp chung.'
    ],
    donts: [
      'Không tự ý thay đổi lịch họp đột xuất mà không thông báo cho các bên liên quan.',
      'Không để lịch trình cá nhân trống trơn khiến mọi người khó liên lạc khi có việc gấp.'
    ]
  },
  {
    id: 'workrules-seiri',
    category: 'workrules',
    titleJp: 'デスク周りの整理 (Desk Mawari no Seiri)',
    titleVi: 'Sắp xếp bàn làm việc',
    frontDesc: 'Quy tắc giữ sạch sẽ và ngăn nắp khu vực làm việc cá nhân chốn văn phòng.',
    dos: [
      'Chỉ để những tài liệu và đồ dùng đang cần thiết trên mặt bàn làm việc.',
      'Dọn dẹp mặt bàn sạch sẽ trước khi ra về vào cuối ngày (Quy tắc bàn sạch).',
      'Sắp xếp dây cáp, bút viết ngăn nắp vào khay đựng.'
    ],
    donts: [
      'Không để cốc cafe uống dở hoặc rác cá nhân trên bàn qua đêm.',
      'Tránh dán quá nhiều giấy note đè lên nhau trên viền màn hình máy tính.'
    ]
  }
];

export default function Dictionary({ dictionary = MANNERS_DATA }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'ojigi', label: 'Cúi chào (Ojigi)' },
    { id: 'meishi', label: 'Danh thiếp (Meishi)' },
    { id: 'seating', label: 'Ghế ngồi (Kamiza)' },
    { id: 'dresscode', label: 'Trang phục (Dresscode)' },
    { id: 'nomikai', label: 'Tiệc rượu (Nomikai)' },
    { id: 'email_phone', label: 'Email & Điện thoại (Email & Phone)' },
    { id: 'omiyage', label: 'Công tác & Quà cáp (Omiyage)' },
    { id: 'workrules', label: 'Quy tắc làm việc (Work Rules)' }
  ];

  const filteredData = dictionary.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.titleVi.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.titleJp.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.frontDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--jp-text)', fontWeight: 800 }}>
          Sổ tay Văn hóa <span style={{ color: 'var(--jp-red)' }}>Nhật Bản</span>
        </h2>
        <p className="section-subtitle" style={{ fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
          Học văn hóa chuẩn Nhật qua Flashcard 3D thông minh. Lật thẻ để khám phá các quy tắc "bất thành văn" chốn công sở.
        </p>
      </div>

      {/* Modern Search & Filter Bar */}
      <div style={{
        background: 'var(--jp-card-bg)',
        padding: '1.5rem',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
        marginBottom: '3rem',
        border: '1px solid var(--jp-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)', color: 'var(--jp-text-muted)' }}>
            🔍
          </div>
          <input 
            type="text" 
            placeholder="Tìm kiếm tình huống, quy tắc (VD: cúi chào, danh thiếp...)" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3rem',
              borderRadius: '12px',
              border: '2px solid var(--jp-border)',
              fontSize: '1.05rem',
              background: 'var(--jp-bg)',
              color: 'var(--jp-text)',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--jp-blue)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--jp-border)'}
          />
        </div>

        <div className="filter-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 600,
                border: activeCategory === cat.id ? 'none' : '1px solid var(--jp-border)',
                background: activeCategory === cat.id ? 'linear-gradient(135deg, var(--jp-red), #c0392b)' : 'var(--jp-surface-raised)',
                color: activeCategory === cat.id ? '#fff' : 'var(--jp-text-muted)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === cat.id ? '0 4px 15px rgba(232, 54, 93, 0.3)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) e.target.style.borderColor = 'var(--jp-blue)';
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) e.target.style.borderColor = 'var(--jp-border)';
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tối ưu hóa UI lưới Flashcard gọn gàng hơn */}
      <div className="flashcard-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flashcard-container"
            onClick={() => handleCardClick(item.id)}
            style={{
              height: '420px',
              perspective: '1000px',
              cursor: 'pointer'
            }}
          >
            <div className={`flashcard ${flippedCards[item.id] ? 'flipped' : ''}`} style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d'
            }}>
              {/* Front Face - Sạch sẽ hơn */}
              <div className="card-face card-front" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                background: '#ffffff',
                border: '1px solid var(--jp-border)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="card-badge" style={{
                    fontSize: '0.65rem',
                    background: 'var(--jp-blue-light)',
                    color: 'var(--jp-blue)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontWeight: 700
                  }}>
                    {item.category.toUpperCase()}
                  </span>
                  <HelpCircle size={14} style={{ color: 'var(--jp-text-muted)' }} />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', margin: '0.25rem 0' }}>
                  <CategoryIcon category={item.category} id={item.id} />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <h4 className="card-title-jp" style={{
                    fontSize: '1.1rem',
                    color: 'var(--jp-red)',
                    marginBottom: '0.25rem',
                    fontWeight: 700
                  }}>{item.titleJp}</h4>
                  <h5 className="card-title-vi" style={{
                    fontSize: '0.9rem',
                    color: 'var(--jp-blue)',
                    fontWeight: 600,
                    margin: 0
                  }}>{item.titleVi}</h5>
                </div>

                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--jp-text-muted)',
                  textAlign: 'center',
                  margin: '0.5rem 0 0 0',
                  lineHeight: '1.4'
                }}>
                  {item.frontDesc}
                </p>

                <div style={{
                  textAlign: 'center',
                  fontSize: '0.7rem',
                  color: 'var(--jp-red)',
                  fontWeight: 600,
                  borderTop: '1px solid var(--jp-border)',
                  paddingTop: '0.5rem'
                }}>
                  Click để xem chi tiết
                </div>
              </div>

              {/* Back Face - Dễ nhìn, màu sắc Do/Don't dịu mát */}
              <div className="card-face card-back" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                background: 'var(--jp-card-bg)',
                border: '1px solid var(--jp-border)',
                borderRadius: '12px',
                padding: '1rem',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}>
                <div>
                  <h4 style={{ 
                    color: 'var(--jp-blue)', 
                    fontSize: '0.95rem', 
                    fontWeight: 700, 
                    marginBottom: '0.75rem', 
                    borderBottom: '1px solid var(--jp-border)', 
                    paddingBottom: '0.4rem',
                    textAlign: 'center'
                  }}>
                    {item.titleVi}
                  </h4>

                  <div className="card-do-dont">
                    {/* DO - Nền dịu nhẹ */}
                    <div className="dos" style={{
                      background: 'rgba(46, 204, 113, 0.06)',
                      padding: '0.6rem 0.75rem',
                      borderRadius: '6px',
                      marginBottom: '0.6rem',
                      borderLeft: '3px solid #2ecc71'
                    }}>
                      <h5 style={{
                        fontSize: '0.75rem',
                        color: '#27ae60',
                        fontWeight: 700,
                        margin: '0 0 0.25rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <Check size={12} strokeWidth={3} /> NÊN LÀM
                      </h5>
                      <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.7rem', color: 'var(--jp-text)', lineHeight: '1.4' }}>
                        {(item.dos || []).map((doItem, index) => (
                          <li key={index} style={{ marginBottom: '2px' }}>{doItem}</li>
                        ))}
                      </ul>
                    </div>

                    {/* DONT - Nền dịu nhẹ */}
                    <div className="donts" style={{
                      background: 'rgba(188, 0, 45, 0.05)',
                      padding: '0.6rem 0.75rem',
                      borderRadius: '6px',
                      borderLeft: '3px solid var(--jp-red)'
                    }}>
                      <h5 style={{
                        fontSize: '0.75rem',
                        color: 'var(--jp-red)',
                        fontWeight: 700,
                        margin: '0 0 0.25rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <X size={12} strokeWidth={3} /> TRÁNH LÀM
                      </h5>
                      <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.7rem', color: 'var(--jp-text)', lineHeight: '1.4' }}>
                        {(item.donts || []).map((dontItem, index) => (
                          <li key={index} style={{ marginBottom: '2px' }}>{dontItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{
                  textAlign: 'center',
                  fontSize: '0.7rem',
                  color: 'var(--jp-text-muted)',
                  borderTop: '1px solid var(--jp-border)',
                  paddingTop: '0.5rem'
                }}>
                  Click để quay lại
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
