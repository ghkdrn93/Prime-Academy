/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, MapPin, ArrowRight, Star, 
  ShieldCheck, Trophy, Target, X, CheckCircle2
} from 'lucide-react';

// --- 애니메이션 설정 ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function App() {
  const [isElementaryModalOpen, setIsElementaryModalOpen] = useState(false);
  const [isMiddleModalOpen, setIsMiddleModalOpen] = useState(false);
  const [isHighModalOpen, setIsHighModalOpen] = useState(false);
  const [isNModalOpen, setIsNModalOpen] = useState(false);
  const [isIntensiveModalOpen, setIsIntensiveModalOpen] = useState(false);
  const [isTutoringModalOpen, setIsTutoringModalOpen] = useState(false);
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const [selectedInstructorImg, setSelectedInstructorImg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: ''
  });

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xnjopprl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', location: '' });
      } else {
        alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const programs = [
    { 
      title: "초등부", 
      subtitle: "영어 · 수학 · 전과목 · 엘리트 · CNN · 특수지도", 
      desc: "소수정예 1:1 맞춤 관리로 공부 습관부터 성적 향상까지 책임집니다. 365일 체계적인 관리 시스템을 경험해 보세요.",
      onClick: () => setIsElementaryModalOpen(true)
    },
    { 
      title: "중등부", 
      subtitle: "영어 · 수학 · 전과목 · 2개월 완성 · 메디컬 엘리트", 
      desc: "내신 상위권 진입과 고등 선행을 동시에 설계하는 중등 맞춤 시스템을 만나보세요.",
      onClick: () => setIsMiddleModalOpen(true)
    },
    { 
      title: "고등부", 
      subtitle: "영어 · 수학 · 2개월 완성 · 전과목 · 메디컬 엘리트", 
      desc: "내신과 수능을 동시에 잡는 전략형 프로그램으로 1등급 목표를 달성해 보세요.",
      onClick: () => setIsHighModalOpen(true)
    },
    { 
      title: "N수생", 
      subtitle: "N수생 종합반 · 관리형 독학N수반", 
      desc: "데이터 기반 전략과 365일 밀착 관리로 반드시 결과를 만들어내는 최강의 N수 트랙이에요.",
      onClick: () => setIsNModalOpen(true)
    },
    { 
      title: "집중관리", 
      subtitle: "중등 · 고등 · N수생 집중 관리반", 
      desc: "순공시간 확보와 철저한 피드백을 통해 학습 몰입도를 극대화해 보세요.",
      onClick: () => setIsIntensiveModalOpen(true)
    },
    { 
      title: "1:1 과외", 
      subtitle: "초 · 중 · 고 · N수생 프리미엄 개별 맞춤", 
      desc: "대치동식 1:1 수업을 학원 시스템으로 녹여낸 개인별 최적화 트랙을 경험해 보세요.",
      onClick: () => setIsTutoringModalOpen(true)
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-500/30 font-sans scroll-smooth">
      
      {/* --- 1. 내비게이션 헤더 --- */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer border-none bg-transparent p-0"
          >
            <img 
              src="https://i.ibb.co/RkhsdjQX/LOGO.png" 
              className="h-12 w-12 object-contain grayscale" 
              alt="Prime Academy Logo" 
              referrerPolicy="no-referrer" 
            />
            <div className="flex flex-col items-start leading-none">
              <div className="text-xl font-black tracking-tighter">프라임 학원</div>
              <div className="mt-[-1px] text-[13.4px] font-bold uppercase tracking-[-0.11em] text-neutral-500">Prime Academy</div>
            </div>
          </button>
          <nav className="hidden gap-8 text-[13px] font-semibold text-neutral-400 md:flex uppercase tracking-widest">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-white transition-colors cursor-pointer border-none bg-transparent p-0 font-semibold uppercase tracking-widest"
            >
              Home
            </button>
            <a href="#programs" className="hover:text-white transition-colors">Programs</a>
            <a href="#instructors" className="hover:text-white transition-colors">Instructors</a>
            <a href="#elite" className="hover:text-amber-500 transition-colors">Elite Track</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* --- 2. 히어로 섹션 (첫 화면) --- */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        {/* 흑백 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" 
            className="h-full w-full object-cover grayscale opacity-20" 
            alt="study hall"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-bold text-red-400 backdrop-blur-md">
              인서울 · SKY · 메디컬 상위권 진학 전문
            </div>
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl lg:text-9xl">
              성적은 <span className="text-red-600">관리</span>가<br />
              전부입니다.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
              단순한 지식 전달을 넘어, 학생의 24시간을 설계해 드립니다.<br />
              강남 8학군 시스템 그 이상의 초밀착 케어로<br />성적의 임계점을 돌파해 보세요.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <a href="#contact" className="flex h-16 items-center rounded-2xl bg-red-600 px-10 text-base font-black text-white shadow-2xl shadow-red-600/20 transition hover:bg-red-700 hover:scale-105 active:scale-95 cursor-pointer">
                지금 바로 상담받기
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. 프로그램 섹션 --- */}
      <section id="programs" className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <motion.div {...fadeInUp} className="mb-20 text-center">
          <div className="text-sm font-bold tracking-[0.4em] text-red-500 uppercase">Our Programs</div>
          <h2 className="mt-4 text-4xl font-black sm:text-6xl">검증된 맞춤형 커리큘럼</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((p, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-neutral-900/40 p-10 transition hover:border-red-500/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/5 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-10 text-xs font-black text-neutral-700">PRIME COURSE 0{idx + 1}</div>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm font-bold text-red-500">{p.subtitle}</p>
                <p className="mt-6 leading-relaxed text-neutral-400">{p.desc}</p>
                <button 
                  onClick={() => p.onClick && p.onClick()}
                  className="mt-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors cursor-pointer"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 4. 메디컬 엘리트 트랙 (DEEP RED & GOLD POINT) --- */}
      <section id="elite" className="relative overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80" 
            className="h-full w-full object-cover grayscale opacity-10 mix-blend-luminosity" 
            alt="elite library"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a0505] via-neutral-950 to-[#1a1305] opacity-95" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div 
            {...fadeInUp}
            className="rounded-[3.5rem] border border-amber-500/20 bg-gradient-to-br from-white/[0.03] to-transparent p-10 lg:p-24 backdrop-blur-xl"
          >
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.4em] text-amber-500 uppercase">
                  <Trophy className="w-4 h-4" /> Medical Elite Track
                </div>
                <h2 className="mt-6 text-4xl font-black leading-tight sm:text-6xl text-white">
                  상위 1%를 위한<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">메디컬 엘리트</span><br />과정
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-neutral-300">
                  의치약한수 및 최상위권 명문대 진학을 목표로 하는 선발형 클래스예요. 
                  심화 수학, 과탐 킬러 문항 정복, 학생부 종합 전담 관리까지 
                  엘리트 클래스만의 압도적인 지원을 경험해 보세요.
                </p>
                
                <div className="mt-12 flex gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-black text-amber-500">82%</div>
                    <div className="mt-1 text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">합격률</div>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div className="text-center">
                    <div className="text-3xl font-black text-amber-500">1:5</div>
                    <div className="mt-1 text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">밀착 비율</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "중등 조기 메디컬 선발 트랙 운영",
                  "고등 내신 1등급 유지 전략 시스템",
                  "수능 수학·과학 만점 목표 심화 훈련",
                  "메디컬 전용 면접 및 생기부 컨설팅",
                ].map((text, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5 rounded-3xl border border-amber-500/10 bg-amber-500/5 p-6 backdrop-blur-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-base font-semibold text-amber-100/90">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* --- 수강료 안내 섹션 --- */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <motion.div 
          {...fadeInUp}
          className="overflow-hidden rounded-[3rem] border border-white/5 bg-neutral-900/40 p-10 lg:p-16 backdrop-blur-xl"
        >
          <div className="mb-16 text-center">
            <div className="text-sm font-bold tracking-[0.4em] text-red-500 uppercase">Tuition & Fees</div>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">프라임 학원 수강료</h2>
          </div>

          <div className="relative">
            {/* Mobile Scroll Hint */}
            <div className="mb-4 flex items-center justify-center gap-2 text-xs font-bold text-neutral-500 md:hidden">
              <ArrowRight className="h-3 w-3 rotate-180 opacity-50" />
              좌우로 스크롤하여 확인하세요
              <ArrowRight className="h-3 w-3 opacity-50" />
            </div>

            <div className="overflow-x-auto pb-6 scrollbar-hide">
              <table className="w-full min-w-[600px] text-left md:min-w-0">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4 text-xs font-black uppercase tracking-widest text-neutral-500">구분</th>
                    <th className="pb-4 text-right text-xs font-black uppercase tracking-widest text-neutral-500">2회</th>
                    <th className="pb-4 text-right text-xs font-black uppercase tracking-widest text-neutral-500">3회</th>
                    <th className="pb-4 text-right text-xs font-black uppercase tracking-widest text-neutral-500">4회</th>
                    <th className="pb-4 text-right text-xs font-black uppercase tracking-widest text-neutral-500">5회</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { label: "초등", prices: ["200,000", "300,000", "390,000", "510,000"] },
                    { label: "중등", prices: ["210,000", "320,000", "430,000", "530,000"] },
                    { label: "고등", prices: ["210,000", "320,000", "430,000", "540,000"] },
                    { label: "N수생/성인", prices: ["220,000", "330,000", "445,000", "550,000"] },
                  ].map((row, i) => (
                    <tr key={i} className="group transition-colors hover:bg-white/5">
                      <td className="py-6 text-lg font-black text-white">{row.label}</td>
                      {row.prices.map((price, j) => (
                        <td key={j} className="py-6 text-right font-mono text-lg font-bold text-neutral-400 group-hover:text-red-500">
                          {price}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5">
              <CheckCircle2 className="w-6 h-6 text-red-600" />
              <span className="text-sm font-bold text-neutral-300">대치동식 365일 특수 관리!</span>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5">
              <CheckCircle2 className="w-6 h-6 text-red-600" />
              <span className="text-sm font-bold text-neutral-300">관리형 독서실 및 스터디 무료 제공!</span>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-red-600/10 p-5 border border-red-600/20">
              <span className="text-sm font-bold text-red-400">※ 코칭 수업료 및 교재비는 별도</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 4. 강사진 (Instructors) --- */}
      <section id="instructors" className="relative overflow-hidden py-32 bg-neutral-950">
        {/* 장식적 배경 요소 */}
        <div className="absolute left-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-red-600/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-red-900/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeInUp} className="mb-24 text-center">
            <div className="text-sm font-bold tracking-[0.4em] text-red-500 uppercase">Expert Faculty</div>
            <h2 className="mt-4 text-5xl font-bold tracking-tighter text-white sm:text-7xl uppercase">PRIME Instructors</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-bold text-neutral-400">
              대치동 최정예 강사진의 노하우를 그대로 동탄 프라임 학원에서 만나보세요.<br />
              단순한 수업을 넘어 학생의 미래를 함께 고민합니다.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-14"
          >
            {[
              "https://i.ibb.co/hRzTdx5Z/Kakao-Talk-20260516-123111670.jpg",
              "https://i.ibb.co/2Y3ycZBF/Kakao-Talk-20260516-123116018.jpg",
              "https://i.ibb.co/Xfxyfstt/Kakao-Talk-20260516-123121268.jpg",
              "https://i.ibb.co/LdKwqy91/Kakao-Talk-20260516-123126573.jpg",
              "https://i.ibb.co/YFgJ0T7W/Kakao-Talk-20260516-123213897.jpg",
              "https://i.ibb.co/gMsRFvY8/Kakao-Talk-20260516-131248376.png",
              "https://i.ibb.co/G3WFTZ4p/Kakao-Talk-20260516-133934830.png",
              "https://i.ibb.co/N6hjvfk5/Kakao-Talk-20260520-203923393.jpg"
            ].map((img, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -15 }}
                onClick={() => setSelectedInstructorImg(img)}
                className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/50 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-red-600/30 hover:bg-neutral-900/80 hover:shadow-red-600/10"
              >
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="relative z-10 overflow-hidden rounded-[2rem]">
                  <img 
                    src={img} 
                    className="w-full aspect-[2/3] object-cover block transform transition-transform duration-700" 
                    alt={`Instructor ${i + 1}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 5. 상담 및 푸터 --- */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <motion.div 
          {...fadeInUp}
          className="relative overflow-hidden rounded-[4rem] bg-white p-12 lg:p-24 text-neutral-950"
        >
          <div className="absolute inset-0 z-0">
             <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
              className="h-full w-full object-cover grayscale opacity-[0.05]" 
              alt="teamwork"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-end">
            <div>
              <h2 className="text-5xl font-black leading-[1.1] tracking-tighter sm:text-7xl">
                망설이는<br />오늘이<br />성적의 <span className="text-red-600">고점</span>이 됩니다.
              </h2>
              <p className="mt-8 text-xl font-medium text-neutral-600">
                지금 바로 상담을 예약하고 자녀의 입시 전략을<br />재설계해 보세요.<br />
                프라임 학원의 문은 상위권을 향해<br />언제나 열려 있습니다.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  setIsConsultationFormOpen(true);
                  setIsSubmitted(false);
                }}
                className="rounded-[2rem] bg-red-600 py-7 text-2xl font-black text-white transition hover:bg-red-700 shadow-xl shadow-red-600/20 cursor-pointer"
              >
                온라인 상담 신청하기
              </button>

              <div className="flex items-center justify-center gap-4 rounded-[2rem] bg-neutral-950 py-7 text-2xl font-black text-white shadow-xl shadow-white/5 border border-white/10">
                <Phone className="w-7 h-7 fill-red-600 text-red-600" /> 1800-7130
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-24 grid gap-10 border-t border-neutral-100 pt-16 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 w-6 h-6 text-red-600" />
              <div>
                <div className="font-black uppercase tracking-widest text-neutral-400 text-xs">Address</div>
                <div className="mt-2 font-bold text-lg">경기도 화성시 동탄구<br />동탄순환대로 20, 2~3층</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 w-6 h-6 text-red-600" />
              <div>
                <div className="font-black uppercase tracking-widest text-neutral-400 text-xs">Hours</div>
                <div className="mt-2 font-bold text-lg">매일 10:00 - 22:00 (연중무휴)</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Target className="mt-1 w-6 h-6 text-red-600" />
              <div>
                <div className="font-black uppercase tracking-widest text-neutral-400 text-xs">Consultation</div>
                <div className="mt-2 font-bold text-lg">레벨테스트 및 방문상담 100%<br />예약제</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/5 bg-neutral-950 py-20 text-neutral-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
            {/* Logo and Name */}
            <div className="flex items-center gap-3 shrink-0">
              <img 
                src="https://i.ibb.co/RkhsdjQX/LOGO.png" 
                className="h-10 w-10 object-contain grayscale opacity-60" 
                alt="Prime Academy Logo" 
                referrerPolicy="no-referrer" 
              />
              <div className="flex flex-col items-start leading-none">
                <div className="text-xl font-black tracking-tighter text-neutral-400">프라임 학원</div>
                <div className="mt-[-1px] text-[13.4px] font-bold uppercase tracking-[-0.11em] text-neutral-600">Prime Academy</div>
              </div>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden h-12 w-px bg-white/10 md:block" />

            {/* Details */}
            <div className="space-y-2 text-center md:text-left">
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-[12px] font-bold text-neutral-500 md:justify-start">
                <span>주소 : 경기도 화성시 동탄구 동탄순환대로 20, 2~3층</span>
                <span className="text-neutral-800">·</span>
                <span>전화번호 : 1800-7130</span>
                <span className="text-neutral-800">·</span>
                <span>팩스번호 : 070-7507-8709</span>
                <span className="text-neutral-800">·</span>
                <span>사업자등록번호 : 217-11-68827</span>
              </div>
              <div className="text-[11px] font-bold text-neutral-600">
                Copyright © 프라임 학원 All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* --- 중등부 상세 모달 --- */}
      <AnimatePresence>
        {isMiddleModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMiddleModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative h-full max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[3rem] bg-white shadow-2xl"
            >
              {/* 모달 헤더 */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white/80 px-8 py-6 backdrop-blur-md">
                <div>
                  <h2 className="text-2xl font-black text-neutral-950">중등부 교육과정 상세</h2>
                  <p className="text-sm font-bold text-red-600">소수정예 중등부 대상 (10명 미만)</p>
                </div>
                <button 
                  onClick={() => setIsMiddleModalOpen(false)}
                  className="rounded-full bg-neutral-100 p-3 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-950 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* 모달 컨텐츠 */}
              <div className="h-full overflow-y-auto px-8 py-12 pb-32">
                <div className="space-y-16 text-neutral-800">
                  {/* 01_책임학사관리시스템 */}
                  <section>
                    <h3 className="text-xl font-black text-neutral-950 mb-6">주 5일 수업 365일 개별 맞춤 책임학사관리시스템</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { title: "① 출결 100% 실시간 관리", desc: "월간 출결 리모트 제공" },
                        { title: "② 성적 데이터 분석 시스템", desc: "체계적인 성적 추이 분석" },
                        { title: "③ 1:1 약점 클리닉 및 피드백", desc: "학생별 취약 파일 관리" },
                        { title: "④ 숙제 이행률 체크 시스템", desc: "학습 습관 교정 프로그램" },
                        { title: "⑤ 월간 학습 리포트 제공", desc: "성취도 분석 및 학부모 상담 연계" },
                        { title: "⑥ 단원별 취약파트 강제 보완", desc: "완전 학습을 위한 보충 지도" }
                      ].map((item, i) => (
                        <div key={i} className="rounded-2xl border border-neutral-100 p-5">
                          <div className="font-black text-red-600 mb-1">{item.title}</div>
                          <div className="text-sm text-neutral-500 font-bold">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 02_추천 대상 */}
                  <section className="rounded-[2.5rem] bg-neutral-50 p-8 lg:p-12">
                    <h4 className="text-xl font-black mb-8">이런 학생, 믿고 맡겨 주세요!</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "수학·영어 과목이 흥미가 없고 자신감이 없는 학생",
                        "학생 스스로 공부하지 못하거나 집중력이 약한 아이",
                        "성적은 정체되어 있고 근본적인 원인을 모르는 경우",
                        "학원 수강료로 1:1 과외식 밀착 관리를 원하는 학생",
                        "인서울 大 진학과 내신 상위권 진입이 목표인 학생",
                        "기초가 부족하고 365일 관리가 필요한 학생"
                      ].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                          <p className="text-sm font-bold leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 1. 중등 영어 전문반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">1. 중등 영어 전문반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(주 5일 수업 365일 책임관리)</p>
                    </div>
                    <div className="rounded-3xl bg-red-50 p-8">
                      <p className="text-lg font-black text-red-700 mb-6">☆ 중등 내신 만점과 고등 내신 1등급 수능영어 1등급으로 이어지는 독보적인 체계적 영어 강의!</p>
                      <h5 className="font-black text-lg mb-4">01_프라임 중등 영어 시스템</h5>
                      <div className="grid gap-3 text-sm font-bold text-neutral-700">
                        {[
                          "① 문법 개념 100% 이해 및 완전 체계적인 정리",
                          "② 수능형 독해력 체계적인 실력 구축",
                          "③ 교과서 문법·독해 완전 마스터",
                          "④ 독해 비법·방법·구조·공부 방법 완전 터득",
                          "⑤ 고난도 독해 혼자 해결 및 직접 설명함",
                          "⑥ 매월 필수 단어 1,000 ~ 1,500개 특수 암기",
                          "⑦ 중간·기말 내신 영어 만점 오직 학원서 해결 후 귀가"
                        ].map((text, i) => (
                          <div key={i} className="flex gap-2">
                            <span>{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* 2. 중등 수학 전문반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">2. 중등 수학 전문반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(주 5일 수업 365일 책임관리)</p>
                    </div>
                    <div className="space-y-6">
                      <div className="rounded-3xl border border-neutral-100 p-8">
                        <h5 className="font-black text-lg mb-4 text-red-600">01_중등 수학이 왜! 중요한가?</h5>
                        <div className="grid gap-3 text-sm font-bold">
                          {[
                            "① 고등 내신의 70~80%는 중등 개념에서 시작",
                            "② 수학적 사고력 차이는 중 2부터 결정",
                            "③ 고교 내신 상위권은 이미 중학교 때 완성",
                            "④ 중등 수학이 명문대학을 결정하고 자신감을 갖게 함",
                            "⑤ 수학이 흔들리면 전 과목이 무너짐",
                            "⑥ 의대 및 상위권 출발점은 중등 내신"
                          ].map((text, i) => <p key={i}>{text}</p>)}
                        </div>
                      </div>
                      <div className="rounded-3xl bg-neutral-900 p-8 text-white">
                        <h5 className="font-black text-lg mb-4 text-red-500">02_프라임 중등 수학 시스템</h5>
                        <div className="grid gap-3 text-sm font-bold opacity-90">
                          {[
                            "① 개념 완전 정복 (공식 암기가 아닌 원리 이해)",
                            "② 유형 정복 시스템 (학교별 고난도·서술형 대비)",
                            "③ 심화·응용 문제 특수 훈련 {\"->\"} 서술형 및 고난도 집중 지도",
                            "④ 오답 누적 데이터 관리 (실수 패턴 및 약점 반복 보완)",
                            "⑤ 고등 선행 수업 설계 (중 3부터 고등 과정 철저 준비)",
                            "⑥ 공부 방법 터득, 꾸준히 성실하게 스스로 자기주도 공부"
                          ].map((text, i) => <p key={i}>{text}</p>)}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 3. 중등 영어 2개월 완성반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">3. 중등 영어 2개월 완성반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(문법·독해 체계적으로 완성합니다.)</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-3xl bg-neutral-50 p-8">
                        <h5 className="font-black text-lg mb-4">01_체계적인 문법 완성반</h5>
                        <p className="text-xs font-bold text-neutral-500 mb-4">문법이 이해되면 독해가 쉬워지고 내신만점으로 공부의 자신감을 찾게 됩니다.</p>
                        <div className="flex flex-wrap gap-2">
                          {["문장구조", "품사", "동사종류", "시제", "부정사", "동명사", "분사", "조동사", "태", "대명사", "관사", "형용사", "비교", "접속사", "전치사", "관계사", "가정법", "부사", "화법", "특수구문"].map((tag, i) => (
                            <span key={i} className="rounded-lg bg-white px-2 py-1 text-[10px] font-black text-neutral-400 border border-neutral-100">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-3xl bg-neutral-50 p-8">
                        <h5 className="font-black text-lg mb-4">02_독보적인 독해 비법 완성반</h5>
                        <p className="text-xs font-bold text-neutral-500 mb-4">단어를 알아도 해석이 안되는 이유는 독해 방법과 구조를 배우지 않았기 때문입니다.</p>
                        <div className="space-y-2 text-sm font-bold">
                          {["① 독해 방법 및 구조", "② 끊어 읽기", "③ 속독 독해", "④ 문장 분석 방법 특수 훈련", "⑤ 핵심 요지 찾기 훈련"].map((text, i) => <p key={i}>{text}</p>)}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 4. 중등 전과목 종합반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">4. 중등 전과목 종합반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">☆ 중등 밀착관리 '전과목' 종합반</p>
                    </div>
                    <div className="rounded-[3rem] bg-neutral-950 p-10 text-white border border-white/10">
                      <div className="mb-8 space-y-2">
                        <p className="font-black text-red-600">☆ 학교 끝나고 학원에 바로 입소·석식 제공 선택</p>
                        <p className="font-black">☆ 중학교 성적은 수업 및 공부량보다 관리의 차이에서 결정됩니다.</p>
                        <p className="font-black text-red-600">☆ 전과목 365일 책임관리!</p>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {[
                          { title: "전과목 종합 관리", desc: "영·수·국·과·사 과목별 편차 솔루션" },
                          { title: "숙제·오답 통합관리", desc: "완료율 체크 및 개별 데이터 분석" },
                          { title: "시험 전 집중관리", desc: "고난도 및 서술형 대비 특수 반복 훈련" },
                          { title: "1:1 개별 맞춤 피드백", desc: "약점 집중 분석 및 맞춤 보완 수업" }
                        ].map((item, i) => (
                          <div key={i} className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                            <div className="font-black mb-1">{item.title}</div>
                            <div className="text-xs opacity-80 font-bold">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* 5. 중등 조기 메디컬 엘리트반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-amber-500 pl-6">
                      <h4 className="text-2xl font-black">5. 중등 조기 메디컬 엘리트반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(지원자격 {"->"} 전과목 상위 10% 유지 학생)</p>
                    </div>
                    <div className="rounded-[3rem] border border-amber-500/20 bg-gradient-to-br from-amber-50 to-white p-10">
                      <div className="mb-10 space-y-3 text-amber-900">
                        <p className="text-lg font-black">☆ 의대·치대·약대·수의대·한의대 지향 학생만 선발합니다.</p>
                        <p className="text-sm font-bold opacity-80">☆ 메디컬 대학 진학은 중학교부터 준비해야 경쟁력 결정과 목표대학 합격 보장!</p>
                        <p className="text-sm font-bold opacity-80">☆ 매년 수험생 중 전국 상위 1~2%만이 진학할 수 있습니다.</p>
                      </div>
                      <div className="space-y-4">
                        <div className="text-xs font-black text-amber-600 uppercase tracking-widest mb-4">※ 상위 1%를 위한 메디컬 프로그램</div>
                        {[
                          "전 과목 중등 내신 + 심화 사고력 1등급 선점 전략",
                          "고등 수학·과학 체계적인 선행 심화",
                          "사고력 기반 고난도 문제 및 킬러 서술형 문제 해결 반복 특수훈련",
                          "학습 습관 & 자기 주도 학습 완성 시스템",
                          "개별 1:1 맞춤 강도 높은 365일 피드백 관리"
                        ].map((text, i) => (
                          <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm font-bold text-amber-900">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 고등부 상세 모달 --- */}
      <AnimatePresence>
        {isHighModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsHighModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative h-full max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[3rem] bg-white shadow-2xl"
            >
              {/* 모달 헤더 */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white/80 px-8 py-6 backdrop-blur-md">
                <div>
                  <h2 className="text-2xl font-black text-neutral-950">고등부 교육과정 상세</h2>
                  <p className="text-sm font-bold text-red-600">소수정예 고등부 대상 (10명 미만)</p>
                </div>
                <button 
                  onClick={() => setIsHighModalOpen(false)}
                  className="rounded-full bg-neutral-100 p-3 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-950 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* 모달 컨텐츠 */}
              <div className="h-full overflow-y-auto px-8 py-12 pb-32">
                <div className="space-y-16 text-neutral-800">
                  {/* 01_학사관리 */}
                  <section>
                    <h3 className="text-xl font-black text-neutral-950 mb-6">1등급을 목표로 설계된 프라임 학사관리</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "✔ 학원 끝나고 바로 입소 및 식사",
                        "✔ 주 5일 밀착 수업",
                        "✔ 365일 맞춤 책임 관리 시스템",
                        "✔ 내신 1등급을 목표로 설계된 프라임 학사관리"
                      ].map((text, i) => (
                        <div key={i} className="rounded-2xl bg-red-50 p-5 text-sm font-black text-red-700">
                          {text}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 02_추천 대상 */}
                  <section className="rounded-[2.5rem] bg-neutral-50 p-8 lg:p-12">
                    <h4 className="text-xl font-black mb-8">이런 학생, 믿고 맡겨 주세요</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "수학과목에 흥미가 없고 내신 70점 이하 학생",
                        "내신 2~7등급에서 1등급으로 도약이 필요한 학생",
                        "개념은 알지만 서술형·고난도·킬러 문제 적용이 어려운 학생",
                        "의대 및 상위권 대학을 목표로 하는 학생"
                      ].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                          <p className="text-sm font-bold leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 1. 고등 영어 전문반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">1. 고등 영어 전문반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(영어의 성적은 강사의 차이입니다.)</p>
                    </div>
                    <div className="rounded-3xl bg-neutral-900 p-8 text-white">
                      <div className="mb-8 space-y-2">
                        <p className="font-black text-red-500">☆ 독보적인 대치동 강사진이 완성하는 고등영어</p>
                        <p className="font-black">☆ 내신 1등급 전략 주 5일 밀착수업</p>
                        <p className="font-black">☆ 365일 맞춤 특수 책임 관리 시스템</p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 text-sm font-bold opacity-90">
                        {[
                          "① 학년별, 수준별 개별 맞춤 수업",
                          "② 학교별 시험 범위 체계적 완벽 분석",
                          "③ 문법·독해 체계 완성",
                          "④ 고난도 독해 및 서술형 문제 집중 트레이닝",
                          "⑤ 수능 영어 및 모의고사 동시대비",
                          "⑥ 내신 영어 상위 4% 목표 문법·독해 완전 터득"
                        ].map((text, i) => <p key={i}>{text}</p>)}
                      </div>
                    </div>
                  </section>

                  {/* 2. 고등 수학 전문반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">2. 고등 수학 전문반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(성적 향상을 위한 전략적 수학 관리 프로그램)</p>
                    </div>
                    <div className="rounded-3xl border border-neutral-100 p-8">
                      <h5 className="font-black text-lg mb-6 text-red-600">01_프로그램</h5>
                      <div className="grid gap-3 text-sm font-bold">
                        {[
                          "① 학교수업 당일 예습·복습 완전 습득 데이터 축적",
                          "② 학년별, 수준별 개별 맞춤 주 5일 밀착수업 365일 책임관리",
                          "③ 학교별 내신 맞춤 완벽 대비",
                          "④ 수능형 수학 사고력 문제 훈련",
                          "⑤ 개념·유형·심화·서술형 단계별 맞춤 커리큘럼",
                          "⑥ 1:1 개별 피드백 데이터 관리",
                          "⑦ 오답 분석 기반 약점 집중 보완 수업",
                          "⑧ 개념완성 → 유형완전정복 → 실전적용 → 킬러문항 스스로 해결 → 내신+모의고사 동시대비"
                        ].map((text, i) => <p key={i}>{text}</p>)}
                      </div>
                      <p className="mt-8 text-center font-black text-red-600">☆ 성취 경험을 통해 수학에 대한 두려움을 자신감으로 바꿉니다!</p>
                    </div>
                  </section>

                  {/* 3. 고등 영어 2개월 완성반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">3. 고등 영어 2개월 완성반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(스스로 해석하고 해결하는 공부습관)</p>
                    </div>
                    <div className="rounded-[3rem] bg-neutral-950 p-10 text-white border border-white/10">
                      <div className="mb-10 grid gap-6 md:grid-cols-2">
                        <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-md">
                          <div className="font-black mb-2 text-red-500">1. 영어 독해구조와 해석방법 Master 2개월 완성반</div>
                        </div>
                        <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-md">
                          <div className="font-black mb-2 text-red-500">2. 영어 문법·어법 실전 체계적 Master 8주 완성</div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h5 className="text-xl font-black text-red-600">01_이런 학생들은 꼭 배워야 합니다.</h5>
                        <div className="grid gap-3 text-sm font-bold opacity-90">
                          {["① 단어를 다 알아도 해석이 안 되는 학생", "② 문장은 읽는데 문제를 틀리는 학생", "③ 문법은 배웠는데 적용이 안되는 학생", "④ 고난도 독해를 스스로 해결 못하는 학생"].map((text, i) => <p key={i}>{text}</p>)}
                        </div>
                        <h5 className="text-xl font-black mt-10 text-red-600">02_2개월 후 변화</h5>
                        <div className="grid gap-3 text-sm font-bold opacity-90">
                          {["① 긴 문장도 끊어 읽지 않고 한 번에 해석", "② 주어·동사·수식어 자동 분석", "③ 시험 지문 독해속도 2배 향상", "④ 내신·모의고사 독해 오답률 감소 및 혼자 해결", "⑤ 문법 문제·서술형 문제 적용 능력 상승"].map((text, i) => <p key={i}>{text}</p>)}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 4. 고등 전과목 종합반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">4. 고등 전과목 종합반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(전과목 365일 집중관리)</p>
                    </div>
                    <div className="space-y-6">
                      <div className="rounded-3xl bg-neutral-50 p-8">
                        <h5 className="font-black text-lg mb-6">01_프라임 종합반 관리 시스템</h5>
                        <div className="grid gap-4 sm:grid-cols-2 text-sm font-bold">
                          {[
                            "① 학교별, 학년별, 수준별 개별 맞춤 수업",
                            "② 영어·수학 집중관리, 국어·탐구 내신관리",
                            "③ 개인별 학습시간 체크 및 일일 학습량 점검",
                            "④ 진도·숙제·시험범위 체계적 관리",
                            "⑤ 학교별 시험 유형 및 오답 집중 데이터 관리",
                            "⑥ 서술형·고난도·킬러 문항 대비 특수 훈련",
                            "⑦ 1:1 개별 맞춤 피드백",
                            "⑧ 자기 주도 학습 습관 완성 및 성취도 분석"
                          ].map((text, i) => <p key={i}>{text}</p>)}
                        </div>
                      </div>
                      <div className="rounded-3xl border border-neutral-100 p-8">
                        <h5 className="font-black text-lg mb-6">02_수시 및 정시 전형 유형별 비율</h5>
                        <div className="grid gap-2 text-xs font-bold text-neutral-500">
                          <p>① 수시모집 약 80%, 정시모집 약 20% 선발</p>
                          <p>② 수시 학생부 교과 전형 약 45%</p>
                          <p>③ 수시 학생부 종합 전형 약 30%</p>
                          <p>④ 수시 논술 전형 약 3~5%</p>
                          <p>⑤ 정시 수능 전형 약 20%</p>
                        </div>
                        <p className="mt-6 font-black text-neutral-950">"모든 수시 전형은 내신 성적이 기본 조건입니다."</p>
                      </div>
                    </div>
                  </section>

                  {/* 5. 고등 메디컬 엘리트반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-amber-500 pl-6">
                      <h4 className="text-2xl font-black">5. 고등 메디컬 엘리트반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(학년별·수준별·개별 1:1 맞춤 365일 책임관리)</p>
                    </div>
                    <div className="rounded-[3rem] border border-amber-500/20 bg-gradient-to-br from-amber-50 to-white p-10">
                      <div className="mb-10 space-y-3 text-amber-900">
                        <p className="text-lg font-black">☆ 의대·치대·약대·수의대·한의대 지향 학생만 선발해서 책임 관리합니다.</p>
                        <p className="text-sm font-bold opacity-80">✔ 대한민국 최고 수준의 의대 합격 전문 프로그램</p>
                        <p className="text-sm font-bold opacity-80">✔ 목표 {"->"} 의예·치의예·한의예 최상위권 합격</p>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                          <div className="text-xs font-black text-amber-600 uppercase tracking-widest mb-4">01_주요과목 커리큘럼</div>
                          <div className="space-y-2 text-sm font-bold text-amber-900">
                            <p>① 국어 (독해/문학/비문학)</p>
                            <p>② 수학 (개념선행 + 심화, 킬러문항 심화)</p>
                            <p>③ 영어 (통합 + 고난도 독해 완파) 1등급 고정</p>
                            <p>④ 과탐 (물/화/생/지 2과목 맞춤관리)</p>
                            <p>⑤ 비교과 완벽준비</p>
                          </div>
                        </div>
                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                          <div className="text-xs font-black text-amber-600 uppercase tracking-widest mb-4">02_의학계열 특화 프로그램</div>
                          <div className="space-y-2 text-sm font-bold text-amber-900">
                            <p>① 내신 1~1.3 등급 확보 필수 관리</p>
                            <p>② 내신 서술형 및 수행평가 대비</p>
                            <p>③ 수시면접/인성검사 대비</p>
                            <p>④ 수시 실전 모의 면접 + 피드백</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 초등부 상세 모달 --- */}
      <AnimatePresence>
        {isElementaryModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsElementaryModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative h-full max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[3rem] bg-white shadow-2xl"
            >
              {/* 모달 헤더 */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white/80 px-8 py-6 backdrop-blur-md">
                <div>
                  <h2 className="text-2xl font-black text-neutral-950">초등부 교육과정 상세</h2>
                  <p className="text-sm font-bold text-red-600">소수정예 1:1 맞춤 관리 시스템</p>
                </div>
                <button 
                  onClick={() => setIsElementaryModalOpen(false)}
                  className="rounded-full bg-neutral-100 p-3 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-950 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* 모달 컨텐츠 */}
              <div className="h-full overflow-y-auto px-8 py-12 pb-32">
                <div className="space-y-16 text-neutral-800">
                  {/* 코스 개요 */}
                  <section>
                    <h3 className="text-xl font-black text-neutral-950 mb-6">소수정예 초등부 대상 교육과정</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "영어반 (몰입영어)", "수학반 (개념100%이해)", "전과목반 (365일 특수관리)",
                        "엘리트반 (국·영·수 연합반)", "CNN반 (미국생활)", "전문특수지도"
                      ].map((course, i) => (
                        <div key={i} className="flex items-center justify-center rounded-2xl bg-red-50 p-4 text-center text-xs font-black text-red-700">
                          {course}
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-lg font-bold leading-relaxed text-neutral-900">
                      "공부에 자신감을 UP시켜 365일 흥미를 가지고 스스로 공부하게 만드는 체계적인 1:1 맞춤 관리 학원!"
                    </p>
                  </section>

                  {/* 추천 대상 */}
                  <section className="rounded-[2.5rem] bg-neutral-50 p-8 lg:p-12">
                    <h4 className="text-xl font-black mb-8">이런 학생, 믿고 맡겨주세요!</h4>
                    <div className="space-y-6">
                      {[
                        { title: "✔", desc: "공부량이 부족하고 재미가 없어서 집중력이 약하고 자기주도 학습이 안되고, 공부습관 및 공부방법을 모르는 아이들" },
                        { title: "✔", desc: "학원을 다니지만 성적이 계속 그대로이고 선행이 버거운 학생" },
                        { title: "✔", desc: "대치동처럼 체계적인 선행수업을 받고 싶은 중·상위권 학생" },
                        { title: "✔", desc: "80점 이하 하위권 혹은 중위권 친구들" },
                        { title: "✔", desc: "기초가 부족하고 365일 관리가 필요한 학생" }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="text-sm font-black text-red-600 shrink-0">{item.title}</span>
                          <p className="text-sm font-medium leading-relaxed text-neutral-700">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 수업 방식 */}
                  <section>
                    <h4 className="text-xl font-black mb-8">이런식으로 수업합니다! (성향별 꼼꼼한 1:1 집중 관리)</h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "출석체크", "숙제확인 및 오답정리", "명강사의 수업 100% 이해",
                        "개인별 목표 설정 및 자기주도학습", "개별 질문 및 1:1 맞춤지도",
                        "코칭과 방향설정", "피드백, 실력향상"
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-2xl border border-neutral-100 p-4">
                          <CheckCircle2 className="w-5 h-5 text-red-600" />
                          <span className="text-sm font-bold">{step}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 1. 영어 전문반 */}
                  <section className="space-y-10">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">1. 소수 정예 초등 영어 전문반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">(학년별 수준별 1:1 맞춤수업, 365일 특수관리)</p>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-3xl bg-neutral-50 p-8">
                        <h5 className="font-black text-lg mb-4">01_프라임 영어반</h5>
                        <div className="space-y-4 text-sm leading-relaxed">
                          <p><strong>① 초등 저학년</strong>: 파닉스 부터 말하기, 듣기, 쓰기, 독해까지 한번에 수준별 주5일 수업 및 수준별 365일 맞춤관리</p>
                          <p><strong>② 초등 고학년</strong>: 스피킹 실력은 기본이고 문법, 독해, 단어, 작문을 체계적으로 중학 내신까지 대비, 수능형 독해까지 준비할 수 있도록 체계적인 선행학습 365일 특수관리</p>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-neutral-50 p-8">
                        <h5 className="font-black text-lg mb-4">02_미국생활 영어 CNN수업반</h5>
                        <ul className="mb-6 space-y-2 text-sm font-medium text-neutral-600">
                          <li>· 실제 미국 아이들 처럼 보고, 듣고, 말하는 영어수업</li>
                          <li>· 뉴스로 배우는 진짜 영어, 초등부 영어 사고력 수업</li>
                          <li>· 현 미국 뉴스·생활 이야기로 공부가 아닌 '언어'로 익힙니다.</li>
                        </ul>
                        <div className="mb-4 rounded-2xl bg-white p-6 shadow-sm">
                          <div className="mb-3 text-xs font-black text-red-600 uppercase tracking-widest">✔ 수업방식</div>
                          <p className="text-xs leading-relaxed text-neutral-500">
                            어린이 눈 높이로 재구성한 생활뉴스 / 미국학교·가정·사회·사건 이야기 / 영상 → 질문 → 토론 → 놀이 → 특수교재 / 미국생활 영어를 자연스럽게 말하게 되는 영어 환경 / 듣기, 말하기, 쓰기, 읽기, 배경지식 차별된 영어수업
                          </p>
                        </div>
                        <p className="font-black text-red-600">{"->"} 자녀를 전국 1% ~ 4% 최상위 영어 실력자로 만드는 영재코스</p>
                      </div>

                      <div className="rounded-[3rem] bg-neutral-950 p-10 text-white border border-white/10 shadow-2xl shadow-red-600/5">
                        <h5 className="text-xl font-black mb-2 text-red-500">03_미국 실제 '테마' 몰입 영어반</h5>
                        <p className="text-sm font-bold opacity-80 mb-8 text-neutral-400">"미국을 교실로 옮긴 영어수업"</p>
                        <div className="grid gap-6 md:grid-cols-2">
                          <ul className="space-y-2 text-xs font-bold opacity-90">
                            <li>· 미국유학 보다 더 효과적인 원어민 영어시스템</li>
                            <li>· 미국 실제 '생활테마'로 영어에 자연스럽게 몰입</li>
                            <li>· 미국에서 생활하듯 배우는 진짜 영어</li>
                            <li>· 아이가 말하지 않으면 수업이 안 끝납니다.</li>
                            <li>· 영어로 생각하고 말하는 환경 및 생활 언어</li>
                          </ul>
                          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-md">
                            <div className="mb-3 text-xs font-black uppercase tracking-widest text-red-500">✔ 미국 실제 테마 몰입 영어란?</div>
                            <p className="text-[11px] leading-relaxed opacity-80">
                              미국학교·가정·쇼핑&마트·여행·병원·공항·뉴스&이슈·공공기관 등 아이가 실제로 겪는 상황을 영어로 보고, 듣고, 말하고, 행동하는 수업
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 2. 수학 전문반 */}
                  <section className="space-y-10">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">2. 소수 정예 초등 수학 전문반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">☆ 초등 수학이 중·고등 성적을 결정합니다.</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-3xl border border-neutral-100 p-8">
                        <h5 className="font-black text-lg mb-6">01_수학 수업 시스템</h5>
                        <ul className="space-y-4 text-sm leading-relaxed">
                          <li><strong className="text-red-600">① 교과 개념 100% 이해</strong>: 단순공식 암기가 아닌 원리 이해, 아이가 직접 설명해야 수업 통과</li>
                          <li><strong className="text-red-600">② 변형문제 집중 훈련</strong>: 단원별 응용 문제 단계별 맞춤 훈련</li>
                          <li><strong className="text-red-600">③ 서술형 대비</strong>: 풀이과정 정리로 수학적 사고력 훈련, 중·고등 수학까지 연결</li>
                          <li><strong className="text-red-600">④ 오답 설명</strong>: 틀린 문제를 단순 다시풀기가 아닌 "왜 틀렸는지 설명하게" 합니다</li>
                        </ul>
                      </div>
                      <div className="rounded-3xl border border-neutral-100 p-8">
                        <h5 className="font-black text-lg mb-6">02_관리시스템</h5>
                        <ul className="space-y-4 text-sm font-medium text-neutral-600">
                          <li>· 주 5일 특수지도 365일 1:1 맞춤 철저한 관리</li>
                          <li>· 소수정예, 성향별 및 수준별 맞춤지도</li>
                          <li>· 주간 학습 리포트 제공</li>
                          <li>· 학부모 상담 상시 진행</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* 3. 전과목반 */}
                  <section className="space-y-10">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">3. 초등 전과목반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">☆ 365일 철저한 학습관리로 아이 공부와 성적은 학원이 책임집니다!</p>
                    </div>

                    <div className="rounded-[3rem] bg-neutral-900 p-10 lg:p-16 text-white">
                      <h5 className="text-xl font-black mb-10 text-red-500">강남 8학군 보다 강력한 수업방식</h5>
                      <div className="space-y-8">
                        {[
                          "학년별 수준별 성향별 1:1 맞춤형 과목별 꼼꼼한 개별수업",
                          "수학 원리 이해: 공식은 외우지 않고 원리를 이해, 개념을 스스로 설명할 수 있는 힘을 키워 자신감을 갖게 합니다.",
                          "서술형 강화: 과목별 서술형에 강한 체계적인 학습으로 중·고등 내신까지 이어지는 사고력 기반 수업"
                        ].map((text, i) => (
                          <div key={i} className="flex gap-6">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-black italic border border-red-600 text-red-600">
                              {i + 1}
                            </div>
                            <p className="text-base font-bold leading-relaxed">{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* --- N수생 상세 모달 --- */}
      <AnimatePresence>
        {isNModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative h-full max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[3rem] bg-white shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white/80 px-8 py-6 backdrop-blur-md">
                <div>
                  <h2 className="text-2xl font-black text-neutral-950">N수생 교육과정 상세</h2>
                  <p className="text-sm font-bold text-red-600">프리미엄 관리 "N수생·독학재수반" 모집</p>
                </div>
                <button 
                  onClick={() => setIsNModalOpen(false)}
                  className="rounded-full bg-neutral-100 p-3 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-950 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="h-full overflow-y-auto px-8 py-12 pb-32">
                <div className="space-y-16 text-neutral-800">
                  {/* 1. N수생 종합반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">1. N수생 종합반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">→ 1:1 맞춤 관리형 올인원</p>
                    </div>
                    
                    <div className="rounded-[3rem] bg-neutral-950 p-10 text-white border border-white/10">
                      <div className="mb-8 space-y-2">
                        <p className="text-xl font-black text-red-500">"이번이 마지막, 반드시 결과로 증명"</p>
                        <p className="font-black">365일 전과목 밀착 관리!</p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {[
                          "수능 올인 전략",
                          "전과목 밸런스 완성",
                          "성적 상승 데이터 기반 관리",
                          "의대·약대·상위권 대학교 집중 트랙 운영"
                        ].map((text, i) => (
                          <div key={i} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                            <CheckCircle2 className="w-5 h-5 text-red-500" />
                            <span className="text-sm font-bold">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-10 pt-8">
                      <h5 className="text-xl font-black text-neutral-950">※ 왜? 프라임 N수반인가</h5>
                      
                      <div className="grid gap-8 md:grid-cols-3">
                        <div className="space-y-4">
                          <div className="text-sm font-black text-red-600 uppercase tracking-widest">01_전과목 밸런스 설계</div>
                          <div className="space-y-2 text-sm font-bold text-neutral-600">
                            <p>① 국·영·수·탐 전략적 배분</p>
                            <p>② 약점 과목 1:1 보완 설계</p>
                            <p>③ 월간 성적 분석 리포트 제공</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="text-sm font-black text-red-600 uppercase tracking-widest">02_365일 책임 관리 시스템</div>
                          <div className="space-y-2 text-sm font-bold text-neutral-600">
                            <p>① 매일 출결 체크</p>
                            <p>② 일일 학습 피드백 및 코칭</p>
                            <p>③ 추가 성취도 보고서</p>
                            <p>④ 월간 모의고사 전략 분석</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="text-sm font-black text-red-600 uppercase tracking-widest">03_성적 상승 프로세스</div>
                          <div className="space-y-2 text-xs font-bold text-neutral-500 leading-relaxed">
                            진단테스트 → 약점 분석 → 맞춤 시간표 설계 → 1:1 밀착 관리 → 실전 훈련 → 피드백 및 코칭 → 최종 수능 시뮬레이션
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 2. 관리형 독학재수반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">2. 관리형 독학재수반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">"공부는 혼자, 관리는 학원이"</p>
                    </div>

                    <div className="rounded-3xl bg-neutral-50 p-8">
                      <p className="text-lg font-black text-neutral-900 mb-4">
                        독학이지만 1:1 학습 관리로 각 과목의 모르는 문제는 1:1 피드백 및 코칭으로 해결!
                      </p>
                      <p className="font-black text-red-600">→ 전과목 '베테랑' 강사진 항시 대기중!</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-3xl border border-neutral-100 p-8">
                        <h5 className="font-black text-lg mb-6">차별포인트</h5>
                        <div className="space-y-3 text-sm font-bold">
                          {["출결 및 시간 철저히 관리", "개인 전용 학습 플래너", "일일 학습 점검", "월 2회 전략 상담"].map((text, i) => (
                            <p key={i} className="flex items-center gap-2 text-neutral-700">
                              <CheckCircle2 className="w-4 h-4 text-red-600" /> {text}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-3xl border border-neutral-100 p-8">
                        <h5 className="font-black text-lg mb-6">운영 방식</h5>
                        <div className="space-y-3 text-sm font-bold">
                          {["개인 독립 학습 공간 제공", "자습실 좌석 지정제", "휴대폰 통제 시스템", "선택 과목 클리닉 수업", "필요시 특정 과목 최단기 수업"].map((text, i) => (
                            <p key={i} className="flex items-center gap-2 text-neutral-700">
                              <CheckCircle2 className="w-4 h-4 text-red-600" /> {text}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[2.5rem] bg-neutral-950 p-10 text-white border border-white/10">
                      <h5 className="text-xl font-black mb-8 text-red-500">이런 학생에게 추천합니다!</h5>
                      <div className="grid gap-4 sm:grid-cols-2 text-sm font-bold opacity-90">
                        {[
                          "① 혼자 공부하지만 스스로 문제를 해결할 수 없는 경우",
                          "② 기본 실력은 있지만, 전반적인 관리가 필요한 학생",
                          "③ 혼자 공부하지만 방향 설정 및 피드백이 필요한 학생",
                          "④ 인강+학원 관리 병행 희망과 인강 문제를 이해 못하는 상황이 발생 시 혼자 힘으로 해결할 수 없는 경우의 학생"
                        ].map((text, i) => <p key={i}>{text}</p>)}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 집중관리 상세 모달 --- */}
      <AnimatePresence>
        {isIntensiveModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsIntensiveModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative h-full max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[3rem] bg-white shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white/80 px-8 py-6 backdrop-blur-md">
                <div>
                  <h2 className="text-2xl font-black text-neutral-950">집중관리 교육과정 상세</h2>
                  <p className="text-sm font-bold text-red-600">도시형 기숙 시스템 & 전과목 밀착 관리</p>
                </div>
                <button 
                  onClick={() => setIsIntensiveModalOpen(false)}
                  className="rounded-full bg-neutral-100 p-3 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-950 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="h-full overflow-y-auto px-8 py-12 pb-32">
                <div className="space-y-16 text-neutral-800">
                  {/* 핵심 시스템 */}
                  <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {[
                      "✔ 도시형 기숙 시스템", "✔ 전과목 1:1 밀착 관리", "✔ 순공시간 데이터 관리",
                      "✔ 1:1 전략 설계", "✔ 1:1 맞춤 피드백 및 코칭"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center justify-center rounded-2xl bg-red-50 p-4 text-center text-[10px] font-black text-red-700">
                        {text}
                      </div>
                    ))}
                  </section>

                  {/* 01_중학생 집중 관리반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">1. 중학생 집중 관리반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">"중등이 무너지면 고등은 어렵습니다."</p>
                    </div>
                    <div className="rounded-3xl border border-neutral-100 p-8">
                      <div className="grid gap-4 sm:grid-cols-2 text-sm font-bold">
                        {["국·영·수 완성 트랙", "내신 1등급 설계", "고등 선행 로드맵", "공부 습관 완전 교정", "주간 및 월간 리포트 제공"].map((text, i) => (
                          <p key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600" /> {text}
                          </p>
                        ))}
                      </div>
                      <p className="mt-8 font-black text-red-600">→ 중등은 '점수'보다 '기초체력'을 만드는 시기!!</p>
                    </div>
                  </section>

                  {/* 02_고등학생 집중 관리반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">2. 고등학생 집중 관리반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">"내신과 수능 둘 다 잡아야 합니다."</p>
                    </div>
                    <div className="rounded-[3rem] bg-neutral-950 p-10 text-white border border-white/10">
                      <div className="space-y-4 text-sm font-bold opacity-90">
                        <p>① 학교내신 철저한 맞춤분석 (당일 학교 수업 예습·복습 완전 터득)</p>
                        <p>② 수능 실전 대비 병행</p>
                        <p>③ 과목별 약점 집중 지도 보완</p>
                        <p>④ 월간 모의고사 전략 분석</p>
                        <p>⑤ 메디컬/상위권 트랙 별도 운영</p>
                      </div>
                      <p className="mt-8 font-black text-red-500">→ 등급은 우연이 아니라, 전략입니다.</p>
                    </div>
                  </section>

                  {/* 03_N수생 집중 관리반 */}
                  <section className="space-y-8">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h4 className="text-2xl font-black">3. N수생 집중 관리반</h4>
                      <p className="text-sm font-bold text-neutral-500 mt-1">"재수는 의지가 아니라 환경과 관리시스템입니다."</p>
                    </div>
                    <div className="rounded-3xl bg-neutral-50 p-8">
                      <p className="text-lg font-black mb-6">도시형 기숙 시스템! '집은 잠만 자는 곳'</p>
                      <div className="grid gap-4 sm:grid-cols-2 text-sm font-bold">
                        {["오전 강제 등원", "휴대폰 및 친구 통제", "하루 최소 10~14시간 순공 확보 시스템", "각 과목 일일·주간·월간 실전 모의고사 분석 시스템", "1:1 전략 코칭 및 밀착 피드백"].map((text, i) => (
                          <p key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600" /> {text}
                          </p>
                        ))}
                      </div>
                      <div className="mt-8 space-y-2 font-black text-red-600">
                        <p>→ 혼자서는 끝까지 못갑니다.</p>
                        <p>→ 성적이 오를 때까지 책임관리하고 결과로 증명합니다.</p>
                      </div>
                    </div>
                  </section>

                  {/* 차별화 시스템 & 프로세스 */}
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-3xl border border-neutral-100 p-8">
                      <h5 className="font-black text-lg mb-6 text-red-600">※ 차별화 시스템</h5>
                      <div className="space-y-3 text-sm font-bold">
                        {["① 출결 통제", "② 순공시간 철저하게 체크", "③ 성적 그래프 관리", "④ 학부모 주간 및 월간 피드백"].map((text, i) => <p key={i}>{text}</p>)}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-neutral-100 p-8">
                      <h5 className="font-black text-lg mb-6 text-red-600">※ 성적 향상 프로세스</h5>
                      <div className="space-y-3 text-sm font-bold">
                        {["① 진단 테스트 약점 분석", "② 개별 맞춤 시간표 설계", "③ 순공시간 촘촘히 관리", "④ 실전 전략 완성 시스템", "⑤ 월간 리포트"].map((text, i) => <p key={i}>{text}</p>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 1:1 과외 상세 모달 --- */}
      <AnimatePresence>
        {isTutoringModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTutoringModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative h-full max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[3rem] bg-white shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white/80 px-8 py-6 backdrop-blur-md">
                <div>
                  <h2 className="text-2xl font-black text-neutral-950">1:1 과외 교육과정 상세</h2>
                  <p className="text-sm font-bold text-red-600">초·중·고·N수생 1:1 대치동식 과외</p>
                </div>
                <button 
                  onClick={() => setIsTutoringModalOpen(false)}
                  className="rounded-full bg-neutral-100 p-3 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-950 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="h-full overflow-y-auto px-8 py-12 pb-32">
                <div className="space-y-16 text-neutral-800">
                  <section className="text-center">
                    <h3 className="text-2xl font-black text-neutral-950 mb-4">대치동식 1:1 과외, 동탄에서 완성하다.</h3>
                    <div className="inline-block rounded-2xl bg-red-50 px-6 py-3 text-sm font-bold text-red-700">
                      학원 수강료로 1:1 대치동 과외를 경험해 보세요.
                    </div>
                  </section>

                  <section className="rounded-[2.5rem] bg-neutral-950 p-10 text-white border border-white/10">
                    <div className="space-y-4 text-lg font-black">
                      <p className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-red-500" /> 과외는 많습니다.</p>
                      <p className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-red-500" /> 그러나 365일 1:1 맞춤 책임관리하는 과외는 전혀 없습니다.</p>
                      <p className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-red-500" /> 결과까지 책임지는 과외학원!</p>
                    </div>
                  </section>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-3xl border border-neutral-100 p-8">
                      <h5 className="font-black text-lg mb-6 text-red-600">우리 학원은 단순 과외가 아닙니다.</h5>
                      <div className="space-y-3 text-sm font-bold">
                        {["① 일반 진단 테스트", "② 취약 단원 분석", "③ 개인 커리큘럼 설계", "④ 주간 성취도 리포트", "⑤ 1:1 맞춤 피드백 및 코칭"].map((text, i) => <p key={i}>{text}</p>)}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-neutral-100 p-8">
                      <h5 className="font-black text-lg mb-6 text-red-600">관리 강도가 다릅니다.</h5>
                      <div className="space-y-3 text-sm font-bold">
                        {["① 숙제 미이행 즉시 부모님께 통보 및 당일 완전 해결", "② 순공시간 체크 데이터 시스템", "③ 월간 학습 리포트", "④ 학부모 상담 정기 진행"].map((text, i) => <p key={i}>{text}</p>)}
                      </div>
                    </div>
                  </div>

                  {/* 초·중·고·N수생 맞춤 구조 */}
                  <section className="space-y-10">
                    <h4 className="text-2xl font-black text-neutral-950">초·중·고·N수생 맞춤 구조</h4>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-3xl bg-neutral-50 p-8">
                        <h5 className="font-black text-lg mb-4 text-red-600">① 초등</h5>
                        <div className="space-y-2 text-sm font-bold text-neutral-600">
                          <p>✔ 개념 완성 + 사고력 확장</p>
                          <p>✔ 체계적인 공부 습관 중심 관리</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-neutral-50 p-8">
                        <h5 className="font-black text-lg mb-4 text-red-600">② 중등</h5>
                        <div className="space-y-2 text-sm font-bold text-neutral-600">
                          <p>✔ 내신 1등급 설계</p>
                          <p>✔ 수학·영어 체계적인 완성 트랙</p>
                          <p>✔ 고등 선행 전략</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-neutral-50 p-8">
                        <h5 className="font-black text-lg mb-4 text-red-600">③ 고등</h5>
                        <div className="space-y-2 text-sm font-bold text-neutral-600">
                          <p>✔ 내신 + 수능 병행</p>
                          <p>✔ 메디컬 트랙 별도 설계</p>
                          <p>✔ 등급 상승 집중 관리</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-neutral-50 p-8">
                        <h5 className="font-black text-lg mb-4 text-red-600">④ 재수</h5>
                        <div className="space-y-2 text-sm font-bold text-neutral-600">
                          <p>✔ 도시형 기숙 시스템</p>
                          <p>✔ 시간통제</p>
                          <p>✔ 실전 모의 전략 완성</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 온라인 상담 신청 모달 --- */}
      <AnimatePresence>
        {isConsultationFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultationFormOpen(false)}
              className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl overflow-hidden rounded-[3rem] bg-white shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white/80 px-8 py-6 backdrop-blur-md">
                <div>
                  <h2 className="text-2xl font-black text-neutral-950">온라인 상담 신청</h2>
                  <p className="text-sm font-bold text-red-600">성함, 전화번호, 거주지를 입력해주세요.</p>
                </div>
                <button 
                  onClick={() => setIsConsultationFormOpen(false)}
                  className="rounded-full bg-neutral-100 p-3 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-950 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-8 py-10">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-[2.5rem] bg-green-50 p-12 text-center border-2 border-green-100"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-green-900 mb-2">신청 완료!</h3>
                    <p className="font-bold text-green-700 mb-8">상담 신청이 정상적으로 접수되었습니다.<br />빠른 시일 내에 연락드리겠습니다.</p>
                    <button 
                      onClick={() => setIsConsultationFormOpen(false)}
                      className="w-full rounded-2xl bg-green-600 py-4 text-lg font-black text-white transition hover:bg-green-700 shadow-lg shadow-green-600/20 cursor-pointer"
                    >
                      확인
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-neutral-400 uppercase tracking-widest">성함</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full rounded-2xl border border-neutral-200 bg-white px-6 py-4 font-bold text-neutral-950 outline-none focus:border-red-600 transition-colors"
                        placeholder="성함을 입력해주세요"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-neutral-400 uppercase tracking-widest">전화번호</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full rounded-2xl border border-neutral-200 bg-white px-6 py-4 font-bold text-neutral-950 outline-none focus:border-red-600 transition-colors"
                        placeholder="전화번호를 입력해주세요"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-neutral-400 uppercase tracking-widest">거주지</label>
                      <input 
                        required
                        type="text" 
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full rounded-2xl border border-neutral-200 bg-white px-6 py-4 font-bold text-neutral-950 outline-none focus:border-red-600 transition-colors"
                        placeholder="거주지를 입력해주세요"
                        disabled={isSubmitting}
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-2xl bg-red-600 py-5 text-xl font-black text-white transition hover:bg-red-700 shadow-lg shadow-red-600/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? '신청 중...' : '상담 신청하기'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 강사진 사진 크게 보기 모달 --- */}
      <AnimatePresence>
        {selectedInstructorImg && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInstructorImg(null)}
              className="absolute inset-0 bg-neutral-950/95 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-[210] max-h-screen max-w-4xl"
            >
              <button 
                onClick={() => setSelectedInstructorImg(null)}
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedInstructorImg} 
                className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/10" 
                alt="Enlarged Instructor"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
