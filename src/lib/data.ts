export const locales = ['fa','en'] as const;
export type Locale = typeof locales[number];
export const dict = {
 fa:{nav:['هتل‌ها','برنامه سفر','راهنماها','همسفر','بلاگ','ادمین'],heroTitle:'TripNest Enterprise؛ سوپر اپ کامل سفر برای بازار ایران',heroSub:'برنامه‌ریزی سفر، رزرو هتل و پرواز، راهنمای محلی، همسفر، بلاگ، پنل ادمین و مدیریت محتوا در یک محصول آماده توسعه.',cta:'شروع طراحی سفر',admin:'ورود به پنل'},
 en:{nav:['Hotels','Itinerary','Guides','Travel Mate','Blog','Admin'],heroTitle:'TripNest Enterprise; a complete travel super app',heroSub:'Itinerary builder, hotel and flight booking, local guides, travel mate, blog CMS, admin panel and scalable product architecture.',cta:'Plan a trip',admin:'Admin panel'}
};
export const cities=[{name:'تهران',en:'Tehran',hotels:128,tag:'Business'},{name:'مشهد',en:'Mashhad',hotels:210,tag:'Pilgrimage'},{name:'شیراز',en:'Shiraz',hotels:86,tag:'Culture'},{name:'کیش',en:'Kish',hotels:74,tag:'Leisure'}];
export const hotels=[
 {name:'هتل هما شیراز',city:'شیراز',grade:'5 ستاره',price:'۴,۸۰۰,۰۰۰',score:9.1,provider:'IHO Provider'},
 {name:'هتل درویشی مشهد',city:'مشهد',grade:'5 ستاره',price:'۶,۲۰۰,۰۰۰',score:9.3,provider:'NetMinder'},
 {name:'هتل اسپیناس پالاس',city:'تهران',grade:'5 ستاره',price:'۷,۹۰۰,۰۰۰',score:9.4,provider:'Lamasoo'},
 {name:'هتل داریوش کیش',city:'کیش',grade:'5 ستاره',price:'۸,۵۰۰,۰۰۰',score:9.2,provider:'Sepehr'}
];
export const features=['رزرو هتل و پرواز','برنامه‌ساز چندروزه سفر','راهنمای محلی و درخواست اختصاصی','پنل ادمین کامل','بلاگ و صفحات SEO','PWA و آماده نسخه موبایل','دو زبانه فارسی/انگلیسی','ساختار قابل اتصال به دیتابیس واقعی'];
export const adminCards=[['Hotels','۳۵۰۰ واحد اقامتی','مدیریت نرخ، ظرفیت، وضعیت همکاری و پروایدر'],['Trips','۱۲۰ برنامه سفر','CRUD کامل مسیرها، شهرها و جاذبه‌ها'],['Guides','۸۴ راهنمای محلی','مدیریت درخواست، قیمت و وضعیت فعال بودن'],['Content','۴۸ صفحه محتوا','بلاگ، لندینگ، بنرها و FAQ']];
