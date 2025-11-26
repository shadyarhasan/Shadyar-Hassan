       
// SHADYAR HASSAN
        document.addEventListener('DOMContentLoaded', () => {

            
            const translations = {
                en: {
                    splashWait: "Loading...",
                    name: "Shadyar Hassan",
                    bio: "Hello ! My name is Shadyar Hassan, I am 1* years old and I am from one of the Kurdistan cities. I have many projects and I like new things and I have done many things. And my works are commendable so far I have created the most beautiful way and I am always trying and many people who have helped me to reach this day I thank them thanks to those people I have reached one of my dreams to own my website and many other projects.",
                    projectsTitle: "My Work & Projects",
                    proj1Title: "My KurdApp",
                    proj1Desc: "A store for downloading hacked games and applications.",
                    proj1Details: "My Kurd App, a store for downloading hacked games and applications and added features for free for Android - iPhone that will be available soon.",
                    proj2Title: "AvaDrama Fan",
                    proj2Desc: "Ava Media is a website for watching movies and dramas",
                    proj2Details: "Ava Drama Fan website for watching movies and dramas of Ava Media channel, which will soon be available as an application for both Android - iPhone.",
                    proj3Title: "KurdHome Tv",
                    proj3Desc: "To watch live Kurdish channels.",
                    proj3Details: "Kurd Home TV is a Kurdish website for watching live Kurdish channels (news, religious, children, sports, drama, ...) without any problems.",
                    settingsTitle: "Settings",
                    languageLabel: "Language",
                    themeLabel: "Light/Dark Mode",
                    readMore: "Read More",
                    readLess: "Read Less",
                    navHome: "Home",
                    navProjects: "Projects",
                    navSettings: "Settings"
                },
                ku: {
                    splashWait: "کەمێک چاوەڕوان بە...",
                    name: "شادیار حەسەن",
                    bio: "سڵاو ! ، من ناوم شادیار حەسەن ـە تەمەنم١* ساڵە و خەڵکی یەکێک لە شارەکانی کوردستانم ، خاوەنی چەندین پرۆژەم و حەزم لە شتی نوێیە و چەندین کارم کردوە ،لە تەمەنی ١٢ ساڵیەوە حەزم لە بواری پرۆگرامینگ و کۆد نوسین هەیە و شارەزام لە چەندین زمانی کۆد نوسین حەزم لە بواری کۆد و دروستکردنی وێبسایت هەیە و حەزدەکەم هەموو کات فێری شتی نوێ ببم و زیاتر شت بزانم ، و کارەکانم جێگای دەست خۆشین تاوەکوو ئێستا بە جوانترین شێوە دروستم کردونە و هەمیشە لە هەوڵداندام وە چەندین کەس کە هاوکارم بوونە گەیشتم بە ئەم رۆژە سوپاسیان دەکەم لەسایەی ئەو کەسانە گەیشتومە بە یەکێک لە خەونەکانم ئەمیش ببمە خاوەن وێبسایتی خۆم و چەندین پرۆژەی دیکە .",
                    projectsTitle: "کار و پڕۆژەکانم",
                    proj1Title: " مای کورد ئەپ ",
                    proj1Desc: "ستۆرێک بۆ دابەزاندنی یاری و بەرنامەی هاککراو",
                    proj1Details: " مای کورد ئەپ ، ستۆرێک بۆ دابەزاندنی یاری و بەرنامەی هاککراو و تایبەتمەندی زیاد کراو بە خۆڕایی بۆ ئەندرۆید - ئایفۆن کە بەمزووانە بەردەست دەبێت .",
                    proj2Title: " ئاڤادراما فان  ",
                    proj2Desc: "وێبسایتێک بۆ بینەربونوی فیلم و دراماکانی کەناڵی ئاڤا میدیا ",
                    proj2Details: " وێبسایتی ئاڤا دراما فان بۆ بینەربوونی فیلم و دراماکانی کەناڵی ئاڤا میدیا ، کە بەمزوانە بە شێوازی ئەپڵکەیشن یش بەردەست دەبێت بۆ هەردوو سیستەمی ئەندرۆید - ئایفۆن .",
                    proj3Title: " کورد هۆم تیڤی ",
                    proj3Desc: " بۆ بینەربوونی پەخشی ڕاستەوخۆی کەناڵە کوردییەکان ",
                    proj3Details: "کورد هۆم تیڤی ، وێبسایتێکی کوردییە بۆ بینەربوونی پەخشی ڕاستەوخۆی کەناڵە کوردییەکان ( هەواڵ ، ئاینی ، منداڵان ، وەرزشی ، دراما ، ...) بەبێ بوونی هیچ کێشەیەک .",
                    settingsTitle: "ڕێکخستنەکان",
                    languageLabel: "زمان",
                    themeLabel: "دۆخی ڕوناک/تاریک",
                    readMore: "زیاتر بخوێنەرەوە",
                    readLess: "کەمتر بخوێنەرەوە",
                    navHome: "سەرەکی",
                    navProjects: "پڕۆژەکانم",
                    navSettings: "ڕێکخستن"
                }
            };
            
            let currentLang = 'en';

            
            const languageSwitcher = document.getElementById('language-switcher');
            const setLanguage = (lang) => {
                currentLang = lang;
                document.documentElement.lang = lang;
                document.querySelectorAll('[data-lang-key]').forEach(element => {
                    const key = element.getAttribute('data-lang-key');
                    if (translations[lang] && translations[lang][key]) {
                        element.textContent = translations[lang][key];
                    }
                });
                document.body.style.direction = (lang === 'ku') ? 'rtl' : 'ltr';
            };
            languageSwitcher.addEventListener('change', (e) => {
                setLanguage(e.target.value);
                localStorage.setItem('language', e.target.value);
            });

            
            const themeSwitcher = document.getElementById('theme-switcher');
            const applyTheme = (theme) => {
                if (theme === 'dark') {
                    document.body.classList.add('dark-mode');
                    themeSwitcher.checked = true;
                } else {
                    document.body.classList.remove('dark-mode');
                    themeSwitcher.checked = false;
                }
            };
            themeSwitcher.addEventListener('change', () => {
                const theme = themeSwitcher.checked ? 'dark' : 'light';
                applyTheme(theme);
                localStorage.setItem('theme', theme);
            });

            
            const navButtons = document.querySelectorAll('.nav-button');
            const pages = document.querySelectorAll('.page');
            navButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetPageId = button.dataset.page;
                    
                    pages.forEach(page => page.classList.remove('active'));
                    document.getElementById(targetPageId).classList.add('active');

                    navButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                });
            });

    
            document.querySelectorAll('.details-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const card = button.closest('.project-card');
                    card.classList.toggle('expanded');


                    if (card.classList.contains('expanded')) {
                        button.textContent = translations[currentLang].readLess;
                    } else {
                        button.textContent = translations[currentLang].readMore;
                    }
                });
            });

            
            document.querySelectorAll('.ripple').forEach(button => {
                button.addEventListener('click', function (e) {
                    const rect = this.getBoundingClientRect();
                    const ripple = document.createElement('span');
                    const size = Math.max(rect.width, rect.height);
                    ripple.style.width = ripple.style.height = `${size}px`;
                    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
                    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
                    ripple.classList.add('ripple-effect');
                    this.appendChild(ripple);
                    ripple.addEventListener('animationend', () => ripple.remove());
                });
            });

            
            function init() {
                

                const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                applyTheme(savedTheme);

            

                const savedLang = localStorage.getItem('language') || 'en';
                languageSwitcher.value = savedLang;
                setLanguage(savedLang);

                

                const splashScreen = document.getElementById('splash-screen');
                const appContainer = document.getElementById('app-container');
                setTimeout(() => {
                    splashScreen.style.opacity = '0';
                    splashScreen.style.visibility = 'hidden';
                    appContainer.style.opacity = '1';
                }, 1500); 

            }

            init();
        });
