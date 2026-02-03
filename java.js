// ===== TỔNG QUAN =====
// Main Logic: Video nền, Navigation, UI Update, Story Logic

// ===== DATA INITIALIZATION EXTENSION =====
function initializeAppSpecificData() {
    // Khởi tạo stories với truyện ngẫu nhiên ngắn
    if (!localStorage.getItem('tutien_stories')) {
        const sampleStories = [
            {
                id: 1,
                title: 'Vạn Cổ Chí Tôn',
                author: 'Cửu U Chân Nhân',
                genre: 'tien-hiep',
                synopsis: 'Linh khí khô kiệt, thánh nhân không xuất. Một thiếu niên từ nơi hoang vu đi ra, nghịch thiên hành đạo, trở thành vạn cổ chí tôn...',
                content: `Chương 1: Thức Tỉnh\n\nTrong khoảng thời gian này, tinh thần của Lý Vân Tiêu vẫn hoảng hốt, trong đầu thỉnh thoảng dần hiện ra các loại hình ảnh, thật giống như mình đã biến thành một người khác. Còn thỉnh thoảng xuất hiện chứng động kinh, la to, khóc lớn, cười ầm lên…

Càng kỳ lạ chính là, trong đầu không ngừng vang lên một thanh âm, tựa hồ đang ghi nhớ một đoạn kinh văn kỳ dị. Có lúc hắn cẩn thận lắng nghe, thật giống như là một phần tâm pháp, thân thể của hắn sẽ không tự chủ đong đưa lên. Càng muốn nổi điên hơn là, đoạn ngắn ký ức trong óc càng ngày càng nhiều, càng ngày càng dài.

Rốt cục có một ngày, hắn bị dằn vặt tới hôn mê, thời điểm tỉnh lại lần nữa, hết thảy đoạn ngắn ký ức toàn bộ hoàn chỉnh nối liền cùng nhau, hiện lên ở trong đầu. Trong đôi mắt Lý Vân Tiêu một mảnh trong suốt, phảng phất ngôi sao sáng, hắn rốt cục tỉnh rồi.

– Không nghĩ tới ta được sống lại?

Trong tròng mắt Lý Vân Tiêu bắn mạnh ra một điểm tinh mang, hơi quay đầu nhìn pho tượng cao vυ"t trong mây ngoài cửa sổ.

– Lịch Thiên Vũ năm 1033, Cổ Phi Dương ta đã chết mười lăm năm rồi sao?

Mười lăm năm trước, Thiên Vũ giới một trong thập đại phong hào Vũ Đế, Phá Quân Vũ Đế… Cổ Phi Dương, tại sơn mạch Thiên Đãng bất ngờ ngã xuống, chấn động toàn bộ đại lục! Sau đó các thế lực lớn sóng ngầm phun trào, các loại xung đột càng ngày càng kịch liệt, đại lục Thiên Vũ vắng lặng mấy trăm năm, lần thứ hai gió nổi mây vần.

– Hắc.

Lý Vân Tiêu nhếch miệng nở nụ cười, nhẹ giọng thở dài nói:

– Không nghĩ tới đã sống lại sớm hơn mười lăm năm. Cổ Phi Dương ta rốt cục trở về.

Đột nhiên một tiếng quát mắng lạnh lùng truyền đến.

– Lý Vân Tiêu!

Xèo!

Một âm thanh bén nhọn như muốn cắt không khí ra làm đôi từ đâu vang lên, Lý Vân Tiêu ngẩng đầu lên, nhìn thấy một đoạn phấn viết phá không mà đến, sắp tới sát mặt mình rồi.

Hắn dùng hai ngón tay hững hờ khép lại, đem phấn viết đặt ở trên bàn. Dùng ánh mắt bình tĩnh nhìn chủ nhiệm lớp Lạc Vân Thường sắc mặt dần lạnh ở trên bục giảng.

Lý Vân Tiêu đi học thất thường, đâyy đã không phải lần thứ n+n, nếu không thất thần ngược lại sẽ làm nàng kỳ quái. Nhưng ngày hôm nay tâm tình của Lạc Vân Thường hiển nhiên rất xấu, vì lẽ đó cần một kẻ xui xẻo để nàng phát tiết bức xúc trong lòng.

Mà Lý Vân Tiêu vốn được công nhận là rác rưởi, không thể nghi ngờ là người được chọn tốt nhất. Từ xưa tới nay, hết thảy lão sư tâm tình không tốt đều yêu thích chọn hắn, điều này tựa hồ thành một thói quen. Phàm là có lão sư tâm tình khó chịu, mọi người liền biết Lý Vân Tiêu sẽ xui xẻo rồi.

Tất cả mọi người đều hưng phấn, bắt đầu cười trộm cùng cười trên đau khổ của người khác, từng cái từng cái khuôn mặt đầy mong đợi chờ xem kịch vui, càng có mấy học sinh trực tiếp ồn ào lên.

Lý Vân Tiêu híp mắt nhìn Lạc Vân Thường trên bục giảng, thầm nghĩ:

– Cô nàng này vóc người thật tốt, tóc dài da trắng, nếu lại phối hợp áo choàng ngắn màu đỏ, ngân giác chiến ngoa, áo choàng Thiên Lam, lại nắm ngân thương, vậy thì sẽ biến thành một Hồng Liên Vũ Đế khác. Khà khà, rất có tiềm chất mặc đồ đồng phục nha, không biết Hồng Liên biết được có thể chém chết ta hay không.

Trong lòng Lạc Vân Thường đột nhiên chấn động, trong mắt Lý Vân Tiêu tựa hồ lướt qua một tia mỉm cười, làm cho cả người nàng không nhịn được run rẩy một hồi. Thật giống như một con thỏ trắng dịu ngoan, đột nhiên bị mãnh hổ tập trung vậy, cảm giác vô lực trong nháy mắt làm cho nàng như rơi vào hầm băng.

– Vừa nãy xảy ra chuyện gì? Ánh mắt tiểu tử này… Vừa nãy thật giống như hắn đang cười? Tuyệt đối không thể! Ta là Đại vũ sư cảnh giới Tứ Tượng, làm sao có khả năng bị một tiểu tử phổ thông nhìn đến tâm thần thất thủ, nhất định là gần đây bị vây ở trên sự kiện kia, tâm thần có chút bất định.

Vẻ mặt ngơ ngác trong mắt nàng lóe lên một cái rồi biến mất, sau khi tâm thần thất thố trong nháy mắt, rất nhanh liền khôi phục lại, hai mắt chìm xuống, khóe miệng lướt qua một nụ cười lạnh lùng.

– Lý Vân Tiêu, vừa nãy chúng ta nói luyện chế Huyền Binh, ta hỏi ngươi, Huyền Binh phổ thông tổng cộng có bao nhiêu loại thủ pháp luyện chế?

Lạc Vân Thường đang dạy chính là thuật luyện cơ sở, tuy cực ít người có thể trở thành Thuật luyện sư, nhưng kiến thức thuật luyện cơ bản nhất là mỗi một võ giả đều phải hiểu rõ.

– Luyện chế huyền Binh? Ha ha, lão tử là Đế cấp Thuật luyện sư cấp chín đại lục Thiên Vũ, ngoại trừ mấy lão bất tử kia ra, cõi đời này ai dám ở trước mặt ta nói thuật luyện chi đạo!

Lý Vân Tiêu hờ hững xa xôi nói:

– Cách luyện chế Huyền Binh phổ thông tổng cộng có bốn mươi tám loại.

– Bốn mươi tám loại?

Trong phòng học đột nhiên yên tĩnh, lập tức bùng nổ ra tiếng cười to!

– Ha ha, tiểu tử này quả nhiên đang mộng du.

– Ta đã nói rồi, nhìn hắn dáng vẻ bình tĩnh, ta còn tưởng rằng hắn biết chứ!

– Cắt, nếu như hắn biết cái này, ta đã sớm lên làm Trấn quốc thiết vệ!

Lý Vân Tiêu hơi nhướng mày, ánh mắt nhất thời rơi vào trên sách giáo khoa trước người, hắn dùng tay xoay một cái, nhất thời nhìn thấy một câu nói.

– Cách luyện chế Huyền Binh phổ thông, tổng cộng ba mươi sáu loại. Chia ra làm…

Hắn lại đem sách giáo khoa khép lại, chỉ thấy phía trên có mấy đại tự “Thuật luyện cơ sở”, ở dưới đại tự, rõ ràng thác ấn một hàng chữ nhỏ: “Dương Địch”.

– Tiểu tử Dương Địch kia, ta không phải đã nói với hắn thủ pháp phổ thông có bốn mươi tám loại sao? Hắn lại nghe vào tai này ra tai kia sao, sau này không cần tiếp tục tới nghe ta giảng bài.

Trong nháy mắt hắn liền phán tử hình cho tác giả quyển sách này, nếu Dương Địch biết mà nói, sợ sẽ trực tiếp khóc chết a.

Lý Vân Tiêu đối với các loại trào phúng làm như không thấy, từ tốn nói:

– Thủ pháp luyện chế chính thống có ba mươi sáu loại, thế nhưng ở sáu mươi năm trước, Cổ Phi Dương một mình sáng tác mười hai loại cách luyện chế, đã được Công Hội Thuật Luyện Sư tán thành, đặt ngang hàng với cách luyện chế trụ cột. Vì lẽ đó hẳn là bốn mươi tám loại.

– Dừng, tiểu tử ngươi nói nhăng gì đó, lẽ nào hắn so với Dương Địch đại nhân hiểu được còn nhiều?

– Ha ha, tiểu tử này sợ bị trách phạt, vì lẽ đó bắt đầu ăn nói linh tinh.

– Phải a, Dương Địch đại nhân thân là học sinh của Vũ Đế Cổ Phi Dương, lẽ nào còn không biết cơ sở luyện chế có mấy loại sao?

Các loại giễu cợt càng là nổi lên bốn phía, đột nhiên một tiếng gào to chấn động đến tất cả mọi người đều ngậm miệng lại.

– Tất cả im miệng cho ta! Hắn nói đúng!.`,
                chapters: 3,
                likes: 0,
                views: 0,
                bookmarks: 0,
                date: '2023-03-15',
                status: 'ongoing'
            },
            {
                id: 2,
                title: 'Nghịch Thiên Chí Tôn',
                author: 'Khô Nhai Vũ Mộ',
                genre: 'tien-hiep',
                synopsis: 'Bộ truyện full Nghịch Thiên Chí Tôn vừa xuất bản các chương cuối cùng, quý bạn đọc hãy trải nghiệm bộ truyện của tác giả Khô Nhai Vũ Mộ ',
                content: `Chương 1: Vô Tận Phẫn Nộ\n\nHoàng Phủ Thánh triều, Sao Băng Thành, Vọng Nguyệt Trấn.

Hàn phong lạnh thấu xương, tuyết lớn đầy trời, phất phới bông tuyết bao phủ chiêng trống vang trời, giăng đèn kết hoa Đàm phủ.

“Đã trời xanh để cho ta trọng sinh về tới thành hôn ngày, vậy ta Đàm Vân, liền quyết không để bi kịch lần nữa trình diễn!”

“Liễu Như Yên, Tư Đồ Kiếm nam, ta sớm muộn cũng có một ngày, đem các ngươi hai đại gia tộc đuổi tận giết tuyệt!”

Người mặc tân lang phục Đàm Vân, muốn rách cả mí mắt nhìn qua trắng xoá thương khung, từng màn quá khứ, trong đầu phi tốc lướt qua.

Ba ngày trước, hắn cùng Liễu gia thiên kim Liễu Như Yên thành hôn lúc, Liễu gia chủ hòa Tư Đồ gia chủ, vì chiếm lấy Đàm gia sản nghiệp, thế là thu mua Đàm phủ quản gia, tại đại hôn trến yến tiệc trong rượu hạ độc, hạ độc chết Đàm Vân phụ thân, Gia Gia về sau, đem Đàm phủ 308 nhân khẩu diệt môn! Đàm Vân trước khi chết nhìn thấy, người mặc cưới phục vị hôn thê Liễu Như Yên, cùng Tư Đồ Thiếu Chủ: Tư Đồ Kiếm nam ân ái một màn.

Hắn giờ mới hiểu được, Liễu Như Yên cùng Tư Đồ Kiếm nam sớm có gian tình.

“Đàm Vân, sứ mệnh của ta đã hoàn thành, một thế này, liền nhìn ngươi như thế nào báo thù.” Đột nhiên, một đạo vô cùng suy yếu thanh âm, tại đàm vân trong đầu vang lên.

“Ai?” Đàm Vân rùng mình.

“Ta tại ngươi Linh Trì bên trong, ngươi vào nói nói.” Đàm Vân trong đầu vang lên lần nữa, hư nhược thanh âm.

Đàm Vân run như cầy sấy ngưng thần nhắm mắt, tiến vào minh tưởng, đi tới trong mi tâm Linh Trì bên trong.

Linh Trì là tu sĩ chứa đựng thiên địa linh khí địa phương, là tu sĩ căn cơ.

Đàm Vân đi vào Linh Trì về sau, con ngươi co rụt lại, chỉ gặp Linh Trì trung ương, lơ lửng một viên màu xanh biếc hình thoi hình cầu.

Hình cầu to như nắm tay, tán dật lấy vầng sáng mông lung.

Đàm Vân nhìn chằm chằm hình cầu, nội tâm tuôn ra một cỗ huyết mạch tương liên cảm giác, cẩn thận ánh mắt dần dần trở nên mê mang, “Ngươi là ai? Ngươi vì cái gì ở bên trong?”

“Ta chính là ngươi, ngươi chính là ta, đáng tiếc ta thời gian còn lại không nhiều lắm, không thể hướng ngươi dần dần giải thích.” Hình cầu bên trong phát ra thanh âm, càng thêm suy yếu, “Ta nguyện phi hôi yên diệt, trả lại ngươi vạn thế ký ức!”

“Nhớ kỹ, nhất định phải báo thù!”

Tiếng nói phủ lạc, Đàm Vân đầu đau muốn nứt, một cỗ khổng lồ mảnh vỡ kí ức, tràn vào trong đầu hắn về sau, chắp vá thành một vài bức hình tượng.

Hắn tòng hình tượng trông được đến mình ở kiếp trước, thẳng đến vạn thế trước mỗi một thế ký ức! Vạn thế trong luân hồi, mình mỗi một thế đều thảm tao diệt môn!

Vạn thế chí thân, không ai sống sót!

Mà hết thảy này, đều là đến từ đời thứ nhất tàn khốc nguyền rủa!

Mình đời thứ nhất, là uy chấn Chư Thiên Vạn Giới Hồng Mông chí tôn. Hỗn độn chí tôn, bắt đầu nguyên chí tôn, liên thủ đem mình đánh giết về sau, nguyền rủa mình tiến vào vạn thế luân hồi!

Muốn thông qua vạn thế luân hồi, để cho mình cường đại thần hồn, triệt để mẫn diệt!

Linh Trì bên trong màu xanh biếc quang cầu, chính là Hồng Mông thần giới căn cơ: Hồng Mông Chi Tâm.

Lời mới vừa nói nam tử, là mình đời thứ nhất lúc, luyện vào Hồng Mông Chi Tâm bên trong một sợi thần niệm!

Chính là cái này sợi thần niệm, mang theo Hồng Mông Chi Tâm, xuyên qua Chư Thiên Vạn Giới bình chướng về sau, tòng Tinh Hà Luyện Ngục bên trong rơi xuống phàm trần, trợ mình trọng sinh đến ngày đại hỉ!

“Ha ha ha ha, vạn thế luân hồi, nguyền rủa ta đời đời diệt môn!”

Đàm Vân cười thảm qua đi, cả người giống như lợi kiếm ra khỏi vỏ, “Hỗn độn chí tôn, bắt đầu nguyên chí tôn, ta Đàm Vân nhất định sẽ phi thăng Cửu Thiên Tiên giới, lại đến đạt thần giới, để các ngươi không đến chết tử tế!”

Thu hoạch được vạn thế luân hồi ký ức về sau, Đàm Vân cũng có được đời thứ nhất lúc, đối đan, trận, khí, phù bao gồm thiên vạn thuật ký ức!

Hắn lập chí cuối cùng một thế, nhất định phải lại lên thần giới báo thù!

Đem phản bội mình tiên thần nhóm, giẫm tại dưới chân, hết thảy giết!

Mà khi vụ chi gấp, chính là như thế nào hóa giải Đàm gia diệt môn nguy cơ!

“Đàm Vân ca ca, ngươi chạy thế nào tới đây? Nghĩa mẫu để ngươi mau trở lại khách quý điện bái đường đâu.”

Nương theo lấy một đạo thanh như cốc vũ dễ nghe giọng nữ, một nghiêng nước nghiêng thành phấn váy thiếu nữ, bước nhanh đi vào Đàm Vân trước người.

Thiếu nữ mắt sáng răng trắng, da thịt như tuyết, một đầu như thác nước tóc xanh rủ xuống treo tại đao tước trên vai thơm, cả người tản ra làm cho người hít thở không thông mỹ cảm, tựa như rơi xuống nhân gian Dao Trì Ngọc Nữ.

Nàng chính là Đàm Vân nghĩa muội: Nam Cung Ngọc Thấm.

Nàng là cô nhi, hài nhi lúc bị người vứt bỏ tại Vọng Nguyệt Trấn, bị Đàm Vân mẫu thân Phùng Tĩnh Như nhặt về Đàm phủ.

Nàng thuở nhỏ nhu thuận hiểu chuyện, lại thiên sinh lệ chất, càng là thiên phú kinh người, mười tuổi lúc tu vi đã bước vào Linh Thai Cảnh tam trọng, thế là, Phùng Tĩnh Như đưa nàng chính thức thu làm nghĩa nữ.

Bây giờ năm gần mười lăm nàng, đã bước vào Linh Thai Cảnh lục trọng, cùng Liễu Như Yên, Tư Đồ Kiếm nam, được xưng là Vọng Nguyệt Trấn tam đại thiên tài.

Trái lại Đàm Vân đã mười sáu, nhưng vẫn là Linh Thai Cảnh tam trọng, là Vọng Nguyệt Trấn đại danh đỉnh đỉnh phế vật!

“Tốt, ta cái này trở về...” Đàm Vân bỗng nhiên thu tay, thanh âm im bặt mà dừng.

Hắn nhìn xem Nam Cung Ngọc Thấm, ở sâu trong nội tâm đột nhiên truyền đến một trận không hiểu chua xót, như thủy triều bi thương lan tràn hắn mỗi một tấc da thịt.

Ngay sau đó, trong đầu nổi lên, hắn ở kiếp trước lúc một bức tranh.

Ánh tà dương đỏ quạch như máu, sườn đồi chi đỉnh, một đạo bá đạo mười phần kiếm mang hướng mình chém tới lúc, một cùng Nam Cung Ngọc Thấm giống nhau như đúc thiếu nữ, đẩy ra mình!

Mà nàng lại bỏ ra sinh mệnh, dòng máu đỏ sẫm, khiến tà dương ảm đạm phai mờ...

Trong trí nhớ đoạn hậu, Đàm Vân hốc mắt hồng nhuận, thâm tình nhìn xem Nam Cung Ngọc Thấm, nội tâm bởi vì đương thời trùng phùng mà mừng rỡ vạn phần!

Âm thầm thề: Ngọc Thấm, kiếp này ta quyết không phụ ngươi!

Nam Cung Ngọc Thấm bị Đàm Vân ánh mắt nóng bỏng, chằm chằm đến cái má nhiễm hà, trong lòng hươu chạy.

Nàng đột nhiên cảm giác được Đàm Vân thay đổi.

Tại nàng trong trí nhớ, mặc dù Đàm Vân là cao quý thiếu gia, nhưng bởi vì bị toàn thành thành dân coi là phế vật, một mực thần sắc u buồn mà đồi phế.

Nhưng hôm nay, nàng từ trên thân Đàm Vân, mảy may không cảm giác được dĩ vãng tự ti.

“Ngọc Thấm, chờ một lúc ta cùng Liễu Như Yên bái đường, ngươi cũng không cần đi, ngươi bây giờ lập tức giúp ta đi mua một bộ, ngươi cho rằng toàn trấn đẹp nhất tân nương phục.” Đàm Vân phảng phất nghĩ tới điều gì, thần sắc kiên định.

“A, tốt.” Nam Cung Ngọc Thấm thần sắc không hiểu, nở nụ cười xinh đẹp, tàn ảnh mấy cái lấp lóe, lướt ra ngoài phủ đệ đại môn lúc, trong đôi mắt đẹp đã chứa đầy nước mắt.

Nàng yêu tha thiết Đàm Vân, nhưng nàng biết lẫn nhau ở giữa thân phận cách xa, lấy nha hoàn ra đời mình không xứng với hắn.

...

Lớn như vậy khách quý trong điện, không còn chỗ ngồi.

Vọng Nguyệt Trấn có tam đại gia tộc: Tư Đồ gia tộc, Đàm gia, Liễu gia.

Đàm gia xử lý việc vui, trên trấn thân phận hiển hách nhân vật, có thể nói là đều đến. Liền ngay cả toàn trấn Thái Đẩu cấp bậc nhân vật bạch dược sư: Bạch Thu Sinh, cũng tại ghế bên trong.

Bên trên tịch bên trong ngồi ngay thẳng, Đàm Vân phụ mẫu, Gia Gia. Cùng Đàm Vân chuẩn nhạc phụ Liễu Bác Nghĩa. Bốn người gặp Đàm Vân chậm chạp không có trở về, từng cái cười rất mất tự nhiên.

Tân nương Liễu Như Yên duyên dáng yêu kiều tại trước đại điện phương, bởi vì khăn cô dâu che kín gò má lại, nhìn không ra dáng dấp của nàng.

“Đàm Phong, canh giờ đã đến, ngươi nhanh cho ta đem Vân nhi tìm trở về.” Đàm lão gia tử liếc nhìn Đàm Phong, sắc mặt có chút xanh xám nói.

“Cha ngài bớt giận, hài nhi cái này đi...” Đàm Phong lời còn chưa dứt, Đàm Vân bước vào đại điện, “Gia Gia, cha, ta trở về.”

“Vân nhi, ngươi cũng lớn như vậy, làm sao không có chút nào hiểu chuyện?” Phùng Tĩnh Như oán trách một câu Đàm Vân, chợt, nhìn xem bưng một bình rượu ngon Đàm Tự Trung, phân phó nói: “Quản gia, hôn lễ bắt đầu đi.”

“Thuộc hạ tuân mệnh.” Đàm Tự Trung tiếng nói phủ lạc, tiếp xuống Đàm Vân một câu, giống như một viên nặng cân đạn pháo, mất hết đám người!

“Quản gia, không cần!” Đàm Vân coi thường Liễu Như Yên, giọng điệu kiên định nói: “Ta cùng Liễu Như Yên hôm nay không có khả năng, về sau càng thêm không có khả năng!”

Nói, Đàm Vân từ trong ngực móc ra một tờ hôn ước, trước mặt mọi người xé nát!

“Đây là tình huống như thế nào? Đàm thiếu gia thế mà trước mặt mọi người hối hôn! Đây không phải tại trần trụi nhục nhã Liễu gia chủ sao?”

“Đúng vậy a! Đến tột cùng phát sinh chuyện gì rồi? Liễu thiên kim thế nhưng là thiên chi kiêu nữ, điểm nào không xứng với hắn...”

“Xuỵt... Đều nói nhỏ thôi...”

“...”

Bên tai quanh quẩn trên trăm vị gia chủ tiếng nghị luận, Liễu Bác Nghĩa tòng trên bàn tiệc bỗng nhiên đứng dậy, đối còn chưa tỉnh táo lại Đàm lão gia tử, gầm thét lên: “Đàm Trường Xuân, nữ nhi của ta điểm nào không xứng với ngươi phế vật cháu trai? Các ngươi Đàm gia khinh người quá đáng!”

“Liễu gia chủ, bớt giận bớt giận.” Đàm lão gia tử vội vàng đứng dậy nhận lỗi về sau, già thân thể phát run, nhìn hằm hằm Đàm Vân, “Ngươi cái này bất hiếu tử tôn, là muốn tươi sống chết ta à! Ngươi nếu là không cho cái giải thích, ta tự tay phế bỏ ngươi!”

“Ngươi cái này nghịch tử, ta đánh chết ngươi!” Đàm Phong vừa sải bước có mặt vị, phất tay hướng Đàm Vân trên mặt rút đi.

“Ta chỉ như vậy một cái nhi tử, ngươi dừng tay cho ta!” Phùng Tĩnh Như hóa thành một vòng tàn ảnh, đem Đàm Vân bảo hộ ở sau lưng.

“Phu nhân, đều đến lúc này, ngươi còn che chở cái này nghịch tử!” Đàm Phong tay phải ngừng treo tại Phùng Tĩnh Như trên đỉnh đầu, tức giận đến sắc mặt đỏ lên.

“Phu quân, cha, các ngươi trước bớt giận, nghe Vân nhi giải thích a!” Phùng Tĩnh Như gấp nước mắt tại hốc mắt đảo quanh, nàng cầu khẩn một tiếng về sau, quay đầu nhìn xem Đàm Vân, thúc giục nói: “Vân nhi, nhanh cho ngươi cha cùng ngươi Gia Gia, còn có Liễu gia chủ giải thích a!”

“Không cần giải thích!” Liễu Bác Nghĩa gầm lên giận dữ rung khắp đại điện, “Các ngươi Đàm gia là khi dễ chúng ta Liễu gia không người sao? Cái nhục ngày hôm nay, ta nhất định muốn các ngươi Đàm gia nỗ lực giá cao thảm trọng! Người tới!”

Liễu Bác Nghĩa đương nhiên sẽ không cho Đàm gia cơ hội giải thích, hắn mặc dù tức giận Đàm Vân trước mặt mọi người hối hôn, nhục nhã nữ nhi, làm nhục Liễu gia. Nhưng cái này chưa chắc không phải một cái, thừa cơ ra tay với Đàm gia cơ hội thật tốt!

“Sưu sưu sưu...”

Lập tức, sớm đã mai phục tại Đàm gia bốn phía năm trăm tên Liễu gia thị vệ, cầm trong tay trường kiếm, đại đao vọt vào Đàm phủ, đem khách quý điện đoàn đoàn bao vây.

Năm trăm thị vệ bên trong, có hơn hai trăm người, là Tư Đồ gia tộc thị vệ ngụy trang.

“Ít tại ta Đàm gia làm càn!”

Một tiếng lệ a đột ngột chợt vang, Đàm gia hai trăm tên thị vệ, cầm trong tay trường mâu nghe hỏi chạy đến, không sợ hãi cùng năm trăm tên địch thủ giằng co...

“Bản gia chủ cũng thật sự là nhìn không được!” Ghế bên trong Tư Đồ gia chủ: Tư Đồ Thiên Luân, bỗng nhiên đứng dậy, cùng Liễu Bác Nghĩa đứng sóng vai, “Đàm lão gia tử, các ngươi đây là tự chui đầu vào rọ!”

Hai người đem Linh Thai Cảnh bát trọng khí tức phóng thích ra, toàn thân tràn ngập không che giấu chút nào sát ý.

“Cha, ngài cần phải vì nữ nhi làm chủ a... Ô ô...” Liễu Như Yên nhấc lên khăn cô dâu, giả bộ khóc lớn, đi tới Liễu Bác Nghĩa bên cạnh, “Nữ nhi không sống được... Ô ô...”

“Ha ha ha ha, giả, tiếp lấy cho lão tử giả!” Đàm Vân nhìn chằm chằm Liễu Như Yên cuồng tiếu một tiếng, chợt, đảo mắt đối với mình trừng mắt lạnh lùng nhìn nhau tất cả gia chủ, trịch địa hữu thanh nói: “Mọi người không phải hiếu kì, ta vì sao hối hôn sao?”

“Tốt, vậy ta nói cho các ngươi biết!”

Đàm Vân tay phải hóa trảo, đột nhiên quay người, gắt gao nắm quản gia Đàm Tự Trung miệng!

Đón lấy, Đàm Vân tay trái cầm bầu rượu lên, hướng Đàm Tự Trung miệng ngã xuống, “Ngươi cái này ăn cây táo rào cây sung lão già, thế mà bị Liễu Bác Nghĩa thu mua, tại trong bầu rượu hạ độc, muốn cho ta cùng Liễu Như Yên bái đường cho ta phụ mẫu, Gia Gia mời rượu lúc, hạ độc chết bọn hắn!”

“Không muốn thiếu gia, lão nô biết sai...” Đàm Tự Trung kinh dị cầu xin tha thứ bên trong, Đàm Vân đem một bình rượu độc, toàn bộ rót vào khoang miệng.

“Phốc...”

Đàm Tự Trung hai mắt trắng bệch, miệng sùi bọt mép, một cỗ đen nhánh máu độc phun ra khoang miệng, bị mất mạng tại chỗ!`,
                chapters: 3,
                likes: 42000,
                views: 980000,
                bookmarks: 21000,
                date: '2023-04-20',
                status: 'ongoing'
            },
            // <--- Nhớ thêm dấu phẩy này vào sau object truyện cũ
            {
                id: 3,
                title: 'Thương Khung Chi Chủ',
                author: 'Phong Thánh Đại Bằng',
                genre: 'huyen-huyen', // Thể loại Huyền Huyễn
                synopsis: 'Đại thiên thế giới, chư thiên tinh đấu, đều ở tay ta. Yêu ma quỷ quái, âm dương vạn pháp, nhất niệm sinh diệt. Thiên đạo bất công, họa loạn hoành hành. Nhân gian vương triều, mạnh được yếu thua. Ta không cầu thành tiên thành thần, chỉ cầu một ngày kia khống chế thương khung, làm một cái công bằng.Thợ mỏ Lâm Hạo',
                content: `Chương 1: Thanh Ngưu truyền thừa\n\n"Bò....ò... ~ bò....ò... ~ bò....ò...!"
 
 	Mặt trời chiều ngã về tây, giữa thiên địa, một mảnh tường hòa. Nhưng mà, tại Trung Châu Đông Bắc, Thiên Nguyên sơn mạch, Thái Huyền Môn quản hạt chi quặng mỏ khu vực bên trong, lại là không ngừng truyền đến một con Thanh Ngưu bi thương tru lên thanh âm.
 
 	Có trâu sắp chết.
 
 	"Lão Ngưu, chống đỡ! Ngày bình thường, ta Lâm Hạo bớt ăn bớt uống cung ứng ngươi, ngươi tại thời điểm then chốt này vứt bỏ ta mà đi, không phải hãm ta Lâm Hạo vào bất nghĩa? Còn có hai ngày, nếu là kết thúc không thành một tấn linh quáng nhiệm vụ đào móc nhiệm vụ, đừng nói là ngươi, ta cũng chắc chắn bị giám sát nhóm lột sống hạ da thịt!"
 
 	Tại Thanh Ngưu bên cạnh thân, nửa quỳ một cái khuôn mặt kiên nghị thiếu niên, vạch lên Thanh Ngưu sừng dài, ý đồ để lão Ngưu đứng người lên, tiếp tục lao động.
 
 	Thiếu niên tên Lâm Hạo, là khu mỏ quặng bên trong mấy vạn thợ mỏ bên trong một viên. Một ngày làm nô, cả đời làm nô! Từ hắn gia gia bối phận lên, liền ở trong khu mỏ quặng này, tiến hành không ngừng không nghỉ lao động, mà hắn Lâm Hạo, tính toán ra, tại năm tuổi biết sự tình lên, ở trong khu mỏ quặng này, đã cần mẫn khổ nhọc mười năm.
 
 	Còn có hai ngày, chính là năm nay một tấn linh quáng bàn giao công trình ngày, nghiêm trọng biếng nhác người, rút gân lột da! Người hoàn thành, trong môn phái có đại thưởng, ban thưởng thợ mỏ quần áo ăn thịt, siêu công người, thậm chí ban thưởng Thái Huyền Môn thần thông!
 
 	Mắt thấy bây giờ linh quáng khai thác chi lượng, đã đạt tới một ngàn tám trăm số lượng, ngày bình thường, luôn luôn cần cù Thanh Ngưu lại đột nhiên biếng nhác, để Lâm Hạo làm sao không lo lắng?
 
 	Bò....ò... ~!
 
 	Nhưng mà, lão Ngưu lại là đối Lâm Hạo ý tứ không chút nào thêm để ý tới, lại là một đạo dài bò....ò... Về sau, khép hờ lên hai mắt.
 
 	Tê.
 
 	Lâm Hạo cắn răng, gia tăng nắm Thanh Ngưu song giác cường độ, ngữ khí tha thiết nói: "Lão Ngưu, ngươi nhất định phải chống đỡ! Ta đáp ứng ngươi, chỉ cần ngươi giúp ta hoàn thành tâm nguyện, đạt được trong môn phái trưởng lão ban thưởng thần thông, khiến cho ta Lâm Hạo bước vào con đường tu hành, ta Lâm Hạo đời này nhất định sẽ cực kỳ phụng dưỡng ngươi!"
 
 	"Lâm tiểu tử, không có cơ hội. . . Bản tôn thọ nguyên đã gần đến, có thể chống đến bây giờ, đã là cực hạn."
 
 	Cũng chính là ở thời điểm này, lão Ngưu đột nhiên "Mở miệng", một giọng già nua đột ngột truyền đến Lâm Hạo trong tai.
 
 	"Lão Ngưu, ngươi. . . Ngươi. . . Lại có thể miệng nói tiếng người?" Lâm Hạo sợ đến chảy mồ hôi lạnh ròng ròng, theo hắn mười năm lão Ngưu đột nhiên há miệng nói chuyện, cái này không khỏi quá kinh hãi thế tục.
 
 	Bất quá Lâm Hạo lập tức sắc mặt đại biến.
 
 	Huyền Nguyên đại lục, yêu thú hoành hành, yêu thú ăn thịt người sự tình càng là thường có phát sinh. Từng có lúc, tại khu mỏ quặng bên trong đồng dạng có yêu vật tiềm ẩn tiến đến, nuốt mất thợ mỏ súc vật, hóa thành súc vật bộ dáng, cùng thợ mỏ ở chung hồi lâu, thừa dịp nó bất ngờ, moi tim ăn thịt, thảm không thể nói.
 
 	Mặc dù lão Ngưu, dĩ vãng mười năm đều không có hại hắn, nhưng mà ai biết trước mắt đầu này lão Ngưu vẫn là đầu kia cùng mình cần mẫn khổ nhọc mười năm lão Ngưu sao?
 
 	Nếu như nó là bị yêu vật giết về sau hóa thành lão Ngưu bộ dáng đâu?
 
 	Lâm Hạo từ nhỏ tại cái này gian khổ hoàn cảnh dưới, mặc dù rất ít gặp được những chuyện tương tự, nhưng lại nghe qua không ít liên quan cố sự, đối mặt yêu vật, chỉ có một chữ, giết.
 
 	Hắn muốn sống sót, hắn không muốn chết.
 
 	"Lão Ngưu, ta sẽ vì ngươi báo thù!"
 
 	Lâm Hạo nhận định trước mắt lão Ngưu đã không phải là cái kia cùng hắn lao động mười năm lão Ngưu, trong lòng hung ác, không có chút gì do dự, cắn răng nắm chặt một bên xẻng dài, đánh tới hướng Thanh Ngưu phần bụng.
 
 	Tiên hạ thủ vi cường! Loại hoàn cảnh này, hắn căn bản chạy không thoát, chỉ có liều mạng mới có hy vọng còn sống.
 
 	Cây báng một tiếng. Tia lửa tung tóe.
 
 	Xẻng dài đánh vào Thanh Ngưu trên thân liền cùng đập vào tảng đá cứng rắn bên trên, xẻng dài xúc đầu đều bị va chạm lật ra quyển.
 
 	"Chậc chậc. . . Dám đối bản tôn xuất thủ? Tâm trí kiên nghị, vượt qua thường nhân, ha ha, bản tôn quả nhiên không có nhìn lầm người ! Bất quá, Lâm tiểu tử, đây là đại cơ duyên, ngươi xác định bỏ đi?"
 
 	Thanh Ngưu giống như nhìn thấu Lâm Hạo ý nghĩ trong lòng, liền vượt lên trước tại Lâm Hạo không động tay trước mở miệng nói: "Ngươi không cần suy nghĩ nhiều. Lão Ngưu ta không có ác ý, kỳ thật bản tôn chính là thái thượng Tiên Đế tọa kỵ Thanh Khải Man Ngưu hậu duệ, bởi vì tại ba trăm năm trước, tuổi nhỏ vô tri không nghe trưởng bối khuyến cáo, trộm ra thái thượng Tiên Đế vô thượng thần thông đặt chân trần thế, bị mấy trăm đại năng vây công, hủy đi đại yêu bản nguyên, bất đắc dĩ đành phải hóa thành phàm ngưu, tại Huyền Nguyên trong đại lục lưu thoán. . . Nhưng bây giờ, thọ nguyên đã gần đến. . . Lâm tiểu tử, ta hỏi ngươi, ngươi nhưng nguyện truyền thừa bản tôn tinh thần ý chí cùng thái thượng Tiên Đế vô thượng thần thông « Thái Thượng Đế Kinh », tu thành đạo quả sau tiến ta cổ tộc, nhóm lửa liên thọ chi đăng, trợ ta trùng sinh?"
 
 	"Thái thượng Tiên Đế! Thái Cổ đại yêu hậu duệ! Đại đế kinh văn! Cái này đều cái gì?" Lâm Hạo khiếp sợ tột đỉnh, Thanh Ngưu lời nói hắn nghe được không hiểu nhiều lắm, nhưng ở lúc này, ý hắn biết đến. . . Hắn là nhặt bảo bối, dính vào đại tiện nghi. . . Cho tới nay tu hành chi mộng, rốt cục muốn thực hiện sao?
 
 	Chỉ là, đây là sự thực sao? Trên trời có rớt đĩa bánh chuyện tốt sao? Nếu là cái này yêu vật đang lừa gạt mình, để cho mình buông lỏng cảnh giác đâu?
 
 	"Tốt tốt tốt, không dễ dàng người đáng tin, gặp lớn lợi mà không tham, không hổ là bị bản tôn coi trọng người. Tâm trí như thế, tiên môn đều có thể." Thanh Ngưu tựa hồ nhìn ra Lâm Hạo ý nghĩ, tại nói liên tục ba cái "Tốt" chữ về sau, căn bản không nhìn Lâm Hạo trong tay xẻng dài.
 
 	"Lâm tiểu tử, ngươi suy nghĩ một chút, bản tôn nếu muốn giết ngươi, mười năm này ngươi đã không biết bao nhiêu lần chết tại bản tôn trên tay. Bản tôn hiện tại chỉ hỏi ngươi một câu, có muốn hay không thoát khỏi thân phận làm nô lệ, có muốn hay không trở thành người trên người, có muốn hay không một ngày kia quân lâm thiên hạ."
 
 	Từ đó thoát khỏi thân phận làm nô lệ! ?
 
 	Lâm Hạo lại làm sao không nghĩ, hắn từ khi kí sự lên chính là nô lệ, cả ngày cần mẫn khổ nhọc, còn ăn không no, còn muốn đứng trước các loại ẩu đả, phụ thân của hắn, gia gia của hắn đều chết ở chỗ này.
 
 	Đây là nhất định cả đời vận mệnh, nhưng Lâm Hạo không cam tâm, cho nên mới ra sức đào móc linh quáng, chờ mong có một ngày bị Thái Huyền Môn người nhìn trúng, đi đến con đường tu luyện.
 
 	Thế nhưng là đây hết thảy vô cùng khó, mười năm, Lâm Hạo như cũ không nhìn thấy nhiều ít hi vọng.
 
 	Nhưng giờ phút này trước mắt đầu này giống như quen thuộc nhưng lại đặc biệt xa lạ Thanh Ngưu lại muốn thành toàn mình, hắn ngoại trừ không hiểu, giật mình bên ngoài, còn có nồng đậm hiếu kỳ, hắn không cảm thấy mình có cái gì đột xuất địa phương có thể bị Thanh Ngưu coi trọng.
 
 	"Vì cái gì coi trọng ta?"
 
 	"Ha ha ha! Bởi vì. . ." Thanh Ngưu biết Lâm Hạo tâm động, nhưng thiếu niên này nhưng cũng không phải dễ bị lừa, xem ra nó thật không nhìn lầm người, "Ta là nhìn lấy ngươi lớn lên."
 
 	Dứt lời, không đợi Lâm Hạo đáp lời, hai cái sừng trâu lóe ra một đoàn kim quang, lan tràn tiến Lâm Hạo thể nội.
 
 	Lâm Hạo lập tức cảm giác được toàn thân giống như là có vô số con kiến bò qua, lập tức kích thích kêu to lên tiếng, cả người trên mặt tất cả đều là mồ hôi lạnh, hô hấp biến dị thường gấp rút.
 
 	"Thái thượng vô tình, như bóng với hình. . ." Trong đại não, tức thì bị khắc lên đại thiên tối nghĩa kim sắc chữ cổ. . . « Thái Thượng Đế Kinh »!
 
 	Lão Ngưu tinh thần ý chí, bắt đầu ở cải thiện lấy nhục thể của hắn thể chất cùng tinh thần.
 
 	"Lâm tiểu tử, con đường tu hành, khó mà gian, ngươi tâm tính kiên quyết tại thường nhân, ngày sau thành tựu, tất nhiên phi phàm. . . Ta Niết Bàn về sau, lấy ta ngũ tạng sinh ăn chi, vận chuyển Đế kinh, trong vòng ba ngày, liền có thể giúp ngươi đả thông cửu khiếu mạch luân. . . Nhục thân chôn thổ, trăm năm bất hủ, đợi ngươi ngày sau bước vào tiên môn về sau, liền có thể trợ ta trùng sinh!"
 
 	"Bản tôn đã ở ngươi chi thân thi hạ đại trớ chú chi thuật, ghi nhớ! Cần cù tu hành, trợ ta trùng sinh, nếu như lười biếng, sẽ làm bạo thể mà chết!"
 
 	"Nếu như đời này ngươi không cách nào bước vào tiên môn, như vậy chính là ta chi mệnh. . ."
 
 	Đây là Thanh Ngưu tại quặng mỏ bên trong lưu lại cuối cùng một đạo âm tiết, tiếng như hồng chung, dứt tiếng, tại thể nội kim sắc lưu quang va chạm dưới. Lâm Hạo cũng cuối cùng thể lực chống đỡ hết nổi, ngã xuống đất đã ngủ mê man.
 
 	. . .
 
 	Cũng không biết qua bao lâu, khi Lâm Hạo một lần nữa khi mở mắt ra, thái âm chi nguyệt cao thăng, giữa thiên địa một mảnh trắng bệch, lão Ngưu bình tĩnh nằm trên mặt đất bên trên, không làm động tĩnh.
 
 	Lâm Hạo yên lặng nhìn trước mắt cảnh sắc, thần sắc một mảnh yên tĩnh.
 
 	Thanh Ngưu mở miệng, vô thượng truyền thừa. Hồi tưởng lại kinh lịch vừa rồi, Lâm Hạo phảng phất làm một trận kỳ dị nằm mơ ban ngày, nhưng đi qua kim quang tẩy lễ về sau, bản thân cảm thụ được thể nội ngưng kết lực lượng, nhưng lại xác thực nói cho cái này hắn -- đây hết thảy đều là thật!
 
 	"Lão Ngưu, ngươi giúp ta bước vào con đường tu hành, đại ân đại đức, ta Lâm Hạo đời này ổn thỏa vĩnh khắc trong tâm khảm!" Lâm Hạo trong lòng mặc niệm.
 
 	"Lớn mật! Vụ kỳ hạn công trình ở giữa dám lười biếng đi ngủ, muốn chết hay sao?" Cũng chính là ở thời điểm này, Lâm Hạo sau lưng, đột truyền đến một đạo quát lớn âm thanh.
 
 	Tùy theo, "Đôm đốp!" Một đạo âm thanh xé gió gào thét mà đến, một đạo trường tiên, kém hơn nửa hứa, liền muốn áp vào Lâm Hạo sau lưng đeo.
 
 	Lực đạo hung mãnh, thân hình gầy yếu Lâm Hạo nếu là miễn cưỡng ăn hạ cái này một cái, chỉ sợ muốn nằm trên mặt đất bên trên mấy ngày không bò dậy nổi!
 
 	Ngày bình thường Lâm Hạo cũng không có bất luận khí lực gì đi phản kháng, chỉ có thể là ngạnh kháng, thế nhưng là giờ khắc này, trong lòng của hắn lại có một loại cảm giác, tựa như đạo này công kích cũng không tính cái gì.
 
 	Ba.
 
 	Lâm Hạo một cái đột nhiên trở lại, liền tay mắt lanh lẹ đem trường tiên đuôi cầm trong tay.
 
 	Người tới, Lâm Hạo cũng không lạ lẫm, chính là ỷ vào thể chất ưu thế, cả ngày tại khu mỏ quặng bên trong hoành hành bá đạo to con thợ mỏ Lôi Đình!
 
 	Sau lưng hắn, còn đi theo hai cái sắc mặt cháy đen tùy tùng, mắt lộ ra hung quang.
 
 	Người bình thường bị bọn hắn để mắt tới, tiến cống trên dưới một trăm cân linh quáng, đó là việc nhỏ, nếu như cùng cái này ác nhân phát sinh cãi vã, bị nó quất mất mạng, cái kia chính là đại sự.
 
 	Thợ mỏ, mệnh so cỏ tiện, môn phái sẽ không nhiều hơn hỏi thăm.
 
 	"A. . . Thật là nhạy cảm tốc độ phản ứng! Chẳng lẽ ta bị đông mỏ cái kia hỗn đản lừa bịp rồi? Thế này sao lại là ma bệnh, đặt ở chúng ta tây mỏ, cũng là có thể xưng bá một phương tồn tại." Một bên quất hụt Lôi Đình kinh ngạc tự nói.
 
 	Lâm Hạo trong lòng dị thường kinh ngạc biến hóa của mình, nhưng không dám triển lộ ra, Thanh Ngưu sự tình quá quỷ dị, việc này cả đời này ai cũng không thể xách. Có thể khẳng định là, mình đích thật đạt được Thanh Ngưu trợ giúp, cải thiện thể chất, vô luận là tốc độ hay là lực lượng đều chiếm được trước kia nghĩ cũng không dám nghĩ tăng lên.
 
 	Mặt như trấn định nhìn về phía Lôi Đình, không kiêu ngạo không tự ti mà nói: "Ba vị, chúng ta đông mỏ, luôn luôn cùng các ngươi tây mỏ làm không vãng lai, ngươi như thế mạo muội đến đây, liền không lo lắng chúng ta đông mỏ giám sát, trị tội ngươi?"
 
 	Vừa mới đạt được Thanh Ngưu truyền thừa, không có tương ứng kinh nghiệm chiến đấu, Lâm Hạo hiểu chiến đấu đều là một chút người bình thường ở giữa đánh nhau. Hắn giờ phút này cũng không có nắm chắc có thể đánh bại Lôi Đình, liền ra miệng hù dọa.
 
 	"Ha ha. Trị ta Lôi Đình tội? Bọn hắn nếu như không phải dựa vào lấy ta Lôi Đình mỗi tháng tiến cống, bọn hắn chẳng phải là cái gì! Lâm Hạo? Nếu như ta không có nhớ lầm, ngươi hẳn là gọi Lâm Hạo a? Xem ở ngươi có bản lĩnh ngăn lại ta trước hết trên mặt mũi, ta cũng không ngại nói cho ngươi. . . Lần này ta Lôi Đình tìm tới ngươi, liền là các ngươi đông mỏ giám sát bày mưu đặt kế!"
 
 	Lôi Đình ha ha cười nói: "Nghe nói, tiểu tử ngươi thế nhưng là giàu đến chảy mỡ a, hơn một ngàn cân linh quáng? Được, ta cũng không nhiều lời, giao ra một nửa đến, đêm nay, ngươi liền có thể an toàn rời đi, ta cùng huynh đệ nhóm sẽ không làm khó ngươi."
 
 	"Một nửa?" Lâm Hạo ánh mắt bỗng nhiên trở nên âm lãnh xuống tới, xem ra hôm nay sự tình là ẩn dấu không được, cái kia một nửa linh quáng, thế nhưng là hắn cùng Thanh Ngưu mấy tháng lao động thành quả, bây giờ muốn không công bị cái này ác công tác đi? Là đạo lý gì? .
 
 	"Ừm? Đầu này lão Ngưu ợ ra rắm rơi mất?" Cũng chính là ở thời điểm này, Lôi Đình đem ánh mắt đặt ở Lâm Hạo một bên đình chỉ động tĩnh trên thân Thanh Ngưu, chậc chậc cười nói: "Vừa vặn. Đại ca nhà ta, phía trước mấy ngày này, nhận lấy trong môn phái trưởng lão ban thưởng thần thông, đã đả thông tám đạo mạch luân số lượng, có con này lão Ngưu canh thịt băm làm phụ liệu, nhất định sẽ cố gắng tiến lên một bước, thuận lợi đả thông chín đạo mạch luân, thoát thân là Thái Huyền Môn đệ tử!"
 
 	"Khinh người quá đáng!" Lâm Hạo tức giận đến không được, linh quáng có thể bị đoạt, lão Ngưu nhục thân, là tuyệt đối không thể lấy rớt, đến một lần lão Ngưu liên tục dặn dò nhục thân của nó có thể giúp hắn tu hành, hai là lão Ngưu cùng hắn thân cận vô biên, tình cảm sâu vô cùng, giờ phút này chết đi, nhục thân há có thể khiến người khác đoạt đi cái ăn?
 
 	Lúc này, Lâm Hạo toàn thân cao thấp nhiệt huyết phun trào lên, khí thế đột nhiên tăng vọt.
 
 	Không thể nhẫn!
 
 
         Chương trình ủng hộ thương hiệu Việt của Tàng Thư Viện:  
    
      		       Hãy nhấn like ở mỗi chương để ủng hộ tinh thần các dịch giả bạn nhé!`,
                chapters: 1,
                likes: 1500,
                views: 56000,
                bookmarks: 3200,
                date: '2023-05-10',
                status: 'ongoing'
            },
            {
                id: 4,
                title: 'Võ Hành Chi Nhân',
                author: 'Lãng Tử Vô Tình',
                genre: 'vo-hiep', // Thể loại Võ Hiệp
                synopsis: 'Vạn sự trên thế gian này đều có ý nghĩa, đạo lý của mình. 3000 đại đạo, không chỉ là mạnh hay yếu, mà còn là sự phù hợp với mỗi cá nhân.Võ đạo, vừa là võ cũng là đạo của riêng mỗi người chúng ta. Võ là hình, công là ý, là lực lượng sức mạnh, cũng rèn luyện tâm cảnh bản thân ngày càng mạnh mẽ,tiêu dao.',
                content: `Chương 1: Nền móng vững chắc, thành tựu mới caog\n\n“ Nhất định, phải báo thù cho bọn ta."

Những người dân đang nằm la liệt bên dưới, sau khi trăn trối với cậu, cũng bị những lưỡi đao vô tình chặt chém xuống. Ánh mắt họ từ sợ hãi, đau đớn, rồi xám xịt đi, ảm đảm vô quang.

“ Con hãy sống sót, sống sót" Giọng một người phụ nữ đau khổ hét lớn.

“ Aaaaaaaaaa” Hoàng Nhân giật mình tỉnh dậy, ánh mắt cùng khuôn mặt vô cùng sợ hãi, đau khổ. Không biết từ lúc nào, đầu tóc cùng quần áo cậu đã ướt đẫm mồ hôi lúc nào không hay.

Cậu từ từ bình tĩnh lại, ngồi dậy trên chiếc giường,đưa mắt nhìn ra ngoài cửa sổ. Bây giờ sắc trời vẫn còn tối, từng đợt gió âm lạnh lẽo thổi vào căn phòng ngủ đơn sơ. Tiếng gà gáy chó sủa vang vọng nơi xa.

Hoàng Nhân cũng dứt khoát không ngủ nữa, bước xuống giường, chỉnh lý lại trang phục, rảo bước chầm chậm đi đến một bãi sân trống, bắt đầu đứng tấn luyện công.

“Hộc… hộc… hộc…”

Tiếng thở dốc nặng nề vang lên từng hồi trong khoảng không yên ắng của rừng núi lúc rạng sáng.

Mỗi một hơi thở của Hoàng Nhân đều mang theo hơi nóng, phả ra từng làn khói trắng mỏng, tan dần trong không khí se lạnh.

Cậu bé cắn chặt răng, hai chân trụ vững, các đầu ngón chân ghim chặt xuống mặt đất, đầu gối hơi khuỵu, hông xuống thấp, thân trên giữ thẳng,.

Tư thế đứng tấn tưởng chừng đơn giản ấy, lúc này lại nặng như đeo ngàn cân. Mồ hôi chảy dọc theo trán, theo sống mũi, nhỏ giọt xuống nền đất lạnh ẩm. Toàn thân cậu run nhẹ, từng bó cơ căng cứng, gân xanh nổi rõ dưới làn da non nớt.

Ánh mặt trời từ phía chân trời xa xôi chậm rãi ló dạng, nhuộm cả bầu trời một màu đỏ cam nhạt.

Những tia sáng đầu tiên xuyên qua tầng mây mỏng, rơi xuống khuôn mặt đẫm mồ hôi của cậu, như từng giọt sương sớm rơi nhẹ, vừa lạnh lẽo vừa mang đi hơi ấm của làn da cậu.

Bây giờ là đầu giờ Dần, rạng sáng.

Mùa thu vừa sang, tiết trời mang theo hơi lạnh nhè nhẹ, đủ để khiến người ta tỉnh táo, cũng đủ để làm thân thể non trẻ run rẩy.

Gió sớm thổi qua rừng cây, lá khô xào xạc, cành cây rung nhẹ, phát ra những âm thanh khe khẽ, tựa như cả ngọn núi đang hít thở cùng cậu.

Thời tiết sáng sớm lạnh như vậy, nhưng quanh thân Hoàng Nhân lại bốc lên từng luồng hơi nóng nhàn nhạt.

Khí huyết vận chuyển cuồn cuộn nhiệt lượng tỏa ra từ cơ thể khiến không khí quanh cậu mơ hồ ấm nóng theo,như hơi nước sắp sôi.Mỗi lần hít vào, lồng ngực căng cứng lên mỗi lần thở ra, khói trắng nơi miệng nhè nhẹ tản ra như một luồng khí trắng mỏng

“Hít thở cần phải êm, chậm, sâu, đều.Ngưng khí tại đan điền, trụ vững hạ thân.Có như vậy mới rèn được gân cốt, khí huyết mới khai sinh.Đây là căn bản, tuyệt đối phải luyện tập đúng, không thể xem thường "

Trong đầu Hoàng Nhân, giọng nói của lão sư phụ vang lên rõ ràng, từng chữ từng câu như in khắc vào tâm trí.

Cậu vừa nghĩ vừa điều khí. Hít sâu, ép khí trầm xuống bụng dưới. Thở chậm, giữ lưng thẳng, vai trầm, cột sống như một cây trụ chống trời.

Mỗi buổi sáng, cậu đều phải đứng tấn ít nhất nửa canh giờ. Từ bốn giờ đến năm giờ. Ngày nào cũng vậy,như một thói quen,một phần không thể thiếu trong cuộc sống của cậu.

Theo lời lão sư, đây là thời khắc tử khí đông lai thịnh nhất trong ngày. Khí huyết khi ngủ dậy vừa mới lưu chuyển, dương khí cũng là bắt đầu khởi sinh, là lúc thích hợp nhất để võ giả khởi động thân thể, dẫn khí vận huyết, rèn luyện kinh mạch gân cốt,kích phát tiềm năng cùng căn cơ bản thân.

Đối với võ giả trưởng thành rèn luyện khắc nghiệt như vậy mỗi ngày cũng là một sự tra tấn, thử thách cả về thể chất lẫn ý chí, có thể tưởng tượng cường độ luyện tập như thế này là rất cao.

Huống chi đây lại là những bài luyện tập lão sư đề ra cho cậu, một đứa trẻ mới chỉ chín mười tuổi, độ tuổi mà người bình thường còn đang làm nũng bên cha mẹ.

Dù là những con cháu thế gia võ học truyền thừa, cũng chỉ mới bắt đầu rèn luyện cơ bản, thế mà cậu đã và đang luyện tập cả nội ngoại công rồi

Thân hình nhỏ nhắn, bả vai gầy, tay chân còn mang nét non nớt, nhưng độ rắn chắc của cơ thể cậu là vượt trội hơn hẳn những đứa nhỏ cùng lứa bình thường. Đôi mắt cậu vô cùng kiên định không có nửa phần trẻ con.

“Hô… hô… hô… A!”

Cuối cùng, khi hơi thở đã rối loạn, hai chân run đến mức không thể trụ vững thêm nữa, Hoàng Nhân khẽ kêu lên một tiếng, rồi ngồi phịch xuống đất.

Mặt đất lạnh buốt, nhưng cậu không để tâm.Ngay lập tức, cậu ngồi xếp bằng, hai tay đặt trước bụng, nhắm mắt, ngưng thần tĩnh ý.Hơi thở từ gấp gáp dần dần trở nên chậm rãi, khí tức hỗn loạn từ từ ôn hòa lại được ý niệm dẫn về đan điền.

Cậu tập trung mười phần thu công

Nếu không thu công đúng,vừa không tối ưu được thành quả tập luyện, thậm chí không cẩn thận có thể dẫn đến khí huyết nghịch loạn, nhẹ thì mệt mỏi, nặng thì thậm chí thương tổn đến căn cơ.

Một lát sau, hơi thở đã hoàn toàn ổn định.

“Nhóc con, xong chưa?”

Giọng một lão già vang lên từ phía sau vách nhà tranh. Âm thanh trầm thấp, hơi khàn, mang theo nét cằn nhằn quen thuộc, nhưng ẩn sâu bên trong lại là uy nghiêm không thể xem thường.

“Chặt nốt số củi ngoài sân rồi mang vào cho ta. Ta pha xong nồi nước tắm cho tiểu tử nhà ngươi rồi đấy.”

Hoàng Nhân mở mắt, vội vàng đáp lại:

“Lão sư già!

Chờ con một lát, con sắp điều tức xong rồi!”

Cậu nhanh chóng đứng dậy, chạy ra sân chặt củi.

Từng nhát rìu gọn gàng, dứt khoát, không hề giống động tác của một đứa trẻ. Số củi nhan chóng được mang vào bếp.

Trong nồi lớn, nước đang sôi sùng sục, hơi nước bốc lên mang theo hương thơm nồng đậm của thảo dược.

Chỉ cần ngửi thôi cũng biết, những thứ được ném vào nồi này tuyệt đối không tầm thường.

Trong lúc đun, lão già vừa khuấy nước vừa cằn nhằn:

“Tên nhóc con nhà ngươi đúng là sướng hết phần thiên hạ.

Đương Quy, Xuyên Khung, Mộc Hoa, Linh Chi Trắng, Huyết Hoành…Toàn là dược liệu hơn mười năm trở lên đấy.

Cái lưng già của ta ngày ngày leo núi lội sông tìm chúng, cũng sắp không chịu nổi rồi.”

Hoàng Nhân không dám đáp lời, chỉ im lặng đứng một bên.

“Nước ấm rồi đấy.Mau nhảy vào đi.Nhớ ngậm miếng vải, đừng làm ồn. Cái tai già của ta chịu không nổi.” Lão già cằn nhằn nói

Cậu bé nghe lời, nhét giẻ vào miệng, rồi nhảy thẳng vào thùng nước thuốc.

Ngay khoảnh khắc da thịt tiếp xúc với nước, toàn thân cậu co giật mạnh. Gân xanh hai bên trán nổi rõ. Hơi thở trở nên dồn dập, cậu không nhịn được mà phát ra tiếng la đau đớn

Ưaaaaaaaaaaa

Nồi nước thuốc này, nỗi đau đớn mà nó gây ra, tuyệt đối không phải thứ người thường có thể chịu được

Đối với bách tính bình thường, chỉ cần thấy được một trong những loại dược liệu kia đã là phúc phận lớn.

Những tài dược này thường sinh trưởng sâu trong thâm sơn cùng cốc, nơi có hung thú, yêu thú trấn giữ. Dù là cư kẻ nào may mắn tìm thấy,nếu không đủ thực lực, cũng chỉ có kết cục chôn thây nơi rừng thiêng nước độc mà thôi.

Đây chính là ví dụ trực quan nhất của câu :

“Thất phu vô tội,hoài bích có tội ”

Chính vì vậy, ngay cả những địa chủ giàu có bá đạo một phương, cũng không thể mua được một vị, huống chi là dùng để ngâm cả thùng nước.

Công dụng của hỗn hợp tài dược này không chỉ trị nội thương, ngoại thương, mà còn cải thiện gân cốt, khai thông kinh mạch, tẩy trừ tạp chất trong cơ thể.

Dù là trong môn phái, không phải ai cũng có tư cách được ngâm loại nước này. Đây là đãi ngộ đặc biệt, chỉ dành cho những đệ tử hạch tâm

Ngay cả các đệ tử đã luyện quyền pháp thành thục, cũng không thể thường xuyên hưởng thụ.

Một là vì dược liệu quá quý hiếm.

Hai là vì nỗi đau đớn khủng khiếp trong quá trình rèn cốt luyện thân.

Ý chí kiên cường như Hoàng Nhân, cũng chỉ có thể ngâm một tuần một lần. Dù vậy cũng đã là cường độ cực cao.

Chỉ một lát sau, thấy sắc mặt cậu trắng bệch, thân thể run lên bần bật, khuôn mặt nhăn lại vì đau đớn, tiếng gầm gừ vì đau đớn càng lúc càng dồn dập, lão già liền ra tay.

Ngón tay như thép, liên tục điểm vào các huyệt đạo trên người cậu. Mỗi một chỉ hạ xuống, cơ thể cậu lại run mạnh, tiếng gầm càng lớn hơn 1 bậc

Vừa điểm, lão vừa thở hổn hển nói:

“Làm võ giả, căn cốt và kinh mạch là then chốt. Huống hồ, môn quyền pháp này của ta, nếu tiểu tử ngươi muốn tiến thêm một bước, thì phải cắn răng chịu đựng.

“Càng đau đớn, càng phải giữ tâm tỉnh táo, cật lực chịu đựng. Tuy đau đớn, nhưng ngươi còn nhỏ, lúc này phải tận lực nâng cao tư chất.”

Cũng như xây nhà vậy. Muốn nhà cao, muốn nhà vững, thì nền móng nhất định phải chắc. Muốn thành tựu cao, thì gân cốt cũng phải đạt đến cường độ phi thường.”

Lão im lặng một lúc, rồi khẽ nói:

“Con phải tiếp tục kiên trì.”

Hoàng Nhân lúc này không còn biết gì nữa, hàm răng vô thức cắn chặt vào miếng giẻ, gồng mình chịu đựng cho qua.

Vừa điên cuồng gầm gừ, trong lòng cũng là đang gào thét.

“Ta phải làm được. Không được phụ kỳ vọng của mẫu thân. Không được phụ tất cả người dân trong làng.

Ta nhất định phải mạnh mẽ,mạnh đến mức, có thể tự tay báo thù.”`,
                chapters: 1,
                likes: 890,
                views: 12000,
                bookmarks: 450,
                date: '2023-06-01',
                status: 'full'
            }
        ];
        localStorage.setItem('tutien_stories', JSON.stringify(sampleStories));
    }
    
    // Đảm bảo không ghi đè nếu đã null hoặc có dữ liệu
    if (localStorage.getItem('tutien_currentUser') === undefined) localStorage.setItem('tutien_currentUser', null);
    if (!localStorage.getItem('tutien_drafts')) localStorage.setItem('tutien_drafts', JSON.stringify([]));
    if (!localStorage.getItem('tutien_userXP')) localStorage.setItem('tutien_userXP', JSON.stringify([]));
    if (!localStorage.getItem('tutien_readStories')) localStorage.setItem('tutien_readStories', JSON.stringify([]));
    
    
    const cultivationRealms = [
        { level: 1, name: "Luyện Khí Kỳ", xpRequired: 100, color: "realm-colors" },
        { level: 2, name: "Trúc Cơ Kỳ", xpRequired: 300, color: "realm-colors-2" },
        { level: 3, name: "Kim Đan Kỳ", xpRequired: 600, color: "realm-colors-3" },
        { level: 4, name: "Nguyên Anh Kỳ", xpRequired: 1000, color: "realm-colors-4" },
        { level: 5, name: "Hóa Thần Kỳ", xpRequired: 1500, color: "realm-colors-5" }
    ];
    
    if (!localStorage.getItem('tutien_cultivationRealms')) {
        localStorage.setItem('tutien_cultivationRealms', JSON.stringify(cultivationRealms));
    }
}

// ===== YOUTUBE VIDEO BACKGROUND =====
let youtubePlayer = null;

function initializeYouTubeBackground() {
    function hideLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => { loadingScreen.style.display = 'none'; }, 500);
        }
    }
    
    function handleYouTubeError() {
        const fallbackVideo = document.querySelector('.fallback-video');
        if (fallbackVideo) {
            fallbackVideo.style.display = 'block';
            const video = fallbackVideo.querySelector('video');
            if (video) video.play().catch(e => console.log('Fallback video play error:', e));
        }
        hideLoadingScreen();
    }
    
    function createYouTubePlayer() {
        try {
            // Kiểm tra YT đã sẵn sàng chưa
            if (!window.YT) { handleYouTubeError(); return; }
            
            youtubePlayer = new YT.Player('youtube-player', {
                videoId: '9y4UGT0GW6Y',
                playerVars: {
                    'autoplay': 1, 'mute': 1, 'controls': 0, 'showinfo': 0,
                    'rel': 0, 'modestbranding': 1, 'playsinline': 1,
                    'iv_load_policy': 3, 'disablekb': 1, 'fs': 0,
                    'loop': 1, 'playlist': '9y4UGT0GW6Y', 'start': 0, 'end': 300
                },
                events: {
                    'onReady': function(event) {
                        event.target.playVideo();
                        hideLoadingScreen();
                        document.addEventListener('click', function initClick() {
                            event.target.playVideo();
                            document.removeEventListener('click', initClick);
                        }, { once: true });
                    },
                    'onStateChange': function(event) {
                        if (event.data === YT.PlayerState.ENDED) event.target.playVideo();
                    },
                    'onError': function(event) { handleYouTubeError(); }
                }
            });
        } catch (error) { handleYouTubeError(); }
    }
    
    if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        window.onYouTubeIframeAPIReady = function() { createYouTubePlayer(); };
        setTimeout(function() { if (!youtubePlayer) handleYouTubeError(); }, 5000);
    } else {
        createYouTubePlayer();
    }
}

// ===== DOM ELEMENTS =====
// Lưu ý: elements sẽ được lấy sau khi DOMContentLoaded để đảm bảo an toàn
let elements = {}; 

function cacheElements() {
    elements = {
        trangChu: document.getElementById('trang-chu'),
        thuVien: document.getElementById('thu-vien'),
        vietTruyen: document.getElementById('viet-truyen'),
        dongPhu: document.getElementById('dong-phu'),
        gioiThieu: document.getElementById('gioi-thieu'),
        navLinks: document.querySelectorAll('.nav-links a'),
        nutDangNhap: document.getElementById('nut-dang-nhap'),
        nutDangKy: document.getElementById('nut-dang-ky'),
        nutDangXuat: document.getElementById('nut-dang-xuat'),
        nutBatDauViet: document.getElementById('nut-bat-dau-viet'),
        nutKhamPha: document.getElementById('nut-kham-pha'),
        nutLuuNhap: document.getElementById('nut-luu-nhap'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        modalDangNhap: document.getElementById('modal-dang-nhap'),
        modalDangKy: document.getElementById('modal-dang-ky'),
        closeModals: document.querySelectorAll('.close-modal'),
        formDangNhap: document.getElementById('form-dang-nhap'),
        formDangKy: document.getElementById('form-dang-ky'),
        formTruyen: document.getElementById('form-truyen'),
        containerTruyen: document.getElementById('container-truyen'),
        danhSachTruyen: document.getElementById('danh-sach-truyen'),
        tenNguoiDung: document.getElementById('ten-nguoi-dung'),
        email: document.getElementById('email'),
        thongKe: document.getElementById('thong-ke'),
        capDo: document.getElementById('cap-do'),
        capHienTai: document.getElementById('cap-hien-tai'),
        xpHienTai: document.getElementById('xp-hien-tai'),
        xpCanThiet: document.getElementById('xp-can-thiet'),
        thanhXP: document.getElementById('thanh-xp'),
        truyenDaDoc: document.getElementById('truyen-da-doc'),
        canhGioi: document.getElementById('canh-gioi'),
        demTu: document.getElementById('dem-tu'),
        noiDung: document.getElementById('noi-dung'),
        nutLui: document.getElementById('nut-lui'),
        nutTrangChu: document.getElementById('nut-trang-chu'),
        nutQuayLai: document.getElementById('nut-quay-lai'),
        nutTienToi: document.getElementById('nut-tien-toi'),
        nutTaiLai: document.getElementById('nut-tai-lai')
    };
}

// ===== NAVIGATION SYSTEM (Unified with History API) =====
const SECTIONS = ['hero-section', 'featured-section', 'stories-section', 'write-section', 'profile-section', 'about-section'];

function showSection(sectionId) {
    SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === sectionId) ? 'block' : 'none';
    });
    
    // Scroll lên đầu trang khi chuyển section
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load dữ liệu đặc thù cho từng section
    if (sectionId === 'stories-section') loadStories();
    
    updateActiveNav(sectionId);
}

function updateActiveNav(sectionId) {
    if (!elements.navLinks) return;
    elements.navLinks.forEach(link => link.classList.remove('active'));

    const map = {
        'hero-section': 'trang-chu', 
        'featured-section': 'trang-chu', 
        'stories-section': 'thu-vien', 
        'write-section': 'viet-truyen',
        'profile-section': 'dong-phu', 
        'about-section': 'gioi-thieu'
    };
    
    const activeId = map[sectionId];
    if (activeId) {
        document.getElementById(activeId)?.classList.add('active');
    }
}

function navigateToSection(sectionId, push = true) {
    showSection(sectionId);
    if (push) {
        history.pushState({ section: sectionId }, "", `#${sectionId}`);
    }
}

function goHome() {
    navigateToSection('hero-section');
}

function goBack() {
    history.back();
}

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', function() {
    khoiTaoDuLieu();
    cacheElements();
    initializeAppSpecificData();
    initializeYouTubeBackground();
    
    // Xử lý điều hướng ban đầu
    const sectionFromHash = location.hash.replace("#", "");
    if (SECTIONS.includes(sectionFromHash)) {
        navigateToSection(sectionFromHash, false);
    } else {
        navigateToSection("hero-section", false);
    }

    updateUI();
    loadStories();
    setupEventListeners();
    setupStickyNav();
    
    // Notification Welcome
    setTimeout(() => { showNotification('Chào mừng đến với Web Viết Truyện Tu Tiên!', 'success'); }, 2000);
});

// Sự kiện History API (Back/Forward trình duyệt)
window.addEventListener("popstate", (e) => {
    const section = e.state?.section || "hero-section";
    showSection(section);
});

// ===== STICKY NAVIGATION EFFECT =====
function setupStickyNav() {
    const stickyNav = document.querySelector('.sticky-nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) stickyNav.classList.add('scrolled');
        else stickyNav.classList.remove('scrolled');
    });
    
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }
}

// ===== SETUP EVENT LISTENERS =====
// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    // Menu Links
    if (elements.trangChu) elements.trangChu.onclick = (e) => { e.preventDefault(); navigateToSection('hero-section'); };
    if (elements.thuVien) elements.thuVien.onclick = (e) => { e.preventDefault(); navigateToSection('stories-section'); };
    if (elements.vietTruyen) elements.vietTruyen.onclick = (e) => { e.preventDefault(); navigateToSection('write-section'); };
    if (elements.dongPhu) elements.dongPhu.onclick = (e) => { e.preventDefault(); navigateToSection('profile-section'); };
    if (elements.gioiThieu) elements.gioiThieu.onclick = (e) => { e.preventDefault(); navigateToSection('about-section'); };

    // Footer Links (using delegation)
    document.querySelectorAll('a[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection(this.getAttribute('data-section'));
        });
    });

    // Auth Buttons
    elements.nutDangNhap?.addEventListener('click', () => openModal(elements.modalDangNhap));
    elements.nutDangKy?.addEventListener('click', () => openModal(elements.modalDangKy));
    
    // Gọi hàm global handleLogout (từ auth.js)
    elements.nutDangXuat?.addEventListener('click', () => {
        if(typeof window.handleLogout === 'function') window.handleLogout();
    });
    
    // Action Buttons
    elements.nutBatDauViet?.addEventListener('click', (e) => { e.preventDefault(); navigateToSection('write-section'); });
    elements.nutKhamPha?.addEventListener('click', (e) => { e.preventDefault(); navigateToSection('stories-section'); });
    
    // Modal Controls
    elements.closeModals?.forEach(btn => btn.addEventListener('click', closeAllModals));
    
    document.getElementById('hien-dang-ky')?.addEventListener('click', (e) => { e.preventDefault(); closeAllModals(); openModal(elements.modalDangKy); });
    document.getElementById('hien-dang-nhap')?.addEventListener('click', (e) => { e.preventDefault(); closeAllModals(); openModal(elements.modalDangNhap); });
    
    // Auth Forms - Gọi hàm global từ auth.js
    elements.formDangNhap?.addEventListener('submit', (e) => {
        if(typeof window.handleLogin === 'function') window.handleLogin(e);
    });
    elements.formDangKy?.addEventListener('submit', (e) => {
        if(typeof window.handleRegister === 'function') window.handleRegister(e);
    });

    // Story Form
    elements.formTruyen?.addEventListener('submit', handleStorySubmit);
    elements.nutLuuNhap?.addEventListener('click', saveDraft);
    elements.noiDung?.addEventListener('input', updateWordCount);
    
    // Password Toggle
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            if (input.type === 'password') { input.type = 'text'; icon.className = 'fas fa-eye-slash'; }
            else { input.type = 'password'; icon.className = 'fas fa-eye'; }
        });
    });
    
    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterStories(this.getAttribute('data-filter'));
        });
    });
    
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabId)?.classList.add('active');
            if (this.getAttribute('data-tab') === 'lich-su-tu-luyen') {
            // Thêm chữ window. vào trước hàm và kiểm tra xem hàm có tồn tại không
    if (typeof window.renderLichSuTuLuyen === 'function') {
        window.renderLichSuTuLuyen();
    } else {
        console.error("Chưa tải được bí kíp Lịch Sử!");
    }
        }
        });
    });

    // Browser Nav Buttons
    if (elements.nutQuayLai) elements.nutQuayLai.onclick = () => history.back();
    if (elements.nutTienToi) elements.nutTienToi.onclick = () => history.forward();
    if (elements.nutTaiLai) elements.nutTaiLai.onclick = () => location.reload();
    if (elements.nutTrangChu) elements.nutTrangChu.onclick = goHome;
    if (elements.nutLui) elements.nutLui.onclick = () => history.back();
    
    // Outside Click Modal
    window.addEventListener('click', (e) => {
        if (e.target === elements.modalDangNhap) closeModal(elements.modalDangNhap);
        if (e.target === elements.modalDangKy) closeModal(elements.modalDangKy);
    });

    // --- MỤC MỚI THÊM VÀO ---
    // Xử lý sự kiện Submit cho form sửa tài khoản
    document.getElementById('form-sua-tai-khoan')?.addEventListener('submit', (e) => {
        if(typeof window.handleUpdateProfile === 'function') window.handleUpdateProfile(e);
    });

}

// ===== MODAL FUNCTIONS =====
function openModal(modal) {
    if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}

function closeModal(modal) {
    if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}

function closeAllModals() {
    if(elements.modalDangNhap) closeModal(elements.modalDangNhap);
    if(elements.modalDangKy) closeModal(elements.modalDangKy);
}

// ===== STORY FUNCTIONS =====
function handleStorySubmit(e) {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để đăng truyện!', 'error');
        openModal(elements.modalDangNhap);
        return;
    }
    const title = document.getElementById('tieu-de').value;
    const genre = document.getElementById('the-loai').value;
    const synopsis = document.getElementById('tom-tat').value;
    const content = document.getElementById('noi-dung').value;
    
    if (!title || !genre || !content) { showNotification('Vui lòng điền đầy đủ thông tin!', 'error'); return; }
    
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const newStory = {
        id: Date.now(), title, author: currentUser.username, genre, synopsis, content,
        chapters: 1, likes: 0, views: 0, bookmarks: 0, date: new Date().toISOString().split('T')[0], status: 'ongoing'
    };
    stories.push(newStory);
    localStorage.setItem('tutien_stories', JSON.stringify(stories));
    
    // Cập nhật thống kê user (cần logic phức tạp hơn chút để update vào danh sách user)
    // Ở đây tạm thời chỉ update UI
    
    elements.formTruyen.reset();
    updateWordCount();
    showNotification('Đăng truyện thành công!', 'success');
    loadStories();
    setTimeout(() => { navigateToSection('stories-section'); }, 1500);
}

function saveDraft() {
    const title = document.getElementById('tieu-de').value;
    const content = document.getElementById('noi-dung').value;
    if (!title && !content) { showNotification('Không có nội dung để lưu!', 'error'); return; }
    
    const drafts = JSON.parse(localStorage.getItem('tutien_drafts')) || [];
    drafts.push({
        id: Date.now(), title, genre: document.getElementById('the-loai').value,
        synopsis: document.getElementById('tom-tat').value, content,
        lastSaved: new Date().toISOString(), wordCount: content.trim().split(/\s+/).length
    });
    localStorage.setItem('tutien_drafts', JSON.stringify(drafts));
    showNotification('Đã lưu bản nháp!', 'success');
}

function updateWordCount() {
    if (elements.demTu && elements.noiDung) {
        elements.demTu.textContent = elements.noiDung.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    }
}

// ===== EXPERIENCE SYSTEM =====
function updateExperience(storyId) {
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    if (!currentUser || !currentUser.id) return; // Thêm dòng này để tránh lỗi null
    
    let readStories = JSON.parse(localStorage.getItem('tutien_readStories')) || [];
    if (readStories.some(item => item.userId === currentUser.id && item.storyId == storyId)) return;
    
    let userXP = JSON.parse(localStorage.getItem('tutien_userXP')) || [];
    let userXPData = userXP.find(xp => xp.userId === currentUser.id);
    if (!userXPData) {
        userXPData = { userId: currentUser.id, xp: 0, level: 1, storiesRead: 0, lastUpdated: new Date().toISOString() };
        userXP.push(userXPData);
    }
    
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const story = stories.find(s => s.id == storyId);
    if (!story) return;
    
    let xpGained = 50; // Simple logic
    userXPData.xp += xpGained;
    userXPData.storiesRead += 1;
    
    // Level Up Check
    const realms = JSON.parse(localStorage.getItem('tutien_cultivationRealms')) || [];
    let nextRealm = realms.find(r => r.level === userXPData.level + 1);
    while (nextRealm && userXPData.xp >= nextRealm.xpRequired) {
        userXPData.level += 1;
        nextRealm = realms.find(r => r.level === userXPData.level + 1);
        showNotification(`Đột Phá! Đạt cấp ${userXPData.level}`, 'success');
    }
    
    localStorage.setItem('tutien_userXP', JSON.stringify(userXP));
    readStories.push({ userId: currentUser.id, storyId: storyId, readDate: new Date().toISOString(), xpGained });
    localStorage.setItem('tutien_readStories', JSON.stringify(readStories));
    updateExperienceUI(currentUser.id);
    showNotification(`Nhận được ${xpGained} điểm kinh nghiệm!`, 'success');
}

function updateExperienceUI(userId) {
    const userXP = JSON.parse(localStorage.getItem('tutien_userXP')) || [];
    const userXPData = userXP.find(xp => xp.userId === userId);
    const realms = JSON.parse(localStorage.getItem('tutien_cultivationRealms')) || [];
    
    // Nếu chưa có dữ liệu XP, hiển thị mặc định level 1
    if (!userXPData) {
         if (elements.capHienTai) elements.capHienTai.textContent = 1;
         if (elements.xpHienTai) elements.xpHienTai.textContent = 0;
         return;
    }
    
    const currentRealm = realms.find(r => r.level === userXPData.level);
    const nextRealm = realms.find(r => r.level === userXPData.level + 1);
    const xpRequired = nextRealm ? nextRealm.xpRequired : currentRealm.xpRequired * 2;
    const xpProgress = Math.min((userXPData.xp / xpRequired) * 100, 100);
    
    if (elements.capHienTai) elements.capHienTai.textContent = userXPData.level;
    if (elements.xpHienTai) elements.xpHienTai.textContent = userXPData.xp;
    if (elements.xpCanThiet) elements.xpCanThiet.textContent = xpRequired;
    if (elements.thanhXP) elements.thanhXP.style.width = `${xpProgress}%`;
    if (elements.truyenDaDoc) elements.truyenDaDoc.textContent = userXPData.storiesRead;
    if (elements.canhGioi && currentRealm) {
        elements.canhGioi.textContent = currentRealm.name;
        elements.canhGioi.className = `realm-badge ${currentRealm.color}`;
    }
    if (elements.capDo && currentRealm) elements.capDo.textContent = currentRealm.name;
}

// ===== UI FUNCTIONS =====
function updateUI() {
    // Refresh elements cache
    cacheElements();
    
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    
    if (currentUser) {
        if(elements.nutDangNhap) elements.nutDangNhap.style.display = 'none';
        if(elements.nutDangKy) elements.nutDangKy.style.display = 'none';
        if(elements.nutDangXuat) elements.nutDangXuat.style.display = 'flex';
        
        if (elements.tenNguoiDung) elements.tenNguoiDung.textContent = currentUser.username;
        if (elements.email) elements.email.textContent = currentUser.email;
        
        updateProfileStats(currentUser);
        updateExperienceUI(currentUser.id);
        loadUserStories(currentUser.username);
    } else {
        if(elements.nutDangNhap) elements.nutDangNhap.style.display = 'flex';
        if(elements.nutDangKy) elements.nutDangKy.style.display = 'flex';
        if(elements.nutDangXuat) elements.nutDangXuat.style.display = 'none';
        
        if (elements.tenNguoiDung) elements.tenNguoiDung.textContent = 'Chưa Đăng Nhập';
        if (elements.email) elements.email.textContent = 'Vui lòng đăng nhập';
    }
}

function updateProfileStats(user) {
    if (!elements.thongKe) return;
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const userStories = stories.filter(s => s.author === user.username);
    elements.thongKe.innerHTML = `
        <div class="stat-item"><div class="stat-number">${userStories.length}</div><div class="stat-label">Truyện</div></div>
        <div class="stat-item"><div class="stat-number">${user.points || 0}</div><div class="stat-label">Điểm</div></div>
    `;
}

function loadStories() {
    if (!elements.containerTruyen) return;
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    if (stories.length === 0) {
        elements.containerTruyen.innerHTML = '<div class="empty-state"><h3>Chưa có truyện nào</h3></div>';
        return;
    }
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    const filteredStories = activeFilter !== 'all' ? stories.filter(s => s.genre === activeFilter) : stories;
    
    elements.containerTruyen.innerHTML = filteredStories.map(story => `
        <div class="story-card"><div class="story-content">
            <h3 class="chinese-font">${story.title}</h3>
            <p>${story.synopsis}</p>
            <button class="btn btn-outline read-story" data-id="${story.id}">Đọc</button>
        </div></div>
    `).join('');
    
    document.querySelectorAll('.read-story').forEach(btn => {
        btn.addEventListener('click', function() { readStory(this.getAttribute('data-id')); });
    });
}

function filterStories(filter) { loadStories(); }

function loadUserStories(username) {
    if (!elements.danhSachTruyen) return;
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const userStories = stories.filter(s => s.author === username);
    
    if (userStories.length === 0) {
        elements.danhSachTruyen.innerHTML = '<p style="color:var(--text-muted); text-align:center;">Chưa có truyện nào</p>';
        return;
    }
    
    elements.danhSachTruyen.innerHTML = userStories.map(story => `
        <div class="user-story-card"><h4 class="chinese-font">${story.title}</h4></div>
    `).join('');
}

function readStory(storyId) {
    const stories = JSON.parse(localStorage.getItem('tutien_stories')) || [];
    const story = stories.find(s => s.id == storyId);
    if (story) {
        story.views++;
        localStorage.setItem('tutien_stories', JSON.stringify(stories));
        showStoryModal(story);
        setTimeout(() => updateExperience(storyId), 3000);
    }
}

 // ===== ADVANCED STORY MODAL (READING + INTERACTION) =====
function showStoryModal(story) {
    // 1. Chuẩn bị dữ liệu (Nếu truyện cũ chưa có comments/likes thì tạo mới)
    if (!story.comments) story.comments = [];
    if (!story.likesList) story.likesList = []; 
    if (!story.likes) story.likes = 0;

    // 2. Tạo HTML cho Modal
    const modalHTML = `
    <div class="modal story-modal" id="story-modal" style="display:flex">
        <div class="modal-content story-modal-content" style="max-width: 900px; height: 90vh; display:flex; flex-direction:column;">
            
            <div style="position: sticky; top: 0; background: inherit; z-index: 10; padding-bottom: 10px; border-bottom: 1px solid var(--border);">
                <span class="close-modal" id="close-story-modal" style="float: right; cursor: pointer; font-size: 1.5rem;">&times;</span>
                <h2 class="chinese-font" style="text-align: center; color: var(--accent); margin: 0;">${story.title}</h2>
                <div style="text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-top: 5px;">
                    Tác giả: ${story.author} | ${story.views} Lượt xem
                </div>
            </div>

            <div style="flex: 1; overflow-y: auto; padding: 20px; padding-bottom: 50px;">
                
                <div class="story-text" id="modal-story-content">
                    ${story.content}
                </div>

                <div class="interaction-bar">
                    <button class="interact-btn" id="btn-like-story">
                        <i class="fas fa-heart"></i> <span id="like-count">${story.likes}</span> Đạo Tâm
                    </button>
                    <button class="interact-btn">
                        <i class="fas fa-comment"></i> <span id="comment-count-display">${story.comments.length}</span> Bình Luận
                    </button>
                </div>

                <div class="comment-section">
                    <h3 class="chinese-font">Đàm Luận Đạo Pháp</h3>
                    
                    <div class="comment-form">
                        <input type="text" id="comment-input" class="comment-input" placeholder="Nhập bình luận (Cần đăng nhập)...">
                        <button class="btn btn-primary btn-sm" id="btn-submit-comment"><i class="fas fa-paper-plane"></i> Gửi</button>
                    </div>

                    <div class="comment-list" id="comment-list-container">
                        ${renderCommentsHTML(story.comments)}
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    // 3. Chèn vào trang web
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // 4. GẮN SỰ KIỆN

    // Đóng Modal
    document.getElementById('close-story-modal').onclick = function() {
        document.getElementById('story-modal').remove();
    };

    // Like/Thả Tim
    document.getElementById('btn-like-story').onclick = function() {
        const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
        if (!currentUser) return showNotification('Đạo hữu cần đăng nhập để thả tim!', 'error');

        let stories = JSON.parse(localStorage.getItem('tutien_stories'));
        let currentStory = stories.find(s => s.id === story.id);
        if (!currentStory.likesList) currentStory.likesList = [];

        if (currentStory.likesList.includes(currentUser.username)) {
            showNotification('Đã thả tim rồi!', 'info');
        } else {
            currentStory.likesList.push(currentUser.username);
            currentStory.likes = (currentStory.likes || 0) + 1;
            localStorage.setItem('tutien_stories', JSON.stringify(stories));
            document.getElementById('like-count').textContent = currentStory.likes;
            this.classList.add('liked');
            showNotification('Đã thả tim thành công!', 'success');
        }
    };

    // Gửi Bình Luận
    document.getElementById('btn-submit-comment').onclick = function() {
        const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
        const content = document.getElementById('comment-input').value.trim();

        if (!currentUser) return showNotification('Cần đăng nhập để bình luận!', 'error');
        if (!content) return showNotification('Vui lòng nhập nội dung!', 'error');

        let stories = JSON.parse(localStorage.getItem('tutien_stories'));
        let currentStory = stories.find(s => s.id === story.id);
        
        const newComment = {
            user: currentUser.username,
            avatar: 'fas fa-user-ninja', 
            text: content,
            date: new Date().toLocaleString('vi-VN')
        };
        
        if (!currentStory.comments) currentStory.comments = [];
        currentStory.comments.unshift(newComment);
        
        localStorage.setItem('tutien_stories', JSON.stringify(stories));

        document.getElementById('comment-list-container').innerHTML = renderCommentsHTML(currentStory.comments);
        document.getElementById('comment-count-display').textContent = currentStory.comments.length;
        document.getElementById('comment-input').value = '';
        showNotification('Đã gửi bình luận!', 'success');
    };
    
    // Check Like status
    const currentUser = JSON.parse(localStorage.getItem('tutien_currentUser'));
    if (currentUser && story.likesList && story.likesList.includes(currentUser.username)) {
        document.getElementById('btn-like-story').classList.add('liked');
    }
}

// Hàm phụ trợ render comment
function renderCommentsHTML(comments) {
    if (!comments || comments.length === 0) return '<div style="text-align:center; color:var(--text-muted); padding: 1rem;">Chưa có đạo hữu nào đàm đạo.</div>';
    return comments.map(cmt => `
        <div class="comment-item">
            <div class="comment-avatar"><i class="${cmt.avatar || 'fas fa-user'}"></i></div>
            <div class="comment-content">
                <span class="comment-user">${cmt.user}</span>
                <p class="comment-text">${cmt.text}</p>
                <span class="comment-date">${cmt.date}</span>
            </div>
        </div>
    `).join('');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const color = type === 'success' ? '#4CAF50' : (type === 'error' ? '#f44336' : '#2196F3');
    
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed; 
        top: 20px; 
        right: 20px; 
        padding: 15px 25px; 
        background: #1a1a2e; 
        border-left: 5px solid ${color}; 
        color: #fff; 
        z-index: 9999; 
        border-radius: 4px; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.5s ease;
    `;
    notification.innerText = message;
    
    // Add animation styles dynamically if not exist
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.innerHTML = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => { 
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ===== GLOBAL EXPORTS =====
window.showSection = showSection;
window.openModal = openModal;
window.closeAllModals = closeAllModals;
window.navigateToSection = navigateToSection;
window.goBack = goBack;
window.goHome = goHome;
window.updateUI = updateUI; 
window.showNotification = showNotification;