<template lang="">
    <div id="api-testing">
        <div class="lecture-overview-item" v-if="false">
            <div class="lecture-heading" id="content">
                <h3 class="widget-title pb-2 text-uppercase" style="font-size: 20pt;">Nội dung bài học</h3>
                <div id="sheet">
                    ✅ API là gì?<br />
                    ✅ Ví dụ về cách API hoạt động<br />
                    ✅ Phạm vi hoạt động của API<br />
                    ✅ Các loại kiến trúc của API<br />
                    ✅ Điểm cuối API là gì và vì sao nó lại quan trọng?<br />
                    ✅ API Document là gì?<br />
                    ✅ Ứng dụng của API<br />
                    ✅ Tổng kết những điều cần nên biết về API<br />
                    ✅ Kiểm thử API là gì?<br />
                    ✅ Tại sao cần kiểm thử API?<br />
                    ✅ Lợi ích của kiểm thử API<br />
                    ✅ Một số phương pháp kiểm thử API phổ biến<br />
                    ✅ Một số công cụ kiểm thử API phổ biến
                    <hr />
                    <br />
                    <h2>✅ API là gì?</h2>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/API" target="_blank" rel="noopener">API</a> là cơ chế cho phép 2 thành phần của một phần mềm hoặc 2 phần mềm giao tiếp với nhau bằng một tập hợp các định nghĩa và giao thức. API viết
                        tắt của <strong>Application Programming Interface&nbsp;</strong>là một tập hợp các câu lệnh (commands), functions, các giao thức (protocols), objects,... giúp hai phần mềm (ứng dụng) có thể tương tác và trao đổi dữ liệu qua
                        lại được với nhau.<br />
                        <br />
                        API là thuật ngữ không còn quá xa lạ, đặc biệt là trong xu hướng chuyển đổi số đang diễn ra mạnh mẽ như hiện nay. API có tính ứng dụng thực tế cao trong lĩnh vực công nghệ thông tin, tạo sự “tương tác” dễ dàng hơn giữa các
                        hệ thống với nhau, từ đó thúc đẩy sự đổi mới và tăng tính hiệu quả cho nhiều hoạt động từ đời sống, xã hội cho đến hoạt động kinh doanh.
                    </p>
                    <h3>
                        <br />
                        🔆 Mô hình chung cơ chế hoạt động của API
                    </h3>
                    <p>
                        <a href="/src/assets/images/image-api-testing/api-hoat-dong.jpg" data-fancybox="images" data-width="1200"><img src="@/assets/images/image-api-testing/api-hoat-dong.jpg" alt="" width="1200" height="628" /></a><br />
                        <br />
                        <a href="/src/assets/images/image-api-testing/vi_du_api_doi_song.jpg" data-fancybox="images" data-width="1200"><img src="@/assets/images/image-api-testing/vi_du_api_doi_song.jpg" alt="" width="1280" height="626" /></a><br />
                        <br />
                    </p>
                    <h3>
                        <strong><br /></strong>🔆 Ví dụ về cách API hoạt động
                    </h3>
                    <p>
                        Có một hệ thống của Cơ quan khí tượng xây dựng để cung cấp số liệu về thời tiết hàng ngày cho cả nước Việt Nam mình dùng. Ứng dụng thời tiết trên điện thoại của bạn sẽ “trò chuyện” với hệ thống này qua API và hiển thị thông
                        tin cập nhật về thời tiết hàng ngày trên điện thoại của bạn.<br />
                        <br />
                    </p>
                    <ul>
                        <li><strong>Server</strong>: chính là cơ quan khí tượng sẽ xây dựng một hệ thống phần mềm, có database lưu trữ, có các API tính toán.</li>
                        <li><strong>API</strong>: là các hàm tính toán để cho ra kết quả về thời tiết từng ngày từng giờ mà cơ quan khí tượng xây dựng sẵn và được connect với DB lưu trữ trên, có thể public ra cho ai dùng cũng được.</li>
                        <li>
                            <strong>Client</strong>: là người dùng cuối (chúng ta nè) và cả người tạo ra cái <strong>App Mobile</strong> cho nhiều người sử dụng ở nhiều nơi trên nhiều thiết bị khác nhau. Bằng cách anh bạn
                            <strong>Developer</strong> tạo app đó sẽ connect đến Server để lấy kết quả thời tiết thông qua các API mà cơ quan khí tượng cung cấp. Sau đó hiển thị ra thông tin trên app mobile cho nhiều người dùng khác thấy.
                        </li>
                    </ul>
                    <p>
                        <br />
                        Trong quá trình sử dụng thì người dùng cuối không cần quan tâm App mobile đó xử lý bên trong như thế nào, chỉ việc click chọn các giao diện tuỳ ý đã xây dựng sẵn.<br />
                        Còn đối với anh bạn Develop kia thì cũng không cần quan tâm hàm tính toán của cơ quan khí tượng được viết như thế nào, anh ấy chỉ cần quan tâm nhiệm vụ chính của mình là gọi đúng hàm mà cơ quan khí tượng cung cấp và truyền
                        đúng các thông số yêu cầu nếu có là nó sẽ trả về kết quả cho App mobile của anh ta đang xây dựng.<br />
                        <br />
                        Như vậy các bạn có thể hiểu sâu hơn một chút là anh bạn Develop ảnh gọi API từ cơ quan khí tượng. Còn chúng ta thì lại gọi API từ anh bạn Develop ấy 😄<br />
                        <br />
                        Và một cái hay trong câu chuyện trên là không chỉ một anh Develop có thể gọi API từ Cơ quan khí tượng mà là có nhiều anh develop khác cùng gọi trên nhiều loại thiết bị khác nhau, có thể là mobile, desktop, website,...<br />
                        <br />
                    </p>
                    <h3>✳️ Phạm vi hoạt động của API</h3>
                    Để phân theo phạm vi hoạt động thì có 4 loại API:<br />
                    <br />
                    <ul>
                        <li>
                            <strong>Open APIs hoặc Public APIs (API mở)</strong>: Còn có tên gọi khác là API công khai, có sẵn nên có thể được sử dụng bởi bất kỳ nhà phát triển nào. Đổi lại, các Open APIs thông thường sẽ yêu cầu các biện pháp xác
                            thực hoặc ủy quyền thấp và bị hạn chế chức năng khi chia sẻ công khai. Một số Open APIs sẽ được chia sẻ miễn phí, một số khác sẽ yêu cầu tính phí khi sử dụng. Chi phí này thường được tính dựa trên số lượng “lệnh gọi”
                            (calls) đến API được sử dụng.
                        </li>
                        <li>
                            <strong>Partner APIs (API đối tác)</strong>: API này cần có quyền hoặc giấy phép cụ thể mới truy cập được. Thường dành cho các nhà phát triển bên ngoài ủy quyền để hỗ trợ đầu mối hợp tác giữa doanh nghiệp với doanh
                            nghiệp. Một số doanh nghiệp lựa chọn Partner APIs vì muốn kiểm soát tốt hơn người dùng có thể truy cập vào tài nguyên của họ và chỉ rõ cách thức sử dụng các tài nguyên đó.
                        </li>
                        <li>
                            <strong>Internal APIs (API nội bộ)</strong>: Không giống như API mở hay API đối tác, API nội bộ không dành cho các bên thứ ba sử dụng, thường dùng trong phạm vi công ty. Công ty sử dụng API này để để kết nối các hệ thống
                            cũng như dữ liệu nội bộ của công ty/tổ chức.
                        </li>
                        <li>
                            <strong>Composite APIs (API tổng hợp)</strong>: Kết hợp hai hay nhiều API khác nhau để giải quyết các yêu cầu phức tạp của hệ thống. Nếu cần dữ liệu từ các ứng dụng hoặc từ nhiều nguồn dữ liệu khác nhau, bạn nên sử dụng
                            API tổng hợp. Ngoài ra, bạn có thể sử dụng API tổng hợp để thiết lập một chuỗi các “lệnh gọi” (calls) và phản hồi tự động mà không cần chủ động can thiệp vào.<br />
                            <br />
                        </li>
                    </ul>
                    <h3>✳️ Các loại kiến trúc của API</h3>
                    <p>
                        Để phân theo kiến trúc thì có 4 loại kiến trúc API hiện nay:<br />
                        <br />
                    </p>
                    <ul>
                        <li><strong>API SOAP:</strong>&nbsp;Đây là một trong những API “đời đầu”, nó dùng giao thức truy cập đối tượng đơn giản. Lúc này, máy chủ sẽ trao đổi thông điệp thông qua XML với máy khách.</li>
                        <li><strong>API RPC:</strong>&nbsp;Các API còn được biết đến với tên gọi là Lệnh gọi thủ tục từ xa. API này buộc máy chủ phải hoàn thành được một thủ tục bắt buộc thì máy khách mới có thể được nhận được kết quả.</li>
                        <li><strong>API Websocket:</strong>&nbsp;Đây là một phiên bản API web hiện đại chuyển dữ liệu nhờ vào việc sử dụng các đối tượng JSON. Máy khách và máy chủ có thể trao đổi thông tin 2 chiều nhờ vào API này.</li>
                        <li>
                            <strong>API REST:</strong> Hiện nay thì API REST được cho là linh hoạt nhất và cũng được sử dụng rộng rãi nhất. Với loại API này, máy khách sẽ gửi đến một yêu cầu dưới dạng dữ liệu,
                            <strong>dữ liệu chính dạng JSON</strong>. Sau đó máy chủ sẽ dùng các dữ liệu này để thực hiện các hàm nội bộ và cho ra các dữ liệu đầu ra rồi gửi lại cho máy khách.
                            <em><strong>(hiện nay người ta dùng JSON để trao đổi dữ liệu rất thịnh hành, vì nó nhanh và nhẹ)</strong></em>
                        </li>
                    </ul>
                    <br />
                    <h2 id="seo-faq-pairs#what-is-an-api-endpoint-and-why-is-it-important" class="lb-txt-bold lb-txt-none lb-txt-28 lb-h2 lb-title">✅ Điểm cuối API là gì và vì sao nó lại quan trọng?</h2>
                    <p>
                        Điểm cuối API là điểm tiếp xúc cuối cùng trong hệ thống giao tiếp của API, hay còn được gọi là <strong>EndPoint</strong>.<br />
                        <br />
                        <strong>Ví dụ về EndPoint API:</strong><br />
                        <br />
                        <strong>- API để create user</strong> thì cần truy cập link này <strong>https://api.anhtester.com/api/user</strong> và với phương thức là <strong>POST</strong><br />
                        Xong chưa đủ, cần truyền body vào là thông tin của user cần tạo nữa, dạng <strong>JSON</strong> chẳng hạn
                    </p>
                    <div class="code-toolbar">
                        <pre class="line-numbers language-javascript" tabindex="0"><code class="language-javascript"><span class="token punctuation">{</span>
        <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"anhtester"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"firstName"</span><span class="token operator">:</span> <span class="token string">"Anh"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"lastName"</span><span class="token operator">:</span> <span class="token string">"Tester"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"thaian.it15@gmail.com"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"password"</span><span class="token operator">:</span> <span class="token string">"Test@123"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"phone"</span><span class="token operator">:</span> <span class="token string">"0939206009"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"userStatus"</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>
                        <div class="toolbar">
                            <div class="toolbar-item"><span>JavaScript</span></div>
                            <div class="toolbar-item">
                                <button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button>
                            </div>
                        </div>
                    </div>
                    <p>
                        <strong>- API để get user</strong> thì cần truy cập link này <strong>https://api.anhtester.com/api/user</strong> nhưng với phương thức là <strong>GET</strong><br />
                        Xong sau đó cần truyền param là username của user cần get, dạng <strong>Param URL </strong>chẳng hạn<br />
                        <strong>https://api.anhtester.com/api/user?username=anhtester</strong><br />
                        <br />
                        Đấy, thì như trên đó là các EndPoint đó. Những điểm cuối này bao gồm URL máy chủ, phương thức và những thông số kỹ thuật cụ thể khác, từ đây thông tin được gửi đi và tiếp nhận giữa các hệ thống.<br />
                        <br />
                        <span style="color: #ff0000;">
                            <em><strong>Xem thêm tài liệu API của Anh Tester</strong></em>
                        </span>
                        : <a href="https://api.anhtester.com/" target="_blank" rel="noopener">https://api.anhtester.com/</a><br />
                        <br />
                        <strong>Điểm cuối API rất quan trọng đối với doanh nghiệp vì 2 lý do chính:&nbsp;</strong>
                    </p>
                    <p><strong>+ Bảo mật</strong></p>
                    <p>Điểm cuối API khiến hệ thống dễ bị tấn công. Việc giám sát API để ngăn tình trạng lạm dụng là rất quan trọng. Vì nó có thể được public ra ngoài nhiều người biết đến và truy cập với đầy đủ thông số yêu cầu.</p>
                    <p><strong>+ Hiệu năng</strong></p>
                    <p class="lb-txt-14 lb-rtxt">
                        Điểm cuối API, nhất là những điểm cuối có lưu lượng truy cập cao, ví dụ login hệ thống chẳng hạn, thì có thể gây ra tình trạng nghẽn mạng và ảnh hưởng đến hiệu năng hệ thống.<br />
                        <br />
                        Các bạn nhớ lúc mà đăng ký học phần thời sinh viên gần đây và hiện tại luôn không, đúng giờ vàng cái là nó truy cập bụp bụp bụp dô đúng 1 đường link xong nhấn submit lia lịa. Rồi ngồi đợi qính trận liên quân luôn quay lại
                        submit tiếp 😝<br />
                        <br />
                    </p>
                    <h2 class="lb-txt-14 lb-rtxt">✅ API Document là gì?</h2>
                    <p>
                        <strong>API Document</strong> là tài liệu hướng dẫn tham khảo cho API, giúp người dùng API biết cách sử dụng API hiệu quả. Tài liệu API thường dành cho các lập trình viên, giúp lập trình viên có thể đọc và hiểu. Do đó việc
                        tạo ra một tài liệu API được thiết kế tốt, toàn diện và dễ theo dõi là cực kỳ quan trọng.<br />
                        <br />
                        API Document bao gồm các hướng dẫn về cách sử dụng hiệu quả và tích hợp với một API. Nó là một tài liệu ngắn gọn, chứa tất cả các thông tin được yêu cầu để làm việc với API, với thông tin chi tiết về các function (hàm),
                        class (lớp), return type (kiểu dữ liệu trả về), các argument (tham số),... được hỗ trợ bởi các bài hướng dẫn và ví dụ.<br />
                        <br />
                        <strong>API Document do ai viết?</strong><br />
                        <br />
                        <strong><em>API Document do Developer viết</em></strong> và hiện nay thường được tạo ra bằng cách sử dụng các thư viện trong code để generate ra luôn.<br />
                        <br />
                        Các định dạng mô tả API phổ biến như <strong>Swagger</strong> Specification sẽ tự động hóa quá trình xử lý tài liệu, giúp các nhóm dễ dàng hơn trong việc tạo và bảo trì chúng. Ngoài ra có thể viết thủ công dưới dạng
                        Microsoft Word hay Excel tuỳ ý công ty 😁<br />
                        <br />
                        <strong>Tester</strong> chuyên kiểm thử phần mềm có thể dựa vào API Document này để tiến hành kiểm thử.
                    </p>
                    <p class="lb-txt-14 lb-rtxt">&nbsp;</p>
                    <h2>
                        <span id="Ung_dung_cua_API_Testing"><strong>✅ Ứng dụng của API</strong></span>
                    </h2>
                    <ul>
                        <li>
                            <strong>Web API</strong>: Cho phép bạn cập nhật cơ sở dữ liệu, lấy dữ liệu và kết nối hầu hết các ứng dụng đến website. <strong>Ví dụ</strong>: Bạn xây dựng chức năng đăng nhập thông qua Google, Twitter, Facebook,… Hoặc
                            các ứng dụng di động lấy dữ liệu thông qua API.
                        </li>
                        <li>
                            <strong>API trên hệ điều hành</strong>: Linux hay Windows có rất nhiều API, các developer tạo ra các phần mềm ứng dụng có thể tương tác trực tiếp với hệ điều hành thông qua các tài liệu nhận được từ API đó là phương thức
                            kết nối hoặc đặc tả các hàm.&nbsp;
                        </li>
                        <li>
                            <strong>Framework API của thư viện phần mềm</strong>: Triển khai một API có nhiều cách triển khai khác nhau nó làm cho một chương trình viết bằng ngôn ngữ này nhưng lại có thể sử dụng thư viện được viết bằng ngôn ngữ
                            khác. Nó quy định và mô tả các hành động mong muốn mà các thư viện cung cấp. <strong>Ví dụ</strong> bạn có thể dùng <strong>Java</strong> để yêu cầu một thư viện tạo tài khoản người dùng được viết bằng
                            <strong>PHP</strong>.
                        </li>
                    </ul>
                    <br />
                    <br />
                    <h2 id="tong-ket-nhung-dieu-can-nen-biet-ve-api"><strong>✳️ Tổng kết những điều nên biết về API</strong></h2>
                    <p>Với những thông tin trên nếu bạn chưa hiểu về API thì hãy nắm nhanh 4 điều cơ bản chính dưới đây:</p>
                    <ul>
                        <li>Các nhà phát triển ứng dụng sẽ làm việc với API để tạo ra phần mềm hoặc ứng dụng là chủ yếu. Điều đó rất hiếm khi những end user tương tác trực tiếp đến API. (end user là người dùng bình thường)</li>
                        <li>API sẽ hoạt động như 1 chiếc cổng giúp các công ty chia sẻ thông tin cần thiết được chọn để public. Những thông tin chia sẻ này vẫn tránh được những yêu cầu không mong muốn khi gọi dùng cũng như giao tiếp sử dụng.</li>
                        <li>
                            API sẽ làm cuộc sống của bạn trở nên tốt hơn để trải nghiệm các tiện ích của nhu cầu đời sống, vì có nhiều nhà cung cấp công khai ai dùng cũng được (ví dụ Facebook, Shopee, Telegram,...). Từ đó sẽ giúp bạn tìm kiếm được
                            thông tin cần thiết, quan trọng đối với mình.
                        </li>
                        <li>Các doanh nghiệp là người xây dựng nên API. Ví dụ ứng dụng Zalo Pay, ví Momo là những nền tảng được xây dựng và dùng các API từ ngân hàng cung cấp. (vì thế mà nó cho phép liên kết tùm lum ngân hàng)</li>
                    </ul>
                    <br />
                    <h2 id="seo-faq-pairs#what-is-api-testing" class="lb-txt-bold lb-txt-none lb-txt-28 lb-h2 lb-title">✅ Kiểm thử API là gì?</h2>
                    <p class="lb-txt-14 lb-rtxt">
                        Kiểm thử API là quá trình trực tiếp kiểm tra các giao diện lập trình ứng dụng (APIs). Đây cũng là một phần của quá trình kiểm thử tích hợp để kiểm tra các yếu tố: Tính năng, độ tin cậy, hiệu suất và bảo mật của hệ thống, xem
                        hệ thống đã đáp ứng đủ yêu cầu chưa.<br />
                        <br />
                        Kiểm thử API sẽ được tiến hành ở tầng nghiệp vụ (business layer), bởi vì các API đều không có
                        <a href="https://vietnix.vn/gui-la-gi/" target="_blank" rel="noreferrer noopener" data-type="URL" data-id="https://vietnix.vn/gui-la-gi/">GUI</a>. Mọi dữ liệu đều sẽ được trao đổi từ&nbsp;
                        <a href="https://vietnix.vn/json-la-gi/" target="_blank" rel="noreferrer noopener" data-type="URL" data-id="https://vietnix.vn/json-la-gi/">JSON</a> hoặc XML qua những yêu cầu và phản hồi HTTP trong quá trình kiểm thử API.
                        Đây là các hệ thống công nghệ độc lập, làm việc với đa dạng các ngôn ngữ lập trình và công nghệ khác nhau.<br />
                        <br />
                        <strong>Thế thì ai là người kiểm thử API?</strong><br />
                        Là Tester chứ ai nữa, vì nó thuộc tầng nghiệp vụ mà, công ty nào tạo ra thì có đội ngũ nhân viên chuyên kiểm tra nó luôn (Software Tester)<br />
                        <br />
                        Các chiến lược kiểm thử API tương tự như những phương pháp kiểm thử phần mềm khác. Trọng tâm chính là xác thực phản hồi của máy chủ. Kiểm thử API bao gồm các việc chính sau:
                    </p>
                    <ul>
                        <li>Đưa ra nhiều yêu cầu cho điểm cuối API để kiểm thử hiệu năng. (ví dụ tăng lượng request)</li>
                        <li>Viết các bài kiểm thử đơn vị để kiểm tra logic kinh doanh và tính đúng đắn của chức năng.</li>
                        <li>Kiểm thử bảo mật bằng cách giả lập các cuộc tấn công hệ thống. (ví dụ SQL Injection)</li>
                        <li>Kiểm thử API là bạn sử dụng phần mềm trung gian khác để gọi tới API, nhận kết quả đầu ra và ghi lại phản hồi của hệ thống.</li>
                        <li>Kiểm thử API không tập trung vào giao diện mà chủ yếu tập trung vào lớp business logic của phần mềm.</li>
                    </ul>
                    <br />
                    <h2 id="seo-faq-pairs#what-is-api-testing" class="lb-txt-bold lb-txt-none lb-txt-28 lb-h2 lb-title">✅ Tại sao cần kiểm thử API?</h2>
                    <p>
                        Kiểm thử API rất quan trọng nhằm để đảm bảo tính ổn định và tương tác đúng đắn giữa các ứng dụng và dịch vụ. Nó giúp đảm bảo rằng API hoạt động một cách chính xác và đáng tin cậy, đảm bảo rằng các ứng dụng có thể tương tác
                        và sử dụng chức năng của API một cách đúng đắn.
                    </p>
                    <ul>
                        <li>
                            API không cần giao diện người dùng nên vẫn kiểm thử được ứng dụng sớm. Điều này giúp tester tìm thấy và fix sớm các vấn đề trong vòng đời phát triển, tiết kiệm được chi phí khắc phục nếu lỗi đó xảy ra trong quá trình
                            kiểm thử GUI.
                        </li>
                        <li>Tiết kiệm chi phí và xây dựng được chiến lược kiểm thử tự động hoàn hảo hơn (cả UI và API)</li>
                        <li>Bạn sẽ tạo ra được chiến lược tự động hóa tốt nếu như bạn hiểu được Kim tự tháp tự động hóa: Unit test&nbsp;-&gt; API testing trên service layer -&gt; kiểm thử UI.</li>
                        <li>
                            Hạn chế kiểm thử hồi quy bằng tay và phát triển phần mềm theo phương pháp Agile. Điều giúp duy trì tính nhanh chóng do sự cần thiết của các đội Agile. Tăng mức độ kiểm thử API và giảm sự phụ thuộc của họ vào kiểm tra
                            GUI.
                        </li>
                        <li>
                            Bằng cách tích hợp API Testing sẽ làm giảm áp lực của kiểm thử hồi quy của nhóm QA. Nhóm QA có thể phản hồi nhanh về chất lượng ứng dụng ngay khi dự án được triển khai (deploy), hệ thống được đánh giá một cách nhanh
                            chóng trước khi kiểm thử GUI. API testing yêu cầu code ít hơn, phạm vi kiểm thử rộng hơn và cung cấp kết quả nhanh hơn.
                        </li>
                    </ul>
                    <br />
                    <h2 id="2-Loi-ich-cua-Test-API">✅ Lợi ích của kiểm thử API</h2>
                    <p>Kiểm thử API mang lại nhiều lợi ích quan trọng cho quá trình phát triển phần mềm và triển khai ứng dụng. Dưới đây là một số lợi ích chính của việc kiểm thử API:</p>
                    <ul>
                        <li>
                            <strong>Đảm bảo tính đúng đắn</strong>: Kiểm thử API giúp đảm bảo rằng API hoạt động chính xác và đáp ứng các yêu cầu và ràng buộc. Nó đảm bảo rằng API trả về dữ liệu chính xác và thực hiện các chức năng như mong đợi.
                        </li>
                        <li><strong>Kiểm tra tính bảo mật</strong>: Kiểm thử API cho phép xác minh tính bảo mật của API. Nó giúp đảm bảo rằng API không có lỗ hổng bảo mật và không mở ra các lỗ hổng tiềm năng trong hệ thống.</li>
                        <li>
                            <strong>Đảm bảo tính ổn định</strong>: Kiểm thử API giúp xác định và giải quyết các lỗi và sự cố trong API. Nó giúp đảm bảo rằng API hoạt động ổn định và không gây ra các vấn đề không mong muốn trong ứng dụng sử dụng
                            API.
                        </li>
                        <li>
                            <strong>Tăng cường khả năng tái sử dụng</strong>: Kiểm thử API giúp xác định các lỗi và cải thiện tính đúng đắn của API. Điều này giúp tăng cường khả năng tái sử dụng của API, cho phép nhiều ứng dụng khác nhau sử dụng
                            API một cách tin cậy và hiệu quả.
                        </li>
                        <li>
                            <strong>Tăng độ tin cậy và chất lượng</strong>: Kiểm thử API giúp cải thiện độ tin cậy và chất lượng của ứng dụng. Điều này đồng nghĩa với việc cung cấp trải nghiệm tốt hơn cho người dùng và giảm thiểu các lỗi và sự cố
                            không mong muốn.
                        </li>
                        <li>
                            <strong>Giảm rủi ro và chi phí</strong>: Kiểm thử API sớm trong quá trình phát triển giúp phát hiện và khắc phục các vấn đề trước khi chúng trở thành các vấn đề lớn. Điều này giúp giảm rủi ro và chi phí phát sinh sau này
                            trong quá trình triển khai và vận hành ứng dụng.
                        </li>
                    </ul>
                    <p>
                        <br />
                        Nhờ kiểm tra tự động hóa API mà áp lực của quá trình kiểm thử hồi quy nhóm QA đã giảm đáng kể. Khi tích hợp kiểm tra thử tự động API, nhóm QA sẽ có thể trả về các phản hồi nhanh chóng hơn về chất lượng của ứng dụng, ngay sau
                        khi ứng dụng được triển khai. Từ đó, các đánh giá về hệ thống được đưa ra nhanh chóng.
                    </p>
                    <p>
                        Quá trình kiểm tra thử API có ưu điểm đó là yêu cầu code thấp hơn, đồng thời cũng có phạm vi kiểm tra tốt hơn và đưa ra kết quả nhanh hơn. Không giống như giao diện người dùng, API được ổn định rất sớm và sẽ không có sự thay
                        đổi thường xuyên. Hình thức API testing có giá trị lớn đối với các doanh nghiệp. Cho nên đối với hình thức này, phần mềm của bạn sẽ được kiểm tra kỹ lưỡng, đảm bảo có thể làm hài lòng đối tượng khách hàng mục tiêu của mình.
                    </p>
                    <p>&nbsp;</p>
                    <h2 id="4-Mot-so-phuong-phap-test-API-pho-bien">✅ Một số phương pháp kiểm thử API phổ biến</h2>
                    <p>Dưới đây là một số phương pháp kiểm thử API phổ biến:</p>
                    <ul>
                        <li>
                            <strong>Kiểm thử đơn vị (Unit Testing):</strong>&nbsp;Phương pháp này tập trung vào việc kiểm tra từng đơn vị code của API, như hàm, phương thức hay lớp. Điều này giúp đảm bảo tính đúng đắn và chức năng của từng phần của
                            API.
                        </li>
                        <li>
                            <strong>Kiểm thử chức năng (Functional Testing):</strong>&nbsp;Phương pháp này kiểm tra chức năng của API từng phần hoặc toàn bộ. Kiểm tra các kịch bản chức năng để đảm bảo rằng API hoạt động đúng và trả về kết quả mong
                            đợi.
                        </li>
                        <li>
                            <strong>Kiểm thử giao diện (Interface Testing):</strong>&nbsp;Kiểm tra giao diện API để đảm bảo rằng các yêu cầu và phản hồi được truyền đi và nhận về đúng cách. Điều này bao gồm kiểm tra cấu trúc, kiểu dữ liệu, tham số
                            và mã phản hồi của API.
                        </li>
                        <li>
                            <strong>Kiểm thử tải (Load Testing):</strong>&nbsp;Đánh giá hiệu suất và khả năng chịu tải của API trong điều kiện tải cao. Kiểm tra khả năng xử lý một lượng lớn yêu cầu và đảm bảo rằng API không gặp vấn đề hiệu suất.
                        </li>
                        <li>
                            <strong>Kiểm thử bảo mật (Security Testing):&nbsp;</strong>Kiểm tra tính bảo mật của API bằng cách xác định và khắc phục các lỗ hổng bảo mật. Điều này bao gồm xác thực, phân quyền, kiểm tra xác thực đầu vào, kiểm tra xác
                            thực và mã hóa dữ liệu.
                        </li>
                        <li><strong>Kiểm thử phi chức năng (Non-functional Testing):</strong>&nbsp;Kiểm tra các yếu tố phi chức năng của API như tương tác người dùng, độ tin cậy, khả năng mở rộng, khả năng khôi phục, và độ ổn định.</li>
                        <li><strong>Kiểm thử tích hợp (Integration Testing):&nbsp;</strong>Kiểm tra tích hợp của API với các dịch vụ hoặc hệ thống khác. Đảm bảo rằng API tương tác chính xác và thành công với các thành phần bên ngoài.</li>
                        <li><strong>Kiểm thử hồi quy (Regression Testing):</strong>&nbsp;Kiểm tra lại API sau khi có các thay đổi hoặc bổ sung mới để đảm bảo rằng những thay đổi không làm ảnh hưởng đến tính đúng đắn và chức năng của API.</li>
                    </ul>
                    <br />
                    <h2 id="4-Mot-so-phuong-phap-test-API-pho-bien">✅ Một số công cụ kiểm thử API phổ biến</h2>
                    <p>
                        <a href="/src/assets/images/image-api-testing/15_api_tools_2022.jpg" data-fancybox="images" data-width="1200"><img src="@/assets/images/image-api-testing/15_api_tools_2022.jpg" /></a><br />
                        Trong các công cụ trên thì <strong>Postman</strong> đang là nền tảng <strong>kiểm tra API manual</strong> tiện dụng và mạnh mẽ nhất. (nền tảng là vì nó nhiều thứ và có chứa cả công cụ)<br />
                        <br />
                        Còn về kiểm tra <strong>API auto</strong> thì có thể code tay rồi dùng thư viện hỗ trợ như
                        <a href="/course/api-automation-testing-with-rest-assured-using-java" target="_blank" rel="noopener"><strong>Java và Rest Assured</strong></a> hoặc dùng luôn tools tự động hoá như
                        <strong><a href="/course/website-testing-with-katalon-basic-to-advanced" target="_blank" rel="noopener">Katalon Studio</a>, <a href="/blog/akaat" target="_blank" rel="noopener">akaAT Studio</a></strong>.<br />
                        <br />
                        Xem thêm chi tiết các công cụ khác: <a href="/blog/15-cong-cu-kiem-tra-api-hang-dau-nam-2022-cap-nhat-moi-nhat-b442.html" target="_blank" rel="noopener">15 công cụ kiểm tra API hàng đầu năm 2022</a><br />
                        <br />
                        Và chúng ta sẽ dùng <strong>Postman</strong> trong khoá học này nhé !!
                    </p>
                </div>
            </div>
        </div>

        <div class="lecture-overview-item" v-if="false">
            <div class="lecture-heading" id="content">
                <h3 class="widget-title pb-2 text-uppercase" style="font-size: 20pt;">Nội dung bài học</h3>
                <div id="sheet">
                    ✅ REST API là gì?<br />
                    ✅ REST API hoạt động như thế nào?<br />
                    ✅ Yêu cầu từ client REST API chứa những gì?<br />
                    ✅ Phản hồi từ server REST API chứa những gì?<br />
                    ✅ CÁC LOẠI STATUS CODE
                    <hr />
                    <br />
                    <h2>✅ REST API là gì?</h2>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Representational_state_transfer?ref=200lab.io" target="_blank" rel="nofollow noopener noreferrer">REST API</a>&nbsp;(còn được biết với tên gọi&nbsp;<strong>RESTful API</strong>) là một
                        giao diện lập trình ứng dụng (API) tuân thủ các ràng buộc và quy ước kiến trúc&nbsp;<strong>REST</strong> được sử dụng trong việc giao tiếp giữa client và server.<br />
                        <br />
                        <strong>REST API</strong>&nbsp;là một giao diện mà hai hệ thống máy tính sử dụng để trao đổi thông tin một cách an toàn qua internet. Hầu hết các ứng dụng kinh doanh phải giao tiếp với các ứng dụng nội bộ và bên thứ ba khác
                        để thực hiện tác vụ.<br />
                        <br />
                        <strong>Ví dụ:</strong> để tạo bảng lương hàng tháng, hệ thống báo cáo kế toán nội bộ phải chia sẻ dữ liệu với hệ thống ngân hàng của khách hàng để lập hóa đơn tự động và giao tiếp với ứng dụng bảng chấm công nội bộ. Các API
                        RESTful hỗ trợ trao đổi thông tin này vì chúng tuân theo các tiêu chuẩn giao tiếp phần mềm bảo mật, đáng tin cậy và hiệu quả.<br />
                        <br />
                    </p>
                    <p>
                        <strong>REST</strong>&nbsp;(<strong>RE</strong>presentational&nbsp;<strong>S</strong>tate&nbsp;<strong>T</strong>ransfer) là một&nbsp;<em>đại diện cho sự chuyển đổi dữ liệu</em>. Trong kiến trúc
                        này&nbsp;<strong>client</strong>&nbsp;và&nbsp;<strong>server</strong>&nbsp;hoàn toàn độc lập, chúng không biết gì về nhau. Mỗi một request REST API đều không mang theo trạng thái trước đó (<strong>stateless</strong>).<br />
                        <br />
                        Như vậy để đôi bên trao đổi được thì chúng sẽ phải thông qua các <strong>resources</strong>. Các resource này chính là phần&nbsp;
                        <em>đại diện cho sự thay đổi dữ liệu. Có thể hiểu nôm na chính là các khai báo <strong>URL, Params, Header, Body</strong>,...và các phương thức cụ thể như <strong>GET, POST, PUT, DELETE</strong>.<br /></em>
                    </p>
                    <h3>
                        <strong>
                            <br />
                            🔆 Mô hình tổng quan cơ chế REST API:
                        </strong>
                    </h3>
                    <p>
                        <a href="/src/assets/images/image-api-testing/rest_api_model.jpg" data-fancybox="images" data-width="1200"><img src="@/assets/images/image-api-testing/rest_api_model.jpg" alt="" width="1920" height="848" /></a>
                    </p>
                    <p>&nbsp;</p>
                    <div class="lb-none-v-margin lb-grid lb-small-pad" data-eb-item-id="seo-faq-pairs#how-do-restful-apis-work">
                        <div class="lb-row lb-row-max-large lb-snap">
                            <div class="lb-col lb-tiny-24 lb-mid-24">
                                <h2 id="seo-faq-pairs#how-do-restful-apis-work" class="lb-txt-bold lb-txt-none lb-txt-28 lb-h2 lb-title">✅ REST API hoạt động như thế nào?</h2>
                                <div class="lb-txt-14 lb-rtxt">
                                    <p>
                                        Chức năng cơ bản của API RESTful cũng giống như việc duyệt Internet. Client liên hệ với máy chủ bằng cách sử dụng API khi yêu cầu tài nguyên. <br />
                                        <br />
                                        <em><strong>Đây là các bước chung cho bất kỳ lệnh gọi REST API:</strong></em>
                                    </p>
                                    <ol>
                                        <li>Client gửi một yêu cầu đến máy chủ. Client làm theo tài liệu API để định dạng yêu cầu theo cách mà máy chủ hiểu được.</li>
                                        <li>Máy chủ xác thực và xác nhận máy khách có quyền đưa ra yêu cầu đó.</li>
                                        <li>Máy chủ nhận yêu cầu và xử lý trong nội bộ.</li>
                                        <li>Máy chủ trả về một phản hồi đến client. Phản hồi chứa thông tin cho client biết liệu yêu cầu có thành công hay không. Phản hồi cũng bao gồm bất kỳ thông tin nào mà client yêu cầu.</li>
                                    </ol>
                                    <p>
                                        <br />
                                        Chi tiết về phản hồi và yêu cầu API REST sẽ khác nhau đôi chút tùy thuộc vào cách các nhà phát triển API thiết kế API.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>
                        <br />
                        ✅ Yêu cầu từ client REST API chứa những gì?
                    </h2>
                    <p>Các API RESTful đòi hỏi các yêu cầu phải chứa những thành phần chính sau:</p>
                    <h3>🔆 Mã định danh tài nguyên duy nhất</h3>
                    <p>
                        Máy chủ xác định từng tài nguyên bằng mã định danh tài nguyên duy nhất. Đối với các dịch vụ <strong>REST</strong>, máy chủ thường thực hiện việc xác định tài nguyên bằng cách sử dụng
                        <em><strong>Hệ thống định vị tài nguyên thống nhất</strong></em> (<strong>URL</strong>).<br />
                        <br />
                        <strong>URL</strong> chỉ định đường dẫn đến tài nguyên. URL tương tự như địa chỉ trang web mà bạn nhập vào trình duyệt của mình để truy cập vào bất kỳ trang web nào. URL còn được gọi là điểm cuối (
                        <em><strong>End Point</strong></em>) yêu cầu và chỉ định rõ cho máy chủ rằng client yêu cầu điều gì.<br />
                        <br />
                    </p>
                    <h3>🔆 Phương thức</h3>
                    <p>Các nhà phát triển thường triển khai các API RESTful bằng cách sử dụng Giao thức truyền siêu văn bản (HTTP). Phương thức HTTP cho máy chủ biết máy chủ cần làm gì với tài nguyên. Sau đây là 4 phương thức HTTP phổ biến:</p>
                    <p>
                        <em><strong>GET</strong></em>
                    </p>
                    <p>
                        Client sử dụng GET để truy cập các tài nguyên nằm tại URL được chỉ định trên máy chủ. Client có thể lưu vào bộ nhớ đệm các yêu cầu GET và gửi các tham số trong yêu cầu API RESTful để chỉ dẫn máy chủ lọc dữ liệu trước khi
                        gửi. Hiểu nôm na là lấy ra dữ liệu theo điều kiện được chỉ định.
                    </p>
                    <p>
                        <em><strong>POST</strong></em>
                    </p>
                    <p>
                        Client sử dụng POST để gửi dữ liệu đến máy chủ, hiểu nôm na là tạo dữ liệu mới. Client gửi kèm dạng biểu diễn dữ liệu với yêu cầu. Gửi cùng một yêu cầu POST nhiều lần có tác dụng phụ là tạo ra cùng một tài nguyên nhiều lần.
                    </p>
                    <p>
                        <em><strong>PUT</strong></em>
                    </p>
                    <p>Client sử dụng PUT để cập nhật các tài nguyên hiện có trên máy chủ. Không giống như POST, gửi cùng một yêu cầu PUT nhiều lần trong một dịch vụ web RESTful sẽ cho cùng một kết quả.</p>
                    <p>
                        <em><strong>DELETE</strong></em>
                    </p>
                    <p>
                        Client sử dụng yêu cầu DELETE để xóa tài nguyên. Yêu cầu DELETE có thể thay đổi trạng thái máy chủ. Tuy nhiên, nếu người dùng không vượt qua quy trình xác thực thích hợp, yêu cầu sẽ không thành công.<br />
                        <br />
                        Ngoài ra còn có phương thức <strong>PATCH</strong> cũng gần giống như <strong>PUT</strong>, dùng để <strong>cập nhật một phần giá trị</strong> thay vì cập nhật đầy đủ các thông số.
                    </p>
                    <h3>
                        <br />
                        🔆 Tiêu đề HTTP (gồm Params, Header và Body)
                    </h3>
                    <p>Tiêu đề yêu cầu là siêu dữ liệu được trao đổi giữa client và máy chủ. <strong>Ví dụ:</strong> tiêu đề yêu cầu cho biết định dạng của yêu cầu và phản hồi (), cung cấp thông tin về trạng thái yêu cầu, v.v.</p>
                    <p>
                        <em>
                            <strong>
                                <br />
                                + Dữ liệu (Body)
                            </strong>
                        </em>
                    </p>
                    <p>
                        Các yêu cầu API REST có thể bao gồm dữ liệu cho phương thức <strong>POST, PUT, PATCH</strong> và các phương thức HTTP khác để hoạt động thành công.<br />
                        <br />
                        Dữ liệu phổ biến là dạng JSON được truyền trong phần body.
                    </p>
                    <p>
                        <em>
                            <strong>
                                <br />
                                + Tham số (Params)
                            </strong>
                        </em>
                    </p>
                    <p>Các yêu cầu API RESTful có thể bao gồm các tham số cung cấp cho máy chủ thêm chi tiết về những gì cần phải thực hiện. Sau đây là một số loại tham số khác nhau:</p>
                    <ul>
                        <li>Tham số đường dẫn chỉ định chi tiết của URL.</li>
                        <li>Tham số truy vấn yêu cầu thêm thông tin về tài nguyên.</li>
                        <li>Tham số cookie xác thực client một cách nhanh chóng.</li>
                    </ul>
                    <p>
                        <strong>
                            <br />
                            + Header
                        </strong>
                        <br />
                        Ngoài ra phần Header còn giúp client chỉ định được <strong>loại content</strong> cần trả về từ server – <strong>content type</strong>. Việc này được thực hiện thông qua phần&nbsp;<strong>Accept</strong>&nbsp;trong header.
                        Giá trị của nó thường là <strong>MIME</strong> type:
                    </p>
                    <ul>
                        <li><strong>image</strong>&nbsp;— image/png, image/jpeg, image/gif</li>
                        <li><strong>audio</strong>&nbsp;— audio/wav, audio/mpeg</li>
                        <li><strong>video</strong>&nbsp;— video/mp4, video/ogg</li>
                        <li><strong>application</strong>&nbsp;— application/json, application/pdf, application/xml, application/octet-stream</li>
                    </ul>
                    <p>
                        <br />
                        <strong>Ví dụ request lấy danh sách bài viết:</strong>
                    </p>
                    <div class="code-toolbar">
                        <pre class="line-numbers language-markup" tabindex="0"><code class="language-markup">GET /v1/posts
Accept: application/json<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code></pre>
                    </div>
                    <h3><strong>&nbsp;</strong></h3>
                    <h3>🔆 <strong>Xác thực thông tin (Authentication)</strong></h3>
                    <p>
                        Hãy nhớ rằng REST API là stateless (không rõ ràng). Mỗi một request không hề biết bất kỳ thông tin gì trước đó. Khác với khi chúng ta truy cập web, trình duyệt sẽ có session và cookie để hỗ trợ phân biệt request đấy là của
                        ai, thông tin trước đó là gì.<br />
                        <br />
                        Trong REST, nếu một request cần xác thực quyền truy cập, chúng sẽ phải thêm thông tin xác thực kèm theo. <strong>Ví dụ</strong> như thông tin <strong>Authorization</strong> sẽ mang theo một <strong>user token</strong>.<br />
                        <br />
                        Hiện có 3 cơ chế <strong>Authentication</strong> chính:<br />
                        <br />
                    </p>
                    <ul>
                        <li>
                            <strong>HTTP Basic: </strong>HTTP Basic Authentication là&nbsp;kiểu xác thực cơ bản nhất của một WebServer Apache yêu cầu client nhập <em><strong>username và password</strong></em> mỗi khi request. Client gửi tên người
                            dùng và mật khẩu kiểu nối username và password theo dạng <strong>username:password</strong> trong tiêu đề khi yêu cầu.&nbsp;Client mã hóa những thông tin này bằng <em><strong>base64</strong></em>. Và có từ khoá
                            <strong>Basic</strong> phía trước đó.<br />
                            <em><strong>VD:</strong></em>
                            <em>
                                <strong>Authorization:</strong> <strong>Basic</strong> <strong>an9SkagyNATNyZXQ=</strong><br />
                                <br />
                            </em>
                        </li>
                        <li>
                            <strong>Bearer Token:</strong> thường được gọi là <strong>Token authentication</strong>. Đây&nbsp;là một hình thức xác thực HTTP liên quan đến token có tên là Bearer token. Như tên mô tả <strong>Bearer Token</strong> cấp
                            quyền truy cập cho người dùng khi có token hợp lệ. Kiểu này thường dùng.<br />
                            Bằng cách chúng ta sign in để nhận về một body chứa token, xong lấy token này gắn vào từng request để dùng sau đó.<br />
                            <br />
                        </li>
                        <li>
                            <strong>API Key:</strong> API Key là một tùy chọn khác để xác thực trong REST API. Với cách này, máy chủ chỉ định một giá trị được tạo duy nhất cho client lần đầu. Bất cứ khi nào client cố gắng truy cập tài nguyên,
                            client sẽ sử dụng API Key duy nhất này để xác minh chính mình. <em><strong>API Key kém an toàn hơn vì client phải truyền khóa</strong></em>, điều này khiến API Key dễ bị đánh cắp trên mạng. (dạng Key = Value)
                        </li>
                    </ul>
                    <p>
                        <br />
                        Ngoài ra còn các dạng khác như:
                    </p>
                    <ul>
                        <li>
                            <strong>OAuth2: </strong>OAuth 2 là một phiên bản tiếp theo của giao thức OAuth (Open Authorization), là một tiêu chuẩn được thiết kế để cho phép một trang web hoặc ứng dụng truy cập vào tài nguyên được lưu trữ bởi các
                            ứng dụng web khác thay mặt cho người dùng. (đăng nhập thông qua Google, Facebook, GitHub, Microsoft,...)
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>JSON Web Token (JWT): </strong>là một tiêu chuẩn mã nguồn mở (<a href="https://datatracker.ietf.org/doc/html/rfc7519" target="_blank" rel="noopener">RFC 7519</a>) dùng để truyền tải thông tin an toàn, gọn nhẹ và
                            khép kín giữa các bên tham gia dưới format JSON.
                            <p>
                                Thông tin được chia sẻ trong&nbsp;<em>JWT</em>&nbsp;được xác thực và tin cậy thông qua chữ ký số (<em>Digital signature</em>). Các bên sẽ sử dụng&nbsp;<em>mật mã khoá đối xứng</em>&nbsp;(cùng với&nbsp;<em>HMAC</em>)
                                hoặc dùng<em>&nbsp;mật mã khoá công khai</em>&nbsp;(cùng&nbsp;<em>public</em>&nbsp;và&nbsp;<em>private key</em>) để thực hiện ký số (<em>signed</em>).
                            </p>
                        </li>
                    </ul>
                    <p>&nbsp;</p>
                    <h2 id="seo-faq-pairs#what-restful-api-server-contain" class="lb-txt-bold lb-txt-none lb-txt-28 lb-h2 lb-title">✅ Phản hồi từ server REST API chứa những gì?</h2>
                    <p>
                        Trước tiên chúng ta sẽ tìm hiểu một chút về <strong>HTTP Response</strong>. Khi nhận và phiên dịch một <strong>HTTP Request</strong>, <strong>Server</strong> sẽ gửi tín hiệu phản hồi là một HTTP Response bao gồm các thành
                        phần sau:
                    </p>
                    <ul>
                        <li>Một dòng trạng thái (<strong>Status-Line</strong>)</li>
                        <li>Không hoặc nhiều hơn các trường Header (General|Response|Entity) được theo sau CRLF</li>
                        <li>Một phần thân thông báo tùy ý</li>
                    </ul>
                    <p>
                        <br />
                        <strong>
                            Dưới đây là một số ví dụ về một HTTP Response<br />
                            <br />
                            🔆 Trên trình duyệt web<br />
                            <br />
                            <a href="/src/assets/images/image-api-testing/vi_du_status_code_200.jpg" data-fancybox="images" data-width="1200">
                                <img src="@/assets/images/image-api-testing/vi_du_status_code_200.jpg" alt="" width="716" height="637" />
                            </a>
                            <br />
                            <a href="/src/assets/images/image-api-testing/vi_du_status_code_404.jpg" data-fancybox="images" data-width="1200">
                                <img src="@/assets/images/image-api-testing/vi_du_status_code_404.jpg" alt="" width="704" height="546" />
                            </a>
                            <br />
                            <a href="/src/assets/images/image-api-testing/vi_du_status_code_302.jpg" data-fancybox="images" data-width="1200">
                                <img src="@/assets/images/image-api-testing/vi_du_status_code_302.jpg" alt="" width="1860" height="668" />
                            </a>
                            <br />
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <br />
                            🔆 Trên Postman<br />
                            <br />
                        </strong>
                        <a href="/src/assets/images/image-api-testing/vi_du_status_code_200_tren_postman.jpg" data-fancybox="images" data-width="1200">
                            <img src="@/assets/images/image-api-testing/vi_du_status_code_200_tren_postman.jpg" alt="" width="1161" height="479" />
                        </a>
                        <br />
                        <br />
                        Bây giờ chúng ta sẽ tập trung chính vào dòng <strong>Status-Line</strong>: Một dòng Status Line bao gồm phiên bản giao thức (HTTP-Version) sau đó là mã hóa trạng thái số (Status-Code) và cụm từ thuần văn bản được liên kết
                        của nó. Các thành phần được phân biệt bởi dấu cách:<br />
                        <br />
                    </p>
                    <div class="code-toolbar">
                        <pre
                            class="line-numbers language-markup"
                            tabindex="0"
                        ><code class="language-markup">Status-Line = HTTP-Version <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Space</span><span class="token punctuation">&gt;</span></span> Status-Code <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Space</span><span class="token punctuation">&gt;</span></span> Reason-Phrase CRLF
Ví dụ : HTTP/1.1 404 Not Found

HTTP-Version: HTTP/1.1
Status-Code: 404
Reason-Phrase: Not Found<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>
                    </div>
                    <p>
                        <br />
                        <strong>🔆 Cấu trúc của Response trả về với Body dạng JSON như sau:</strong><br />
                        <br />
                        <a href="/src/assets/images/image-api-testing/cau_truc_status_code_2.png" data-fancybox="images" data-width="1200">
                            <img src="@/assets/images/image-api-testing/cau_truc_status_code_2.png" alt="" width="826" height="481" />
                        </a>
                        <br />
                        <br />
                        <strong>
                            🔆 Cấu trúc của Response trả về với Body dạng HTML/XML như sau:<br />
                            <br />
                        </strong>
                        <a href="/src/assets/images/image-api-testing/cau_truc_status_code_1_html.png" data-fancybox="images" data-width="1200">
                            <img src="@/assets/images/image-api-testing/cau_truc_status_code_1_html.png" alt="" width="647" height="318" />
                        </a>
                    </p>
                    <p>
                        <strong>
                            <br />
                            Status code
                        </strong>
                        (Mã hóa trạng thái thường được gọi là mã trạng thái) <strong>là một số nguyên 3 ký tự</strong>, trong đó ký tự đầu tiên của Status-Code định nghĩa loại Response và hai ký tự cuối không có bất cứ vai trò phân loại nào. Có 5
                        loại giá trị của ký tự đầu tiên:
                    </p>
                    <ul>
                        <li>1xx: Information (Thông tin): Khi nhận được những mã như vậy tức là request đã được server tiếp nhận và quá trình xử lý request đang được tiếp tục.</li>
                        <li>2xx: Success (Thành công): Khi nhận được những mã như vậy tức là request đã được server tiếp nhận, hiểu và xử lý thành công</li>
                        <li>3xx: Redirection (Chuyển hướng): Mã trạng thái này cho biết client cần có thêm action để hoàn thành request</li>
                        <li>4xx: Client Error (Lỗi Client): Nó nghĩa là request chứa cú pháp không chính xác hoặc không được thực hiện.</li>
                        <li>5xx: Server Error (Lỗi Server): Nó nghĩa là Server thất bại với việc thực hiện một request nhìn như có vẻ khả thi.</li>
                    </ul>
                    <h2>
                        <br />
                        ✅ DANH SÁCH CÁC LOẠI STATUS CODE<br />
                        <br />
                    </h2>
                    <h3>I. 1xx Infomation (Thông tin)</h3>
                    <ul>
                        <li>100 Continue: Chỉ một phần của Request được nhận bởi Server (có thể là header và Client cần gửi tiếp body), nhưng miễn là nó không bị loại bỏ, Client nên tiếp tục với Request.</li>
                        <li>101 Switching Protocols: Requester đã hỏi Server về việc thanh đổi Protocol và Server đã chấp nhận điều đó</li>
                    </ul>
                    <h3>
                        <br />
                        II. 2xx Success (Thành công)
                    </h3>
                    <ul>
                        <li>
                            200 OK: Request đã được tiếp nhận và xử lý thành công. Các Response thực tế trả về sẽ phụ thuộc vào phương thức HTTP của Request. Trong một GET Request, Response sẽ chứa một thực thể tương ứng với các tài nguyên yêu cầu,
                            trong một POST Request, Response sẽ chứa một thực thể mô tả hoặc chứa các kết quả của các action.
                        </li>
                        <li>201 Created: Request đã được xử lý, kết quả của việc xử lý tạo ra một resource mới.</li>
                        <li>202 Accepted: Request được chấp nhận cho xử lý, nhưng việc xử lý chưa hoàn thành.</li>
                        <li>
                            203 Non-authoritative Information (Xuất hiện từ HTTP/1.1): Server là nơi chuyển đổi proxy (ví dụ một Web accelerator) đã nhận được 200 OK nhưng nó trả về một phiên bản thay đổi (có thể là header) của Response nguyên gốc.
                        </li>
                        <li>204 No Content: Server đã xử lý thành công request nhưng không trả về bất cứ content nào.</li>
                        <li>205 Reset Content: Server đã xử lý thành công request nhưng không trả về bất cứ content nào. Không giống với 204 No Content Response này yêu cầu phía Client phải thiết lập lại document view.</li>
                        <li>
                            206 Partial Content: Server chỉ trả về một phần của resouce(dạng byte) do một range header được gửi bởi phía Client. Các Range Header được sửa dụng bởi Client để cho phép nối lại các phần của file download bị dán đoạn
                            hoặc chia thành nhiều luồng download.
                        </li>
                    </ul>
                    <h3>
                        <br />
                        III. 3xx Redirection (Sự chuyển hướng lại)
                    </h3>
                    <ul>
                        <li>300 Multiple Choices: Một danh sách các link. Người sử dụng có thể chọn một link và tới vị trí đó. Tối đa 5 địa chỉ. Ví dụ: List các file video với format khác nhau</li>
                        <li>301 Moved Permanently: Request hiện tại và các request sau được yêu cầu di chuyển tới một URI mới.</li>
                        <li>
                            302 Found: Đây là một ví dụ cho thấy sự mâu thuẫn giữa thực tiễn và quy chuẩn. Ở phiên bản HTTP/1.0 nó có nghĩa là yêu cầu Client chuyển hướng đến một URL tạm thời (tương tự như là 301 Moved Permanently) nhưng phần lớn
                            các browser lại thực hiện nó với ý nghĩa của 303 See Other(sẽ nói sau đây). Do đó từ phiên bản HTTP/1.1 có thêm hai mã 303 và 307 để phân biệt rõ hành vi, nhưng một số ứng dụng web và framework vẫn sử dụng 302 như thể là
                            303.
                        </li>
                        <li>303 See Other (Xuất hiện từ HTTP/1.1): Response trả về của Request có thể tìm thấy ở một URL khác bằng cách sử dụng phương thức GET.</li>
                        <li>304 Not Modified: Đây là Status-Code tới một If-Modified-Since hoặc If-None-Match header, nơi mà URL không được chỉnh sửa từ ngày cụ thể.</li>
                        <li>
                            305 Use Proxy: Tài nguyên yêu cầu chỉ có sẵn thông qua một proxy, địa chỉ mà được cung cấp trong các Response. Nhiều HTTP Client (như Mozilla và Internet Explorer) không xử lý một cách chính xác phản ứng với mã trạng
                            thái này, chủ yếu là vì các lý do an ninh.
                        </li>
                        <li>306 Switch Proxy: Mã này hiện không còn được sử dụng, ý nghĩa ban đầu của nó là "Các Request tiếp theo nên sử dụng các proxy được chỉ định".</li>
                        <li>307 Temporary Redirect (xuất hiện từ HTTP/1.1): Trong trường hợp này, Request hiện tại cần được lặp lại một URI khác nhưng các Request trong tương lai vẫn sử dụng URI gốc.</li>
                    </ul>
                    <h3>
                        <br />
                        IV. 4xx: Client Error (Lỗi Client)
                    </h3>
                    <ul>
                        <li>400 Bad Request: Server không thể xử lý hoặc sẽ không xử lý các Request lỗi của phía client (ví dụ Request có cú pháp sai hoặc Request lừa đảo định tuyến ...)</li>
                        <li>
                            401 Unauthorized: Tương tự như 403 Forbidden nhưng được sử dụng khi yêu cầu xác thực là bắt buộc và đã không thành công. Các Response bắt buộc phải có thành phần WWW-Authenticate chứa các thách thức với tài nguyên được
                            yêu cầu. Một số trang web vấn đề HTTP 401 khi một địa chỉ IP bị cấm từ các trang web (thường là các tên miền trang web) và địa chỉ cụ thể là từ chối quyền truy cập một trang web.
                        </li>
                        <li>
                            402 Payment Required: Hiện tại mã này chưa được sử dụng và nó được dự trữ cho tương lai. Mục đích ban đầu là mã này có thể được sử dụng như là một phần của đề án tiền mặt hoặc micropayment kỹ thuật số, nhưng điều đó đã
                            không xảy ra, và mã này thường không được sử dụng. Google API sử dụng Status-Code này nếu một nhà phát triển đặc biệt đã vượt quá giới hạn số lần yêu cầu.
                        </li>
                        <li>403 Forbidden: Request là hợp lệ nhưng server từ chối đáp ứng nó. Nó có nghĩa là trái phép, người dùng không có quyền cần thiết để tiếp cận với các tài nguyên.</li>
                        <li>404 Not Found: Các tài nguyên hiện tại không được tìm thấy nhưng có thể có trong tương lai. Các request tiếp theo của Client được chấp nhận.</li>
                        <li>405 Method Not Allowed: Request method không được hỗ trợ cho các tài nguyên được yêu cầu. Ví dụ Một GET request đến một POST resource, PUT Request gọi đến một tài nguyên chỉ đọc.</li>
                        <li>406 Not Acceptable: Server chỉ có thể tạo một Response mà không được chấp nhận bởi Client.</li>
                        <li>407 Proxy Authentication Required: Bạn phải xác nhận với một Server ủy quền trước khi Request này được phục vụ.</li>
                        <li>408 Request Timeout: Request tốn thời gian dài hơn thời gian Server được chuẩn bị để đợi.</li>
                        <li>409 Conflict: Request không thể được hoàn thành bởi vì sự xung đột, ví dụ như là xung đột giữa nhiều chỉnh sửa đồng thời.</li>
                        <li>410 Gone: Các resource được yêu cầu không còn nữa và sẽ không có sẵn một lần nữa, khi gặp mã lỗi này Client không nên có gắng tìm kiếm các tài nguyên này ở những lần sau.</li>
                        <li>411 Length Required: Content-Length không được xác định rõ. Server sẽ không chấp nhận Request nào không có nó.</li>
                        <li>412 Precondition Failed: Server sẽ không đáp ứng một trong những điều kiện tiên quyết của Client trong Request.</li>
                        <li>413 Payload Too Large: Server sẽ không chấp nhận yêu cầu, bởi vì đối tượng yêu cầu là quá rộng. Trước đây nó gọi là "Request Entity Too Large".</li>
                        <li>
                            414 URI Too Long: URI được cung cấp là quá dài để Server xử lý, thường là kết quả của quá nhiều dữ liệu được mã hóa như là một truy vấn chuỗi của một GET Request, trong trường hợp đó nó phải được chuyển đổi sang một POST
                            Request. Trước đây được gọi là "Request-URI Too Long"
                        </li>
                        <li>415 Unsupported Media Type: Server sẽ không chấp nhận Request, bởi vì kiểu phương tiện không được hỗ trợ. Ví dụ khi Client upload một ảnh có định dạng image/svg+xml, nhưng server yêu cầu một định dạng khác.</li>
                        <li>416 Range Not Satisfiable: Client yêu cầu một phần của tập tin nhưng server không thể cung cấp nó. Trước đây được gọi là "Requested Range Not Satisfiable"</li>
                        <li>417 Expectation Failed: Máy chủ không thể đáp ứng các yêu cầu của trường Expect trong header.</li>
                    </ul>
                    <h3>
                        <br />
                        V. 5xx: Server Error (Lỗi Server)
                    </h3>
                    <ul>
                        <li>500 Internal Server Error: Một thông báo chung chung, được đưa ra khi Server gặp phải một trường hợp bất ngờ, Message cụ thể là không phù hợp.</li>
                        <li>501 Not Implemented: Server không công nhận các Request method hoặc không có khả năng xử lý nó.</li>
                        <li>502 Bad Gateway: Server đã hoạt động như một gateway hoặc proxy và nhận được một Response không hợp lệ từ máy chủ nguồn.</li>
                        <li>503 Service Unavailable: Server hiện tại không có sẵn (Quá tải hoặc được down để bảo trì). Nói chung đây chỉ là trạng thái tạm thời.</li>
                        <li>504 Gateway Timeout: Server đã hoạt động như một gateway hoặc proxy và không nhận được một Response từ máy chủ nguồn.</li>
                        <li>505 HTTP Version Not Supported: Server không hỗ trợ phiên bản “giao thức HTTP”.</li>
                    </ul>
                    <br />
                    <h3><strong>✳️ Một số status phổ biến thường dùng:</strong></h3>
                    <ul>
                        <li><strong>200 OK</strong>&nbsp;– Trả về thành công cho những phương thức GET, PUT, PATCH hoặc DELETE.</li>
                        <li><strong>201 Created</strong>&nbsp;– Trả về khi một Resouce vừa được tạo thành công.</li>
                        <li><strong>204 No Content</strong>&nbsp;– Trả về khi Resource xoá thành công.</li>
                        <li><strong>304 Not Modified</strong>&nbsp;– Client có thể sử dụng dữ liệu cache, resource server không đổi gì.</li>
                        <li><strong>400 Bad Request</strong>&nbsp;– Request không hợp lệ</li>
                        <li><strong>401 Unauthorized</strong>&nbsp;– Request cần có xác thực.</li>
                        <li><strong>403 Forbidden</strong>&nbsp;– bị từ chối không cho phép.</li>
                        <li><strong>404 Not Found</strong>&nbsp;– Không tìm thấy resource từ URI</li>
                        <li><strong>405 Method Not Allowed</strong>&nbsp;– Phương thức không cho phép với user hiện tại.</li>
                        <li><strong>410 Gone</strong>&nbsp;– Resource không còn tồn tại, Version cũ đã không còn hỗ trợ.</li>
                        <li><strong>415 Unsupported Media Type</strong>&nbsp;– Không hỗ trợ kiểu Resource này.</li>
                        <li><strong>422 Unprocessable Entity</strong>&nbsp;– Dữ liệu không được xác thực</li>
                        <li><strong>429 Too Many Requests</strong>&nbsp;– Request bị từ chối do bị giới hạn</li>
                    </ul>
                    <br />
                    <br />
                    <strong>Các bạn có thể xem thêm tại đây:</strong><br />
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Web/HTTP/Status</a>
                </div>
            </div>
        </div>

        <div class="lecture-overview-item" v-if="false">
            <div class="lecture-heading" id="content">
                <h3 class="widget-title pb-2 text-uppercase" style="font-size: 20pt;">Nội dung bài học</h3>
                <div id="sheet">
                    ✅ Postman là gì?<br />
                    ✅ Tại sao dùng Postman<br />
                    ✅ Các tính năng chính trong Postman<br />
                    ✅ Cài đặt Postman để kiểm thử API
                    <hr />
                    <br />
                    <h2 id="_postman-la-gi-0">✅ Postman là gì?</h2>
                    <p>
                        <strong>Postman </strong>là một nền tảng API để xây dựng và sử dụng API. Postman giúp đơn giản hóa từng bước trong vòng đời API và hợp lý hóa hoạt động cộng tác để bạn có thể tạo các API tốt hơn—nhanh hơn.
                        <strong>
                            <em>
                                <br />
                                <br />
                            </em>
                        </strong>
                        <em>
                            <strong>Nguyên văn của nó tự nói luôn nè:</strong> Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better
                            APIs—faster.<br />
                            (<a href="https://www.postman.com/" target="_blank" rel="noopener">https://www.postman.com/</a>)
                        </em>
                        <strong>
                            <br />
                            <br />
                            Postman
                        </strong>
                        trước đây là một trong những <strong>công cụ</strong> được sử dụng để kiểm thử API thủ công. Nó bắt đầu vào năm <strong>2012</strong> như một dự án phụ của <strong>Abhinav Asthana</strong> để đơn giản hóa quy trình làm
                        việc API trong kiểm thử và phát triển. Nhưng hiện tại ai dùng từ <strong>Postman là công cụ</strong> là chưa đúng lắm nhe, phải gọi chính xác là nền tảng, vì không chỉ có một công cụ hay một cái tools đâu 😁 (thì cái
                        thằng owner nó nói vậy mà)<br />
                        <br />
                        Yeah nhưng sau này gọi nhanh là <strong>"Postman"</strong> đi cho tiện nhe, khỏi công cụ hay nền tảng gì hết mệt quá =))<br />
                        <br />
                        Nếu <strong>API</strong> chịu trách nhiệm tạo ra các kết nối giữa những ứng dụng khác nhau, thì Postman sẽ chịu trách nhiệm giúp cho thao tác của người dùng với API trở nên dễ dàng hơn. Thông thường, Postman sẽ được dùng
                        cho API kiểu REST. Postman có thể dễ dàng gọi REST mà không cần tạo code như cách truyền thống.<br />
                        <br />
                        Postman còn chịu trách nhiệm cho rất nhiều thao tác phát triển phần mềm như test, chạy thử, rà lỗi, cung cấp các đoạn code tự động cần thiết… Nhìn chung, lợi ích mà Postman mang lại là rất nhiều.<br />
                        <br />
                        Đặc biệt <strong>Postman</strong> tương thích với hầu hết các giao thức HTTP, bao gồm: GET, POST, PUT, PATCH và DELETE… Cấu tạo của Postman hướng đến sự linh động. Postman có sẵn nhiều phiên bản cho các hệ điều hành và
                        môi trường khác nhau. Đó cùng là điểm khiến nó trở nên phổ biến hơn.<br />
                        <br />
                        Có bản miễn phí và trả phí, chúng ta dùng bản miễn phí cũng ok rồi 😁<br />
                        <br />
                    </p>
                    <h2 id="_tai-sao-lai-su-dung-postman-1">✅ Tại sao lại sử dụng Postman?</h2>
                    <p>
                        Hiện nay năm 2023 thì Postman có khoảng <strong>25 triệu người dùng</strong> (vào trang chủ thấy liền ý mà) và đã trở thành một trong những công cụ hàng đầu được lựa chọn vì những lý do sau:<br />
                        <br />
                    </p>
                    <ul>
                        <li><strong>Khả năng truy cập</strong> - Để sử dụng Postman, người ta chỉ cần đăng nhập vào tài khoản của chính họ để dễ dàng truy cập các tệp mọi lúc, ngay cả trên môi trường web và ứng dụng trên máy tính.</li>
                        <li><strong>Đa dạng loại test</strong>: Postman hỗ trợ nhiều loại test như integration tests, regression tests, functional tests, mock tests, end-to-end tests.</li>
                        <li>Ứng dụng đa nền tảng: Postman online để có thể dùng trên bất cứ trình duyệt nào và cả ứng dụng cài đặt trên máy cho Windows, MacOS, Linux.</li>
                        <li>
                            <strong>Báo cáo</strong>: Postman tích hợp sẵn các loại báo cáo về các API đang sử dụng như: Thống kê số lượng API, số lượng workspace, đo lường thời gian cũng như tần suất xử dụng các API theo thời gian, tổng hợp
                            thông tin về thời gian phản hồi và kích thước các response, số lượng test thành công, thất bại theo thời gian ...
                        </li>
                        <li>
                            <strong>Phù hợp với tester ở mọi level</strong>: Người mới trong API testing có thể sử dụng cấu hình trực quan của Postman để sử dụng và test, với những người đã có kinh nghiệm thì có thể sử dụng script test để làm
                            việc. Chúng ta có thể dùng Newman để &nbsp;tự tích hợp với CI/CD pipeline của mình.
                        </li>
                        <li>
                            <strong>Test tự động và tích hợp liên tục (CI)</strong>: Postman cung cấp công cụ cho phép chúng ta viết các script test và thực thi chúng một cách tự động theo thời gian đặt trước, hoặc có thể tích hợp những script
                            test đó vào trong CI/CD pipeline.
                        </li>
                    </ul>
                    <h3>
                        <br />
                        <em>Nhược điểm của Postman</em>
                    </h3>
                    <p>
                        Cũng giống như các ứng dụng công nghệ khác, Postman có những nhược điểm riêng. <strong><em>Hạn chế của Postman là không phải cái gì cũng miễn phí</em></strong>. Rất nhiều tính năng quan trọng bị giới hạn và bạn chỉ có
                        thể sử dụng khi mua các gói trả phí. Tuy nhiên đây cũng không phải là hạn chế quá lớn. Thường các gói này không quá đắt. Hơn nữa, một dự án phát triển phần mềm sẽ không thiếu chút chi phí này để tối ưu hóa quá trình xây
                        dựng.
                    </p>
                    <br />
                    <h2 id="chuc-nang-chinh-cua-postman-la-gi">✅ Chức năng chính của Postman</h2>
                    <ul>
                        <li>
                            <strong>API repository:</strong>&nbsp;Là nơi chứa tập trung thông tin về các API. Qua đó, chúng ta có thể phân loại, viết đặc tả, viết tài liệu hướng dẫn sử dụng, tạo ra các luồng thực thi, viết test case, test
                            result... và cộng tác với những đồng nghiệp khác trên một nền tảng duy nhất.
                        </li>
                        <li>
                            <strong>API tools:</strong>&nbsp;Là tập hợp các công cụ khác nhau cho phép cả nhóm làm việc trên toàn bộ vòng đời của API từ bước thiết kế, kiểm thử, viết tài liệu hướng dẫn sử dụng, giả lập dữ liệu, chia sẻ, và khám
                            phá các API trong API repository.
                        </li>
                        <li>
                            <strong>API collaboration:</strong>&nbsp;Với Postman, chúng ta có thể tạo ra các workspace khác nhau và phân quyền cho những workspace đó cho những đối tượng sử dụng khác nhau như: chỉ cá nhân, chỉ trong nhóm, chỉ
                            cho đối tác hay cho toàn bộ thế giới truy cập vào API của chúng ta.
                        </li>
                        <li>
                            <strong>API governance:</strong>&nbsp;Là tập các tính năng giúp chúng ta quản lý các API của mình dựa trên việc thiết lập các quy tắc cần tuân theo khi tạo và chạy API. Và dựa trên các báo cáo được tính hợp, chúng ta
                            nhanh chóng biết được những API nào chưa được test, hay chưa được viết tài liệu...
                        </li>
                        <li><strong>API Integrations:</strong> Postman được tích hợp với đa số các hệ thống mà chúng ta sử dụng hàng ngày trong quá trình phát triển phần mềm như: CircleCI, GitLab, Jenkins...</li>
                    </ul>
                    <strong>
                        <br />
                        🔆 Các chức năng thể hiện chi tiết hơn như:
                    </strong>
                    <br />
                    <ul>
                        <li aria-level="1">Cho phép gửi HTTP Request với các method GET, POST, PUT, PATCH và DELETE. (ngoài ra còn HEAD và OPTIONS)</li>
                        <li aria-level="1">Người dùng có thể post dữ liệu dưới dạng text, form, json…</li>
                        <li aria-level="1">Kết quả hiện thị và trả về có thể dưới dạng JSON, HTML, XML, Text, và chế độ Auto</li>
                        <li aria-level="1">Có thể hỗ trợ xác thực Authorization với nhiều loại và truyền Params vô tư thoả thích</li>
                        <li aria-level="1">Có thể thực hiện thay đổi Header của các request dễ dàng</li>
                        <li aria-level="1">Có thể viết Test Script để xác thực kết quả sau khi send request (code Javascript nhưng cũng dễ thôi)</li>
                        <li aria-level="1">Cái hay là có thể chạy toàn bộ test cases thông qua Collections và có thể thực thi tự động chúng.</li>
                        <li aria-level="1">Có thể thiết lập Environment riêng để chạy với từng bộ data</li>
                        <li aria-level="1">Có thể chia sẻ các Collections (bộ test cases) cho người khác qua mail dễ dàng và export chúng ra file</li>
                        <li aria-level="1">Cùng hợp tác làm việc trên nhiều bộ Collections (cùng viết test cases API chung realtime) và chia ra dạng Workspace để rõ ràng hơn cho từng dự án và teams.</li>
                        <li>Cái mới năm 2023 là có tính năng <strong>Postbot</strong> để đặt câu hỏi tự động generate các tính năng liên quan đến test cases</li>
                    </ul>
                    <br />
                    <h2>✅ Cài đặt Postman</h2>
                    <p>
                        Trước tiên các bạn cần tạo tại khoản người dùng miễn phí tại đây <a href="https://www.postman.com/">https://www.postman.com/</a> xong nhấn <strong>Sign In</strong> hoặc <strong>Sign Up for Free</strong>. Góp ý là nhấn
                        Sign in với tài khoản <strong>Gmail</strong> luôn cho tiện khi học.<br />
                        <br />
                        <a href="/src/assets/images/image-api-testing/postman_home_page.jpg" data-fancybox="images" data-width="1200"><img src="@/assets/images/image-api-testing/postman_home_page.jpg" alt="" width="2562" height="1382" /></a>
                        <br />
                        <br />
                        Sau đó các bạn truy cập vào link này <a href="https://www.postman.com/downloads/">https://www.postman.com/downloads/</a> là thấy nút <strong>Download</strong> to đùng rồi, click tải về cài trên máy tính thôi. <br />
                        <br />
                        Mặc định nó phát hiện được nền tảng máy tính An đang dùng là Window nên click tải về bản Windows 64-bit luôn. Còn bạn nào dùng Macbook thì nó hiện cho tải theo macbook nhen.<br />
                        <br />
                        <a href="/src/assets/images/image-api-testing/download_postman.jpg" data-fancybox="images" data-width="1200"><img src="@/assets/images/image-api-testing/download_postman.jpg" alt="" width="2562" height="1382" /></a>
                        <br />
                        <br />
                        <br />
                        Hoặc dùng trực tiếp trên web được luôn nhen. Uây quá ngon và tiện khi ngay trên website vẫn thao tác kiểm thử API được.<br />
                        <br />
                        <a href="/src/assets/images/image-api-testing/giao_dien_postman_web.jpg" data-fancybox="images" data-width="1200">
                            <img src="@/assets/images/image-api-testing/giao_dien_postman_web.jpg" alt="" width="2561" height="1327" />
                        </a>
                        <br />
                        <br />
                        Mà An thì hay tải về máy dùng nó nhanh hơn chút và chắc là ổn định hơn bản web 😄<br />
                        <br />
                        À các bước cài đặt Postman vào máy tính thì rất dễ dàng chỉ cần bạn nhấn Accept cho tất cả các bước theo gợi ý rồi <strong>Login tài khoản đã tạo</strong> bên trên là xong Finish luôn.<br />
                        <br />
                        <a href="/src/assets/images/image-api-testing/giao_dien_postman_tools.jpg" data-fancybox="images" data-width="1200">
                            <img src="@/assets/images/image-api-testing/giao_dien_postman_tools.jpg" alt="" width="2562" height="1442" />
                        </a>
                        <br />
                        <br />
                    </p>
                    <h2>✅ Lưu ý nền tảng Postman trên web và tool</h2>
                    <p>
                        Các bạn lưu ý là Postman lúc bấy giờ là nền tảng, nên nó có thể sync data và thông tin tài khoản với nhau giữa web và tool cài vào máy. Nên chúng ta làm việc song song trên cả 2 môi trường đều được sync ngay lập tức.
                        <br />
                        <br />
                        Và điểm cần lưu ý nữa là những thiết lập nâng cao về tài khoản thì cần thao tác trên web thay vì trên tool.
                    </p>
                </div>
            </div>
        </div>

        <div class="lecture-overview-item" v-if="false">
            <div class="lecture-heading" id="content">
                <h3 class="widget-title pb-2 text-uppercase" style="font-size: 20pt;">Nội dung bài học</h3>
                <div id="sheet">
                    ✅ HTTP Method<br />
                    ✅ Thực hành test với dự án<br />
                    ✅ Phân tích yêu cầu dựa vào mô tả và phân tích các trường hợp kiểm thử dựa vào body của request<br />
                    ✅ Thực hành test case cho API
                    <hr />
                    <br />
                    <h2>✅ Tài liệu</h2>
                    <p>
                        <a href="https://drive.google.com/drive/folders/1PJ2AMw-zlx_VCyv2RN_76JrR_CQ2Dceh?usp=sharing" target="_blank" rel="noopener">https://drive.google.com/drive/folders/1PJ2AMw-zlx_VCyv2RN_76JrR_CQ2Dceh?usp=sharing</a><br />
                        <br />
                    </p>
                    <h2>✅ Giao diện tổng quan của Postman</h2>
                    <p>&nbsp;</p>
                    <p>
                        <a href="/src/assets/images/image-api-testing/giao_dien_tong_the_postman.jpg" data-fancybox="images" data-width="1200">
                            <img src="@/assets/images/image-api-testing/giao_dien_tong_the_postman.jpg" alt="" width="2562" height="1382" />
                        </a>
                    </p>
                    <h3>&nbsp;</h3>
                    <h3>Mô tả theo số thứ tự trong hình:</h3>
                    <p>
                        <strong>1. Menu Collections</strong>: để để mở phần nội dung mục số 4, để quản lý các Collections và các Request trong collection.<br />
                        <strong>2. Menu Environments</strong>: để thiết lập các biến môi trường sử dụng cho Global hoặc từng môi trường tự tạo. Sử dụng giá trị từ các biến truyền vào trong các body của request hoặc trong script test.<br />
                        <strong>3. Button New</strong> lối tắt để tạo mới các request, collections, environments, workspace,...Và <strong>button Import</strong> dùng để import data Collections dưới dạng file JSON khi export (cả file JSON của
                        environments).<br />
                        <strong>4. Vùng quản lý và thiết lập các Collections và Request</strong>. Đây là vùng thiết lập chính.<br />
                        <strong>5. Dropdown chọn phương thức của API</strong>. Gồm GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS.<br />
                        <strong>
                            6. Input để nhập URL cho API.<br />
                            7. Thay đổi nhanh tên
                        </strong>
                        của các Request và Collection hoặc Folder.<br />
                        <strong>8. Nút Send</strong> để gửi request đi.<br />
                        <strong>9. Vùng thiết lập các dữ kiện đầu vào của Client</strong>: Params, Authorization, Headers, Body, Pre-Request Script, Tests, Settings.<br />
                        <strong>10. Vùng response từ Server: </strong>status code, headers, body content<br />
                        <br />
                    </p>
                    <h2>✅ Thiết lập Params</h2>
                    <p>
                        <strong>Params</strong> là để truyền <strong>tham số</strong> vào trong API nào có yêu cầu cụ thể.<br />
                        <br />
                        <strong>Ví dụ API get user by username</strong>:
                        <a href="https://api.anhtester.com/swagger/index.html#/User%20Management/getUserByName" target="_blank" rel="noopener">https://api.anhtester.com/swagger/index.html#/User%20Management/getUserByName</a><br />
                        <br />
                        <a href="/src/assets/images/image-api-testing/api_can_truyen_params.jpg" data-fancybox="images" data-width="1200">
                            <img src="@/assets/images/image-api-testing/api_can_truyen_params.jpg" alt="" width="2236" height="1187" />
                        </a>
                        <br />
                        <br />
                        Để thiết lập Params trong Postman thì sau khi các bạn tạo mới một request là sẽ thấy tab <strong>Params</strong> ở đầu tiên phần thiết lập dữ kiện đầu vào cho API.<br />
                        <br />
                        <a href="/src/assets/images/image-api-testing/tab_params.jpg" data-fancybox="images" data-width="1200"><img src="@/assets/images/image-api-testing/tab_params.jpg" alt="" width="2562" height="1382" /></a><br />
                        <br />
                        Tại đây có 3 cột là <strong>Key, Value </strong>và<strong> Description</strong>. Thì nhìn chắc các bạn biết rồi, key là tên tham số còn value là giá trị tương ứng của tham số đó. Cái cột Description có thể ghi hoặc không,
                        mục đích diễn tả thêm vậy thôi. Cái chính là Key và Value.<br />
                        <br />
                        Ví dụ trên thì An truyền vào tham số tên "<strong>username</strong>" và giá trị là "<strong>anhtester</strong>".<br />
                        <br />
                        Ngay lập tức postman nó tự điền lên trên ô URL là <strong><code>?username=anhtester</code></strong> giống như trên giao diện UI website thì thanh URL cũng hiện dạng y hệt vậy.<br />
                        <br />
                        Nếu có nhiều tham số thì các bạn cứ điền thêm dòng vào và nó tự sinh ra dòng tiếp theo cho mình điền.<br />
                        <br />
                        <a href="/src/assets/images/image-api-testing/multi_params.jpg" data-fancybox="images" data-width="1200"><img src="@/assets/images/image-api-testing/multi_params.jpg" alt="" width="565" height="254" /></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default {
    name: "APITesting",

    mounted() {
        Fancybox.bind('[data-fancybox="images"]', {
            //
        });
    }
};
</script>

<style scoped>
/* div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
</style>
