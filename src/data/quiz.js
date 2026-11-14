import { BsInfoCircle } from "react-icons/bs";
import { CiMedal } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { FiClock, FiNavigation2 } from "react-icons/fi";
import { IoMdCloudDone } from "react-icons/io";

export const quizInfo = [
  {
    headTitle: "تعداد کل سوالات",
    title: "۱۰ پرسش تخصصی",
    extraInfo: "چهارگزینه‌ای استاندارد",
    Icon: BsInfoCircle,
    iconClass: " text-primary bg-primary-container/20",
    textColor: "text-primary",
  },
  {
    headTitle: " زمان پیشنهادی ",
    title: "5 دقیقه",
    extraInfo: " شمارش معکوس پویا",
    Icon: FiClock,
    iconClass: " bg-secondary-container/20 text-secondary",
    textColor: "text-secondary",
  },
  {
    headTitle: "ارزش نمره ",
    title: "نمره کامل 10  ",
    extraInfo: " بدون نمره منفی",
    Icon: CiMedal,
    iconClass: " bg-tertiary-container/20 text-tertiary",
    textColor: "text-tertiary",
  },
  {
    headTitle: "خروجی نتایج",
    title: "نتایج انی",
    extraInfo: "تحلیل مهارت",
    Icon: FaChartBar,
    iconClass:
      " bg-surface-container-highest text-primary-fixed-dim text-red-400",
    textColor: "text-red-400",
  },
];

export const quizRules = [
  {
    Icon: FcOk,
    desc: " امکان بازگشت، بازبینی و تغییر گزینه‌ها تا قبل از تایید ثبت نهایی آزمون وجود دارد.",
    iconColor: "bg-tertiary-container/30 text-tertiary",
  },
  {
    Icon: IoMdCloudDone,
    desc: " تمامی پاسخ‌ها به صورت ابری و برخط در لحظه انتخاب ذخیره شده و از دست نخواهند رفت.",
    iconColor: "bg-secondary-container/30 text-secondary",
  },
  {
    Icon: FiNavigation2,
    desc: " ناوبری آزاد و دسترسی مستقیم به شماره هر سوال از طریق پنل هدایتگر آزمون امکان‌پذیر است.",
    iconColor: "bg-primary-container/30 text-primary ",
  },
];

export const quizConfig = {
  title: "آزمون تخصصی JavaScript و React",
  duration: 5,
  totalQuestions: 10,
  negativeScore: false,
};

export const questions = [
  {
    id: 1,
    question:
      "کدام Hook برای مدیریت State در کامپوننت‌های React استفاده می‌شود؟",
    answers: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "کدام متد برای پیمایش آرایه و تولید یک آرایه جدید استفاده می‌شود؟",
    answers: ["forEach()", "filter()", "map()", "find()"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "کدام ویژگی در React برای شناسایی آیتم‌های لیست استفاده می‌شود؟",
    answers: ["id", "index", "key", "ref"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question:
      "کدام Hook برای اجرای عملیات جانبی مانند دریافت اطلاعات از API استفاده می‌شود؟",
    answers: ["useState", "useEffect", "useMemo", "useContext"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question:
      "کدام عبارت برای مقایسه مقدار و نوع داده به‌صورت هم‌زمان استفاده می‌شود؟",
    answers: ["==", "=", "===", "!="],
    correctAnswer: 2,
  },
  {
    id: 6,
    question:
      "کدام روش برای انتقال اطلاعات از کامپوننت والد به فرزند استفاده می‌شود؟",
    answers: ["State", "Props", "Ref", "Effect"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "خروجی عبارت typeof null در JavaScript چیست؟",
    answers: ["null", "undefined", "object", "boolean"],
    correctAnswer: 2,
  },
  {
    id: 8,
    question:
      "کدام Hook برای نگهداری مقدار بین رندرها، بدون ایجاد رندر مجدد هنگام تغییر آن، مناسب است؟",
    answers: ["useState", "useEffect", "useRef", "useMemo"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question:
      "کدام مفهوم باعث می‌شود تغییرات State در رابط کاربری React نمایش داده شوند؟",
    answers: ["Re-render", "DOM Mutation", "Event Bubbling", "Hoisting"],
    correctAnswer: 0,
  },
  {
    id: 10,
    question:
      "کدام متد برای تبدیل رشته JSON به مقدار JavaScript استفاده می‌شود؟",
    answers: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.toObject()",
    ],
    correctAnswer: 1,
  },
];

export const initialAnswers = questions.map((question) => ({
  questionId: question.id,
  selectedAnswer: null,
}));
