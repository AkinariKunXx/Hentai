import "../css/Home.css";
import "../css/footer.css";
import PricingCard from "../components/CardPrice.js";
import AccordionCustomAnimation from "../components/Accordion.js";
import InfiniteCarousel from "../components/InfiniteCarousel.js";

const pricingCards = [
    {
        title: "NEOFIT",
        src: "images/pc16.jpg",
        adv: [
            'Neofit - Ваш удачный старт в мире компьютерных игр! Компьютеры начального уровня для тех кто отдаёт предпочтение онлайн играм.',
        ],
    },
    {
        title: "TROOPER",
        src: "images/pc2.jpeg",
        adv: [
            'Trooper- Высокая производительность в играх FHD и отменное качество компонентов. Процессоры с индексом F обладают прекрасным соотношением цена-производительность!',
        ],
    },
    {
        title: "ELITE ULTIMATE",
        src: "images/pc11.jpg",
        adv: [
            'ELITE ULTIMATE - Ультимативная производительность в играх 4K и рабочих задачах. Экстремальная вычислительная мощность открывает возможности для решения любых задач.',
        ],
    },
    {
        title: "ELITE CUSTOM",
        src: "images/pc6.webp",
        adv: [
            'ELITE CUSTOM - это идеальный выбор для тех, кто хочет иметь уникальный компьютер. Благодаря футуристичным корпусам с нестандартным дизайном и широкому модельному ряду, вы сможете подобрать идеальное решение для любых задач.',
        ],
    },
];

function MainPage() {
    return (
        <>
            {/* hero section */}

            <section id="home" className="min-h-100vh flex justify-start items-center relative before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:bg-black/70">
                <img src="images/pc14.jpg" className="absolute w-full h-full object-cover -z-20 top-0" />
                <div className="mx-5 md-mx-l5">
                    <div className="font-defaultFont text-4xl inline-block br-round bg-indigo-30 white p-3">
                        Игровые компьютеры
                    </div>
                    <div>
                        <h1 className="white lh-3 text-lg fw-500 p-3">
                            Мощные игровые компьютеры на процессорах от Intel и AMD последнего поколения <br/>
                            с видеокартами серии GTX и RTX, превосходная производительность для любых игр.
                        </h1>
                        <div className="br-8 mt-10 inline-flex"></div>
                    </div>
                </div>
            </section>

            {/* features */}

            <section id="features" className="p-10 md-p-l5">
                <div className="flex flex-column md-flex-row mx-auto">
                    <div className="w-100pc md-w-40pc">
                        <div className="br-8 p-5 m-5">
                            <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5">
                                <img className="w-100pc" src="images/chip.png" />
                            </div>
                            <h4 className="white fw-600 fs-m3 mb-5">Процессоры</h4>
                            <div className="indigo-lightest fw-600 fs-m1 lh-3 opacity-50">
                                Мы устанавливаем проверенные процессоры,
                                которые обеспечивают высокую производительность и надежность.
                            </div>
                            <a href="#"
                                className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                                Подробнее
                            </a>
                        </div>
                    </div>
                    <div className="w-100pc md-w-40pc">
                        <div className="br-8 p-5 m-5">
                            <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5">
                                <img className="w-100pc" src="images/gpu.png" />
                            </div>
                            <h4 className="white fw-600 fs-m3 mb-5">Видеокарты</h4>
                            <div className="indigo-lightest fw-600 fs-m1 opacity-50">
                                Мы выбираем только качественные видеокары,
                                мы гарантируем стабильную работу и качественный графический опыт.
                            </div>
                            <a href="#"
                                className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                                Подробне
                            </a>
                        </div>
                    </div>
                    <div className="w-100pc md-w-40pc">
                        <div className="br-8 p-5 m-5">
                            <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5">
                                <img className="w-100pc" src="images/motherboard.png" />
                            </div>
                            <h4 className="white fw-600 fs-m3 mb-5">Материнские платы</h4>
                            <div className="indigo-lightest fw-600 fs-m1 opacity-50">
                                Мы также используем проверенные оперативные модули
                                для обеспечения быстрой и стабильной работы системы.
                            </div>
                            <a href="#"
                                className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                                Подробнее
                            </a>
                        </div>
                    </div>
                    \\
                </div>
            </section>

            {/* pictures pc */}
            
            <section className="grid-cols-1 grid md:grid-cols-2 xl:grid-cols-4 gap-4 p-10 md-p-l5 justify-items-center">
                {pricingCards.map((elem, i) => <PricingCard card={elem} key={i} />)}
            </section>

            {/* carousel */}

            <section className="white br-8 bg-indigo-lightest-10 p-5 md:p-10 ">
                <div className='py-6 md:py-10'>
                        <div className='mt-4 md:mt-8 flex flex-col flex-wrap gap-5 md:flex-row md:justify-center xl:justify-between mb-8 md:mb-16'>  
                            <InfiniteCarousel/>
                    </div>
                </div>
            </section>

            {/* paralax */}

            <section className="justify-start items-center relative before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:bg-black/70">
            <img src="images/pc12.jpg" className="absolute w-full h-full object-cover -z-20 top-0" />
                <div className="py-[200px] bg-paralax bg-cover bg-center desktop:bg-top flex justify-center items-center">
                    <div className='page'>
                        <div className='flex flex-col gap-y-6 tablet:flex-row tablet:gap-x-6 tablet:justify-between'>
                            <div className="flex flex-col ">
                                <div className='opacity-60 text-white text-[16px] tablet:text-[18px] desktop:text-[22px] self-center'>245</div>
                                <div className='h-px w-14 bg-textOverline self-center'></div>
                                <div className='opacity-60 text-center text-white text-[18px] tablet:text-[17px] desktop:text-[22px] self-center'>Ежемесячные продажи</div>
                            </div>
                            <div className="flex flex-col">
                                <div className='opacity-60 text-white text-[16px] tablet:text-[18px] self-center desktop:text-[22px]'>1543</div>
                                <div className='h-px w-14 bg-textOverline self-center'></div>
                                <div className='opacity-60 text-center text-white text-[18px] tablet:text-[17px] self-center desktop:text-[22px]'>Довольных клиентов</div>
                            </div>
                            <div className="flex flex-col">
                                <div className='opacity-60 text-white text-[16px] tablet:text-[18px] self-center desktop:text-[22px]'>57</div>
                                <div className='h-px w-14 bg-textOverline self-center'></div>
                                <div className='opacity-60 text-center text-white text-[18px] tablet:text-[17px] self-center desktop:text-[22px]'>Работников в команде</div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>

            {/* accordion */}

            <section className="p-10 md-p-l5">
                <div className='br-8 bg-indigo-lightest-10 p-5 md-p-l5 flex-wrap md-justify-between md-items-center'>
                    <h2 className='text-mobileTitle md:text-tabletTitle xl:text-desktopTitle mb-4 md:mb-8 text-center md:text-left white'>Преимущества</h2>
                    <AccordionCustomAnimation/>
                </div>
            </section>

            {/* subscribe */}

            <section className="p-10 md-p-l5">
                <div className="br-8 bg-indigo-lightest-10 p-5 md-p-l5 flex flex-wrap md-justify-between md-items-center">
                    <div className="w-100pc md-w-33pc">
                        <h2 className="white fs-m4 fw-800">Обнови ПК сегодня</h2>
                        <p className="fw-600 indigo-lightest opacity-40">
                            Испытай новый опыт в играх.
                        </p>
                    </div>
                    <div className="flex w-[100%] tablet:w-[60%]">
                        <div className=" w-[170%] flex my-5 tablet:w-[140%] decktop:">
                            <input type="text"
                                className="text-[8px] p-[50px] pl-[10px] w-[20px] flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 py-5 br-r-0"
                                placeholder="Email" />
                            <button className="w-[10px] button-lg bg-indigo indigo-lightest fw-300 fs-s3 br-l-0 tablet:">
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;

