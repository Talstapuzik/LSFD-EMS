import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { X as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useProgress, r as cn, t as Button } from "./progress-Bpk95inA.mjs";
import { i as SearchHits, t as AppHeader } from "./shell-DVPHyRFj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-DAKZdxh1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var quizQuestions = [
	{
		id: "q1",
		prompt: "Соотношение компрессий и вдохов у взрослого без интубационной трубки?",
		options: [
			"15:2",
			"30:2",
			"5:1",
			"50:2"
		],
		answer: 1,
		explain: "AHA/ERC: циклы 30 компрессий и 2 вдоха, пока нет продвинутого дыхательного пути."
	},
	{
		id: "q2",
		prompt: "Частота компрессий грудной клетки у взрослого?",
		options: [
			"60–80 в минуту",
			"80–100",
			"100–120",
			"140–160"
		],
		answer: 2,
		explain: "100–120 в минуту, глубина 5–6 см, полный возврат грудины."
	},
	{
		id: "q3",
		prompt: "При тонико-клонических судорогах сотрудник BLS должен:",
		options: [
			"Вставить бинт между зубами",
			"Приколоть язык, чтобы не запал",
			"Убрать опасные предметы и защитить голову, ничего не класть в рот",
			"Сильно удерживать руки и ноги, пока не разбудит"
		],
		answer: 2,
		explain: "Предметы во рту ломают зубы и вызывают аспирацию. Это устаревший и опасный приём."
	},
	{
		id: "q4",
		prompt: "Турникет при кровотечении конечности накладывают:",
		options: [
			"Ниже раны при венозном кровотечении",
			"На сустав, чтобы было удобнее",
			"5–8 см выше раны, не на сустав, до остановки крови",
			"Слабо, «на всякий случай», и ослабляют каждые 10 минут"
		],
		answer: 2,
		explain: "Всегда проксимальнее раны. Время записывают. На сцене не «проверяют, ослабив»."
	},
	{
		id: "q5",
		prompt: "Сумма GCS 7 означает:",
		options: [
			"Лёгкое повреждение",
			"Норму",
			"Средней тяжести",
			"Тяжёлую травму / кому"
		],
		answer: 3,
		explain: "13–15 лёгкая, 9–12 средняя, 3–8 тяжёлая. В старых конспектах градация была указана неверно."
	},
	{
		id: "q6",
		prompt: "Что делает сотрудник во время анализа ритма AED?",
		options: [
			"Продолжает компрессии, касаясь груди",
			"Держит плечо, чтобы человек не съехал",
			"Никто не касается пострадавшего",
			"Сразу даёт разряд, не дожидаясь команды"
		],
		answer: 2,
		explain: "Пауза на анализ и разряд — без контакта. Сразу после разряда — снова CPR."
	},
	{
		id: "q7",
		prompt: "Нож торчит в животе. Правильное действие BLS?",
		options: [
			"Извлечь и сразу давящая повязка",
			"Зафиксировать предмет, не извлекая, ничего не давать пить",
			"Залить йод в рану вокруг ножа",
			"Дать воды, потому что человек просит"
		],
		answer: 1,
		explain: "Инородное тело — тампон. Извлечение на сцене усиливает кровотечение. Живот — NPO."
	},
	{
		id: "q8",
		prompt: "Первый приоритет MARCH при фонтанирующей ране бедра:",
		options: [
			"Сначала запрокинуть голову",
			"Сначала воротник",
			"Сначала массивное кровотечение (жгут / тампонада)",
			"Сначала полный сбор аллергий"
		],
		answer: 2,
		explain: "Massive hemorrhage идёт раньше airway, если кровь убивает за минуты."
	},
	{
		id: "q9",
		prompt: "Какое действие при переломе рёбер устарело как рутина?",
		options: [
			"Кислород и полусидячее положение",
			"Тугая круговая повязка вокруг грудной клетки",
			"Вызов ALS для обезболивания",
			"Наблюдение за дыханием в пути"
		],
		answer: 1,
		explain: "Тугая повязка ограничивает дыхание. Современный BLS её не накладывает «по умолчанию»."
	},
	{
		id: "q10",
		prompt: "Кто выполняет интубацию трахеи?",
		options: [
			"Любой с сумкой BLS",
			"Только ALS / обученный парамедик по протоколу",
			"Очевидец с AED",
			"Пожарный без медицинской подготовки всегда"
		],
		answer: 1,
		explain: "BLS — маска, воздуховод, Амбу. Трубка и крикотиреотомия — расширенный уровень."
	},
	{
		id: "q11",
		prompt: "FAST при инсульте означает проверку:",
		options: [
			"Температуры, аппетита, сна, жажды",
			"Лица, руки, речи и времени",
			"Только артериального давления",
			"Только реакции зрачков"
		],
		answer: 1,
		explain: "Face, Arm, Speech, Time. Фиксируйте время, когда человека видели нормальным последний раз."
	},
	{
		id: "q12",
		prompt: "После разряда AED нужно:",
		options: [
			"Минуту смотреть, очнулся ли",
			"Сразу 2 минуты CPR, затем снова анализ",
			"Снять электроды",
			"Дать воды"
		],
		answer: 1,
		explain: "Разряд не «заводит» как ключ зажигания. Сразу компрессии, проверка — через 2 минуты вместе с AED."
	}
];
function tally(answers) {
	let n = 0;
	for (let i = 0; i < answers.length; i += 1) if (answers[i] === quizQuestions[i].answer) n += 1;
	return n;
}
function QuizPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [answers, setAnswers] = (0, import_react.useState)(() => Array.from({ length: quizQuestions.length }, () => null));
	const setQuizBest = useProgress((s) => s.setQuizBest);
	const done = step >= quizQuestions.length;
	const q = quizQuestions[Math.min(step, quizQuestions.length - 1)];
	(0, import_react.useEffect)(() => {
		useProgress.persist.rehydrate();
	}, []);
	const score = (0, import_react.useMemo)(() => tally(answers), [answers]);
	function lock() {
		if (picked === null) return;
		const next = [...answers];
		next[step] = picked;
		setAnswers(next);
		if (step + 1 >= quizQuestions.length) {
			setQuizBest(tally(next));
			setStep(quizQuestions.length);
		} else {
			setStep(step + 1);
			setPicked(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {
				query,
				onQuery: setQuery
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchHits, {
				query,
				onClose: () => setQuery("")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-xl px-4 py-8 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium uppercase tracking-[0.18em] text-primary",
						children: "Контроль знаний"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-serif text-3xl font-semibold tracking-tight",
						children: "Зачёт BLS / ALS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-ink-soft",
						children: "12 вопросов. После выбора варианта сразу видно, почему это так. Не экзамен департамента — проверка, что пособие прочитано."
					}),
					done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-page",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-sm text-muted-foreground",
								children: "Результат"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-serif text-4xl font-semibold tabular-nums",
								children: [
									score,
									" / ",
									quizQuestions.length
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-serif text-lg",
								children: score >= 10 ? "Достаточно для допуска к отработке на сцене. Повторите ошибки из приложения В." : score >= 7 ? "База есть, но дыры опасны. Откройте CPR, жгут и «нельзя» ещё раз." : "Сначала глава BLS целиком, потом зачёт снова. Не выходите на сцену на угадывании."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: quizQuestions.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "border-t border-border pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-serif text-base",
										children: item.prompt
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: cn("mt-1 font-sans text-sm", answers[i] === item.answer ? "text-bls" : "text-primary"),
										children: [answers[i] === item.answer ? "Верно. " : "Ошибка. ", item.explain]
									})]
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => {
										setStep(0);
										setPicked(null);
										setAnswers(Array.from({ length: quizQuestions.length }, () => null));
									},
									children: "Пройти снова"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/guide/$slug",
										params: { slug: "errors" },
										children: "К ошибкам"
									})
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center justify-between font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Вопрос ",
									step + 1,
									" из ",
									quizQuestions.length
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [Math.round(step / quizQuestions.length * 100), "%"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 h-1 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-primary transition-[width] duration-200",
									style: { width: `${step / quizQuestions.length * 100}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl font-semibold leading-snug",
								children: q.prompt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2",
								children: q.options.map((opt, i) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPicked(i),
										className: cn("w-full rounded-[var(--radius-md)] border px-4 py-3 text-left font-serif text-base", picked === i ? "border-primary bg-stop-bg" : "border-border bg-card hover:bg-muted"),
										children: opt
									}) }, opt);
								})
							}),
							picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 rounded-[var(--radius-md)] bg-update-bg px-4 py-3 font-serif text-base",
								children: [picked === q.answer ? "Верно. " : "Пока нет. ", q.explain]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-5",
								disabled: picked === null,
								onClick: lock,
								children: step + 1 === quizQuestions.length ? "Завершить" : "Дальше"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { QuizPage as component };
