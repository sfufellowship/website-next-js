import sfuBg from "@/public/img_new/sfu.png";
import fellowshipGroupPhoto from "@/public/img_new/fellowship_group_photo.jpg";
import fellowshipGroupPhoto2 from "@/public/img_new/fellowship_group_photo_2.jpg";
import fellowshipGroupPhoto3 from "@/public/img_new/fellowship_group_photo_3.jpg";
import fellowshipGroupPhoto4 from "@/public/img_new/fellowship_group_photo_4.jpg";
import fellowshipGroupPhoto5 from "@/public/img_new/fellowship_group_photo_5.jpg";
import fellowshipGroupPhoto6 from "@/public/img_new/fellowship_group_photo_6.jpg";
import imgSquare1 from "@/public/img/img_square_1.jpg";
import imgSquare2 from "@/public/img/img_square_2.jpg";
import imgSquare3 from "@/public/img/img_square_3.jpg";
import imgSquare4 from "@/public/img/img_square_4.jpg";
import imgSquare5 from "@/public/img/img_square_5.jpg";
import bibleStudy from "@/public/img_new/bible_study.jpg";
import wechatQrCode from "@/public/img_new/wechat_qr_code.jpg";

// Team member photos
import simonPhoto from "@/public/img/face/simon.jpg";
import ruihanPhoto from "@/public/img/face/Ruihan.jpeg";
import selenaPhoto from "@/public/img/face/Selena.jpeg";
import justinPhoto from "@/public/img/face/justin.jpeg";
import yangPhoto from "@/public/img/face/yangy.jpg";
import songhePhoto from "@/public/img/face/Songhe.jpeg";
import jonathanPhoto from "@/public/img/face/Jonathan.jpg";
import pikePhoto from "@/public/img/face/pika.png";

export const images = {
    // Main images
    sfuBg,
    fellowshipGroupPhoto,
    fellowshipGroupPhoto2,
    fellowshipGroupPhoto3,
    fellowshipGroupPhoto4,
    fellowshipGroupPhoto5,
    fellowshipGroupPhoto6,
    bibleStudy,
    wechatQrCode,

    // Gallery images
    imgSquare1,
    imgSquare2,
    imgSquare3,
    imgSquare4,
    imgSquare5,

    // Team member photos
    simonPhoto,
    ruihanPhoto,
    selenaPhoto,
    justinPhoto,
    yangPhoto,
    songhePhoto,
    jonathanPhoto,
    pikePhoto,
} as const;

// Type for image keys
export type ImageKey = keyof typeof images;
