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
      name: 'Nasi Kuning',
      sortDescription: "Nasi kuning adalah makanan khas Indonesia. Makanan ini terbuat dari beras yang dimasak bersama dengan kunyit serta santan dan rempah-rempah",
      description: "Nasi kuning adalah makanan khas Indonesia. Makanan ini terbuat dari beras yang dimasak bersama dengan kunyit serta santan dan rempah-rempah. Dengan ditambahkannya bumbu-bumbu dan santan, nasi kuning memiliki rasa yang lebih gurih daripada nasi putih. Nasi kuning adalah salah satu variasi dari nasi putih yang sering digunakan sebagai tumpeng. Nasi kuning biasa disajikan dengan bermacam lauk-pauk khas Indonesia.",
      image: "localhost:3000/images/traditional/nasi_kuning.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 4,
      status: 1
    },
    {
      name: 'Nasi Uduk',
      sortDescription: "Nasi uduk atau dalam bahasa Belanda rijst vermengd met onrust van de liefde (disingkat jaloerse rijst) adalah nama makanan yang terbuat dari bahan dasar nasi putih yang diaron dan dikukus dengan santan",
      description: "Nasi uduk atau dalam bahasa Belanda rijst vermengd met onrust van de liefde (disingkat jaloerse rijst) adalah nama makanan yang terbuat dari bahan dasar nasi putih yang diaron dan dikukus dengan santan, serta dibumbui dengan pala, kayu manis, jahe, daun serai dan merica. Makanan ini ditemukan oleh penduduk pulau Jawa sekitar tahun 1910-1924 dan dipopulerkan oleh Hindia Belanda setelahnya. Nasi uduk biasa dihidangkan dengan emping goreng, tahu goreng, telur dadar / telur goreng yang teriris, dan abon kering, tempe, bawang goreng, ayam goreng, timun serta sambal kacang. Makanan ini biasanya lebih sering dijual di pagi hari untuk sarapan dan malam hari untuk makan malam.",
      image: "localhost:3000/images/traditional/nasi_uduk.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 4.5,
      status: 1
    },
    {
      name: 'Nasi Campur',
      sortDescription: "Nasi campur adalah masakan khas Indonesia, Makanan ini terdiri dari nasi putih yang dihidangkan dengan bermacam-macam lauk-pauk",
      description: "Nasi campur adalah masakan khas Indonesia, Makanan ini terdiri dari nasi putih yang dihidangkan dengan bermacam-macam lauk-pauk. Lauk yang digunakan adalah sambal goreng, abon, serundeng, tahu goreng, ikan goreng, telur dan lain-lain. Tergantung dari warung atau rumah makan yang menyajikannya nasi campur dapat memiliki variasi tersendiri. Masakan ini juga sering dijual dalam bungkus kertas atau daun pisang.",
      image: "localhost:3000/images/traditional/nasi_campur.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 4,
      status: 1
    },
    {
      name: 'Gado Gado',
      sortDescription: "Gado-gado adalah salah satu makanan khas yang berasal dari Indonesia yang berupa sayur-sayuran yang direbus dan dicampur jadi satu, dengan bumbu kacang atau saus dari kacang tanah dan yang dihaluskan disertai irisan telur",
      description: "Gado-gado adalah salah satu makanan khas yang berasal dari Indonesia yang berupa sayur-sayuran yang direbus dan dicampur jadi satu, dengan bumbu kacang atau saus dari kacang tanah dan yang dihaluskan disertai irisan telur dan pada umumnya banyak yang menambahkan kentang rebus yang sudah dihaluskan untuk saus gado gado kentang rebus dimasak bersamaan dengan bumbu kacang kemudian di atasnya ditaburi bawang goreng. Sedikit emping goreng atau kerupuk (ada juga yang memakai kerupuk udang) juga ditambahkan.",
      image: "localhost:3000/images/traditional/gado_gado.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 4,
      status: 1
    },
    {
      name: 'Sate',
      sortDescription: "Sate atau satai adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa dengan tusukan lidi tulang daun kelapa atau bambu kemudian dipanggang menggunakan bara arang kayu",
      description: "Sate atau satai adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa dengan tusukan lidi tulang daun kelapa atau bambu kemudian dipanggang menggunakan bara arang kayu. Sate disajikan dengan berbagai macam bumbu yang bergantung pada variasi resep sate. Daging yang dijadikan sate antara lain daging ayam, kambing, domba, sapi, kelinci , dan lain-lain.",
      image: "localhost:3000/images/traditional/sate.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 5,
      status: 1
    },
    {
      name: 'Urap',
      sortDescription: "Urap (kadang dieja urab atau disebut jamak urap-urap) (bahasa Jawa: ꦈꦫꦥ꧀) adalah hidangan salad berupa sayuran yang dimasak (direbus) yang dicampur kelapa parut yang dibumbui sebagai pemberi citarasa",
      description: "Urap (kadang dieja urab atau disebut jamak urap-urap) (bahasa Jawa: ꦈꦫꦥ꧀) adalah hidangan salad berupa sayuran yang dimasak (direbus) yang dicampur kelapa parut yang dibumbui sebagai pemberi citarasa. Urap lazim ditemukan dalam masakan Indonesia, akan tetapi jika ditelusuri, urap berasal dari khazanah masakan Jawa. Urap sama sekali tidak mengandung daging, dan dapat dimakan begitu saja sebagai makanan vegetarian[2] atau sebagai sayuran teman nasi sebagai bagian dari hidangan lengkap. Urap biasanya merupakan syarat atau hidangan penting sebagi sayur pengiring dan pelengkap tumpeng Jawa. Urap juga lazim disajikan bersama nasi kuning.",
      image: "localhost:3000/images/traditional/urap.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 3.5,
      status: 1
    },
    {
      name: 'Ayam Penyet',
      sortDescription: "Ayam penyet adalah hidangan ayam goreng Indonesia, khususnya Jawa, yang terdiri dari ayam goreng yang diulek memakai ilekan untuk melembutkannya",
      description: "Ayam penyet adalah hidangan ayam goreng Indonesia, khususnya Jawa, yang terdiri dari ayam goreng yang diulek memakai ilekan untuk melembutkannya, disajikan dengan sambal, potongan-potongan timun, tahu goreng dan tempe. Varian ayam penyet paling populer adalah ayam penyet Suroboyo.",
      image: "localhost:3000/images/traditional/ayam_penyet.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 4.5,
      status: 1
    },
    {
      name: 'Baso',
      sortDescription: "Bakso atau baso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia. Bakso umumnya dibuat dari campuran daging sapi giling dan tepung tapioka, akan tetapi ada juga bakso yang terbuat dari daging ayam, ikan, atau udang bahkan daging kerbau",
      description: "Bakso atau baso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia. Bakso umumnya dibuat dari campuran daging sapi giling dan tepung tapioka, akan tetapi ada juga bakso yang terbuat dari daging ayam, ikan, atau udang bahkan daging kerbau. Dalam penyajiannya, bakso umumnya disajikan panas-panas dengan kuah kaldu sapi bening, dicampur mi, bihun, taoge, tahu, terkadang telur dan ditaburi bawang goreng dan seledri. Bakso sangat populer dan dapat ditemukan di seluruh Indonesia; dari gerobak pedagang kaki lima hingga restoran besar. Berbagai jenis bakso sekarang banyak ditawarkan dalam bentuk makanan beku yang dijual di pasar swalayan ataupun mal-mal. Irisan bakso dapat juga dijadikan pelengkap jenis makanan lain seperti mi goreng, nasi goreng, atau capcai.",
      image: "localhost:3000/images/traditional/baso.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 5,
      status: 1
    },
    {
      name: 'Bakmi',
      sortDescription: "Bakmi adalah salah satu jenis sajian mi yang dipopulerkan oleh pedagang-pedagang Tiongkok ke Indonesia. Bakmi juga sering disebut yamien atau yahun",
      description: "Bakmi adalah salah satu jenis sajian mi yang dipopulerkan oleh pedagang-pedagang Tiongkok ke Indonesia. Bakmi juga sering disebut yamien atau yahun. Bakmi juga merupakan makanan yang terkenal terutama di daerah-daerah pecinan di Indonesia. Biasanya bakmi telah diadaptasi dengan menggunakan bumbu-bumbu Indonesia. Tebalnya bakmi adalah antara Mian Cina dan Udon Jepang, selain itu ada berbagai variasi bakmi di Indonesia.",
      image: "localhost:3000/images/traditional/bakmi.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 4,
      status: 1
    },
    {
      name: 'Rendang',
      sortDescription: "Rendang atau randang (Jawi: رندڠ) adalah masakan daging yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak suhu rendah dalam waktu lama menggunakan aneka rempah-rempah dan santan",
      description: "Rendang atau randang (Jawi: رندڠ) adalah masakan daging yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak suhu rendah dalam waktu lama menggunakan aneka rempah-rempah dan santan. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat dan dedak. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna cokelat terang keemasan.",
      image: "localhost:3000/images/traditional/rendang.jpg",
      category: "Makanan Indonesia",
      country: "Indonesia",
      rating: 5,
      status: 1
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