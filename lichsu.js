function renderLichSuTuLuyen() {
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    if (!currentUser) return;

    const allStories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const readHistory = JSON.parse(localStorage.getItem('tutien_readStories')) || [];
    const container = document.getElementById('container-lich-su');
    
    // 1. Lấy danh sách truyện đã viết
    const myStories = allStories.filter(s => s.author === currentUser.username);
    
    // 2. Lấy danh sách truyện đã thả tim
    const likedStories = allStories.filter(s => s.likesList && s.likesList.includes(currentUser.username));
    
    // 3. Lấy danh sách bình luận (Tìm trong tất cả truyện xem mình có cmt không)
    let myComments = [];
    allStories.forEach(s => {
        if (s.comments) {
            s.comments.forEach(c => {
                if (c.user === currentUser.username) {
                    myComments.push({ storyTitle: s.title, text: c.text, date: c.date });
                }
            });
        }
    });

    // 4. Render giao diện
    container.innerHTML = `
        <div class="xp-section" style="margin-top:0">
            <h3 class="chinese-font" style="color:var(--accent); margin-bottom:1rem;"><i class="fas fa-feather-alt"></i> Truyện Đã Viết (${myStories.length})</h3>
            ${myStories.map(s => `<div class="user-story-card"><h4>${s.title}</h4><small>Ngày đăng: ${s.date}</small></div>`).join('') || '<p>Chưa khai môn lập phái.</p>'}
            
            <h3 class="chinese-font" style="color:var(--accent); margin-top:2rem; margin-bottom:1rem;"><i class="fas fa-heart"></i> Đạo Tâm Đã Tặng (${likedStories.length})</h3>
            ${likedStories.map(s => `<div class="user-story-card"><h4>${s.title}</h4><p>Tác giả: ${s.author}</p></div>`).join('') || '<p>Chưa tặng đạo tâm cho ai.</p>'}

            <h3 class="chinese-font" style="color:var(--accent); margin-top:2rem; margin-bottom:1rem;"><i class="fas fa-comment-dots"></i> Đàm Luận Đã Gửi (${myComments.length})</h3>
            <div class="comment-list">
                ${myComments.map(c => `
                    <div class="comment-item">
                        <div class="comment-content">
                            <span class="comment-user">Tại truyện: ${c.storyTitle}</span>
                            <p class="comment-text">"${c.text}"</p>
                            <span class="comment-date">${c.date}</span>
                        </div>
                    </div>
                `).join('') || '<p>Chưa để lại lời vàng ý ngọc.</p>'}
            </div>
        </div>
    `;
}