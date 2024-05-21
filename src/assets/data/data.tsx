const banner = [
  {
    _id: "1",
    url: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "2",
    url: "https://images.pexels.com/photos/1450480/pexels-photo-1450480.png?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "3",
    url: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const user = {
  avatar:
    "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
  _id      : "1",
  name     : "Цэлмэн",
  followers: "541",
};

const category = [
  {
    _id : "1",
    name: "Цахилгаан бараа",
    icon: "electronproduct",
  },
  {
    _id : "2",
    name: "Дуудлага худалдаа",
    icon: "auctionproduct",
  },
  {
    _id : "3",
    name: "Захиалгын бараа",
    icon: "orderproduct",
  },
  {
    _id : "4",
    name: "Эрүүл мэнд",
    icon: "healthproduct",
  },
  {
    _id : "5",
    name: "Хүүхэд",
    icon: "babyproduct",
  },
  {
    _id : "6",
    name: "Цахилгаан хэрэгсэл",
    icon: "electrontools",
  },
  {
    _id : "7",
    name: "Насанд хүрэгчдэд",
    icon: "adult",
  },
  {
    _id : "8",
    name: "Гоо сайхан",
    icon: "beauty",
  },
  {
    _id : "9",
    name: "Гэр ахуй",
    icon: "household",
  },
  {
    _id : "10",
    name: "Хэрэгцээт",
    icon: "necessity",
  },
  {
    _id : "11",
    name: "Аялал",
    icon: "travel",
  },
  {
    _id : "12",
    name: "Авто машин",
    icon: "car",
  },
  {
    _id : "13",
    name: "Бэст сэллэр",
    icon: "bestseller",
  },
  {
    _id : "14",
    name: "Спорт",
    icon: "sport",
  }
];

const reels = [
  {
    _id     : "1",
    url     : "https://player.vimeo.com/progressive_redirect/playback/899285936/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=2d0445092d164ecebafcd620ed9701cb222785174c15344648a7011935fbed34",
    duration: "13.05",
    isLive  : true,
    thumbnail:
      "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600",
    like   : 11,
    save   : 7,
    comment: 5,
    share  : 2,
    user   : user,
    seen   : 456,
    title  : "Торт"
  },
  {
    _id     : "2",
    url     : "https://player.vimeo.com/progressive_redirect/playback/898683720/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=d82981763f804c80a344c407c83ff09f4dc00c28645d720ae05940496480c58e",
    duration: "13.05",
    isLive  : false,
    thumbnail:
      "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600",
    like   : 5,
    save   : 2,
    comment: 15,
    share  : 32,
    user   : user,
    seen   : 201,
    title  : "Торт"
  },
  {
    _id     : "3",
    url     : "https://player.vimeo.com/external/567428690.sd.mp4?s=05f527bd26efc992455a0508a05ec3f14f0f03aa&profile_id=165&oauth2_token_id=57447761",
    duration: "13.05",
    isLive  : false,
    thumbnail:
      "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600",
    like   : 10,
    save   : 20,
    comment: 5,
    share  : 2,
    user   : user,
    seen   : 808,
    title  : "Торт"
  },
];

const comments = [
  {
    _id    : "1",
    product: {
      name : "Зөөлхөн сойз",
      _id  : "12",
      url  : "https://images.pexels.com/photos/216729/pexels-photo-216729.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 35000,
      saled: 28000,
    },
    user: user,

    comment  : "Энэ үнэхээр гоё сойз байна лээ. Их зөөлхөн санагдлаа",
    createdAt: "Өнөөдөр - 19:52",
  },
  {
    _id    : "2",
    product: {
      name : "Зөөлхөн сойз",
      _id  : "12",
      url  : "https://images.pexels.com/photos/216729/pexels-photo-216729.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 35000,
    },
    user     : user,
    comment  : "Энэ үнэхээр гоё сойз байна лээ. Их зөөлхөн санагдлаа",
    createdAt: "Өнөөдөр - 19:52",
  },
];

const products = [
  {
    _id      : "1",
    name     : "Зөөлхөн сойз",
    price    : 35000,
    salePrice: 28000,
    code     : "2056",
    comments : comments,
    user     : user,
    similar  : [],
    thumbnail:
      "https://images.pexels.com/photos/216729/pexels-photo-216729.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/298611/pexels-photo-298611.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7220906/pexels-photo-7220906.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    type : "NORMAL",
    types: [
      { _id: "1", name: "1ш" },
      { _id: "2", name: "5ш" },
      { _id: "3", name: "10ш" },
    ],
    quantity   : 100,
    description: `Сойз ариутгагч 🤩🤩🤩
    📌 Сойзыг хэрэглэсний дараа энгийн саванд хадгалахад бидний мэдэхгүй олон тооны бактери үржиж байдаг. Энэ нь олон төрлийн өвчин үүсэх шалтгаан болдог бөгөөд өөрийн болон гэр бүлийнхээ эрүүл мэндийн төлөө сойзыг зайлшгүй ариутгаж байх шаардлагатай.
    ✔️ Сойзны нян бактерийг 99.9% арилгах чадалтай
    Сойз ариутгагч 🤩🤩🤩
    📌 Сойзыг хэрэглэсний дараа энгийн саванд хадгалахад бидний мэдэхгүй олон тооны бактери үржиж байдаг. Энэ нь олон төрлийн өвчин үүсэх шалтгаан болдог бөгөөд өөрийн болон гэр бүлийнхээ эрүүл мэндийн төлөө сойзыг зайлшгүй ариутгаж байх шаардлагатай.
    ✔️ Сойзны нян бактерийг 99.9% арилгах чадалтай
    ✔️ 24 цагийн турш 85градусаар сойзыг ариутгаж, хатаан үнэрийг арилгана
    ✔️ Тогонд хэмнэлттэй
    ✔️ Сахлын хутга ариутгагчтай
    ✔️ Оо хийх савтай`,
  },
  {
    _id      : "2",
    name     : "Iphone 15 pro max",
    price    : 3500000,
    salePrice: 2800000,
    code     : "2057",
    comments : comments,
    user     : user,
    similar  : [],
    thumbnail:
      "https://images.pexels.com/photos/18525573/pexels-photo-18525573/free-photo-of-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/18358019/pexels-photo-18358019/free-photo-of-man-holding-an-iphone-15-case-by-gentcreate-luxury-fashiob-brand.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    type       : "ORDER",
    quantity   : 5,
    description: `iPhone 15 Pro - 3,600,000₮ 
Модель: ZP/A нано сим, есим 
Багтаамж: 128GB 
Баттерей: 100% 
Шинэ хайрцаг савтай 
Toki app-с 2024.01.31 авсан 
    `,
  },
  {
    _id     : "3",
    name    : "Macbook",
    price   : 900000,
    code    : "2057",
    comments: comments,
    user    : user,
    similar : [],
    thumbnail:
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    ],
    type       : "AUCTION",
    salePercent: 25,
    quantity   : 1,
    description: `14inch M1 Pro chip-тэй 2021 оны Macbook Pro зарна.
Colour: Space grey
Display: Liquid Retina XDR display /14-inch, 3024 x 1964, 120hz Pro Motion/
Chip: Apple M1 pro
Memory: 16GB
Storage: 512GB SSD
Battery: Cc- 303, Condition- Normal, Maximum Capacity- 88%
Дэлгэцний болон TouchPad хамгаалалттай
`,
  },
];

export { banner, category, reels, comments, products };
