'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('foods', [{
      name: 'Beef Bulgogi',
      sortDescription: "Bulgogi (bahasa Korea: 불 api, dan 고기 daging) adalah olahan daging asal Korea. Daging yang digunakan antara lain daging sirloin atau bagian daging sapi pilihan",
      description: "Bulgogi (bahasa Korea: 불 api, dan 고기 daging) adalah olahan daging asal Korea. Daging yang digunakan antara lain daging sirloin atau bagian daging sapi pilihan. Bumbu bulgogi adalah campuran kecap asin dan gula ditambah rempah lain bergantung pada resep dan daerah di Korea. Sebelum dimakan, daun selada digunakan untuk membungkus bulgogi bersama kimchi, bawang putih, atau bumbu penyedap lain.",
      image: "localhost:3000/images/international/beef_bulgogi.jpg",
      category: "Makanan Luar",
      status: 2
    }, {
      name: 'Burger',
      sortDescription: "Burger (atau seringkali disebut dengan Hamburger) adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan ditengahnya diisi dengan patty yang biasanya di ambil dari daging, kemudian sayur-sayuran berupa selada, tomat dan bawang bombay",
      description: "Burger (atau seringkali disebut dengan Hamburger) adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan ditengahnya diisi dengan patty yang biasanya di ambil dari daging, kemudian sayur-sayuran berupa selada, tomat dan bawang bombay. Sebagai sausnya, burger diberi berbagai jenis saus seperti mayones, saus tomat dan sambal serta mustard. Beberapa varian burger juga dilengkapi dengan keju, asinan, serta bahan pelengkap lain seperti sosis dan ham.",
      image: "localhost:3000/images/international/burger.jpg",
      category: "Makanan Luar",
      status: 2
    }, {
      name: 'Dim Sum',
      sortDescription: "Dim sum (tradisional: 點心, sederhana: 点心 hanyu pinyin: dianxin) adalah istilah dari bahasa Kantonis dan artinya adalah makanan kecil",
      description: "Dim sum (tradisional: 點心, sederhana: 点心 hanyu pinyin: dianxin) adalah istilah dari bahasa Kantonis dan artinya adalah makanan kecil. Biasanya dim sum dimakan sebagai sarapan atau brunch. Namun karena dimsum populer ke dunia dari Hongkong maka istilah dimsum lebih populer dibandingkan dianxin.",
      image: "localhost:3000/images/international/dimsum.jpg",
      category: "Makanan Luar",
      status: 2
    }, {
      name: 'Hot Dog',
      sortDescription: "Hot dog (frankfurter, frank, wiener, weenie) adalah suatu jenis sosis yang dimasak atau diasapi dan memiliki tekstur yang lebih halus serta rasa yang lebih lembut dan basah daripada kebanyakan sosis",
      description: "Hot dog (frankfurter, frank, wiener, weenie) adalah suatu jenis sosis yang dimasak atau diasapi dan memiliki tekstur yang lebih halus serta rasa yang lebih lembut dan basah daripada kebanyakan sosis. Hot dog sering dimakan dengan tangan (fingerfood), terutama di Amerika Serikat, dan biasanya dimakan bersama roti lunak (bun) yang berbentuk sama dengan sosis, kadang disertai bumbu dan topping. Sandwich yang terbentuk dari kombinasi ini disebut juga dengan istilah hot dog.",
      image: "localhost:3000/images/international/hot_dog.jpg",
      category: "Makanan Luar",
      status: 2
    }, {
      name: 'Kebab',
      sortDescription: "Kebab adalah penganan cepat saji terdiri atas daging sapi yang dipanggang seperti satai kemudian diiris-iris ditambah dengan sayuran segar dan mayones, lalu dibalut dengan kulit tortila.",
      description: "Kebab adalah penganan cepat saji terdiri atas daging sapi yang dipanggang seperti satai kemudian diiris-iris ditambah dengan sayuran segar dan mayones, lalu dibalut dengan kulit tortila. Hidangan ini umum dijumpai dalam masakan Laut Tengah, masakan Kaukasus, masakan Asia Tengah, masakan Asia Selatan, masakan Asia Tenggara, dan masakan beberapa negara Afrika.",
      image: "localhost:3000/images/international/kebab.jpg",
      category: "Makanan Luar",
      status: 2
    }, {
      name: 'Pizza',
      sortDescription: "Pizza adalah hidangan gurih dari Italia sejenis adonan bundar dan pipih, yang dipanggang di oven dan biasanya dilumuri saus tomat serta keju dengan bahan makanan tambahan lainnya yang bisa dipilih",
      description: "Pizza adalah hidangan gurih dari Italia sejenis adonan bundar dan pipih, yang dipanggang di oven dan biasanya dilumuri saus tomat serta keju dengan bahan makanan tambahan lainnya yang bisa dipilih. Keju yang dipakai biasanya mozzarella atau keju pizza, bisa juga keju parmesan dan beberapa keju lainnya.Jenis bahan lain juga dapat ditaruh di atas pizza, biasanya daging dan saus, seperti salami dan pepperoni, ham, bacon, buah seperti nanas dan zaitun, sayuran seperti cabe dan paprika, dan juga bawang bombay, jamur dan lain lain.",
      image: "localhost:3000/images/international/pizza.jpg",
      category: "Makanan Luar",
      status: 2
    }, {
      name: 'Spaghetti',
      sortDescription: "Spageti (nama resmi: Spaghetti ; pengucapan bahasa Italia: [spaˈɡetti]) adalah salah satu jenis pasta yang berbentuk panjang, tipis, silindris, dan padat, yang jika diperhatikan menyerupai mie pada umumnya",
      description: "Spageti (nama resmi: Spaghetti ; pengucapan bahasa Italia: [spaˈɡetti]) adalah salah satu jenis pasta yang berbentuk panjang, tipis, silindris, dan padat, yang jika diperhatikan menyerupai mie pada umumnya. Ini adalah makanan pokok dalam masakan Italia tradisional. Karena berbentuk seperti mie, kebanyakan orang menyebutnya mie dari Italia meskipun banyak varian pasta lainnya yang berbentuk seperti mie. Seperti pasta pada umumnya, spageti terbuat dari gandum giling dan air. Spageti Italia terbuat dari semolina gandum durum, tetapi di tempat lain bisa dibuat dengan tepung jenis lain.",
      image: "localhost:3000/images/international/spaghetti.jpg",
      category: "Makanan Luar",
      status: 2
    }, {
      name: 'Steak',
      sortDescription: "Steik adalah sepotong besar daging, biasanya daging sapi. Daging merah, dada ayam dan ikan sering kali dipotong menjadi steik",
      description: "Steik adalah sepotong besar daging, biasanya daging sapi. Daging merah, dada ayam dan ikan sering kali dipotong menjadi steik. Kebanyakan steik dipotong tegak lurus dengan serat otot, menambah kelegitan daging. Steik biasanya dimasak dengan dipanggang, meskipun dapat digoreng atau di-broil.",
      image: "localhost:3000/images/international/steak.jpg",
      category: "Makanan Luar",
      status: 2
    }, {
      name: 'Sushi',
      sortDescription: "Susyi atau sushi (鮨, 鮓, atau biasanya すし, 寿司) adalah makanan Jepang yang terdiri dari nasi yang dibentuk bersama lauk (neta) berupa makanan laut, daging, sayuran mentah atau sudah dimasak",
      description: "Susyi atau sushi (鮨, 鮓, atau biasanya すし, 寿司) adalah makanan Jepang yang terdiri dari nasi yang dibentuk bersama lauk (neta) berupa makanan laut, daging, sayuran mentah atau sudah dimasak. Nasi susyi mempunyai rasa masam yang lembut karena dibumbui campuran cuka beras, garam, dan gula.",
      image: "localhost:3000/images/international/sushi.jpg",
      category: "Makanan Luar",
      status: 2
    }, {
      name: 'Tacos',
      sortDescription: "Taco adalah makanan khas Meksiko yang terdiri atas gulungan atau lipatan tortilla yang diisi dengan berbagai macam masakan di dalamnya",
      description: "Taco adalah makanan khas Meksiko yang terdiri atas gulungan atau lipatan tortilla yang diisi dengan berbagai macam masakan di dalamnya. Salah satu versi Taco terdapat di makanan khas Tex-Mex, yakni Breakfast Taco (Taco untuk Sarapan) yang terdiri atas telur dadar dan kombinasi kentang, sosis dan/atau daging babi asap (bacon).",
      image: "localhost:3000/images/international/tacos.jpg",
      category: "Makanan Luar",
      status: 2
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};