import { X as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./progress-Bpk95inA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blocks-CBsMLM7t.js
var import_jsx_runtime = require_jsx_runtime();
function Node({ children, tone = "ink" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("min-w-0 rounded-[var(--radius-sm)] border px-2.5 py-2 text-center text-xs font-medium leading-snug sm:px-3 sm:text-sm", tone === "ink" && "border-border bg-card text-foreground", tone === "primary" && "border-primary bg-primary text-primary-foreground", tone === "bls" && "border-bls bg-bls text-bls-fg", tone === "als" && "border-als bg-als text-als-fg"),
		children
	});
}
function Arrow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "flex items-center justify-center py-1 text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "12",
			height: "16",
			viewBox: "0 0 12 16",
			fill: "none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6 1v12M2 9.5 6 14l4-4.5",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})
	});
}
function Row({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2 md:grid-cols-2",
		children
	});
}
function Diagram({ name }) {
	if (name === "pipeline") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "print-avoid my-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-0",
			children: [
				["Пострадавший", "ink"],
				["Оценка сцены и угроз", "ink"],
				["BLS: кровь, CPR, AED, кислород", "bls"],
				["Передача: цифры, время, что сделано", "ink"],
				["ALS: монитор, пути, лекарства", "als"],
				["Расширенное лечение в пути", "als"],
				["Транспортировка в МЦ", "primary"]
			].map(([label, tone], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				tone,
				children: label
			})] }, label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-center font-sans text-xs text-muted-foreground",
			children: "Цепочка помощи. Каждый следующий шаг не отменяет предыдущий."
		})]
	});
	if (name === "cpr") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "print-avoid my-6 grid gap-4 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-[220px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 200 260",
					className: "w-full text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "58",
							y: "18",
							width: "84",
							height: "64",
							rx: "32",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M40 92c18-10 102-10 120 0v78c0 38-24 62-60 62s-60-24-60-62V92Z",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M78 118h44M78 132h44",
							stroke: "currentColor",
							strokeWidth: "1.2",
							opacity: "0.45"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "86",
							y: "148",
							width: "28",
							height: "36",
							rx: "4",
							fill: "var(--color-primary)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "90",
							y: "152",
							width: "20",
							height: "28",
							rx: "3",
							fill: "var(--color-card)",
							stroke: "currentColor",
							strokeWidth: "1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "100",
							y: "248",
							textAnchor: "middle",
							fontSize: "11",
							fill: "currentColor",
							fontFamily: "IBM Plex Sans, sans-serif",
							children: "нижняя половина грудины"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
						tone: "primary",
						children: "Центр груди, не на мечевидный отросток"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { children: "Руки прямые, плечи над ладонями" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { children: "5–6 см · 100–120 / мин" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { children: "Полный возврат · паузы минимальны" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
							tone: "bls",
							children: "30 компрессий → 2 вдоха → снова"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "text-center font-sans text-xs text-muted-foreground lg:col-span-2",
				children: "Положение рук: нижняя половина грудины, пальцы не давят на рёбра."
			})
		]
	});
	if (name === "aed") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "print-avoid my-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col",
			children: [
				"Включить AED",
				"Наклеить электроды",
				"Анализ — не касаться",
				"Разряд по команде",
				"Сразу CPR 2 мин"
			].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				tone: i === 3 ? "primary" : "ink",
				children: label
			})] }, label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 font-sans text-sm text-ink-soft",
			children: "Электроды: правый — под ключицей справа от грудины; левый — левая боковая линия на уровне нижних рёбер."
		})]
	});
	if (name === "abcde") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: "print-avoid my-6 grid gap-2",
		children: [
			[
				"A",
				"Airway",
				"Путь воздуха открыт?"
			],
			[
				"B",
				"Breathing",
				"Грудь поднимается, хватает кислорода?"
			],
			[
				"C",
				"Circulation",
				"Есть пульс и нет фонтана крови?"
			],
			[
				"D",
				"Disability",
				"Мозг: сознание, зрачки, сахар"
			],
			[
				"E",
				"Exposure",
				"Раздеть, найти скрытое, согреть"
			]
		].map(([letter, en, ru]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[48px_1fr] overflow-hidden rounded-[var(--radius-md)] border border-border bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center bg-secondary font-sans text-lg font-medium text-secondary-foreground",
				children: letter
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground",
					children: en
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-sm",
					children: ru
				})]
			})]
		}, letter))
	});
	if (name === "arrest") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "print-avoid my-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				tone: "primary",
				children: "Остановка: нет сознания, нет дыхания, нет пульса"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				tone: "bls",
				children: "CPR + кислород / мешок"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				tone: "als",
				children: "Анализ ритма"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				tone: "primary",
				children: "Шоковый (ФЖ / ЖТ без пульса) → разряд → CPR 2 мин"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { children: "Нешоковый (асистолия / PEA) → CPR + адреналин, искать причину" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { children: "Каждые 2 минуты: ритм, смена качающего, лекарства по протоколу" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-3 text-center font-sans text-xs text-muted-foreground",
				children: "Разряд не отменяет компрессии — он вставляется между двухминутными циклами."
			})
		]
	});
	if (name === "bleed") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "print-avoid my-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				tone: "primary",
				children: "Кровь идёт сильно"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { children: "Прямое давление ладонью" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { children: "Тампонада канала (гемостатик, если есть)" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { children: "Давящая повязка с валиком" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				tone: "primary",
				children: "Конечность: турникет 5–8 см выше раны. Время на жгуте."
			})
		]
	});
	if (name === "fast") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: "print-avoid my-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			[
				"F",
				"Face",
				"Попросите улыбнуться — уголок рта «висит»?"
			],
			[
				"A",
				"Arm",
				"Поднять обе руки — одна падает?"
			],
			[
				"S",
				"Speech",
				"Повторить фразу — каша, поиск слов?"
			],
			[
				"T",
				"Time",
				"Время начала. Срочная доставка, ничего в рот."
			]
		].map(([l, en, ru]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[var(--radius-md)] border border-border bg-card p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-sans text-2xl font-medium text-primary",
					children: l
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground",
					children: en
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-serif text-sm leading-snug",
					children: ru
				})
			]
		}, l))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: "print-avoid my-6 grid gap-2",
		children: [
			[
				"M",
				"Massive hemorrhage",
				"Сначала фонтан крови"
			],
			[
				"A",
				"Airway",
				"Затем путь воздуха"
			],
			[
				"R",
				"Respiration",
				"Дыхание и герметизация груди"
			],
			[
				"C",
				"Circulation",
				"Пульс, CPR, шок"
			],
			[
				"H",
				"Hypothermia / Head",
				"Не дать остыть, беречь шею и голову"
			]
		].map(([l, en, ru]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[48px_1fr] overflow-hidden rounded-[var(--radius-md)] border border-border bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center bg-primary font-sans text-lg font-medium text-primary-foreground",
				children: l
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground",
					children: en
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-sm",
					children: ru
				})]
			})]
		}, l))
	});
}
var calloutMeta = {
	warn: {
		label: "Важно помнить",
		box: "bg-warn-bg text-foreground",
		bar: "bg-warn"
	},
	stop: {
		label: "Частые ошибки · нельзя",
		box: "bg-stop-bg text-foreground",
		bar: "bg-primary"
	},
	tip: {
		label: "Якорь памяти",
		box: "bg-tip-bg text-foreground",
		bar: "bg-bls"
	},
	bls: {
		label: "Уровень BLS",
		box: "bg-bls-bg text-foreground",
		bar: "bg-bls"
	},
	als: {
		label: "Уровень ALS",
		box: "bg-als-bg text-foreground",
		bar: "bg-als"
	},
	rp: {
		label: "Отработка на сцене",
		box: "bg-rp-bg text-foreground",
		bar: "bg-muted-foreground"
	},
	update: {
		label: "Актуализация протокола",
		box: "bg-update-bg text-foreground",
		bar: "bg-secondary"
	}
};
function Blocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-serif text-[17px] leading-[1.55] text-foreground",
		children: blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, i))
	});
}
function BlockView({ block }) {
	switch (block.type) {
		case "lead": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-[19px] leading-[1.5] text-ink-soft",
			children: block.text
		});
		case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4",
			children: block.text
		});
		case "h2": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 mb-3 font-serif text-[1.65rem] font-semibold tracking-tight text-foreground first:mt-0",
			children: block.text
		});
		case "h3": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-7 mb-2 font-serif text-xl font-semibold tracking-tight",
			children: block.text
		});
		case "ul": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mb-5 list-disc space-y-1.5 pl-5 marker:text-primary",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
		});
		case "ol": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mb-5 list-decimal space-y-1.5 pl-5 marker:font-sans marker:text-sm marker:text-muted-foreground",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
		});
		case "callout": {
			const meta = calloutMeta[block.kind];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: cn("print-avoid my-5 overflow-hidden rounded-[var(--radius-lg)]", meta.box),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[6px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: meta.bar }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-3 sm:px-5 sm:py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft",
							children: [meta.label, block.title ? ` · ${block.title}` : ""]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-[16px] leading-relaxed",
							children: block.body
						})]
					})]
				})
			});
		}
		case "table": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "print-avoid my-5 overflow-x-auto rounded-[var(--radius-md)] border border-border bg-card",
			children: [block.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border px-3 py-2 font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground",
				children: block.caption
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[32rem] border-collapse text-left text-[15px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "bg-muted/80",
					children: block.headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b border-border px-3 py-2 font-sans text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground",
						children: h
					}, h))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: block.rows.map((row, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "align-top",
					children: row.map((cell, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "border-b border-border px-3 py-2.5 last:border-0",
						children: cell
					}, ci))
				}, ri)) })]
			})]
		});
		case "steps": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "my-5 space-y-3",
			children: block.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "print-avoid grid grid-cols-[2.25rem_1fr] gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-9 items-center justify-center rounded-full bg-primary font-sans text-sm font-medium text-primary-foreground",
					children: i + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-lg font-semibold",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[16px] leading-relaxed text-ink-soft",
					children: item.body
				})] })]
			}, item.title))
		});
		case "diagram": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diagram, { name: block.name });
		case "split": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "print-avoid my-5 grid gap-3 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-lg)] border border-bls/30 bg-bls-bg p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-bls",
					children: block.leftTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 list-disc space-y-1 pl-4 text-[16px] marker:text-bls",
					children: block.left.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-lg)] border border-als/30 bg-als-bg p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-als",
					children: block.rightTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 list-disc space-y-1 pl-4 text-[16px] marker:text-als",
					children: block.right.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
				})]
			})]
		});
	}
}
//#endregion
export { Blocks as t };
