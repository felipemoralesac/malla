const CAREERS = {
  "lic-mat": {
    name: "Licenciatura en Matemática",
    file: "data/licenciatura-en-matematica.json"
  },
  "ped-mat-uc": {
    name: "Pedagogía en Matemática UC",
    file: "data/pedagogia-en-matematica-uc.json"
  }
};

const THEMES = {
  mint: { bg: "#eef7f2", card: "#d7f0e3", text: "#1f2c2b", accent: "#8bc6a9" },
  sunset: { bg: "#fff4ec", card: "#fde1d3", text: "#331b1a", accent: "#f1a07f" },
  rose: { bg: "#fff0f5", card: "#ffd9e8", text: "#2d1a23", accent: "#f3a6c4" },
  lavender: { bg: "#f6f3ff", card: "#e7defc", text: "#2a1f3c", accent: "#b8a1f4" },
  sky: { bg: "#f0f7ff", card: "#dbeafd", text: "#1f2a38", accent: "#9ac3f5" },
  sage: { bg: "#f2f7f2", card: "#dfeee1", text: "#1f2b1f", accent: "#9ac9a3" },
  melon: { bg: "#fff7f0", card: "#ffe3d1", text: "#321f16", accent: "#f2b48a" },
  space: { bg: "#eef0ff", card: "#dfe4ff", text: "#1f2337", accent: "#9db7ff" },
  midnight: { bg: "#0f172a", card: "#1e293b", text: "#e2e8f0", accent: "#38bdf8" },
  shiba: { bg: "#f5e9dc", card: "#fefefe", text: "#2c1f14", accent: "#e09c52", image: "foto.jpg" }
};

const FALLBACK_DATA = {
  "lic-mat": {
    "courses": {
      "c-0-0": { "id": "c-0-0", "code": "MAT1104", "name": "Introduccion al Calculo", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },
      "c-0-1": { "id": "c-0-1", "code": "MAT1304", "name": "Introduccion a la Geometria", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },
      "c-0-2": { "id": "c-0-2", "code": "MAT1204", "name": "Introduccion al Algebra", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },
      "c-0-3": { "id": "c-0-3", "code": "MAT0004", "name": "Taller de Matematicas", "credits": 14, "type": "normal", "completed": false, "prereqs": [] },
      "c-0-4": { "id": "c-0-4", "code": "VRA100C", "name": "Test de Comunicacion Escrita", "credits": 0, "type": "normal", "completed": false, "prereqs": [] },
      "c-0-5": { "id": "c-0-5", "code": "VRA2000", "name": "Test de Ingles", "credits": 0, "type": "general", "completed": false, "prereqs": [] },
      "c-1-0": { "id": "c-1-0", "code": "MAT1114", "name": "Calculo I", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT1104"] },
      "c-1-1": { "id": "c-1-1", "code": "MAT1214", "name": "Introduccion al Algebra Lineal", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT1204", "MAT1304"] },
      "c-1-2": { "id": "c-1-2", "code": "IIC1103", "name": "Introduccion a la Programacion", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "c-1-3": { "id": "c-1-3", "code": "FOGE", "name": "Formacion General", "credits": 10, "type": "general", "completed": false, "prereqs": [] },
      "c-2-0": { "id": "c-2-0", "code": "MAT1124", "name": "Calculo II", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT1114"] },
      "c-2-1": { "id": "c-2-1", "code": "MAT1224", "name": "Algebra Lineal", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT1214"] },
      "c-2-2": { "id": "c-2-2", "code": "MAT1314", "name": "Introduccion a la Combinatoria", "credits": 10, "type": "normal", "completed": false, "prereqs": ["IIC1103", "MAT1214"] },
      "c-2-3": { "id": "c-2-3", "code": "FIL2001", "name": "Filosofia: Para que?", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "c-3-0": { "id": "c-3-0", "code": "MAT1134", "name": "Calculo III", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT1124", "MAT0004"] },
      "c-3-1": { "id": "c-3-1", "code": "MAT2234", "name": "Algebra Abstracta I", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT1224"] },
      "c-3-2": { "id": "c-3-2", "code": "EYP2104", "name": "Estadistica para Matematicas", "credits": 10, "type": "normal", "completed": false, "prereqs": ["MAT1314", "MAT1134"] },
      "c-3-3": { "id": "c-3-3", "code": "FOGE1", "name": "Formacion General", "credits": 10, "type": "general", "completed": false, "prereqs": [] },
      "c-4-0": { "id": "c-4-0", "code": "MAT2514", "name": "Analisis Real", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT1134"] },
      "c-4-1": { "id": "c-4-1", "code": "MAT2244", "name": "Algebra Abstracta II", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT2234"] },
      "c-4-2": { "id": "c-4-2", "code": "MAT2704", "name": "Variable Compleja", "credits": 10, "type": "normal", "completed": false, "prereqs": ["MAT1134", "MAT1214"] },
      "c-4-3": { "id": "c-4-3", "code": "FOGE2", "name": "Formacion General", "credits": 10, "type": "general", "completed": false, "prereqs": [] },
      "c-5-0": { "id": "c-5-0", "code": "MAT2534", "name": "Teoria de la Integracion", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT2514"] },
      "c-5-1": { "id": "c-5-1", "code": "MAT2544", "name": "Topologia", "credits": 15, "type": "normal", "completed": false, "prereqs": ["MAT2234", "MAT2534"] },
      "c-5-2": { "id": "c-5-2", "code": "MAT2504", "name": "Ecuaciones Diferenciales Ordinarias", "credits": 10, "type": "normal", "completed": false, "prereqs": ["MAT1134"] },
      "c-5-3": { "id": "c-5-3", "code": "FOGE3", "name": "Formacion Teologica", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "c-6-0": { "id": "c-6-0", "code": "OPDEPR", "name": "Optativo de Profundizacion", "credits": 10, "type": "normal", "completed": false, "prereqs": ["MAT2514", "MAT2244", "MAT2704"] },
      "c-6-1": { "id": "c-6-1", "code": "OPDEPR1", "name": "Optativo de Profundizacion", "credits": 10, "type": "normal", "completed": false, "prereqs": ["MAT2514", "MAT2244", "MAT2704"] },
      "c-6-2": { "id": "c-6-2", "code": "OPDEPR2", "name": "Optativo de Profundizacion", "credits": 10, "type": "normal", "completed": false, "prereqs": ["MAT2514", "MAT2244", "MAT2704"] },
      "c-6-3": { "id": "c-6-3", "code": "FOGE4", "name": "Formacion General", "credits": 10, "type": "general", "completed": false, "prereqs": [] },
      "c-7-0": { "id": "c-7-0", "code": "MAT3094", "name": "Taller de Trabajo Matematico", "credits": 20, "type": "normal", "completed": false, "prereqs": ["MAT2534", "MAT2244"] },
      "c-7-1": { "id": "c-7-1", "code": "OPDEPR3", "name": "Optativo de Profundizacion", "credits": 10, "type": "normal", "completed": false, "prereqs": ["MAT2534", "MAT2544", "MAT2504"] },
      "c-7-2": { "id": "c-7-2", "code": "OPDEPR4", "name": "Optativo de Profundizacion", "credits": 10, "type": "normal", "completed": false, "prereqs": ["MAT2534", "MAT2544", "MAT2504"] },
      "c-7-3": { "id": "c-7-3", "code": "FOGE5", "name": "Formacion General", "credits": 10, "type": "general", "completed": false, "prereqs": [] },
      "c-ws42sre": { "id": "c-ws42sre", "code": "FOGE6", "name": "Formacion General", "credits": 10, "type": "general", "completed": false, "prereqs": [] }
    },
    "semesters": [
      { "id": "sem-1", "title": "Semestre 1", "courseIds": ["c-0-0", "c-0-1", "c-0-2", "c-0-3", "c-0-4", "c-0-5"] },
      { "id": "sem-2", "title": "Semestre 2", "courseIds": ["c-1-0", "c-1-1", "c-1-2", "c-1-3"] },
      { "id": "sem-3", "title": "Semestre 3", "courseIds": ["c-2-0", "c-2-1", "c-2-2", "c-2-3"] },
      { "id": "sem-4", "title": "Semestre 4", "courseIds": ["c-3-0", "c-3-1", "c-3-2", "c-3-3"] },
      { "id": "sem-5", "title": "Semestre 5", "courseIds": ["c-4-0", "c-4-1", "c-4-2", "c-4-3"] },
      { "id": "sem-6", "title": "Semestre 6", "courseIds": ["c-5-0", "c-5-1", "c-5-2", "c-5-3"] },
      { "id": "sem-7", "title": "Semestre 7", "courseIds": ["c-6-0", "c-6-1", "c-6-2", "c-6-3", "c-ws42sre"] },
      { "id": "sem-8", "title": "Semestre 8", "courseIds": ["c-7-0", "c-7-1", "c-7-2", "c-7-3"] }
    ],
    "semesterOrder": ["sem-1", "sem-2", "sem-3", "sem-4", "sem-5", "sem-6", "sem-7", "sem-8"]
  },
  "ped-mat-uc": {
    "courses": {
      "pm1-0": { "id": "pm1-0", "code": "ECM500M", "name": "Introducción a la Enseñanza de la Matemática", "credits": 5, "type": "normal", "completed": false, "prereqs": [] },
      "pm1-1": { "id": "pm1-1", "code": "MAT1104", "name": "Introducción al Cálculo", "credits": 12, "type": "normal", "completed": false, "prereqs": [] },
      "pm1-2": { "id": "pm1-2", "code": "MAT1204", "name": "Introducción al Álgebra", "credits": 12, "type": "normal", "completed": false, "prereqs": [] },
      "pm1-3": { "id": "pm1-3", "code": "MAT1304", "name": "Introducción a la Geometría", "credits": 12, "type": "normal", "completed": false, "prereqs": [] },
      "pm1-4": { "id": "pm1-4", "code": "MAT0004", "name": "Taller de Matemáticas", "credits": 14, "type": "normal", "completed": false, "prereqs": [] },
      "pm1-5": { "id": "pm1-5", "code": "VRA100C", "name": "Español", "credits": 0, "type": "general", "completed": false, "prereqs": [] },
      "pm1-6": { "id": "pm1-6", "code": "VRA2000", "name": "English Test", "credits": 0, "type": "general", "completed": false, "prereqs": [] },
      "pm1-7": { "id": "pm1-7", "code": "VRA4000", "name": "Integridad Académica en la UC", "credits": 0, "type": "general", "completed": false, "prereqs": [] },

      "pm2-0": { "id": "pm2-0", "code": "EDU0311", "name": "Teoría de la Educación", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm2-1": { "id": "pm2-1", "code": "MAT1219", "name": "Álgebra Lineal", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },
      "pm2-2": { "id": "pm2-2", "code": "MAT1114", "name": "Cálculo I", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },
      "pm2-3": { "id": "pm2-3", "code": "FIL2001", "name": "Filosofía: ¿Para qué?", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },

      "pm3-0": { "id": "pm3-0", "code": "MAT1124", "name": "Cálculo II", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },
      "pm3-1": { "id": "pm3-1", "code": "EYP1707", "name": "Introducción al Manejo y Exploración de Datos", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },
      "pm3-2": { "id": "pm3-2", "code": "EDU0165", "name": "Educación y Sociedad", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm3-3": { "id": "pm3-3", "code": "TTF", "name": "Formación Teológica", "credits": 10, "type": "general", "completed": false, "prereqs": [] },

      "pm4-0": { "id": "pm4-0", "code": "EDU0160", "name": "Desarrollo y Aprendizaje del Adolescente", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm4-1": { "id": "pm4-1", "code": "MAT1134", "name": "Cálculo III", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },
      "pm4-2": { "id": "pm4-2", "code": "EDU011M", "name": "Práctica 1: Educación Media en Matemática", "credits": 5, "type": "normal", "completed": false, "prereqs": [] },
      "pm4-3": { "id": "pm4-3", "code": "EYP1610", "name": "Introducción a la Estadística", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },
      "pm4-4": { "id": "pm4-4", "code": "FG", "name": "Formación General", "credits": 10, "type": "general", "completed": false, "prereqs": [] },

      "pm5-0": { "id": "pm5-0", "code": "MAT2507", "name": "Introducción al Análisis", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm5-1": { "id": "pm5-1", "code": "MAT2227", "name": "Álgebra I", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm5-2": { "id": "pm5-2", "code": "EDU0317", "name": "Diversidad e Inclusión en Educación", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm5-3": { "id": "pm5-3", "code": "FG1", "name": "Formación General", "credits": 20, "type": "general", "completed": false, "prereqs": [] },

      "pm6-0": { "id": "pm6-0", "code": "MAT2237", "name": "Álgebra II", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm6-1": { "id": "pm6-1", "code": "EDU0162", "name": "Currículum", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm6-2": { "id": "pm6-2", "code": "EDU0300", "name": "Didáctica de la Aritmética, del Álgebra y Funciones", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm6-3": { "id": "pm6-3", "code": "EDU012M", "name": "Práctica 2: Educación Media en Matemática", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm6-4": { "id": "pm6-4", "code": "FG2", "name": "Formación General", "credits": 10, "type": "general", "completed": false, "prereqs": [] },

      "pm7-0": { "id": "pm7-0", "code": "ECM232M", "name": "Geometría Euclidiana", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm7-1": { "id": "pm7-1", "code": "EDU0163", "name": "Evaluación en Educación Media", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm7-2": { "id": "pm7-2", "code": "EDU0301", "name": "Didáctica de la Geometría y de la Estadística", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm7-3": { "id": "pm7-3", "code": "EDU013M", "name": "Práctica 3: Educación Media en Matemática", "credits": 15, "type": "normal", "completed": false, "prereqs": [] },

      "pm8-0": { "id": "pm8-0", "code": "ECM409M", "name": "Seminario de Investigación Aplicada a la Enseñanza/Aprendizaje de la Matemática", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm8-1": { "id": "pm8-1", "code": "ECM111M", "name": "Estadística y Probabilidad", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm8-2": { "id": "pm8-2", "code": "EDU0161", "name": "Gestión de Aulas Heterogéneas", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm8-3": { "id": "pm8-3", "code": "FG3", "name": "Formación General", "credits": 20, "type": "general", "completed": false, "prereqs": [] },

      "pm9-0": { "id": "pm9-0", "code": "ECM201M", "name": "Pensamiento Computacional", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm9-1": { "id": "pm9-1", "code": "EDU0302", "name": "Didáctica de la Geometría 3D, Análisis y Estadística Inferencial", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm9-2": { "id": "pm9-2", "code": "EDU014M", "name": "Práctica Profesional 1: Educación Media en Matemática", "credits": 20, "type": "normal", "completed": false, "prereqs": [] },
      "pm9-3": { "id": "pm9-3", "code": "OPT", "name": "Optativo", "credits": 10, "type": "general", "completed": false, "prereqs": [] },

      "pm10-0": { "id": "pm10-0", "code": "MAT2006", "name": "Historia de la Matemática", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm10-1": { "id": "pm10-1", "code": "ECM202M", "name": "Modelación Matemática", "credits": 10, "type": "normal", "completed": false, "prereqs": [] },
      "pm10-2": { "id": "pm10-2", "code": "EDU015M", "name": "Práctica Profesional 2: Educación Media en Matemática", "credits": 20, "type": "normal", "completed": false, "prereqs": [] },
      "pm10-3": { "id": "pm10-3", "code": "EDU556", "name": "Dimensión Ética de la Profesión Docente", "credits": 5, "type": "normal", "completed": false, "prereqs": [] }
    },
    "semesters": [
      { "id": "sem-1", "title": "Semestre 1", "courseIds": ["pm1-0", "pm1-1", "pm1-2", "pm1-3", "pm1-4", "pm1-5", "pm1-6", "pm1-7"] },
      { "id": "sem-2", "title": "Semestre 2", "courseIds": ["pm2-0", "pm2-1", "pm2-2", "pm2-3"] },
      { "id": "sem-3", "title": "Semestre 3", "courseIds": ["pm3-0", "pm3-1", "pm3-2", "pm3-3"] },
      { "id": "sem-4", "title": "Semestre 4", "courseIds": ["pm4-0", "pm4-1", "pm4-2", "pm4-3", "pm4-4"] },
      { "id": "sem-5", "title": "Semestre 5", "courseIds": ["pm5-0", "pm5-1", "pm5-2", "pm5-3"] },
      { "id": "sem-6", "title": "Semestre 6", "courseIds": ["pm6-0", "pm6-1", "pm6-2", "pm6-3", "pm6-4"] },
      { "id": "sem-7", "title": "Semestre 7", "courseIds": ["pm7-0", "pm7-1", "pm7-2", "pm7-3"] },
      { "id": "sem-8", "title": "Semestre 8", "courseIds": ["pm8-0", "pm8-1", "pm8-2", "pm8-3"] },
      { "id": "sem-9", "title": "Semestre 9", "courseIds": ["pm9-0", "pm9-1", "pm9-2", "pm9-3"] },
      { "id": "sem-10", "title": "Semestre 10", "courseIds": ["pm10-0", "pm10-1", "pm10-2", "pm10-3"] }
    ],
    "semesterOrder": ["sem-1", "sem-2", "sem-3", "sem-4", "sem-5", "sem-6", "sem-7", "sem-8", "sem-9", "sem-10"]
  }
};

let state = {
  careerId: "lic-mat",
  courses: {},
  semesters: [],
  semesterOrder: [],
  colors: { ...THEMES.mint },
  dismissedAlerts: {},
  zoom: 1,
  deleteMode: false,
  currentSemIndex: 0,
  currentPeriodIndex: 0
};

const els = {
  board: document.getElementById("board"),
  careerSelect: document.getElementById("careerSelect"),
  themeSelect: document.getElementById("themeSelect"),
  statCredits: document.getElementById("statCredits"),
  statDone: document.getElementById("statDone"),
  statPending: document.getElementById("statPending"),
  statSemProgress: document.getElementById("statSemProgress"),
  statPeriodProgress: document.getElementById("statPeriodProgress"),
  courseForm: document.getElementById("courseForm"),
  semesterSelect: document.getElementById("semesterSelect"),
  addSemester: document.getElementById("addSemester"),
  resetCareer: document.getElementById("resetCareer"),
  toast: document.getElementById("toast"),
  toastMsg: document.getElementById("toastMsg"),
  toastOk: document.getElementById("toastOk"),
  removeSemester: document.getElementById("removeSemester"),
  submitBtn: document.querySelector("#courseForm button[type='submit']"),
  zoomOut: document.getElementById("zoomOut"),
  zoomReset: document.getElementById("zoomReset"),
  zoomIn: document.getElementById("zoomIn"),
  downloadConfig: document.getElementById("downloadConfig")
};

let dragContext = null;
let editingCourseId = null;

init();

async function init() {
  populateCareers();
  attachGlobalEvents();
  await loadCareer(state.careerId, true);
}

function populateCareers() {
  els.careerSelect.innerHTML = "";
  Object.entries(CAREERS).forEach(([id, career]) => {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = career.name;
    els.careerSelect.appendChild(opt);
  });
  els.careerSelect.value = state.careerId;
}

function attachGlobalEvents() {
  els.careerSelect.addEventListener("change", async (e) => {
    await loadCareer(e.target.value, false);
  });

  els.themeSelect.addEventListener("change", (e) => {
    const preset = THEMES[e.target.value];
    if (preset) {
      state.colors = { ...preset };
      applyColors();
      persist();
    }
  });

  els.courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addCourseFromForm(new FormData(els.courseForm));
    els.courseForm.reset();
  });

  els.courseForm.addEventListener("reset", () => {
    editingCourseId = null;
    els.submitBtn.textContent = "Agregar";
  });

  els.addSemester.addEventListener("click", () => {
    addSemester();
    render();
    persist();
  });

  els.removeSemester.addEventListener("click", () => {
    toggleDeleteMode();
  });

  els.resetCareer.addEventListener("click", async () => {
    await loadCareer(state.careerId, true);
  });

  els.toastOk.addEventListener("click", () => {
    els.toast.classList.add("hidden");
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".course-menu").forEach((m) => m.classList.add("hidden"));
  });

  els.zoomReset.addEventListener("click", () => {
    state.zoom = 1;
    applyZoom();
    persist();
  });

  els.zoomIn.addEventListener("click", () => {
    state.zoom = Math.min(1.3, +(state.zoom + 0.1).toFixed(2));
    applyZoom();
    persist();
  });

  els.zoomOut.addEventListener("click", () => {
    state.zoom = Math.max(0.6, +(state.zoom - 0.1).toFixed(2));
    applyZoom();
    persist();
  });

  els.downloadConfig.addEventListener("click", () => {
    downloadConfig();
  });

  els.statPeriodProgress.addEventListener("click", () => {
    cyclePeriodProgress();
  });
}

async function loadCareer(careerId, reset = false) {
  const career = CAREERS[careerId];
  if (!career) return;
  let baseData = null;
  try {
    const res = await fetch(career.file);
    baseData = await res.json();
  } catch (err) {
    console.warn("Fallo cargando JSON, usando fallback embebido", err);
    baseData = FALLBACK_DATA[careerId];
  }
  if (!baseData) baseData = FALLBACK_DATA[careerId];

  state.careerId = careerId;
  const saved = !reset ? readSavedState(careerId) : null;
  const merged = saved || baseData;

  state.courses = merged.courses;
  state.semesters = merged.semesters;
  state.semesterOrder = merged.semesterOrder;
  state.dismissedAlerts = {};
  state.colors = merged.colors || state.colors || { ...THEMES.desert };
  state.zoom = merged.zoom || 1;
  editingCourseId = null;

  els.careerSelect.value = careerId;
  els.themeSelect.value = detectTheme(state.colors);
  applyColors();
  applyZoom();
  render();
  persist();
}

function detectTheme(colors) {
  const match = Object.entries(THEMES).find(
    ([, t]) => t.bg === colors.bg && t.card === colors.card && t.text === colors.text && t.accent === colors.accent
  );
  return match ? match[0] : "custom";
}

function applyColors() {
  const { bg, card, text, accent } = state.colors;
  document.documentElement.style.setProperty("--bg", bg);
  document.documentElement.style.setProperty("--card", card);
  document.documentElement.style.setProperty("--text", text);
  document.documentElement.style.setProperty("--accent", accent);
  document.documentElement.style.setProperty("--accent-soft", lighten(accent, 0.35));
  const themeId = detectTheme(state.colors);
  document.body.setAttribute("data-theme", themeId || "custom");
  if (themeId === "shiba") {
    document.body.style.backgroundImage = "url('foto.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
  } else {
    document.body.style.backgroundImage = "none";
  }
}

function applyZoom() {
  document.documentElement.style.setProperty("--zoom", state.zoom);
}

function lighten(hex, amount) {
  const col = hex.replace("#", "");
  const num = parseInt(col, 16);
  const r = Math.min(255, ((num >> 16) & 0xff) + 255 * amount);
  const g = Math.min(255, ((num >> 8) & 0xff) + 255 * amount);
  const b = Math.min(255, (num & 0xff) + 255 * amount);
  return `#${((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1)}`;
}

function render() {
  els.board.innerHTML = "";
  els.semesterSelect.innerHTML = "";
  state.semesterOrder.forEach((semId) => {
    const sem = state.semesters.find((s) => s.id === semId);
    if (sem) {
      renderSemester(sem);
      const opt = document.createElement("option");
      opt.value = sem.id;
      opt.textContent = sem.title;
      els.semesterSelect.appendChild(opt);
    }
  });
  updateStatsSafe();
}

function renderSemester(sem) {
  const credits = sumCredits(sem.courseIds);
  const column = document.createElement("section");
  column.className = "semester";
  column.dataset.semesterId = sem.id;
  if (state.deleteMode) column.classList.add("delete-mode");
  column.innerHTML = `
    <div class="semester-header">
      <h3>${sem.title}</h3>
      <div class="credit-count ${credits > 60 ? "over" : ""}">${credits} cr</div>
    </div>
  `;
  column.addEventListener("dragover", (e) => handleDragOver(e, sem.id));
  column.addEventListener("dragleave", () => column.classList.remove("drag-target"));
  column.addEventListener("drop", (e) => handleDrop(e, sem.id, column));
  column.addEventListener("click", () => handleSemesterClickForDelete(sem.id));

  sem.courseIds.forEach((courseId) => {
    const card = buildCourseCard(courseId, sem.id);
    column.appendChild(card);
  });

  els.board.appendChild(column);
  maybeWarnCreditsSafe(sem.id, credits);
}

function buildCourseCard(courseId, semId) {
  const course = state.courses[courseId];
  const card = document.createElement("article");
  const locked = !hasPrereqsCompleted(course);
  card.className = `course-card ${course.completed ? "done" : ""} ${locked ? "locked" : ""} ${course.type || ""}`;
  card.setAttribute("draggable", "true");
  card.dataset.courseId = courseId;
  card.dataset.semesterId = semId;
  card.innerHTML = `
    <span class="code">${course.code}</span>
    <div class="name">${course.name}</div>
    <span class="credits">${course.credits} cr</span>
    <span class="pill">${course.prereqs?.length ? "Prereqs" : "Libre"}</span>
    <div class="tooltip">${course.prereqs?.length ? prereqText(course) : "Sin prerrequisitos"}</div>
    <div class="course-actions">
      <button class="icon-btn" title="Editar o eliminar">●</button>
      <div class="course-menu hidden">
        <button class="menu-item" data-action="edit">Editar</button>
        <button class="menu-item danger" data-action="delete">Eliminar</button>
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    // prevent click during drag
    if (dragContext?.dragging) return;
    toggleCompleted(courseId);
  });

  card.addEventListener("dragstart", (e) => {
    dragContext = { courseId, fromSem: semId, dragging: true };
    e.dataTransfer.effectAllowed = "move";
  });
  card.addEventListener("dragend", () => {
    dragContext = null;
    document.querySelectorAll(".drag-target").forEach((el) => el.classList.remove("drag-target"));
  });

  const actions = card.querySelector(".icon-btn");
  const menu = card.querySelector(".course-menu");
  actions.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".course-menu").forEach((m) => m.classList.add("hidden"));
    menu.classList.toggle("hidden");
  });
  menu.querySelectorAll(".menu-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      if (action === "edit") {
        startEditingCourse(courseId, semId);
      }
      if (action === "delete") {
        deleteCourse(courseId);
      }
      menu.classList.add("hidden");
    });
  });

  return card;
}

function handleDragOver(e, semId) {
  e.preventDefault();
  const target = e.currentTarget;
  target.classList.add("drag-target");
  e.dataTransfer.dropEffect = "move";
}

function handleDrop(e, semId, column) {
  e.preventDefault();
  column.classList.remove("drag-target");
  if (!dragContext) return;
  const { courseId, fromSem } = dragContext;
  if (fromSem === semId) return;
  moveCourse(courseId, fromSem, semId);
}

function toggleCompleted(courseId) {
  const course = state.courses[courseId];
  course.completed = !course.completed;
  render();
  persist();
}

function moveCourse(courseId, fromSem, toSem) {
  const from = state.semesters.find((s) => s.id === fromSem);
  const to = state.semesters.find((s) => s.id === toSem);
  if (!from || !to) return;
  from.courseIds = from.courseIds.filter((id) => id !== courseId);
  to.courseIds.push(courseId);
  render();
  persist();
}

function addSemester() {
  const nextIndex = state.semesterOrder.length + 1;
  const id = `sem-${nextIndex}`;
  const newSem = { id, title: `Semestre ${nextIndex}`, courseIds: [] };
  state.semesters.push(newSem);
  state.semesterOrder.push(id);
}

function addCourseFromForm(formData) {
  const code = formData.get("code").trim();
  const name = formData.get("name").trim();
  const credits = Number(formData.get("credits"));
  const prereqsInput = formData.get("prereqs") || "";
  const prereqs = prereqsInput
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  const type = formData.get("type") || "normal";
  const semester = formData.get("semester");
  if (!code || !name || !Number.isFinite(credits) || !semester) return;

  if (editingCourseId) {
    const course = state.courses[editingCourseId];
    if (!course) return;
    course.code = code;
    course.name = name;
    course.credits = credits;
    course.prereqs = prereqs;
    course.type = type;
    const currentSem = findSemesterOfCourse(editingCourseId);
    if (currentSem && currentSem.id !== semester) {
      moveCourse(editingCourseId, currentSem.id, semester);
    } else if (!currentSem) {
      const sem = state.semesters.find((s) => s.id === semester);
      if (sem) sem.courseIds.push(editingCourseId);
    }
    editingCourseId = null;
    els.submitBtn.textContent = "Agregar";
  } else {
    const id = `new-${Date.now()}`;
    state.courses[id] = {
      id,
      code,
      name,
      credits,
      type,
      completed: false,
      prereqs
    };
    const sem = state.semesters.find((s) => s.id === semester);
    if (sem) sem.courseIds.push(id);
  }

  render();
  persist();
}

function startEditingCourse(courseId, semId) {
  editingCourseId = courseId;
  const course = state.courses[courseId];
  els.courseForm.code.value = course.code;
  els.courseForm.name.value = course.name;
  els.courseForm.credits.value = course.credits;
  els.courseForm.prereqs.value = course.prereqs?.join(", ");
  els.courseForm.type.value = course.type || "normal";
  els.semesterSelect.value = semId;
  els.submitBtn.textContent = "Guardar";
}

function deleteCourse(courseId) {
  const sem = findSemesterOfCourse(courseId);
  if (sem) sem.courseIds = sem.courseIds.filter((id) => id !== courseId);
  delete state.courses[courseId];
  if (editingCourseId === courseId) {
    editingCourseId = null;
    els.submitBtn.textContent = "Agregar";
    els.courseForm.reset();
  }
  render();
  persist();
}

function findSemesterOfCourse(courseId) {
  return state.semesters.find((s) => s.courseIds.includes(courseId));
}

function removeSemester() {
  const targetId = state.pendingDeleteSemId;
  if (!targetId) return;
  const sem = state.semesters.find((s) => s.id === targetId);
  if (!sem) return;
  sem.courseIds.forEach((cid) => delete state.courses[cid]);
  state.semesters = state.semesters.filter((s) => s.id !== targetId);
  state.semesterOrder = state.semesterOrder.filter((id) => id !== targetId);
  if (state.semesterOrder.length === 0) addSemester();
  state.pendingDeleteSemId = null;
}

function hasPrereqsCompleted(course) {
  if (!course.prereqs || course.prereqs.length === 0) return true;
  return course.prereqs.every((code) =>
    Object.values(state.courses).some((c) => c.code === code && c.completed)
  );
}

function sumCredits(courseIds) {
  return courseIds.reduce((acc, id) => acc + (state.courses[id]?.credits || 0), 0);
}

function updateStats() {
  const allCourses = Object.values(state.courses);
  const done = allCourses.filter((c) => c.completed);
  const pending = allCourses.length - done.length;
  const totalCredits = allCourses.reduce((acc, c) => acc + (c.credits || 0), 0);
  const doneCredits = done.reduce((acc, c) => acc + (c.credits || 0), 0);

  els.statCredits.textContent = `Créditos cursados: ${doneCredits}/${totalCredits}`;
  els.statDone.textContent = `Aprobados: ${done.length}`;
  els.statPending.textContent = `Pendientes: ${pending}`;
}

function prereqText(course) {
  const names = course.prereqs
    .map((code) => {
      const match = Object.values(state.courses).find((c) => c.code === code);
      return match ? `${code} (${match.name})` : code;
    })
    .join(", ");
  return `Prerrequisitos: ${names}`;
}

function maybeWarnCredits(semId, credits) {
  if (credits <= 60) return;
  const dismissed = state.dismissedAlerts[semId];
  if (dismissed) return;
  els.toastMsg.textContent = `${state.semesters.find((s) => s.id === semId)?.title || "Semestre"} supera 60 créditos (${credits}).`;
  els.toast.classList.remove("hidden");
  els.toastOk.onclick = () => {
    state.dismissedAlerts[semId] = true;
    els.toast.classList.add("hidden");
    persist();
  };
}

function readSavedState(careerId) {
  const raw = localStorage.getItem(`malla-${careerId}`);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function persist() {
  localStorage.setItem(
    `malla-${state.careerId}`,
    JSON.stringify({
      courses: state.courses,
      semesters: state.semesters,
      semesterOrder: state.semesterOrder,
      colors: state.colors,
      zoom: state.zoom
    })
  );
}

function downloadConfig() {
  const payload = {
    careerId: state.careerId,
    courses: state.courses,
    semesters: state.semesters,
    semesterOrder: state.semesterOrder
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${state.careerId}-config.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}
// Versiones limpias para textos sin caracteres raros
function updateStatsSafe() {
  const allCourses = Object.values(state.courses);
  const done = allCourses.filter((c) => c.completed);
  const pending = allCourses.length - done.length;
  const totalCredits = allCourses.reduce((acc, c) => acc + (c.credits || 0), 0);
  const doneCredits = done.reduce((acc, c) => acc + (c.credits || 0), 0);

  els.statCredits.textContent = `Creditos cursados: ${doneCredits}/${totalCredits}`;
  els.statDone.textContent = `Aprobados: ${done.length}`;
  els.statPending.textContent = `Pendientes: ${pending}`;

  const overall = computeOverallProgress();
  els.statSemProgress.textContent = `Malla total: ${overall.percent}%`;

  const periodInfo = computePeriodProgress();
  els.statPeriodProgress.textContent = `Seleccionar periodo (Año ${periodInfo.year}): ${periodInfo.percent}%`;
}

function maybeWarnCreditsSafe(semId, credits) {
  if (credits <= 60) return;
  const dismissed = state.dismissedAlerts[semId];
  if (dismissed) return;
  const title = state.semesters.find((s) => s.id === semId)?.title || "Semestre";
  els.toastMsg.textContent = `${title} supera 60 creditos (${credits}).`;
  els.toast.classList.remove("hidden");
  els.toastOk.onclick = () => {
    state.dismissedAlerts[semId] = true;
    els.toast.classList.add("hidden");
    persist();
  };
}

function computePeriodProgress() {
  const totalSems = state.semesterOrder.length;
  const totalPeriods = Math.max(1, Math.ceil(totalSems / 2));
  if (state.currentPeriodIndex > totalPeriods - 1) state.currentPeriodIndex = totalPeriods - 1;
  const start = state.currentPeriodIndex * 2;
  const semIds = state.semesterOrder.slice(start, start + 2);
  const ids = semIds.flatMap((sid) => state.semesters.find((s) => s.id === sid)?.courseIds || []);
  const total = ids.length;
  const done = ids.filter((id) => state.courses[id]?.completed).length;
  const percent = total ? Math.round((done * 100) / total) : 0;
  const year = state.currentPeriodIndex + 1;
  return { year, percent };
}

function cyclePeriodProgress() {
  const totalPeriods = Math.max(1, Math.ceil(state.semesterOrder.length / 2));
  state.currentPeriodIndex = (state.currentPeriodIndex + 1) % totalPeriods;
  updateStatsSafe();
}

function computeOverallProgress() {
  const allCourses = Object.values(state.courses);
  const total = allCourses.length;
  const done = allCourses.filter((c) => c.completed).length;
  const percent = total ? Math.round((done * 100) / total) : 0;
  return { percent };
}

function toggleDeleteMode() {
  state.deleteMode = !state.deleteMode;
  state.pendingDeleteSemId = null;
  els.removeSemester.textContent = state.deleteMode ? "Cancelar borrado" : "- Semestre";
  if (state.deleteMode) {
    els.toastMsg.textContent = "Haz clic en el semestre que deseas borrar y confirma.";
    els.toast.classList.remove("hidden");
    els.toastOk.onclick = () => {
      state.deleteMode = false;
      els.removeSemester.textContent = "- Semestre";
      els.toast.classList.add("hidden");
      render();
    };
  } else {
    els.toast.classList.add("hidden");
  }
  render();
}

function handleSemesterClickForDelete(semId) {
  if (!state.deleteMode) return;
  state.pendingDeleteSemId = semId;
  const sem = state.semesters.find((s) => s.id === semId);
  const title = sem?.title || "Semestre";
  const ok = window.confirm(`¿Borrar ${title}? Se eliminaran los ramos dentro.`);
  state.deleteMode = false;
  els.removeSemester.textContent = "- Semestre";
  els.toast.classList.add("hidden");
  if (ok) {
    removeSemester();
    render();
    persist();
  } else {
    state.pendingDeleteSemId = null;
    render();
  }
}
