const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Fungsi untuk menambah pesan ke chatbox
function addMessage(message, isBot = false) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", isBot ? "bot-message" : "user-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Gulir ke bawah setiap ada pesan baru
}

// Fungsi untuk mengirim pesan dan mendapatkan respon dari bot
function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;
    
    addMessage(message, false); // Tambah pesan user
    userInput.value = ""; // Kosongkan input setelah mengirim pesan

    // Respon bot sederhana
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse, true);
    }, 500);
}

function getBotResponse(message) {
    message = message.toLowerCase();
    if (message.includes("halo") || message.includes("hai")) {
        return "Hai! Saya adalah bot raka. Ada yang bisa saya bantu?";
    } else if (message.includes("nomor admin")) {
        return "inilah nomor whatsapp saya +6282246483070.";
    } else if (message.includes("waktu") || message.includes("jam")) {
        return `Sekarang jam ${new Date().toLocaleTimeString()}`;
    } else if (message.includes("tanggal")) {
        return `Hari ini tanggal ${new Date().toLocaleDateString()}`;
    } else if (message.includes("sains")) {
        return "Sains adalah metode sistematis untuk memahami dunia melalui observasi, percobaan, dan analisis. Sains mencakup banyak cabang, termasuk fisika, kimia, biologi, dan banyak lagi. Setiap cabang memiliki fokus yang berbeda dalam memahami fenomena alam.";
    } else if (message.includes("fisika")) {
        return "Fisika adalah cabang ilmu sains yang mempelajari sifat dan perilaku materi serta energi. Fisika membahas konsep-konsep dasar seperti gaya, massa, energi, dan waktu. Fisika dibagi menjadi beberapa sub-bidang, termasuk mekanika, termodinamika, elektromagnetisme, dan fisika modern. Contoh aplikasi fisika termasuk pengembangan teknologi seperti listrik dan magnet.";
    } else if (message.includes("kimia")) {
        return "Kimia adalah ilmu yang mempelajari komposisi, struktur, sifat, dan perubahan materi. Kimia sering disebut sebagai 'ilmu pusat' karena menjembatani fisika dan biologi. Dalam kimia, kita mempelajari unsur-unsur, senyawa, reaksi kimia, dan sifat fisik serta kimia dari materi. Kimia dibagi menjadi beberapa cabang, seperti kimia organik, anorganik, fisik, dan analitik.";
    } else if (message.includes("biologi")) {
        return "Biologi adalah ilmu yang mempelajari kehidupan dan organisme hidup. Ini mencakup berbagai aspek, termasuk struktur, fungsi, pertumbuhan, evolusi, dan interaksi antara organisme dengan lingkungannya. Biologi dibagi menjadi banyak sub-bidang, seperti zoologi (studi tentang hewan), botani (studi tentang tumbuhan), mikrobiologi (studi tentang mikroorganisme), dan ekologi (studi tentang hubungan antara organisme dan lingkungan).";
    } else if (message.includes("sejarah")) {
        return "Sejarah adalah studi tentang peristiwa masa lalu, terutama yang berhubungan dengan manusia. Sejarah membantu kita memahami bagaimana peristiwa masa lalu membentuk dunia saat ini. Dalam sejarah, kita mempelajari berbagai aspek kehidupan manusia, seperti budaya, ekonomi, politik, dan konflik. Sejarah dapat dibagi menjadi sejarah kuno, sejarah abad pertengahan, dan sejarah modern.";
    } else if (message.includes("teknologi")) {
        return "Teknologi adalah penerapan ilmu pengetahuan untuk memenuhi kebutuhan manusia. Ini mencakup perangkat keras (hardware) dan perangkat lunak (software). Teknologi telah mengubah cara kita berinteraksi, bekerja, dan belajar. Contoh teknologi modern termasuk komputer, smartphone, internet, dan teknologi medis. Teknologi juga mencakup inovasi dalam bidang energi, transportasi, dan komunikasi.";
    } else if (message.includes("internet")) {
        return "Internet adalah jaringan global yang menghubungkan jutaan komputer dan perangkat di seluruh dunia. Ini memungkinkan komunikasi, akses informasi, dan berbagai layanan online. Internet terdiri dari berbagai protokol dan layanan, termasuk web, email, dan media sosial. Internet telah merevolusi cara kita berkomunikasi dan mendapatkan informasi, serta mengubah banyak aspek kehidupan sehari-hari.";
    } else if (message.includes("kesehatan")) {
        return "Kesehatan adalah keadaan fisik, mental, dan sosial yang baik, bukan hanya ketiadaan penyakit. Menjaga kesehatan melibatkan pola makan seimbang, olahraga teratur, dan pemeriksaan kesehatan secara rutin. Kesehatan mental juga sangat penting, termasuk pengelolaan stres dan dukungan sosial. Ada banyak bidang dalam kesehatan, seperti kesehatan masyarakat, kedokteran, gizi, dan psikologi.";
    } else if (message.includes("gizi")) {
        return "Gizi adalah ilmu yang mempelajari hubungan antara makanan dan kesehatan. Nutrisi yang baik penting untuk pertumbuhan, perkembangan, dan kesehatan secara keseluruhan. Gizi mencakup berbagai zat gizi, seperti karbohidrat, protein, lemak, vitamin, dan mineral. Pola makan yang seimbang membantu mencegah penyakit dan mendukung kesehatan yang optimal.";
    } else if (message.includes("astronomi")) {
        return "Astronomi adalah ilmu yang mempelajari benda-benda langit, termasuk bintang, planet, komet, dan galaksi. Astronomi membantu kita memahami posisi, gerakan, dan evolusi objek di luar angkasa. Astronomi dibagi menjadi beberapa sub-bidang, termasuk astrofisika, kosmologi, dan planetologi. Observasi astronomi dilakukan dengan menggunakan teleskop dan instrumen canggih lainnya.";
    } else if (message.includes("cuaca")) {
        return "Cuaca adalah kondisi atmosfer di suatu tempat pada waktu tertentu. Ini mencakup faktor seperti suhu, kelembapan, tekanan udara, dan curah hujan. Cuaca dapat berubah dengan cepat dan dipengaruhi oleh berbagai faktor, termasuk iklim, topografi, dan aktivitas manusia. Meteorologi adalah ilmu yang mempelajari cuaca dan iklim.";
    } else if (message.includes("hukum")) {
        return "Hukum adalah sistem peraturan yang dibuat dan ditegakkan oleh pemerintah. Hukum bertujuan untuk menjaga ketertiban, keadilan, dan perlindungan hak individu. Hukum dibagi menjadi berbagai cabang, seperti hukum pidana, hukum perdata, hukum administrasi, dan hukum internasional. Setiap negara memiliki sistem hukum yang berbeda, tetapi prinsip-prinsip dasar hukum umumnya serupa.";
    } else if (message.includes("psikologi")) {
        return "Psikologi adalah ilmu yang mempelajari perilaku dan proses mental manusia. Ini mencakup berbagai aspek, seperti emosi, kognisi, motivasi, dan interaksi sosial. Psikologi dibagi menjadi berbagai sub-bidang, termasuk psikologi klinis, psikologi perkembangan, psikologi sosial, dan psikologi pendidikan. Psikologi membantu kita memahami bagaimana pikiran dan perasaan mempengaruhi perilaku.";
    } else if (message.includes("matematika")) {
        return "Matematika adalah ilmu yang mempelajari angka, bentuk, struktur, dan perubahan. Ini digunakan dalam berbagai bidang, seperti sains, teknik, dan ekonomi. Matematika dapat dibagi menjadi beberapa cabang, termasuk aritmetika, aljabar, geometri, dan kalkulus. Matematika juga memiliki aplikasi praktis dalam kehidupan sehari-hari, seperti pengelolaan keuangan dan analisis data.";
    } else if (message.includes("musik")) {
        return "Musik adalah seni untuk mengatur suara dalam waktu, menciptakan melodi, harmoni, dan ritme. Musik dapat mempengaruhi emosi dan merupakan bagian penting dari budaya. Musik mencakup berbagai genre, seperti klasik, pop, rock, jazz, dan banyak lagi. Musik juga dapat digunakan untuk pendidikan, hiburan, dan terapi.";
    } else if (message.includes("seni")) {
        return "Seni adalah ekspresi kreatif yang dapat berupa visual, audio, atau performatif. Seni mencakup berbagai bentuk, seperti lukisan, patung, teater, tari, dan film. Seni memainkan peran penting dalam budaya dan masyarakat, memungkinkan individu untuk mengekspresikan diri dan berkomunikasi dengan cara yang unik.";
    } else if (message.includes("film")) {
        return "Film adalah medium visual yang menceritakan cerita atau mengekspresikan ide menggunakan gambar bergerak. Film adalah bentuk hiburan yang sangat populer di seluruh dunia. Film dapat dibagi menjadi berbagai genre, seperti drama, komedi, aksi, fiksi ilmiah, dan dokumenter. Proses pembuatan film melibatkan penulisan skenario, pengambilan gambar, penyuntingan, dan pemasaran.";
    } else if (message.includes("literasi") || message.includes("buku")) {
        return "Literasi adalah kemampuan untuk membaca dan menulis, serta memahami teks dengan baik. Literasi sangat penting dalam pendidikan dan kehidupan sehari-hari. Buku adalah sumber pengetahuan yang berharga, dan membaca buku dapat meningkatkan pemahaman, imajinasi, dan keterampilan berpikir kritis.";
    } else if (message.includes("hewan")) {
        return "Hewan adalah organisme hidup yang memiliki sistem saraf dan dapat bergerak secara aktif. Ada banyak jenis hewan, mulai dari mamalia, reptil, burung, ikan, hingga serangga. Hewan berperan penting dalam ekosistem, dan banyak yang memiliki hubungan simbiotik dengan tumbuhan dan organisme lainnya.";
    } else if (message.includes("tumbuhan")) {
        return "Tumbuhan adalah organisme hidup yang melakukan fotosintesis dan memiliki sel-sel dengan dinding sel. Tumbuhan sangat penting bagi ekosistem karena mereka menghasilkan oksigen dan menyediakan makanan untuk organisme lain. Tumbuhan dibagi menjadi berbagai kelompok, seperti tumbuhan berbunga, tumbuhan tidak berbunga, dan alga.";
    } else if (message.includes("lingkungan")) {
        return "Lingkungan adalah semua hal di sekitar kita, termasuk faktor fisik, kimia, biologi, dan sosial. Menjaga lingkungan sangat penting untuk keberlanjutan planet kita. Isu-isu lingkungan seperti perubahan iklim, polusi, dan kehilangan keanekaragaman hayati memerlukan perhatian global dan tindakan bersama.";
    } else if (message.includes("ekonomi")) {
        return "Ekonomi adalah ilmu yang mempelajari produksi, distribusi, dan konsumsi barang dan jasa. Ekonomi dapat dibagi menjadi ekonomi mikro (yang mempelajari perilaku individu dan perusahaan) dan ekonomi makro (yang mempelajari ekonomi secara keseluruhan). Isu-isu ekonomi seperti inflasi, pengangguran, dan pertumbuhan ekonomi sangat penting dalam menentukan kebijakan publik.";
    } else if (message.includes("politik")) {
        return "Politik adalah proses pengambilan keputusan dalam kelompok, seringkali berkaitan dengan kekuasaan dan pemerintahan. Sistem politik dapat bervariasi dari demokrasi hingga otokrasi. Politik juga mencakup analisis tentang ideologi, kebijakan publik, dan hubungan internasional.";
    } else if (message.includes("matematika dasar")) {
        return "Matematika dasar mencakup operasi dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian. Ini adalah fondasi untuk memahami konsep yang lebih kompleks, seperti aljabar dan geometri. Memahami matematika dasar sangat penting untuk pendidikan dan kehidupan sehari-hari.";
    } else if (message.includes("statistika")) {
        return "Statistika adalah cabang matematika yang mengumpulkan, menganalisis, dan menafsirkan data. Statistika digunakan untuk membuat keputusan berdasarkan data yang ada. Ini mencakup metode deskriptif (mendiskripsikan data) dan inferensial (menarik kesimpulan dari data). Statistika penting dalam banyak bidang, termasuk sains, bisnis, dan penelitian sosial.";
    } else if (message.includes("geografi")) {
        return "Geografi adalah ilmu yang mempelajari permukaan bumi, iklim, lokasi, dan bagaimana manusia berinteraksi dengan lingkungan mereka. Geografi dibagi menjadi dua cabang utama: geografi fisik (mempelajari proses fisik di bumi) dan geografi manusia (mempelajari interaksi manusia dan lingkungan). Geografi juga melibatkan penggunaan peta dan teknologi geospasial.";
    } else if (message.includes("filsafat")) {
        return "Filsafat adalah studi tentang pertanyaan mendasar mengenai eksistensi, pengetahuan, nilai, pikiran, dan bahasa. Filsafat sering kali mempertanyakan asumsi dasar tentang kehidupan. Berbagai aliran filsafat, seperti empirisme, rasionalisme, dan eksistensialisme, menawarkan cara yang berbeda untuk memahami dunia dan posisi manusia di dalamnya.";
    } else if (message.includes("linguistik")) {
        return "Linguistik adalah ilmu yang mempelajari bahasa, termasuk struktur, penggunaan, dan perkembangan bahasa. Linguistik mencakup sub-bidang seperti sintaksis (struktur kalimat), morfologi (bentuk kata), fonetik (suara), dan semantik (makna). Linguistik membantu kita memahami bagaimana bahasa berfungsi dan berperan dalam komunikasi.";
    } else if (message.includes("sosiologi")) {
        return "Sosiologi adalah studi tentang masyarakat dan interaksi sosial. Ini mencakup analisis tentang struktur sosial, hubungan antar kelompok, dan perubahan sosial. Sosiologi membantu kita memahami bagaimana budaya, nilai, dan norma membentuk perilaku individu dan kelompok.";
    } else if (message.includes("teknologi informasi")) {
        return "Teknologi informasi adalah penggunaan komputer dan perangkat lunak untuk mengelola informasi. Ini mencakup pengolahan data, penyimpanan, dan komunikasi. Teknologi informasi telah mengubah cara organisasi beroperasi dan bagaimana individu berinteraksi satu sama lain.";
    } else if (message.includes("robotika")) {
        return "Robotika adalah cabang teknik yang berkaitan dengan desain, konstruksi, dan operasi robot. Robot digunakan dalam berbagai aplikasi, mulai dari industri hingga eksplorasi luar angkasa. Robotika mencakup pengembangan algoritma, sensor, dan aktuator untuk mengontrol robot.";
    } else if (message.includes("kecerdasan buatan")) {
        return "Kecerdasan buatan (AI) adalah bidang ilmu komputer yang berfokus pada pembuatan sistem yang dapat melakukan tugas yang biasanya memerlukan kecerdasan manusia, seperti pengenalan suara, pemrosesan bahasa alami, dan pengambilan keputusan. AI digunakan dalam berbagai aplikasi, termasuk asisten virtual, mobil otonom, dan analisis data.";
    } else if (message.includes("energi")) {
        return "Energi adalah kapasitas untuk melakukan pekerjaan. Energi dapat ditemukan dalam berbagai bentuk, termasuk energi kinetik, energi potensial, energi termal, dan energi listrik. Penggunaan energi yang efisien dan berkelanjutan sangat penting untuk mengurangi dampak lingkungan dan mencapai keberlanjutan.";
    } else if (message.includes("ekologi")) {
        return "Ekologi adalah cabang biologi yang mempelajari interaksi antara organisme dan lingkungan mereka. Ekologi penting untuk memahami bagaimana ekosistem berfungsi dan bagaimana faktor-faktor lingkungan mempengaruhi kehidupan. Konsep penting dalam ekologi termasuk rantai makanan, habitat, dan keanekaragaman hayati.";
    } else if (message.includes("perubahan iklim")) {
        return "Perubahan iklim merujuk pada perubahan jangka panjang dalam suhu dan pola cuaca di bumi. Ini adalah isu global yang diakibatkan oleh aktivitas manusia, terutama emisi gas rumah kaca. Perubahan iklim memiliki dampak besar pada ekosistem, cuaca ekstrem, dan kehidupan manusia.";
    } else if (message.includes("perubahan sosial")) {
        return "Perubahan sosial adalah perubahan yang terjadi dalam struktur masyarakat. Ini dapat mencakup perubahan dalam norma, nilai, dan pola interaksi sosial. Perubahan sosial dapat dipicu oleh berbagai faktor, termasuk teknologi, ekonomi, dan budaya.";
    } else if (message.includes("tradisi")) {
        return "Tradisi adalah praktik dan keyakinan yang diwariskan dari generasi ke generasi. Tradisi sering kali mencakup budaya, agama, dan kebiasaan masyarakat. Mempertahankan tradisi penting untuk identitas budaya, tetapi tradisi juga dapat berubah seiring waktu.";
    } else if (message.includes("keanekaragaman hayati")) {
        return "Keanekaragaman hayati merujuk pada variasi kehidupan di bumi, termasuk variasi di antara spesies, gen, dan ekosistem. Keanekaragaman hayati penting untuk menjaga keseimbangan ekosistem dan menyediakan sumber daya alam yang diperlukan manusia. Konservasi keanekaragaman hayati sangat penting untuk masa depan planet kita.";
    } else if (message.includes("peradaban")) {
        return "Peradaban adalah tahap perkembangan sosial, politik, dan budaya manusia yang ditandai dengan adanya kota, pemerintahan terorganisir, sistem tulisan, dan kemajuan teknologi. Peradaban kuno, seperti Mesopotamia, Mesir, dan Indus, memberikan fondasi bagi perkembangan budaya dan masyarakat modern.";
    } else if (message.includes("geologi")) {
        return "Geologi adalah ilmu yang mempelajari bumi, termasuk struktur, komposisi, dan proses yang membentuknya. Geologi mencakup studi tentang batuan, mineral, dan fenomena geologis seperti gempa bumi, gunung berapi, dan erosi. Geologi penting untuk memahami sejarah bumi dan sumber daya alam.";
    } else if (message.includes("etika")) {
        return "Etika adalah cabang filsafat yang mempelajari prinsip-prinsip moral dan nilai-nilai yang mengatur perilaku manusia. Etika mencakup pertanyaan tentang apa yang benar dan salah, baik dan buruk, serta tanggung jawab individu. Etika dapat diterapkan dalam berbagai konteks, termasuk bisnis, kedokteran, dan hubungan antarpribadi.";
    } else if (message.includes("hukum internasional")) {
        return "Hukum internasional adalah sistem hukum yang mengatur hubungan antara negara dan entitas internasional lainnya. Ini mencakup berbagai perjanjian, konvensi, dan norma yang mengatur isu-isu seperti hak asasi manusia, perdagangan, dan konflik bersenjata. Hukum internasional bertujuan untuk menjaga perdamaian dan keadilan di dunia.";
    } else if (message.includes("budaya")) {
        return "Budaya adalah sekumpulan nilai, norma, tradisi, dan praktik yang dimiliki oleh suatu kelompok masyarakat. Budaya mencakup bahasa, seni, agama, dan kebiasaan sehari-hari. Budaya memainkan peran penting dalam membentuk identitas individu dan kelompok.";
    } else if (message.includes("ekonomi mikro")) {
        return "Ekonomi mikro adalah cabang ekonomi yang mempelajari perilaku individu dan perusahaan dalam mengambil keputusan tentang penggunaan sumber daya. Ini mencakup analisis tentang penawaran, permintaan, harga, dan elastisitas. Ekonomi mikro penting untuk memahami bagaimana pasar berfungsi dan bagaimana keputusan individu mempengaruhi ekonomi secara keseluruhan.";
    } else if (message.includes("ekonomi makro")) {
        return "Ekonomi makro adalah cabang ekonomi yang mempelajari ekonomi secara keseluruhan. Ini mencakup analisis tentang pertumbuhan ekonomi, inflasi, pengangguran, dan kebijakan fiskal serta moneter. Ekonomi makro penting untuk memahami tren ekonomi yang lebih luas dan bagaimana pemerintah dapat mempengaruhi ekonomi.";
    } else if (message.includes("investasi")) {
        return "Investasi adalah tindakan mengalokasikan sumber daya, biasanya uang, dengan harapan mendapatkan keuntungan di masa depan. Investasi dapat dilakukan dalam berbagai bentuk, termasuk saham, obligasi, real estat, dan bisnis. Memahami risiko dan imbalan dari berbagai jenis investasi sangat penting untuk pengelolaan keuangan pribadi.";
    } else if (message.includes("bisnis")) {
        return "Bisnis adalah organisasi yang terlibat dalam kegiatan perdagangan, baik dalam bentuk produksi barang atau penyediaan jasa. Bisnis dapat beroperasi dalam berbagai skala, mulai dari usaha kecil hingga perusahaan multinasional. Keterampilan manajemen, pemasaran, dan keuangan sangat penting dalam menjalankan bisnis yang sukses.";
    } else if (message.includes("inovasi")) {
        return "Inovasi adalah proses menciptakan produk, layanan, atau metode baru yang lebih baik atau lebih efisien. Inovasi dapat terjadi di berbagai bidang, termasuk teknologi, bisnis, dan pendidikan. Inovasi memainkan peran penting dalam pertumbuhan ekonomi dan pengembangan masyarakat.";
    } else if (message.includes("lingkungan hidup")) {
        return "Lingkungan hidup adalah semua komponen fisik dan biologis yang ada di bumi dan saling berinteraksi. Ini mencakup udara, air, tanah, flora, fauna, dan manusia. Melindungi lingkungan hidup sangat penting untuk keberlanjutan planet kita dan kualitas hidup generasi mendatang.";
    } else if (message.includes("sustainability") || message.includes("keberlanjutan")) {
        return "Keberlanjutan adalah konsep yang menekankan pentingnya memenuhi kebutuhan saat ini tanpa mengorbankan kemampuan generasi mendatang untuk memenuhi kebutuhan mereka. Keberlanjutan mencakup aspek lingkungan, sosial, dan ekonomi. Praktik keberlanjutan meliputi pengelolaan sumber daya yang bijaksana, pengurangan limbah, dan perlindungan keanekaragaman hayati.";
    } else {
        return "Maaf, saya tidak mengerti. Tapi saya bisa membantu dengan informasi tentang sains, sejarah, teknologi, kesehatan, dan banyak lagi!";
    }
}