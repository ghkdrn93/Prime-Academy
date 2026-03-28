/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
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

  const programs = [
    { 
      title: "초등부", 
      subtitle: "영어 · 수학 · 전과목 · 엘리트 · CNN · 특수지도", 
      desc: "소수정예 1:1 맞춤 관리로 공부 습관부터 성적 향상까지 책임집니다. 365일 체계적인 관리 시스템을 경험해 보세요.",
      isSpecial: true
    },
    { title: "중등부", subtitle: "영어 · 수학 · 전과목", desc: "내신 상위권 진입과 고등 선행을 동시에 설계하는 중등 맞춤 시스템을 만나보세요." },
    { title: "고등부", subtitle: "영어 · 수학 · 1등급 전략", desc: "내신과 수능을 동시에 잡는 전략형 프로그램으로 1등급 목표를 달성해 보세요." },
    { title: "재수생", subtitle: "재수생 전용 밀착반", desc: "데이터 기반 전략과 365일 밀착 관리로 반드시 결과를 만들어내는 최강의 N수 트랙이에요." },
    { title: "집중관리", subtitle: "도시형 기숙 시스템", desc: "순공시간 확보와 철저한 피드백을 통해 학습 몰입도를 극대화해 보세요." },
    { title: "1:1 과외", subtitle: "프리미엄 개별 맞춤", desc: "대치동식 1:1 수업을 학원 시스템으로 녹여낸 개인별 최적화 트랙을 경험해 보세요." },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-500/30 font-sans scroll-smooth">
      
      {/* --- 1. 내비게이션 헤더 --- */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-red-600 flex items-center justify-center font-black text-lg italic">P</div>
            <div className="text-xl font-black tracking-tighter">프라임 학원</div>
          </div>
          <nav className="hidden gap-8 text-[13px] font-semibold text-neutral-400 md:flex uppercase tracking-widest">
            <a href="#programs" className="hover:text-white transition-colors">Programs</a>
            <a href="#elite" className="hover:text-amber-500 transition-colors">Elite Track</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="tel:01083671701" className="rounded-full bg-red-600 px-5 py-2 text-xs font-bold transition hover:bg-red-500">
            상담 예약하기
          </a>
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
              <Star className="w-4 h-4 fill-red-400" /> 인서울 · SKY · 메디컬 상위권 진학 전문
            </div>
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl lg:text-9xl">
              성적은 <span className="text-red-600">관리</span>가<br />
              전부입니다.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
              단순한 지식 전달을 넘어, 학생의 24시간을 설계해 드려요.<br />
              대치동 시스템 그 이상의 초밀착 케어로 성적의 임계점을 돌파해 보세요.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <button className="h-16 rounded-2xl bg-red-600 px-10 text-base font-black shadow-2xl shadow-red-600/30 transition hover:bg-red-500 hover:scale-105 active:scale-95 cursor-pointer">
                지금 바로 상담받기
              </button>
              <button className="h-16 rounded-2xl border border-white/10 bg-white/5 px-10 text-base font-black backdrop-blur-md transition hover:bg-white/10 cursor-pointer">
                교육과정 보기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. 프로그램 섹션 --- */}
      <section id="programs" className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <motion.div {...fadeInUp} className="mb-20 text-center">
          <div className="text-sm font-bold tracking-[0.4em] text-red-500 uppercase">Our Programs</div>
          <h2 className="mt-4 text-4xl font-black sm:text-6xl">검증된 맞춤형 커리큘럼이에요</h2>
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
                  onClick={() => p.isSpecial && setIsElementaryModalOpen(true)}
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">메디컬 엘리트</span> 과정이에요
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
                  "고등 내신 1.0등급 유지 전략 시스템",
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
                망설이는 오늘이<br />성적의 고점이 됩니다.
              </h2>
              <p className="mt-8 text-xl font-medium text-neutral-600">
                지금 바로 상담을 예약하고 자녀의 입시 전략을 재설계해 보세요.<br />
                프라임 학원의 문은 상위권을 향해 언제나 열려 있어요.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a href="tel:01083671701" className="flex items-center justify-center gap-4 rounded-[2rem] bg-red-600 py-7 text-2xl font-black text-white transition hover:bg-red-700 shadow-xl shadow-red-600/30">
                <Phone className="w-7 h-7 fill-white" /> 010-8367-1701
              </a>
              <button className="rounded-[2rem] border-2 border-neutral-200 py-7 text-2xl font-black transition hover:bg-neutral-100 cursor-pointer">
                온라인 상담 신청하기
              </button>
            </div>
          </div>

          <div className="relative z-10 mt-24 grid gap-10 border-t border-neutral-100 pt-16 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 w-6 h-6 text-red-600" />
              <div>
                <div className="font-black uppercase tracking-widest text-neutral-400 text-xs">Address</div>
                <div className="mt-2 font-bold text-lg">경기도 화성시 동탄구 동탄순환대로 20, 2~3층</div>
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
                <div className="mt-2 font-bold text-lg">레벨테스트 및 방문상담 100% 예약제</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/5 py-16 text-center text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-600">
        © 2024 Prime Academy Management System. All Rights Reserved.
      </footer>

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
                        { title: "하나!", desc: "공부량이 부족하고 재미가 없어서 집중력이 약하고 자기주도 학습이 안되고, 공부습관 및 공부방법을 모르는 아이들" },
                        { title: "둘!", desc: "학원을 다니지만 성적이 계속 그대로이고 선행이 버거운 학생" },
                        { title: "셋!", desc: "대치동처럼 체계적인 선행수업을 받고 싶은 중·상위권 학생" },
                        { title: "넷!", desc: "80점 이하 하위권 혹은 중위권 친구들" },
                        { title: "다섯!", desc: "기초가 부족하고 365일 관리가 필요한 학생" }
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
                    <h4 className="text-xl font-black mb-8">(성향별 꼼꼼한 1:1 집중 관리) 이런식으로 수업합니다!</h4>
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

                      <div className="rounded-[3rem] bg-red-600 p-10 text-white shadow-2xl shadow-red-600/20">
                        <h5 className="text-xl font-black mb-2">03_미국 실제 '테마' 몰입 영어반</h5>
                        <p className="text-sm font-bold opacity-80 mb-8">"미국을 교실로 옮긴 영어수업"</p>
                        <div className="grid gap-6 md:grid-cols-2">
                          <ul className="space-y-2 text-xs font-bold opacity-90">
                            <li>· 미국유학 보다 더 효과적인 원어민 영어시스템</li>
                            <li>· 미국 실제 '생활테마'로 영어에 자연스럽게 몰입</li>
                            <li>· 미국에서 생활하듯 배우는 진짜 영어</li>
                            <li>· 아이가 말하지 않으면 수업이 안 끝납니다.</li>
                            <li>· 영어로 생각하고 말하는 환경 및 생활 언어</li>
                          </ul>
                          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                            <div className="mb-3 text-xs font-black uppercase tracking-widest">✔ 미국 실제 테마 몰입 영어란?</div>
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
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-black italic">
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
    </div>
  );
}
