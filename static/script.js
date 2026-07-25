/* ================================
   EduPredict AI - Premium CSS
   Glassmorphism AI Portfolio Style
================================ */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    background:
        radial-gradient(circle at top left, #2563eb, transparent 35%),
        radial-gradient(circle at bottom right, #06b6d4, transparent 35%),
        linear-gradient(135deg, #020617, #0f172a);
    color: #ffffff;
    overflow-x: hidden;
}


/* Background Glow */

body::before,
body::after {
    content: "";
    position: fixed;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    filter: blur(120px);
    z-index: -1;
}

body::before {
    background: #2563eb;
    top: -120px;
    left: -100px;
}

body::after {
    background: #06b6d4;
    bottom: -120px;
    right: -100px;
}


/* Main Container */

.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}


/* Glass Common */

.glass {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}


/* ================= HEADER ================= */

header {
    padding: 25px 0;
}

.logo,
.brand {
    font-size: 30px;
    font-weight: 800;
    background: linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8);
    -webkit-background-clip: text;
    color: transparent;
}

header p {
    color: #cbd5e1;
}


/* ================= HERO ================= */

.hero {
    text-align: center;
    padding: 80px 20px 50px;
}

.hero h1 {
    font-size: clamp(35px,5vw,65px);
    font-weight: 800;
    line-height: 1.1;
}

.hero h1 span {
    background: linear-gradient(90deg,#22d3ee,#3b82f6);
    -webkit-background-clip: text;
    color: transparent;
}

.hero p {
    max-width: 700px;
    margin: 20px auto;
    color: #cbd5e1;
    font-size: 18px;
}


/* ================= INPUT SECTION ================= */

.prediction-card {
    padding: 35px;
    border-radius: 25px;
    background: rgba(255,255,255,0.08);
    border:1px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(25px);
}


.input-grid {
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:25px;
}


.input-card {
    padding:22px;
    border-radius:20px;
    background:rgba(255,255,255,0.07);
    border:1px solid rgba(255,255,255,0.12);
    transition:.3s;
}


.input-card:hover {
    transform:translateY(-5px);
    background:rgba(255,255,255,0.12);
}


.input-card label {
    display:block;
    font-size:15px;
    font-weight:600;
    margin-bottom:12px;
    color:#e0f2fe;
}


.input-card input {
    width:100%;
    padding:14px;
    border-radius:12px;
    border:none;
    outline:none;
    background:rgba(15,23,42,.8);
    color:white;
    font-size:16px;
}


.input-card input:focus {
    box-shadow:0 0 0 2px #38bdf8;
}


/* ================= BUTTONS ================= */


.button-group {
    display:flex;
    justify-content:center;
    gap:20px;
    margin-top:35px;
}


button {
    padding:14px 35px;
    border-radius:50px;
    border:none;
    cursor:pointer;
    font-size:16px;
    font-weight:600;
    transition:.3s;
}


.predict-btn {
    color:white;
    background:linear-gradient(90deg,#2563eb,#06b6d4);
    box-shadow:0 10px 30px rgba(37,99,235,.4);
}


.predict-btn:hover {
    transform:translateY(-3px);
}


.reset-btn {
    background:rgba(255,255,255,.12);
    color:white;
    border:1px solid rgba(255,255,255,.2);
}


.reset-btn:hover {
    background:white;
    color:#0f172a;
}


/* ================= RESULT CIRCLE ================= */


.result-section {
    text-align:center;
    margin:60px 0;
}


.result-circle {
    width:220px;
    height:220px;
    margin:30px auto;
    border-radius:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    background:
    radial-gradient(circle,#38bdf8,#2563eb);

    box-shadow:
    0 0 40px rgba(56,189,248,.6),
    inset 0 0 30px rgba(255,255,255,.2);
}


.result-circle h2 {
    font-size:45px;
    font-weight:800;
}


.result-circle span {
    color:#e0f2fe;
}


/* ================= FEATURES ================= */


.features {
    padding:60px 0;
}


.section-title {
    text-align:center;
    font-size:35px;
    margin-bottom:40px;
}


.feature-grid {
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:25px;
}


.feature-card {
    padding:30px;
    text-align:center;
    border-radius:22px;
    background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.15);
    transition:.3s;
}


.feature-card:hover {
    transform:translateY(-8px);
}


.feature-card h3 {
    margin:15px 0;
}


.feature-card p {
    color:#cbd5e1;
}


/* ================= ABOUT ================= */


.about {
    padding:70px 30px;
    text-align:center;
}


.about p {
    max-width:800px;
    margin:auto;
    color:#cbd5e1;
    line-height:1.8;
}


/* ================= FOOTER ================= */


footer {
    text-align:center;
    padding:30px 0;
    color:#94a3b8;
    border-top:1px solid rgba(255,255,255,.1);
}


/* ================= ANIMATION ================= */

@keyframes floating {

    0%,100% {
        transform:translateY(0);
    }

    50% {
        transform:translateY(-10px);
    }

}


.result-circle {
    animation:floating 4s infinite;
}


/* ================= RESPONSIVE ================= */


@media(max-width:900px){

    .input-grid,
    .feature-grid {
        grid-template-columns:1fr;
    }


    .hero {
        padding-top:50px;
    }


    .prediction-card {
        padding:20px;
    }

}


@media(max-width:600px){

    .container {
        width:94%;
    }


    .logo,
    .brand {
        font-size:25px;
    }


    .hero h1 {
        font-size:38px;
    }


    .button-group {
        flex-direction:column;
    }


    button {
        width:100%;
    }


    .result-circle {
        width:180px;
        height:180px;
    }


    .result-circle h2 {
        font-size:35px;
    }

}
