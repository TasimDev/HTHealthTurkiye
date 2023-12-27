const servicesData = [
    {
        id: 1,
        image: {
            img: 'assets/cancer_trathment.jpg',
            alt: 'Лечение на Рак',
        },
        title: 'Лечение на Рак в Турция',
        info: {
            small_info: 'В HTHealthTurkiye разбираме сериозността на борбата с рака и сме посветени на предоставяне на висококачествено и комплексно лечение. Нашата медицинска екипировка включва някои от най-престижните медицински заведения в Турция с водещи онколози и специалисти.',
            big_info: {
                info_header: 'Всичко се грижим ние, транспорта, намиране на хотели за вашето удобство и най-добрите специалист за борбата ви с Рака. Ето и услгите които предлагат те.',
                info_body: "Диагностика и Стадии на Рака <br> Хирургическо Лечение и Интервенции <br> Лъчелечение и Химиотерапия <br> Експертни Мултидисциплинарни Консултации <br> Съвременни Технологии и Лекарства <br> Психологическа Подкрепа и Рехабилитация",
                info_footer: "Свържете се с нас, за да разговорим за вашия случай и да ви предоставим подробна консултация."
            }
        }
    },
    {
        id: 2,
        image: {
            img: 'assets/eye_care.jpg',
            alt: 'Лечение на Очни заболявания',
        },
        title: 'Лечение на Очни заболявания',
        info: {
            small_info: '  В HTHealthTurkiye предлагаме висококачествено и персонализирано лечение на различни видове очни заболявания в Турция. Нашите опитни офталмолози използват най-новите технологии и методи за диагностика и лечение, гарантирайки оптимални резултати за нашите пациенти.',
            big_info: {
                info_header: 'Лечението на очни заболявания в Турция започва с подробна консултация и изследване на зрението на пациента.',
                info_body: "<p>Диагностика и Лечение на Ретинални Заболявания<br> Операции на Косата и Коремния Жлъчен Мехур<br> Лечение на Глаукома и Други Заболявания на Очното Дъно<br>Лечение на Косопад и Други Проблеми със Зрението<br> Корекция на Зрението с Ласер</p>",
                info_footer: " С Турция като ваш партньор за лечение на очни заболявания, можете да се възползвате от високотехнологични медицински ресурси и опитните ръце на нашите специалисти."
            }
        }
    },
    {
        id: 3,
        image: {
            img: 'assets/oral_care.jpg',
            alt: 'Зъболекарски услуги',
        },
        title: 'Зъболекарски услуги',
        info: {
            small_info: 'В HTHealthTurkiye предлагаме широк спектър от зъболекарски услуги в Турция, които включват диагностика, лечение и профилактика. Нашите опитни зъболекари използват съвременни методи и технологии, за да гарантират здравето на вашите зъби.',
            big_info: {
                info_header: 'В HTHealthTurkiye предлагаме широк спектър от зъболекарски услуги, които включват диагностика, лечение и профилактика. Нашите опитни зъболекари използват съвременни методи и технологии, за да гарантират здравето на вашите зъби.',
                info_body: "<h2>Наши Зъболекарски Услуги Включват:</h2><p> Редовни зъболекарски прегледи и почистване<br> Лечение на кариес и пломбиране<br> Изваждане на зъби, при необходимост<br> Ортодонтски процедури и корекции на зъбите<br> Имплантология и протетика<br></p>",
                info_footer: "  Нашата цел е да ви предоставим не само функционални, но и естетични решения за вашите зъби. Възползвайте се от нашите зъболекарски услуги и поддайте се на лечение под надзора на нашия експертен екип."
            }
        }
    },
    {
        id: 4,
        image: {
            img: 'assets/hirurgiya.jpg',
            alt: 'Хирургия в Турция'
        },
        title: 'Хирургия в Турция',
        info: {
            small_info: 'Лечението с хирургия в Турция с HTHealthTurkiye включва висококачествени медицински услуги, които обхващат различни области на хирургията. Нашите изкусни хирурги използват най-новите методи и технологии, гарантирайки успешни и безопасни процедури.',
            big_info: {
                info_header: "Лечението с хирургия в Турция с HTHealthTurkiye включва висококачествени медицински услуги, които обхващат различни области на хирургията. Нашите изкусни хирурги използват най-новите методи и технологии, гарантирайки успешни и безопасни процедури.",
                info_body: "Области на Хирургията, които покриваме включват хирургия на сърдечно-съдовата система, ортопедични хирургични процедури, хирургия на черния дроб, неврохирургия и хирургия на мозъка, лапароскопска хирургия и други.",
                info_footer: "Бързото възстановяване и минималните рискове са от съществено значение за нас. Подкрепяме вас през целия лечебен процес, осигурявайки комфорт и професионална помощ. <br><br>Свържете се с нас, за да разговорим за вашето здравословно състояние и как можем да ви предложим най-доброто лечение с хирургия в Турция."
            }
        }
    },
    {
        id: 5,
        image: {
            img: 'assets/cosmetic.jpg',
            alt: 'Естетичната медицина в Турция'
        },
        title: 'Естетичната медицина в Турция',
        info: {
            small_info: 'Естетичната медицина в Турция с HTHealthTurkiye предлага широка гама от процедури и услуги, които имат за цел да подобрят външния вид и самочувствието на пациентите. Турция е водещ лидер в Естетичната хирургия в целия свят.',
            big_info: {
                info_header: "Естетичната медицина в Турция с HTHealthTurkiye предлага широка гама от процедури и услуги, които имат за цел да подобрят външния вид и самочувствието на пациентите. Ето информация за естетичната медицина в Турция",
                info_body: "<h2>Процедури в Естетичната Медицина:</h2> Ботокс и Дермални Филъри: Използване на инжекции с ботокс и филъри за намаляване на бръчките и подобряване на контурите на лицето. <br> Лазерна Терапия: За обработка на проблеми като акне, пигментация и стареене на кожата.<br> Лечение със Скалпел: Хирургически процедури като лифтинг, ринопластика и корекция на уши. <br> Лечение на Косата: Възстановяване на загубата на коса чрез трансплантация и други процедури. <br> Дерматологични Процедури: За подмладяване и поддържане на здравето на кожата. ",
                info_footer: "Защо да Изберете Естетична Медицина в Турция с HTHealthTurkiye: <br> Експертен Медицински Екип <br> Съвременни Медицински Заведения<br> Индивидуален Подход<br> Безопасност и Качество<br> Свържете се с нас, за да обсъдим как можем да ви помогнем да постигнете желания от вас външен вид чрез нашите услуги по естетична медицина в Турция."
            }
        }
    },
    {
        id: 6,
        image: {
            img: 'assets/therapy.jpg',
            alt: 'Физиотерапия и Рехабилитация в Турция'
        },
        title: 'Физиотерапия и Рехабилитация в Турция',
        info: {
            small_info: 'Физиотерапията и рехабилитацията в Турция са насочени към възстановяване и подобряване на функционалността на тялото след заболявания, травми или хирургични процедури.',
            big_info: {
                info_header: "Индивидуална Оценка и План за Лечение: <br>Всеки пациент получава персонализиран план за физиотерапия и рехабилитация, базиран на индивидуалните му нужди и здравословно състояние.<br>Физиотерапевтични Упражнения и Терапии: Използваме разнообразни физиотерапевтични упражнения и терапии, които са насочени към възстановяване на сила, гъвкавост и координация. <br> Масажна Терапия: Масажната терапия се прилага за облекчаване на болка, подобряване на циркулацията и релаксация на мускулите. <br>Електротерапия и Ултразвукови Терапии: Използваме модерни техники като електротерапия и ултразвукови терапии за ускоряване на процеса на възстановяване.<br>Специализирани Рехабилитационни Програми: Работим с пациенти след травми, операции, инсулти и други заболявания, предоставяйки им специализирани програми за рехабилитация.",
                info_body: "",
                info_footer: "Свържете се с нас, за да разговорим за вашия случай и как можем да ви помогнем с физиотерапия и рехабилитация в Турция."
            }
        }
    },
    {
        id: 7,
        image: {
            img: 'assets/hair_transplant.jpg',
            alt: 'Трансплантация на коса'
        },
        title: 'Присаждане на Коса в Турция',
        info: {
            small_info: 'Процедурата за присаждане на коса в Турция с HTHealthTurkiye представлява персонализиран и иновативен подход към решаването на проблема с косопада.',
            big_info: {
                info_header: "Процедурата започва с индивидуална консултация, където определяме вашите желания и очаквания, и лекарите оценяват подходящия метод за вас. Зоната, от която се вземат фоликулите, се подготвя внимателно, а фоликулите се изваждат с прецизност, запазвайки тяхната жизнеспособност.",
                info_body: "Фоликулите се подготвят за присаждане, като след това се присаждат във внимателно избрани зони с косопад. След процедурата, получавате подробни насоки за грижа, които ще ви помогнат да поддържате здравето на новите фоликули.",
                info_footer: "Съчетавайки експертизата на нашия медицински екип със съвременни технологии, процедурата за присаждане на коса в Турция с HTHealthTurkiye е гаранция за естествен и устойчив резултат. Свържете се с нас, за да започнем пътя към вашия по-плътен и естествен вид на косата."
            }
        }
    },
    {
        id: 8,
        image: {
            img: 'assets/tall_operation.jpg',
            alt: 'Увеличаване на Ръста'
        },
        title: 'Увеличаване на Ръста',
        info: {
            small_info: 'В HTHealthTurkiye предлагаме иновативен и персонализиран подход към процедурите за увеличаване на ръста, като съчетаваме експертизата на нашия медицински екип със съвременни технологии. Нашите цели са да ви помогнем да постигнете не само по-висок, но и по-уверен външен вид.',
            big_info: {
                info_header: "<h3>Как Работи Процедурата:</h3>",
                info_body: "Консултация и Персонализация: В началото на пътя стои индивидуална консултация, където се обсъждат вашите цели и очаквания. Лекарите ни извършват детайлна оценка, определяйки подходящите методи за постигане на желаните резултати. Медицински Процеси: Според вашите уникални характеристики и цели, можем да предложим иновативни медицински процеси, включително инжекции с растежен фактор, насочени към стимулиране на растежа на костите. Рехабилитация и Следоперативен Период: След провеждане на процедурата, нашият екип ви предоставя подробни насоки за рехабилитация и грижа, гарантирайки ви комфортен и безпроблемен следоперативен период.",
                info_footer: "Свържете се с нас, за да стартираме пътя към по-висок и по-уверен външен вид с HTHealthTurkiye."
            }
        }
    }
]
