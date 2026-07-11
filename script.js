/* ===================================
   PD | Web & App Development
   style.css (Part 1)
=================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
    scroll-behavior:smooth;
}

:root{
    --primary:#2563eb;
    --secondary:#0f172a;
    --bg:#ffffff;
    --card:#f8fafc;
    --text:#1e293b;
    --white:#ffffff;
    --shadow:0 15px 35px rgba(0,0,0,.08);
    --radius:18px;
}

body.dark{
    --bg:#0b1120;
    --card:#111827;
    --text:#f8fafc;
    --secondary:#f8fafc;
}

body{
    background:var(--bg);
    color:var(--text);
    overflow-x:hidden;
    transition:.3s;
}

section{
    padding:90px 8%;
}

a{
    text-decoration:none;
}

img{
    max-width:100%;
}

/* Loader */

#loader{
    position:fixed;
    inset:0;
    background:var(--bg);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:9999;
}

.spinner{
    width:60px;
    height:60px;
    border:6px solid #ddd;
    border-top:6px solid var(--primary);
    border-radius:50%;
    animation:spin 1s linear infinite;
}

@keyframes spin{
    to{
        transform:rotate(360deg);
    }
}

/* Header */

header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background:rgba(255,255,255,.95);
    backdrop-filter:blur(10px);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 8%;
    box-shadow:var(--shadow);
    z-index:1000;
}

body.dark header{
    background:#0b1120;
}

.logo{
    font-size:32px;
    font-weight:800;
    color:var(--secondary);
}

.logo span{
    color:var(--primary);
}

nav{
    display:flex;
    gap:35px;
}

nav a{
    color:var(--text);
    font-weight:500;
    transition:.3s;
}

nav a:hover{
    color:var(--primary);
}

.header-right{
    display:flex;
    align-items:center;
    gap:15px;
}

#themeBtn,
#menuBtn{
    width:45px;
    height:45px;
    border:none;
    background:var(--card);
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    font-size:20px;
    box-shadow:var(--shadow);
}

#menuBtn{
    display:none;
}

/* Hero */

.hero{
    min-height:100vh;
    display:grid;
    grid-template-columns:1.2fr .8fr;
    align-items:center;
    gap:60px;
}

.hero h3{
    color:var(--primary);
    margin-bottom:15px;
    letter-spacing:2px;
}

.hero h1{
    font-size:60px;
    line-height:1.1;
    margin-bottom:20px;
}

.hero p{
    font-size:17px;
    line-height:1.8;
    margin-bottom:35px;
}

.hero-buttons{
    display:flex;
    gap:20px;
    flex-wrap:wrap;
}

.btn{
    padding:15px 35px;
    border-radius:50px;
    background:var(--primary);
    color:#fff;
    transition:.3s;
    display:inline-block;
}

.btn:hover{
    transform:translateY(-5px);
}

.outline{
    background:transparent;
    border:2px solid var(--primary);
    color:var(--primary);
}

.hero-box{
    background:var(--card);
    padding:35px;
    border-radius:var(--radius);
    box-shadow:var(--shadow);
}

.hero-box h2{
    margin-bottom:20px;
}

.hero-box ul{
    list-style:none;
}

.hero-box li{
    margin:15px 0;
}

/* Section */

.section-title{
    text-align:center;
    margin-bottom:60px;
}

.section-title h2{
    font-size:42px;
    color:var(--secondary);
    margin-bottom:15px;
}

.section-title p{
    max-width:750px;
    margin:auto;
    color:#64748b;
    line-height:1.8;
}

/* About */

.about-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.about-card{
    background:var(--card);
    padding:35px;
    border-radius:var(--radius);
    box-shadow:var(--shadow);
    transition:.3s;
}

.about-card:hover{
    transform:translateY(-10px);
}

.about-card h3{
    margin-bottom:15px;
    color:var(--secondary);
}

.about-card p{
    line-height:1.8;
}

/* Services */

.services{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.card{
    background:var(--card);
    padding:35px 25px;
    border-radius:var(--radius);
    text-align:center;
    box-shadow:var(--shadow);
    transition:.3s;
}

.card:hover{
    transform:translateY(-10px);
}

.card i{
    font-size:45px;
    color:var(--primary);
    margin-bottom:20px;
}

.card h3{
    margin-bottom:15px;
}

.card p{
    color:#64748b;
    line-height:1.7;
}

/* Portfolio */

.projects{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.project{
    background:var(--card);
    padding:30px;
    border-radius:var(--radius);
    box-shadow:var(--shadow);
    transition:.3s;
}

.project:hover{
    transform:translateY(-10px);
}

.project h3{
    margin-bottom:15px;
    color:var(--secondary);
}

.project p{
    color:#64748b;
    line-height:1.7;
}
/* ===========================
   style.css (Part 2)
   Continue below Part 1
===========================*/

/* Statistics */

.stats{
    background:var(--secondary);
    color:#fff;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:30px;
    text-align:center;
}

.stats div{
    padding:20px;
}

.stats h2{
    font-size:48px;
    color:var(--primary);
    margin-bottom:10px;
}

.stats p{
    font-size:17px;
    opacity:.9;
}

/* Contact */

.contact-info{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:25px;
    margin-bottom:40px;
}

.info-box{
    background:var(--card);
    padding:25px;
    border-radius:var(--radius);
    box-shadow:var(--shadow);
    display:flex;
    align-items:flex-start;
    gap:18px;
    transition:.3s;
}

.info-box:hover{
    transform:translateY(-8px);
}

.info-box i{
    font-size:28px;
    color:var(--primary);
}

.info-box h4{
    margin-bottom:8px;
    color:var(--secondary);
}

.info-box a{
    color:var(--text);
    word-break:break-word;
}

form{
    max-width:750px;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
}

form input,
form textarea{
    width:100%;
    padding:16px;
    border:1px solid #d1d5db;
    border-radius:14px;
    background:var(--card);
    color:var(--text);
    font-size:16px;
    outline:none;
    transition:.3s;
}

form input:focus,
form textarea:focus{
    border-color:var(--primary);
}

form textarea{
    resize:none;
    height:180px;
}

form button{
    border:none;
    cursor:pointer;
    background:var(--primary);
    color:#fff;
    padding:16px;
    border-radius:14px;
    font-size:17px;
    transition:.3s;
}

form button:hover{
    transform:translateY(-3px);
}

/* Footer */

footer{
    background:#08111f;
    color:#fff;
    text-align:center;
    padding:45px 20px;
}

.social{
    display:flex;
    justify-content:center;
    gap:18px;
    margin-bottom:20px;
}

.social a{
    width:46px;
    height:46px;
    border-radius:50%;
    background:#1e293b;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:.3s;
}

.social a:hover{
    background:var(--primary);
    transform:translateY(-4px);
}

footer p{
    font-size:15px;
    opacity:.9;
}

/* Floating WhatsApp */

.whatsapp-float{
    position:fixed;
    right:22px;
    bottom:95px;
    width:60px;
    height:60px;
    border-radius:50%;
    background:#25D366;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
    box-shadow:var(--shadow);
    z-index:999;
    transition:.3s;
}

.whatsapp-float:hover{
    transform:scale(1.08);
}

/* Back To Top */

#topBtn{
    position:fixed;
    right:22px;
    bottom:22px;
    width:50px;
    height:50px;
    border:none;
    border-radius:50%;
    background:var(--primary);
    color:#fff;
    cursor:pointer;
    display:none;
    box-shadow:var(--shadow);
    transition:.3s;
    z-index:999;
}

#topBtn:hover{
    transform:translateY(-4px);
}

/* Scroll Animation */

.reveal{
    opacity:0;
    transform:translateY(35px);
    transition:all .8s ease;
}

.reveal.active{
    opacity:1;
    transform:translateY(0);
}

/* Responsive */

@media(max-width:900px){

    #menuBtn{
        display:flex;
    }

    nav{
        position:absolute;
        top:78px;
        left:0;
        width:100%;
        background:var(--bg);
        flex-direction:column;
        display:none;
        padding:25px;
        box-shadow:var(--shadow);
    }

    nav.active{
        display:flex;
    }

    .hero{
        grid-template-columns:1fr;
        text-align:center;
        padding-top:120px;
    }

    .hero h1{
        font-size:42px;
    }

    .hero-buttons{
        justify-content:center;
    }

    .hero-box{
        margin-top:20px;
    }

    .section-title h2{
        font-size:34px;
    }

    .contact-info{
        grid-template-columns:1fr;
    }
}

@media(max-width:600px){

    section{
        padding:70px 6%;
    }

    .hero h1{
        font-size:34px;
    }

    .hero p{
        font-size:15px;
    }

    .btn{
        width:100%;
        text-align:center;
    }

    .stats{
        grid-template-columns:1fr;
    }

    .projects,
    .services,
    .about-grid{
        grid-template-columns:1fr;
    }

}
