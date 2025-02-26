"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface AsmaName {
  arabic: string
  bengali: string
  meaning: string
  virtue: string
}

const asmaNames: AsmaName[] = [
  {
    arabic: "الله",
    bengali: "আল্লাহ",
    meaning: "আল্লাহ",
    virtue: "এই নামটি জপ করলে সকল কল্যাণ লাভ হয়।",
  },
  {
    arabic: "الرحمن",
    bengali: "আর-রাহমান",
    meaning: "পরম করুণাময়",
    virtue: "এই নামটি পাঠ করলে আল্লাহর রহমত লাভ হয়।",
  },
  {
    arabic: "الرحيم",
    bengali: "আর-রাহীম",
    meaning: "অতি দয়ালু",
    virtue: "এই নামটি পাঠ করলে দুনিয়া ও আখিরাতে দয়া লাভ হয়।",
  },
  {
    arabic: "الملك",
    bengali: "আল-মালিক",
    meaning: "সার্বভৌম সত্তা",
    virtue: "এই নামটি পাঠ করলে আত্মসম্মান ও মর্যাদা বৃদ্ধি পায়।",
  },
  {
    arabic: "القدوس",
    bengali: "আল-কুদ্দুস",
    meaning: "অতি পবিত্র",
    virtue: "এই নামটি পাঠ করলে আত্মশুদ্ধি ও পবিত্রতা লাভ হয়।",
  },
  {
    arabic: "السلام",
    bengali: "আস-সালাম",
    meaning: "শান্তি দাতা",
    virtue: "এই নামটি পাঠ করলে মানসিক শান্তি লাভ হয়।",
  },
  {
    arabic: "المؤمن",
    bengali: "আল-মুমিন",
    meaning: "নিরাপত্তা দানকারী",
    virtue: "এই নামটি পাঠ করলে ঈমান ও বিশ্বাস দৃঢ় হয়।",
  },
  {
    arabic: "المهيمن",
    bengali: "আল-মুহাইমিন",
    meaning: "রক্ষাকারী",
    virtue: "এই নামটি পাঠ করলে আল্লাহর সংরক্ষণ লাভ হয়।",
  },
  {
    arabic: "العزيز",
    bengali: "আল-আজীজ",
    meaning: "পরাক্রমশালী",
    virtue: "এই নামটি পাঠ করলে সম্মান ও শক্তি লাভ হয়।",
  },
  {
    arabic: "الجبار",
    bengali: "আল-জাব্বার",
    meaning: "পরাক্রান্ত",
    virtue: "এই নামটি পাঠ করলে অন্যায়ের বিরুদ্ধে শক্তি পাওয়া যায়।",
  },
  {
    arabic: "المتكبر",
    bengali: "আল-মুতাকাব্বির",
    meaning: "গৌরবান্বিত",
    virtue: "এই নামটি পাঠ করলে আত্মসম্মান বৃদ্ধি পায়।",
  },
  {
    arabic: "الخالق",
    bengali: "আল-খালিক",
    meaning: "স্রষ্টা",
    virtue: "এই নামটি পাঠ করলে সৃজনশীলতা বৃদ্ধি পায়।",
  },
  {
    arabic: "البارئ",
    bengali: "আল-বারী",
    meaning: "উদ্ভাবনকারী",
    virtue: "এই নামটি পাঠ করলে নতুন কিছু শুরু করার শক্তি পাওয়া যায়।",
  },
  {
    arabic: "المصور",
    bengali: "আল-মুসাউ্উির",
    meaning: "আকার দানকারী",
    virtue: "এই নামটি পাঠ করলে সৌন্দর্যবোধ বৃদ্ধি পায়।",
  },
  {
    arabic: "الغفار",
    bengali: "আল-গাফফার",
    meaning: "ক্ষমাশীল",
    virtue: "এই নামটি পাঠ করলে গুনাহ মাফ হয়।",
  },
  {
    arabic: "القهار",
    bengali: "আল-কাহহার",
    meaning: "পরাভূতকারী",
    virtue: "এই নামটি পাঠ করলে শত্রুর উপর বিজয় লাভ হয়।",
  },
  {
    arabic: "الوهاب",
    bengali: "আল-ওয়াহহাব",
    meaning: "দানশীল",
    virtue: "এই নামটি পাঠ করলে রিযিক বৃদ্ধি পায়।",
  },
  {
    arabic: "الرزاق",
    bengali: "আর-রাযযাক",
    meaning: "জীবিকা দাতা",
    virtue: "এই নামটি পাঠ করলে রিযিকের দ্বার খুলে যায়।",
  },
  {
    arabic: "الفتاح",
    bengali: "আল-ফাত্তাহ",
    meaning: "বিজয় দানকারী",
    virtue: "এই নামটি পাঠ করলে সমস্যার সমাধান পাওয়া যায়।",
  },
  {
    arabic: "العليم",
    bengali: "আল-আলীম",
    meaning: "সর্বজ্ঞ",
    virtue: "এই নামটি পাঠ করলে জ্ঞান বৃদ্ধি পায়।",
  },
  {
    arabic: "القابض",
    bengali: "আল-কাবিদ",
    meaning: "সংকোচনকারী",
    virtue: "এই নামটি পাঠ করলে অপ্রয়োজনীয় খরচ কমে।",
  },
  {
    arabic: "الباسط",
    bengali: "আল-বাসিত",
    meaning: "প্রসারণকারী",
    virtue: "এই নামটি পাঠ করলে মন প্রশস্ত হয়।",
  },
  {
    arabic: "الخافض",
    bengali: "আল-খাফিদ",
    meaning: "অবনমনকারী",
    virtue: "এই নামটি পাঠ করলে অহংকার দূর হয়।",
  },
  {
    arabic: "الرافع",
    bengali: "আর-রাফি",
    meaning: "উন্নয়নকারী",
    virtue: "এই নামটি পাঠ করলে মর্যাদা বৃদ্ধি পায়।",
  },
  {
    arabic: "المعز",
    bengali: "আল-মুইয",
    meaning: "সম্মান দানকারী",
    virtue: "এই নামটি পাঠ করলে সম্মান বৃদ্ধি পায়।",
  },
  {
    arabic: "المذل",
    bengali: "আল-মুযিল",
    meaning: "অপমানকারী",
    virtue: "এই নামটি পাঠ করলে শত্রু পরাজিত হয়।",
  },
  {
    arabic: "السميع",
    bengali: "আস-সামী",
    meaning: "সর্বশ্রোতা",
    virtue: "এই নামটি পাঠ করলে দোয়া কবুল হয়।",
  },
  {
    arabic: "البصير",
    bengali: "আল-বাসীর",
    meaning: "সর্বদ্রষ্টা",
    virtue: "এই নামটি পাঠ করলে অন্তর্দৃষ্টি বাড়ে।",
  },
  {
    arabic: "الحكم",
    bengali: "আল-হাকাম",
    meaning: "বিচারক",
    virtue: "এই নামটি পাঠ করলে ন্যায়বিচার প্রতিষ্ঠিত হয়।",
  },
  {
    arabic: "العدل",
    bengali: "আল-আদল",
    meaning: "ন্যায়পরায়ণ",
    virtue: "এই নামটি পাঠ করলে সুবিচার পাওয়া যায়।",
  },
  {
    arabic: "اللطيف",
    bengali: "আল-লাতীফ",
    meaning: "সূক্ষ্মদর্শী",
    virtue: "এই নামটি পাঠ করলে সূক্ষ্ম বিষয় বুঝতে পারা যায়।",
  },
  {
    arabic: "الخبير",
    bengali: "আল-খাবীর",
    meaning: "সর্বজ্ঞ",
    virtue: "এই নামটি পাঠ করলে গভীর জ্ঞান লাভ হয়।",
  },
  {
    arabic: "الحليم",
    bengali: "আল-হালীম",
    meaning: "ধৈর্যশীল",
    virtue: "এই নামটি পাঠ করলে ধৈর্য বৃদ্ধি পায়।",
  },
  {
    arabic: "العظيم",
    bengali: "আল-আযীম",
    meaning: "মহান",
    virtue: "এই নামটি পাঠ করলে আল্লাহর মহত্ব অনুভব করা যায়।",
  },
  {
    arabic: "الغفور",
    bengali: "আল-গাফুর",
    meaning: "ক্ষমাশীল",
    virtue: "এই নামটি পাঠ করলে গুনাহ মাফ হয়।",
  },
  {
    arabic: "الشكور",
    bengali: "আশ-শাকুর",
    meaning: "কৃতজ্ঞতা স্বীকারকারী",
    virtue: "এই নামটি পাঠ করলে নেয়ামত বৃদ্ধি পায়।",
  },
  {
    arabic: "العلي",
    bengali: "আল-আলী",
    meaning: "সর্বোচ্চ",
    virtue: "এই নামটি পাঠ করলে মর্যাদা বৃদ্ধি পায়।",
  },
  {
    arabic: "الكبير",
    bengali: "আল-কাবীর",
    meaning: "মহান",
    virtue: "এই নামটি পাঠ করলে আল্লাহর মহত্ব অনুভব করা যায়।",
  },
  {
    arabic: "الحفيظ",
    bengali: "আল-হাফীয",
    meaning: "সংরক্ষণকারী",
    virtue: "এই নামটি পাঠ করলে বিপদ থেকে রক্ষা পাওয়া যায়।",
  },
  {
    arabic: "المقيت",
    bengali: "আল-মুকীত",
    meaning: "শক্তি দানকারী",
    virtue: "এই নামটি পাঠ করলে শারীরিক ও মানসিক শক্তি বাড়ে।",
  },
  {
    arabic: "الحسيب",
    bengali: "আল-হাসীব",
    meaning: "হিসাব গ্রহণকারী",
    virtue: "এই নামটি পাঠ করলে কর্মের হিসাব রাখা সহজ হয়।",
  },
  {
    arabic: "الجليل",
    bengali: "আল-জালীল",
    meaning: "মহিমান্বিত",
    virtue: "এই নামটি পাঠ করলে আল্লাহর মহিমা অনুভব করা যায়।",
  },
  {
    arabic: "الكريم",
    bengali: "আল-কারীম",
    meaning: "মহানুভব",
    virtue: "এই নামটি পাঠ করলে উদারতা বৃদ্ধি পায়।",
  },
  {
    arabic: "الرقيب",
    bengali: "আর-রাকীব",
    meaning: "সর্বদা পর্যবেক্ষণকারী",
    virtue: "এই নামটি পাঠ করলে আত্মসংযম বৃদ্ধি পায়।",
  },
  {
    arabic: "المجيب",
    bengali: "আল-মুজীব",
    meaning: "জবাব দানকারী",
    virtue: "এই নামটি পাঠ করলে দোয়া কবুল হয়।",
  },
  {
    arabic: "الواسع",
    bengali: "আল-ওয়াসি",
    meaning: "প্রশস্ত",
    virtue: "এই নামটি পাঠ করলে জীবনে প্রাচুর্য আসে।",
  },
  {
    arabic: "الحكيم",
    bengali: "আল-হাকীম",
    meaning: "প্রজ্ঞাময়",
    virtue: "এই নামটি পাঠ করলে হিকমত লাভ হয়।",
  },
  {
    arabic: "الودود",
    bengali: "আল-ওয়াদুদ",
    meaning: "প্রেমময়",
    virtue: "এই নামটি পাঠ করলে মানুষের ভালোবাসা পাওয়া যায়।",
  },
  {
    arabic: "المجيد",
    bengali: "আল-মাজীদ",
    meaning: "অতি সম্মানিত",
    virtue: "এই নামটি পাঠ করলে সম্মান বৃদ্ধি পায়।",
  },
  {
    arabic: "الباعث",
    bengali: "আল-বাইছ",
    meaning: "পুনরুত্থানকারী",
    virtue: "এই নামটি পাঠ করলে নতুন উদ্যম পাওয়া যায়।",
  },
  {
    arabic: "الشهيد",
    bengali: "আশ-শাহীদ",
    meaning: "সাক্ষী",
    virtue: "এই নামটি পাঠ করলে সত্য প্রকাশ পায়।",
  },
  {
    arabic: "الحق",
    bengali: "আল-হাক্ক",
    meaning: "সত্য",
    virtue: "এই নামটি পাঠ করলে সত্যের পথে চলা সহজ হয়।",
  },
  {
    arabic: "الوكيل",
    bengali: "আল-ওয়াকীল",
    meaning: "কর্মবিধায়ক",
    virtue: "এই নামটি পাঠ করলে কাজে সাফল্য আসে।",
  },
  {
    arabic: "القوي",
    bengali: "আল-কাওয়ী",
    meaning: "শক্তিধর",
    virtue: "এই নামটি পাঠ করলে শারীরিক ও মানসিক শক্তি বাড়ে।",
  },
  {
    arabic: "المتين",
    bengali: "আল-মাতীন",
    meaning: "শক্তিশালী",
    virtue: "এই নামটি পাঠ করলে দৃঢ়তা আসে।",
  },
  {
    arabic: "الولي",
    bengali: "আল-ওয়ালী",
    meaning: "অভিভাবক",
    virtue: "এই নামটি পাঠ করলে আল্লাহর সাহায্য পাওয়া যায়।",
  },
  {
    arabic: "الحميد",
    bengali: "আল-হামীদ",
    meaning: "প্রশংসিত",
    virtue: "এই নামটি পাঠ করলে সুনাম অর্জিত হয়।",
  },
  {
    arabic: "المحصي",
    bengali: "আল-মুহসী",
    meaning: "হিসাবকারী",
    virtue: "এই নামটি পাঠ করলে হিসাব-নিকাশ সঠিক হয়।",
  },
  {
    arabic: "المبدئ",
    bengali: "আল-মুবদি",
    meaning: "আরম্ভকারী",
    virtue: "এই নামটি পাঠ করলে নতুন কাজ শুরু করা সহজ হয়।",
  },
  {
    arabic: "المعيد",
    bengali: "আল-মুঈদ",
    meaning: "পুনরাবর্তনকারী",
    virtue: "এই নামটি পাঠ করলে হারানো জিনিস ফিরে পাওয়া যায়।",
  },
  {
    arabic: "المحيي",
    bengali: "আল-মুহয়ী",
    meaning: "জীবনদাতা",
    virtue: "এই নামটি পাঠ করলে জীবনীশক্তি বাড়ে।",
  },
  {
    arabic: "المميت",
    bengali: "আল-মুমীত",
    meaning: "মৃত্যুদাতা",
    virtue: "এই নামটি পাঠ করলে মৃত্যুভয় দূর হয়।",
  },
  {
    arabic: "الحي",
    bengali: "আল-হাইয়্যু",
    meaning: "চিরঞ্জীব",
    virtue: "এই নামটি পাঠ করলে দীর্ঘায়ু লাভ হয়।",
  },
  {
    arabic: "القيوم",
    bengali: "আল-কাইয়্যুম",
    meaning: "স্বয়ংসম্পূর্ণ",
    virtue: "এই নামটি পাঠ করলে আত্মনির্ভরশীলতা বাড়ে।",
  },
  {
    arabic: "الواجد",
    bengali: "আল-ওয়াজিদ",
    meaning: "অফুরন্ত",
    virtue: "এই নামটি পাঠ করলে অভাব দূর হয়।",
  },
  {
    arabic: "الماجد",
    bengali: "আল-মাজিদ",
    meaning: "মহিমান্বিত",
    virtue: "এই নামটি পাঠ করলে মর্যাদা বৃদ্ধি পায়।",
  },
  {
    arabic: "الواحد",
    bengali: "আল-ওয়াহিদ",
    meaning: "এক ও অদ্বিতীয়",
    virtue: "এই নামটি পাঠ করলে তাওহীদ দৃঢ় হয়।",
  },
  {
    arabic: "الاحد",
    bengali: "আল-আহাদ",
    meaning: "একক",
    virtue: "এই নামটি পাঠ করলে একত্ববাদ দৃঢ় হয়।",
  },
  {
    arabic: "الصمد",
    bengali: "আস-সামাদ",
    meaning: "অমুখাপেক্ষী",
    virtue: "এই নামটি পাঠ করলে আত্মনির্ভরশীলতা বাড়ে।",
  },
  {
    arabic: "القادر",
    bengali: "আল-কাদির",
    meaning: "সর্বশক্তিমান",
    virtue: "এই নামটি পাঠ করলে সামর্থ্য বৃদ্ধি পায়।",
  },
  {
    arabic: "المقتدر",
    bengali: "আল-মুকতাদির",
    meaning: "পরাক্রমশালী",
    virtue: "এই নামটি পাঠ করলে শক্তি বৃদ্ধি পায়।",
  },
  {
    arabic: "المقدم",
    bengali: "আল-মুকাদ্দিম",
    meaning: "অগ্রগামীকারী",
    virtue: "এই নামটি পাঠ করলে উন্নতি সাধিত হয়।",
  },
  {
    arabic: "المؤخر",
    bengali: "আল-মুআখখির",
    meaning: "পশ্চাদবর্তীকারী",
    virtue: "এই নামটি পাঠ করলে বিপদ দূর হয়।",
  },
  {
    arabic: "الأول",
    bengali: "আল-আউয়াল",
    meaning: "প্রথম",
    virtue: "এই নামটি পাঠ করলে কাজে অগ্রগতি আসে।",
  },
  {
    arabic: "الآخر",
    bengali: "আল-আখির",
    meaning: "শেষ",
    virtue: "এই নামটি পাঠ করলে কাজের পরিণতি ভালো হয়।",
  },
  {
    arabic: "الظاهر",
    bengali: "আয-যাহির",
    meaning: "প্রকাশ্য",
    virtue: "এই নামটি পাঠ করলে সত্য প্রকাশ পায়।",
  },
  {
    arabic: "الباطن",
    bengali: "আল-বাতিন",
    meaning: "গোপন",
    virtue: "এই নামটি পাঠ করলে গোপন জ্ঞান লাভ হয়।",
  },
  {
    arabic: "الوالي",
    bengali: "আল-ওয়ালী",
    meaning: "অভিভাবক",
    virtue: "এই নামটি পাঠ করলে সুরক্ষা পাওয়া যায়।",
  },
  {
    arabic: "المتعالي",
    bengali: "আল-মুতাআলী",
    meaning: "সর্বোচ্চ",
    virtue: "এই নামটি পাঠ করলে আধ্যাত্মিক উন্নতি হয়।",
  },
  {
    arabic: "البر",
    bengali: "আল-বার",
    meaning: "পরোপকারী",
    virtue: "এই নামটি পাঠ করলে পরোপকার করার তাওফিক পাওয়া যায়।",
  },
  {
    arabic: "التواب",
    bengali: "আত-তাওয়াব",
    meaning: "তাওবা কবুলকারী",
    virtue: "এই নামটি পাঠ করলে তাওবা কবুল হয়।",
  },
  {
    arabic: "المنتقم",
    bengali: "আল-মুনতাকিম",
    meaning: "প্রতিশোধ গ্রহণকারী",
    virtue: "এই নামটি পাঠ করলে অত্যাচারীর হাত থেকে রক্ষা পাওয়া যায়।",
  },
  {
    arabic: "العفو",
    bengali: "আল-আফু",
    meaning: "ক্ষমাশীল",
    virtue: "এই নামটি পাঠ করলে গুনাহ মাফ হয়।",
  },
  {
    arabic: "الرؤوف",
    bengali: "আর-রাউফ",
    meaning: "সদয়",
    virtue: "এই নামটি পাঠ করলে দয়া লাভ হয়।",
  },
  {
    arabic: "مالك الملك",
    bengali: "মালিকুল মুলক",
    meaning: "সার্বভৌমত্বের মালিক",
    virtue: "এই নামটি পাঠ করলে আত্মসম্মান বৃদ্ধি পায়।",
  },
  {
    arabic: "ذو الجلال والإكرام",
    bengali: "যুল জালালি ওয়াল ইকরাম",
    meaning: "মহিমা ও সম্মানের অধিকারী",
    virtue: "এই নামটি পাঠ করলে সম্মান ও মর্যাদা বৃদ্ধি পায়।",
  },
  {
    arabic: "المقسط",
    bengali: "আল-মুকসিত",
    meaning: "ন্যায়পরায়ণ",
    virtue: "এই নামটি পাঠ করলে ন্যায়বিচার প্রতিষ্ঠিত হয়।",
  },
  {
    arabic: "الجامع",
    bengali: "আল-জামি",
    meaning: "একত্রকারী",
    virtue: "এই নামটি পাঠ করলে বিচ্ছিন্ন বিষয়গুলো একত্রিত হয়।",
  },
  {
    arabic: "الغني",
    bengali: "আল-গানী",
    meaning: "অমুখাপেক্ষী",
    virtue: "এই নামটি পাঠ করলে আত্মনির্ভরশীলতা বাড়ে।",
  },
  {
    arabic: "المغني",
    bengali: "আল-মুগনী",
    meaning: "অভাব মোচনকারী",
    virtue: "এই নামটি পাঠ করলে অভাব দূর হয়।",
  },
  {
    arabic: "المانع",
    bengali: "আল-মানি",
    meaning: "প্রতিরোধকারী",
    virtue: "এই নামটি পাঠ করলে অনিষ্ট থেকে রক্ষা পাওয়া যায়।",
  },
  {
    arabic: "الضار",
    bengali: "আদ-দারর",
    meaning: "ক্ষতিকারক",
    virtue: "এই নামটি পাঠ করলে শত্রুর ক্ষতি থেকে রক্ষা পাওয়া যায়।",
  },
  {
    arabic: "النافع",
    bengali: "আন-নাফি",
    meaning: "উপকারী",
    virtue: "এই নামটি পাঠ করলে কল্যাণ লাভ হয়।",
  },
  {
    arabic: "النور",
    bengali: "আন-নূর",
    meaning: "আলো",
    virtue: "এই নামটি পাঠ করলে জীবনে আলোকিত পথ পাওয়া যায়।",
  },
  {
    arabic: "الهادي",
    bengali: "আল-হাদী",
    meaning: "পথপ্রদর্শক",
    virtue: "এই নামটি পাঠ করলে সঠিক পথ নির্দেশনা পাওয়া যায়।",
  },
  {
    arabic: "البديع",
    bengali: "আল-বাদী",
    meaning: "অভিনব সৃষ্টিকারী",
    virtue: "এই নামটি পাঠ করলে নতুন কিছু সৃষ্টি করার ক্ষমতা বাড়ে।",
  },
  {
    arabic: "الباقي",
    bengali: "আল-বাকী",
    meaning: "চিরস্থায়ী",
    virtue: "এই নামটি পাঠ করলে কাজের স্থায়িত্ব আসে।",
  },
  {
    arabic: "الوارث",
    bengali: "আল-ওয়ারিছ",
    meaning: "উত্তরাধিকারী",
    virtue: "এই নামটি পাঠ করলে ভালো উত্তরাধিকার লাভ হয়।",
  },
  {
    arabic: "الرشيد",
    bengali: "আর-রশীদ",
    meaning: "সঠিক পথপ্রদর্শক",
    virtue: "এই নামটি পাঠ করলে সঠিক সিদ্ধান্ত নেওয়ার ক্ষমতা বাড়ে।",
  },
  {
    arabic: "الصبور",
    bengali: "আস-সাবুর",
    meaning: "ধৈর্যশীল",
    virtue: "এই নামটি পাঠ করলে ধৈর্য ধারণের ক্ষমতা বাড়ে।",
  },
]

export function AsmaUlHusna() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNames = asmaNames.filter(
    (name) =>
      name.arabic.includes(searchTerm) ||
      name.bengali.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.meaning.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>আসমাউল হুসনা (আল্লাহর ৯৯ নাম)</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="নাম খুঁজুন..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNames.map((name, index) => (
            <Card key={index} className="bg-secondary">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{name.bengali}</h3>
                <p className="text-lg mb-1">{name.arabic}</p>
                <p className="text-sm mb-2">{name.meaning}</p>
                <p className="text-xs text-muted-foreground">{name.virtue}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

