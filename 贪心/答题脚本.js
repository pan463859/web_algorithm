// ==UserScript==
// @name         青骄第二课堂答题小助手2.0
// @namespace    http://tampermonkey.net/
// @version      1.1
// @license      GPL
// @description  第二课堂（https://www.2-class.com）答题小助手，安装后进入知识竞赛按Ctrl键弹出答案或开启自动答题功能自动选择正确答案并跳转到下一题。
// @author       t0ny.t4ng
// @match        https://2-class.com/competition
// @match        https://www.2-class.com/competition
// @icon         https://img.alicdn.com/tfs/TB13RHdl8r0gK0jSZFnXXbRRXXa-32-32.png
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/toastr.js/latest/js/toastr.min.js
// @resource css https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.css
// @grant        GM_getResourceText
// @grant        unsafeWindow
// @grant        GM_addStyle
// [url=home.php?mod=space&uid=170990]@name[/url]         aliyun_slide
// [url=home.php?mod=space&uid=467642]@namespace[/url]    [url=https://www.yuban.ltd/]https://www.yuban.ltd/[/url]
// [url=home.php?mod=space&uid=1248337]@version[/url]      0.0.1
// @description  阿里云滑块自动滑动
// [url=home.php?mod=space&uid=686208]@AuThor[/url]       RenJie
// [url=home.php?mod=space&uid=697773]@include[/url]      /[a-zA-z]+://[^\s]*/
// [url=home.php?mod=space&uid=609072]@grant[/url]        none
// ==/UserScript==

(function () {
    window.onload = function () {
        function sleep(time) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, time);
            });
        }
        // 开始跑脚本来为每个学生答题
        function run(curuser, password) {

        }
        async function batchrun() {
            const libs = {
                "libPrimarySchool": [
                    {
                        "question": "“国际禁毒日”是每年的（）。",
                        "answer": "B"
                    },
                    {
                        "question": "传统毒品一般是指鸦片、海洛因、大麻等流行较早的毒品。",
                        "answer": "A"
                    },
                    {
                        "question": "药品可以随意服用，不需要遵医嘱。",
                        "answer": "C"
                    },
                    {
                        "question": "“金三角”是指泰国、缅甸、（）三国交界的地方（一个区域）。",
                        "answer": "A"
                    },
                    {
                        "question": "“摇头丸”是苯丙胺类的衍生物，属中枢神经（）。",
                        "answer": "B"
                    },
                    {
                        "question": "甲基苯丙胺因其纯品无色透明，像冰一样，故俗称“冰毒”。",
                        "answer": "A"
                    },
                    {
                        "question": "吸食毒品是违法行为，不是犯罪行为。",
                        "answer": "A"
                    },
                    {
                        "question": "《中华人民共和国禁毒法》规定，教育行政部门、（）应当将禁毒知识纳入教育、教学内容，对学生进行禁毒宣传教育。",
                        "answer": "A"
                    },
                    {
                        "question": "《中华人民共和国禁毒法》自（）起施行。",
                        "answer": "C"
                    },
                    {
                        "question": "K粉呈白色结晶粉末状，易溶于水，可勾兑进饮料和酒水中。",
                        "answer": "A"
                    },
                    {
                        "question": "从毒品流行的时间顺序看，可分为传统毒品和新型毒品。传统毒品一般是指鸦片、海洛因、大麻等流行较早的毒品。",
                        "answer": "A"
                    },
                    {
                        "question": "从医学角度看，吸毒成瘾是一种疾病，是（）。",
                        "answer": "D"
                    },
                    {
                        "question": "当发现有人可能正在吸毒或实施涉及毒品的违法犯罪行为时，应该（）。",
                        "answer": "A"
                    },
                    {
                        "question": "当有人威胁我们吸毒时，要将情况主动告知家长和学校，或者打110报警，寻求帮助。",
                        "answer": "A"
                    },
                    {
                        "question": "当有人以各种借口引诱你吸食毒品或尝试可能是毒品的药丸时，正确的做法是（）。",
                        "answer": "A"
                    },
                    {
                        "question": "当在你身边出现毒品时，正确的做法是（　）。",
                        "answer": "C"
                    },
                    {
                        "question": "毒品区别于其他毒物的自然属性是（）。",
                        "answer": "B"
                    },
                    {
                        "question": "毒品是使用后能够产生依赖性的物质。",
                        "answer": "A"
                    },
                    {
                        "question": "《中华人民共和国禁毒法》第四条规定:禁毒工作实行（）为主，综合治理，禁种、禁制、禁贩、禁吸并举的方针。",
                        "answer": "A"
                    },
                    {
                        "question": "毒品与药品，往往具有双重属性，合法为人解除病痛的就是药品。",
                        "answer": "A"
                    },
                    {
                        "question": "止咳水不能随便乱用，需要遵医嘱。",
                        "answer": "A"
                    },
                    {
                        "question": "二十世纪（），中国获得“无毒国”美誉近三十年。",
                        "answer": "B"
                    },
                    {
                        "question": "各级人民政府应当建立毒品违法犯罪举报制度。",
                        "answer": "A"
                    },
                    {
                        "question": "根据（）需要，依法可以生产、经营、使用、储存、运输麻醉药品和精神药品。",
                        "answer": "A"
                    },
                    {
                        "question": "在日常生活中防毒要做到:一是不要听人蛊惑，受人引诱；二是不要与吸毒、贩毒者为伍；三是不要随意接受陌生人的馈赠；四是（）。",
                        "answer": "B"
                    },
                    {
                        "question": "医学上习惯称吸毒为药物滥用。",
                        "answer": "A"
                    },
                    {
                        "question": "国家鼓励公民、组织开展公益性的禁毒宣传活动。",
                        "answer": "A"
                    },
                    {
                        "question": "合成毒品直接作用于人的（）。",
                        "answer": "C"
                    },
                    {
                        "question": "各级各类学校必须开设禁毒专题教育课，将禁毒教育列为学校教育的内容。",
                        "answer": "A"
                    },
                    {
                        "question": "戒毒人员在（）等方面不受歧视。有关部门、组织和人员应当在这些方面对戒毒人员给予必要的指导和帮助。",
                        "answer": "D"
                    },
                    {
                        "question": "戒毒是一个长期的过程，包括生理脱毒与医学治疗、（）、善后辅导与回归社会三个阶段。",
                        "answer": "B"
                    },
                    {
                        "question": "“金新月”国际毒源地是指以下哪几个国家的交界地带？",
                        "answer": "B"
                    },
                    {
                        "question": "咖啡因是从茶叶、咖啡果中提炼出来的一种生物碱，是国家管制的精神药品，所以人们喝茶、喝咖啡的行为是吸毒。",
                        "answer": "B"
                    },
                    {
                        "question": "麦角二乙胺（LSD），俗称“邮票”、“贴纸”，是一种强烈的致幻剂。",
                        "answer": "A"
                    },
                    {
                        "question": "关于“笑气”，下列说法正确的是:（）",
                        "answer": "C"
                    },
                    {
                        "question": "南美的（　）、秘鲁、玻利维亚是可卡因的最大生产基地，俗称“银三角”。",
                        "answer": "C"
                    },
                    {
                        "question": "李某发现儿子小强吸毒后，便将其关在家中，并与家人轮流看守令其戒毒。起初，断了毒品的小强呼天喊地，半个月后，小强又恢复了正常。试问小强是否已全部戒除毒瘾？（）",
                        "answer": "B"
                    },
                    {
                        "question": "你的好朋友在娱乐场所给你一种样子像糖果一样的东西，说特别好玩，让你尝尝。你的选择应该是:（）",
                        "answer": "C"
                    },
                    {
                        "question": "有人引诱你吸食一些不明来源的小零食、饮料等，你应该如何应对？",
                        "answer": "B"
                    },
                    {
                        "question": "你认为一个家庭如何才能“远离毒品”？（）",
                        "answer": "A"
                    },
                    {
                        "question": "青少年如何避免吸毒？（）",
                        "answer": "D"
                    },
                    {
                        "question": "青少年吸毒的原因是什么？（）",
                        "answer": "D"
                    },
                    {
                        "question": "珍爱生命，远离毒品，要做到（）",
                        "answer": "ABCD"
                    },
                    {
                        "question": "人们常说“毒品猛于虎”，毒品的危害除了对身心的危害，严重摧残吸毒者的身体之外，还包括（）。",
                        "answer": "D"
                    },
                    {
                        "question": "如果有同学或好朋友吃了一些东西以后，发生昏厥、呕吐或是抽搐等不适症状，我们可以拨打120急救电话。",
                        "answer": "A"
                    },
                    {
                        "question": "身体脱毒只是戒毒过程的第一步，最根本上的是要彻底摆脱（　），才能达到彻底康复。",
                        "answer": "C"
                    },
                    {
                        "question": "王某在自己花盆里种植5株罂粟用来欣赏美丽花朵，这是允许的。",
                        "answer": "B"
                    },
                    {
                        "question": "世界卫生组织将每年（）定为“世界艾滋病日”。",
                        "answer": "D"
                    },
                    {
                        "question": "毒品预防教育的重点对象是（　）。",
                        "answer": "A"
                    },
                    {
                        "question": "吸毒的危害有哪些方面？（）",
                        "answer": "D"
                    },
                    {
                        "question": "吸毒会损害人的呼吸系统、消化系统、心血管系统、免疫系统和神经系统，感染各种疾病。",
                        "answer": "A"
                    },
                    {
                        "question": "吸毒行为可以通过采集吸毒嫌疑人的血液、尿液、毛发等检测出来。",
                        "answer": "A"
                    },
                    {
                        "question": "吸毒人员是违法者，也是（）。",
                        "answer": "A"
                    },
                    {
                        "question": "大剂量吸食大麻可造成幻觉、妄想、精神失常。",
                        "answer": "A"
                    },
                    {
                        "question": "小明今年上五年级，沉迷于网络游戏，然后到黑网吧去上网，结交了不良的朋友，最后染上了烟瘾和学会了吸毒。这个故事告诉我们什么道理？（）",
                        "answer": "D"
                    },
                    {
                        "question": "摇头丸主要出现在慢摇吧、迪厅等娱乐场所，青少年应拒绝去这些场所。（）",
                        "answer": "A"
                    },
                    {
                        "question": "远离毒品的自我保护方法有（　）。",
                        "answer": "D"
                    },
                    {
                        "question": "跳跳糖、奶茶、咖啡包等不是毒品，但是毒贩会把毒品伪装成“跳跳糖、奶茶、咖啡包”等，我们要保持警惕。",
                        "answer": "A"
                    },
                    {
                        "question": "小学生应该怎样做才能远离毒品、拒绝毒品？（）",
                        "answer": "ABCD"
                    },
                    {
                        "question": "身边的亲戚、朋友、同学或者家长都吸烟，他们递烟给你，你不要，有人说偶尔体验一下没关系，你最好的应对方式应该是（　）。",
                        "answer": "D"
                    },
                    {
                        "question": "世界上三大毒品产地中哪一个不在亚洲？",
                        "answer": "C"
                    },
                    {
                        "question": "大麻是目前世界上滥用人数最多的毒品。",
                        "answer": "A"
                    },
                    {
                        "question": "为了安全起见，我们应该拒绝陌生人给的糖果、点心或任何饮料。（）",
                        "answer": "A"
                    },
                    {
                        "question": "“虎门销烟”是哪一天开始的（）。",
                        "answer": "A"
                    },
                    {
                        "question": "未成年人的父母或者其他监护人应当对未成年人进行毒品危害的教育，防止其吸食、注射毒品或者进行其他毒品违法犯罪活动。",
                        "answer": "A"
                    },
                    {
                        "question": "我国近代史中的第一次“鸦片战争”是哪国发起的？",
                        "answer": "C"
                    },
                    {
                        "question": "我国禁毒工作的治本之策是（　）。",
                        "answer": "A"
                    },
                    {
                        "question": "我们的爸爸、爷爷都可以喝酒，所以作为小学生我们也可以喝酒。（）",
                        "answer": "B"
                    },
                    {
                        "question": "吸毒会败坏社会风气，腐蚀人的灵魂，摧毁民族精神。",
                        "answer": "A"
                    },
                    {
                        "question": "吸毒人群的意外死亡率较一般人群高。",
                        "answer": "A"
                    },
                    {
                        "question": "吸毒人员身体消瘦是一种常态，而非病态，所以吸食毒品能有效减肥。",
                        "answer": "B"
                    },
                    {
                        "question": "吸毒如果仅仅偶尔吸一两次，一般都不会上瘾。这种说法（）",
                        "answer": "B"
                    },
                    {
                        "question": "吸毒者不健康的心理有盲目从众、好奇、爱慕虚荣、赶时髦、追求刺激和享乐、赌气或逆反、无知和轻信、自暴自弃等。",
                        "answer": "A"
                    },
                    {
                        "question": "吸食冰毒以后马上驾驶车辆，容易造成情绪冲动及过度兴奋，从而极易引发严重交通事故。",
                        "answer": "A"
                    },
                    {
                        "question": "吸食注射毒品成瘾的，应当戒除毒瘾。",
                        "answer": "A"
                    },
                    {
                        "question": "吸烟会使肺癌的发生几率增加，诱发呼吸系统疾病，从而威胁人们的身体健康。",
                        "answer": "A"
                    },
                    {
                        "question": "下面表述正确的是？（）",
                        "answer": "D"
                    },
                    {
                        "question": "学生也有一份禁毒的责任。",
                        "answer": "A"
                    },
                    {
                        "question": "要拒绝毒品，我们除了要知道什么是毒品、知道毒品极易成瘾、知道毒品的危害，还要（　）。",
                        "answer": "D"
                    },
                    {
                        "question": "以下属于生活技能教育主要内容的是（　）。",
                        "answer": "D"
                    },
                    {
                        "question": "长期抽烟、喝酒也会产生生理依赖和心理依赖",
                        "answer": "A"
                    },
                    {
                        "question": "出于观赏的目的，种植大麻、古柯或罂粟就是合法的。以上说法正确吗?",
                        "answer": "B"
                    },
                    {
                        "question": "止咳露（或止咳水）只是一种常见的中成药，大量服用不会形成药物依赖。这种说法（）。",
                        "answer": "B"
                    },
                    {
                        "question": "制定《中华人民共和国禁毒法》的目的是:预防和惩治毒品违法犯罪行为，保护公民身心健康，维护社会秩序。",
                        "answer": "A"
                    },
                    {
                        "question": "学校毒品预防教育的目标是（）",
                        "answer": "C"
                    },
                    {
                        "question": "学校是毒品预防教育的主阵地，课堂是主渠道",
                        "answer": "A"
                    },
                    {
                        "question": "新精神活性物质又称:",
                        "answer": "D"
                    },
                    {
                        "question": "不是艾滋病的传播途径的是（）",
                        "answer": "D"
                    },
                    {
                        "question": "不健康的生活方式有？",
                        "answer": "D"
                    },
                    {
                        "question": "国家禁毒办依托全国青少年毒品预防教育数字化平台，建立科学评比遴选机制，鼓励各地开发制作各类禁毒宣传教育资料，推送全国（）。",
                        "answer": "A"
                    },
                    {
                        "question": "结交朋友越多越好吗？（）",
                        "answer": "C"
                    },
                    {
                        "question": "高雅情趣是（）向上的生活情趣，能催人上进，改变人的精神面貌，提高人的文化修养，使生活更加充实且富有意义。",
                        "answer": "D"
                    },
                    {
                        "question": "目前，（）地区是对我国危害最大的毒品来源地。",
                        "answer": "A"
                    },
                    {
                        "question": "麻醉药品和精神药品属于列管物质，具有（）属性。",
                        "answer": "C"
                    },
                    {
                        "question": "下列属于我国整类列管的非药用类麻醉药品和精神药品的有（）",
                        "answer": "C"
                    },
                    {
                        "question": "芬太尼属于哪种药品？",
                        "answer": "B"
                    },
                    {
                        "question": "今年6月至11月，中央宣传部、中央网信办、教育部、国家禁毒办等十个部门联合制定方案，在全国集中组织开展防范毒品滥用宣传教育活动。方案明确指出，我国目前列管的麻精药品数量和整类列管的物质数量分别是（）。",
                        "answer": "D"
                    },
                    {
                        "question": "列入下列哪个目录的物质如果被滥用就是吸毒？",
                        "answer": "D"
                    },
                    {
                        "question": "合成毒品“麻古”是泰语的音译，其主要成分是()",
                        "answer": "A"
                    },
                    {
                        "question": "可卡因的原植物是()，曾经是古代美洲原住民的提神草。",
                        "answer": "D"
                    },
                    {
                        "question": "1909年2月1日，中、日、英、法、俄、德、美、葡等国召开禁毒会议，拉开了国际性禁毒活动的序幕，这次会议的举办地是()。",
                        "answer": "A"
                    },
                    {
                        "question": "近年来，各地禁毒部门积极推进现代科技应用，已经广泛应用了（）、（）等手段进行毒情监测预警。",
                        "answer": "A"
                    },
                    {
                        "question": "国家禁毒委员会成立于（）年，现有公安部、教育部等（）个成员单位。",
                        "answer": "A"
                    },
                    {
                        "question": "第一届全国青少年禁毒知识竞赛于（）年举办。",
                        "answer": "B"
                    },
                    {
                        "question": "下列哪一项不属于我国禁毒工作方针。",
                        "answer": "C"
                    },
                    {
                        "question": "易制毒化学品的生产、经营、购买、运输无须经过许可即可开展。",
                        "answer": "B"
                    },
                    {
                        "question": "县级以上各级人民政府＿＿将禁毒工作纳入国民经济和社会发展规划，并将禁毒经费列入本级财政预算。",
                        "answer": "B"
                    },
                    {
                        "question": "未成年人的父母或者其他监护人＿＿对未成年人进行毒品危害的教育，防止其吸食、注射毒品或者进行其他毒品违法犯罪活动。",
                        "answer": "B"
                    },
                    {
                        "question": "长期吸食大麻才会上瘾，偶尔吸一次不会上瘾。",
                        "answer": "B"
                    }
                ],
                "libMiddleSchool": [
                    {
                        "question": "根据《中华人民共和国刑法》，毒品是指鸦片、海洛因、甲基苯丙胺（冰毒）、吗啡、大麻、可卡因，以及国家规定管制的其他能够使人形成瘾癖的（  ）和精神药品。",
                        "answer": "C"
                    },
                    {
                        "question": "毒品的分类方式多种多样，从毒品的来源来看，毒品可分为天然毒品、（  ）、合成毒品。",
                        "answer": "A"
                    },
                    {
                        "question": " 禁毒是全社会的共同责任。对于中学生而言，下列做法正确的是：",
                        "answer": "B"
                    },
                    {
                        "question": " 阿片类毒品是从罂粟中提取的生物碱及体内外的衍生物。下列毒品中不属于阿片类毒品的是：",
                        "answer": "C"
                    },
                    {
                        "question": " 毒品祸害无穷，不仅严重损害吸毒者本人的身体健康，对吸毒者的家庭和整个社会秩序都造成了严重的打击，吸毒的危害包括：",
                        "answer": "D"
                    },
                    {
                        "question": " 鸦片，又叫阿片，俗称大烟，源于罂粟植物的（  ），其所含主要生物碱是吗啡。鸦片因产地不同，呈黑色或褐色；有氨味或陈旧尿味，味苦，气味强烈。鸦片最初是作为药用，主要用于镇咳、止泻等。吸食者初吸时会感到头晕目眩、恶心或头痛，多次吸食就会上瘾。",
                        "answer": "B"
                    },
                    {
                        "question": " 新精神活性物质（New Psychoactive Substances，简称NPS），是不法分子为逃避打击而对列管毒品进行化学结构修饰所得到的毒品类似物，具有与管制毒品相似或更强的兴奋、致幻、麻醉等效果，这一概念于2013年在《世界毒品报告》中被首次提出，下列关于新精神活性物质的说法正确的是：",
                        "answer": "D"
                    },
                    {
                        "question": "下列哪个选项全部是新精神活性物质？",
                        "answer": "A"
                    },
                    {
                        "question": " LSD, 化学名称为D-麦角二乙胺，于1938年被首次合成，是一种强效（  ）。",
                        "answer": "C"
                    },
                    {
                        "question": " 加强禁毒工作，治理毒品问题，对深入推进平安中国、法治中国建设，维护国家长治久安，保障人民群众健康幸福，实现“两个一百年”奋斗目标和中华民族伟大复兴的中国梦，具有十分重要的意义。作为一名中学生，可以为禁毒工作做些什么？",
                        "answer": "D"
                    },
                    {
                        "question": " “国际禁毒日”是每年的（  ）。",
                        "answer": "B"
                    },
                    {
                        "question": "珍爱生命，远离毒品。青少年要积极学习毒品知识，增强防毒拒毒意识，主动对毒品说“不”。下列有关毒品的说法正确的是？",
                        "answer": "D"
                    },
                    {
                        "question": " 我国的“毒品”一词有着深远的历史渊源，是国人在百年来与毒品不懈抗争中的创造成果。我国首次对 “毒品”一词作出清晰定义的法律文本是：",
                        "answer": "A"
                    },
                    {
                        "question": "毒品问题不是一个国家、一个民族的问题，而是全人类所面临的挑战。各国应当紧密团结在一起，携手应对毒品问题。目前，我国已加入的三大禁毒国际公约是：",
                        "answer": "D"
                    },
                    {
                        "question": " 可卡因是用（  ）制成的。",
                        "answer": "B"
                    },
                    {
                        "question": " 丧尸药、浴盐、土冰，这些都是同一类毒品的俗称，它的真正名称是（  ）",
                        "answer": "B"
                    },
                    {
                        "question": " 王某在某地购得15克海洛因藏在家中准备自己吸食，后被公安机关查获，王某的行为构成了什么罪？",
                        "answer": "B"
                    },
                    {
                        "question": " （  ）要依法加强涉毒演艺人员参加演出管理，推进娱乐服务场所毒品预防工作，支持创作优秀禁毒文化作品。",
                        "answer": "B"
                    },
                    {
                        "question": " 吸毒，也称“药物滥用”，就是出于（  ）目的，通过注射、口服、鼻吸或其他方式将毒品摄入人体的行为。",
                        "answer": "A"
                    },
                    {
                        "question": " 麻黄碱是从（  ）中提取的 。",
                        "answer": "B"
                    },
                    {
                        "question": " 不满十六周岁的未成年人吸毒成瘾严重的，可以不适用（  ）。",
                        "answer": "A"
                    },
                    {
                        "question": "第一次将毒品犯罪规定为国际犯罪的公约是（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " “金新月”国际毒源地是指以下哪几个国家的交界地带？",
                        "answer": "B"
                    },
                    {
                        "question": " 世界上第一个国际禁毒公约是（  ）。",
                        "answer": "B"
                    },
                    {
                        "question": "下列有关毒品的认识错误的是：",
                        "answer": "D"
                    },
                    {
                        "question": " 下面关于大麻的说法哪个是错误的？（  ）",
                        "answer": "D"
                    },
                    {
                        "question": " γ-羟基丁酸，又称GHB，是一种无色无味的液体，由于它可以被轻易地放入饮料之中交给不知情的受害人使用，且受害人经常会不记得遭受过攻击，所以被称为“液体迷魂药”“迷奸水”。",
                        "answer": "A"
                    },
                    {
                        "question": "（  ）是迷幻蘑菇中的主要成分，这种物质是一种血清素受体激动剂。在血清素缺席的场合，能够刺激一些受体，使人产生做梦一样的幻觉。",
                        "answer": "A"
                    },
                    {
                        "question": "（  ），又称“阿拉伯茶”“东非罂粟”等。原产于非洲及阿拉伯半岛，主要活性成分为卡西酮、去甲伪麻黄碱等，具有兴奋和轻微致幻作用。滥用会出现抑郁、烦躁等症状。",
                        "answer": "A"
                    },
                    {
                        "question": " 毒品是使用后能够产生（  ）的物质。",
                        "answer": "B"
                    },
                    {
                        "question": " 身体脱毒只是戒毒过程的第一步，最根本上的是要彻底摆脱（  ），才能达到彻底康复。",
                        "answer": "C"
                    },
                    {
                        "question": " 合成毒品直接作用于人的（  ）。",
                        "answer": "C"
                    },
                    {
                        "question": " 毒品预防教育的首要重点对象是（  ）。",
                        "answer": "B"
                    },
                    {
                        "question": " 当发现有人可能正在吸毒或实施涉及毒品的违法犯罪行为时，应该（  ）。",
                        "answer": "A"
                    },
                    {
                        "question": " 当有人威胁我们吸毒时，要将情况主动告知家长和学校，或者打110报警，寻求帮助。",
                        "answer": "A"
                    },
                    {
                        "question": " 一个完整的戒毒过程，包含（  ）。",
                        "answer": "A"
                    },
                    {
                        "question": " 当在你身边出现毒品时，正确的做法是（  ）。",
                        "answer": "C"
                    },
                    {
                        "question": " 吸毒人员既是病人又是（  ）。",
                        "answer": "B"
                    },
                    {
                        "question": " 国家鼓励公民、组织开展公益性的禁毒宣传活动。",
                        "answer": "A"
                    },
                    {
                        "question": " 国家严格管制戒毒药品的研究、生产、供应和使用。",
                        "answer": "A"
                    },
                    {
                        "question": " 海洛因的滥用方式有（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 吸食海洛因，如采取静脉注射的方式，1至2次就可能成瘾。",
                        "answer": "A"
                    },
                    {
                        "question": " 你的好朋友在娱乐场所给了你一种样子像糖果一样的东西，说特别好玩，让你尝尝。你的选择应该是：",
                        "answer": "C"
                    },
                    {
                        "question": " 你的同学或者好朋友把你介绍给他的朋友们，这些人私密地聚在某人家里或者类似娱乐场所的地方，使用一些粉末、片剂或者类似香烟的东西，还请你品尝，你恰当的拒绝方式应该是（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 你认为一个家庭如何才能“远离毒品”？",
                        "answer": "A"
                    },
                    {
                        "question": " 贩卖毒品负刑事责任的年龄是（  ）。",
                        "answer": "C"
                    },
                    {
                        "question": " 青少年如何防止吸毒？",
                        "answer": "D"
                    },
                    {
                        "question": " 青少年吸毒的原因是什么？",
                        "answer": "D"
                    },
                    {
                        "question": " 如果有人在我们周围大量生产制造冰毒，很容易产生大量刺鼻的刺激性气味。这种说法正确吗？",
                        "answer": "A"
                    },
                    {
                        "question": " 吸毒人员的毒品滥用方式多样，有更大的艾滋病传播风险。为了引起人们更广泛的关注，世界卫生组织将每年（  ）定为“世界艾滋病日”。",
                        "answer": "D"
                    },
                    {
                        "question": " 在机场或火车站安检之前，有陌生人很着急地请你帮忙带个小书包，说书包里是“救命药”，飞机抵达或火车到站后，有人会来取这个小书包，还要给你一些酬金。你该怎么做？",
                        "answer": "B"
                    },
                    {
                        "question": " 合成大麻素类物质是（  ）",
                        "answer": "C"
                    },
                    {
                        "question": " 近几年，经过持续开展对青少年的毒品预防教育，我国35岁以下吸毒人员逐年减少。",
                        "answer": "A"
                    },
                    {
                        "question": " 健康生活方式有？",
                        "answer": "D"
                    },
                    {
                        "question": " 2019年5月1日起，我国将（  ）类物质列入非药用类麻醉药品和精神药品管制品种增补目录。",
                        "answer": "C"
                    },
                    {
                        "question": " 止咳水通常含有可待因、麻黄碱等成分，（  ）服用可形成心理依赖，戒断症状类似海洛因。",
                        "answer": "A"
                    },
                    {
                        "question": " 要构筑良好的拒毒心理防线只需做到正确把握好奇心，抵制不良诱惑即可。",
                        "answer": "B"
                    },
                    {
                        "question": " 田某发现，在美国留学期间结识的朋友劳伦，经常在微信朋友圈出售一些号称化学合成的糖果、巧克力和“叶子”味的烟弹，这些很有可能含有毒品（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 远离毒品的自我保护方法有：",
                        "answer": "D"
                    },
                    {
                        "question": " 制定《中华人民共和国禁毒法》的目的是：",
                        "answer": "D"
                    },
                    {
                        "question": "中学生应该怎样做才能远离毒品、拒绝毒品？",
                        "answer": "D"
                    },
                    {
                        "question": " 身边的亲戚、朋友、同学或者家长都吸烟，他们递烟给你，你不要，有人说偶尔体验一下没关系，你最好的应对方式应该是（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 安定有助于睡眠，可以擅自服用，不需医生指导使用，也不会对身体造成什么危害。",
                        "answer": "B"
                    },
                    {
                        "question": " 为吸毒者提供房间、打火机、吸管等吸毒场所、工具，但自己并不吸毒，所以不用承担法律责任。这种说法：",
                        "answer": "B"
                    },
                    {
                        "question": " 近年来市场上不断涌现一些“新精神活性物质”，它们的使用效果和某些毒品相似，但却没有被国家管制为毒品。由于未被国家管制，所以我们可以尝试使用这种物质。",
                        "answer": "B"
                    },
                    {
                        "question": " 当前要不断推进禁毒宣传教育的理念思路、内容形式、方法手段改革创新，提高传播力、引导力和影响力，增强（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 当前要坚持关口前移、预防为先，从根本上遏制吸毒人员滋生，从源头上（  ）。",
                        "answer": "B"
                    },
                    {
                        "question": " 为防范利用寄递渠道贩毒问题，国家邮政局要求物流寄递企业严格落实“（  ）、寄件验视、过机安检”三项制度。",
                        "answer": "C"
                    },
                    {
                        "question": " 下面表述正确的是？（  ）",
                        "answer": "D"
                    },
                    {
                        "question": " 禁毒民警检查某娱乐场所时，被两男子的交谈内容“吸引”，不时可以听到“壶”“溜了几口”等话语，通过这些敏感词，民警即时判断出来，这极有可能是两名吸食（  ）人员。",
                        "answer": "A"
                    },
                    {
                        "question": " （  ）地区是我国境外合成毒品的主要来源。",
                        "answer": "A"
                    },
                    {
                        "question": " 2019年8月29日，青岛海关首次查获了10盒1000粒被误传为“聪明药”的一类管制精神药物（  ）。",
                        "answer": "A"
                    },
                    {
                        "question": " 下列选项中属于吸毒成瘾表现的是（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 下列选项中属于毒品的是（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 下列选项中不属于毒品特征的是（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 不是艾滋病传播途径的是（  ）",
                        "answer": "D"
                    },
                    {
                        "question": " 下列属于合成毒品的是（  ）。",
                        "answer": "C"
                    },
                    {
                        "question": " 下列说法正确的是（  ）。",
                        "answer": "A"
                    },
                    {
                        "question": " 下列物品中不属于毒品的是（  ）。",
                        "answer": "C"
                    },
                    {
                        "question": " 下列关于戒毒说法正确的是（  ）。",
                        "answer": "C"
                    },
                    {
                        "question": " 吸食过量大麻可发生意识不清、产生幻觉等。",
                        "answer": "A"
                    },
                    {
                        "question": " 吸食合成毒品危害比传统毒品要小。",
                        "answer": "B"
                    },
                    {
                        "question": " 吸食冰毒以后驾驶车辆，容易造成情绪冲动及过度兴奋，从而导致行为失控极易引发严重交通事故。",
                        "answer": "A"
                    },
                    {
                        "question": " 吸毒者在今后的人生道路上应该选择的正确生活态度是（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 吸毒者不健康的心理有盲目从众、好奇、爱慕虚荣、赶时髦、追求刺激和享乐、赌气或逆反、无知和轻信、自暴自弃等。",
                        "answer": "A"
                    },
                    {
                        "question": " 我们的爸爸、爷爷都可以喝酒，所以我们未成年人也可以喝酒。",
                        "answer": "B"
                    },
                    {
                        "question": " 我们在网络上和陌生人交流和交友的时候，应该保持警惕心，不能轻易泄露自己的个人信息。",
                        "answer": "A"
                    },
                    {
                        "question": " 吸毒成瘾不仅是身体上会对毒品产生依赖，更严重的是在心理上对毒品产生依赖。",
                        "answer": "A"
                    },
                    {
                        "question": " 我国禁毒工作的治本之策是（  ）。",
                        "answer": "A"
                    },
                    {
                        "question": " 长期吸食以后，情绪亢奋冲动。就算是停止复吸，戒断很久以后，都容易出现幻听、幻觉、被害妄想等稽延性戒断症状。这是（　）毒品的精神病态特征。",
                        "answer": "C"
                    },
                    {
                        "question": " 禁毒工作要不断巩固深化（  ）成果，助力乡村振兴。",
                        "answer": "A"
                    },
                    {
                        "question": " 关于“上头电子烟”，下列说法正确的是（  ）。",
                        "answer": "D"
                    },
                    {
                        "question": " 有人劝说小明一起“嗨气球”，并且告诉小明吸了之后会有“上头”的感觉。对于该案例，下列说法正确的是（）。",
                        "answer": "D"
                    },
                    {
                        "question": " 小明随家人出国旅游，在国外的时候，有人邀请小明一起抽大麻烟，并且告诉小明在国外抽大麻是合法的。对于该案例，下列说法正确的是（）。",
                        "answer": "D"
                    },
                    {
                        "question": " 小明随家人搭乘飞机外出旅游，进机场的时候，有陌生人请小明帮忙，让小明偷偷把一小包“小树枝”贴身隐藏带过安检，并承诺事后给小明一大笔钱。对于该案例，下列说法正确的是（）。",
                        "answer": "D"
                    },
                    {
                        "question": " 关于毒品犯罪，下列说法正确的是（）。",
                        "answer": "D"
                    },
                    {
                        "question": " 2021年我国新列管（  ）易制毒化学品",
                        "answer": "C"
                    },
                    {
                        "question": " 下列属于我国2021年新列管易制毒化学品的有（  ）",
                        "answer": "B"
                    },
                    {
                        "question": " 下列属于非药用类麻醉药品和精神药品的有（  ）。",
                        "answer": "C"
                    },
                    {
                        "question": " 国家鼓励吸毒成瘾人员自行戒除毒瘾。对自愿接受戒毒治疗的吸毒人员，公安机关对其原吸毒行为不予处罚。（  ）",
                        "answer": "A"
                    },
                    {
                        "question": " 戒毒条例》第十八条明确规定，乡（镇）人民政府、城市街道办事处和社区戒毒工作应当采取下列措施管理、帮助社区戒毒人员：",
                        "answer": "D"
                    },
                    {
                        "question": " 《中华人民共和国禁毒法》第三十八条规定。吸毒成瘾人员，有（  ）情形之一的，由县级以上人民政府公安机关作出强制隔离戒毒的决定。",
                        "answer": "D"
                    },
                    {
                        "question": " 《中华人民共和国禁毒法》第三十一条规定，吸毒成瘾的认定办法，由国务院（）部门、（）部门、（）部门规定。",
                        "answer": "D"
                    },
                    {
                        "question": " 20世纪末的奥林匹克竞技比赛中，为了赢得更好的比赛成绩，曾经一度被美国短跑、拳击等项目的运动员广泛滥用，并造成部分运动员最终患上急性心脏病或脑血管疾病引发猝死的物质是(  )。",
                        "answer": "B"
                    },
                    {
                        "question": " 对下列涉毒人员，可以不予处罚的是（ ）。",
                        "answer": "B"
                    },
                    {
                        "question": " 2021年3月，国家禁毒委员会命名了首批（  ）个全国禁毒示范城市。",
                        "answer": "D"
                    },
                    {
                        "question": " 目前，我国共有（   ）个公安院校设有禁毒学本科专业。",
                        "answer": "C"
                    },
                    {
                        "question": " 你的同学以认识朋友的名义邀请你参加聚会，在聚会现场让你尝试一下装在瓶子里的不明液体，说“不是毒品”“比较刺激”“不会上瘾”“大家都玩”。你应该选择怎么办？",
                        "answer": "D"
                    },
                    {
                        "question": "下列哪一项不属于我国禁毒工作方针。",
                        "answer": "C"
                    },
                    { "question": "下列哪一项不属于我国刑法规定的罪名。", "answer": "D" },
                    {
                        "question": "易制毒化学品的生产、经营、购买、运输无须经过许可即可开展。",
                        "answer": "B"
                    },
                    {
                        "question": "县级以上各级人民政府＿＿将禁毒工作纳入国民经济和社会发展规划，并将禁毒经费列入本级财政预算。",
                        "answer": "B"
                    },
                    {
                        "question": "未成年人的父母或者其他监护人＿＿对未成年人进行毒品危害的教育，防止其吸食、注射毒品或者进行其他毒品违法犯罪活动。",
                        "answer": "B"
                    },
                    {
                        "question": "吸毒成瘾人员应当进行戒毒治疗。",
                        "answer": "A"
                    },
                    {
                        "question": "对吸毒成瘾人员，公安机关可以责令其接受社区戒毒。社区戒毒期限为（ ）。",
                        "answer": "D"
                    },
                    {
                        "question": "下列哪种毒品滥用历史悠久，地域广泛，全球滥用者最多？",
                        "answer": "D"
                    },
                    {
                        "question": "大麻类毒品的主要活性成分是四氢大麻酚。",
                        "answer": "A"
                    },
                    {
                        "question": "大剂量吸食大麻可造成幻觉、妄想、精神失常，长期使用大麻容易导致痴呆等。",
                        "answer": "A"
                    },
                    {
                        "question": "世界上一些国家实行娱乐大麻合法化，我们国家也应该推行娱乐大麻合法化。",
                        "answer": "B"
                    },
                    {
                        "question": "长期吸食大麻才会上瘾，偶尔吸一次不会上瘾。",
                        "answer": "B"
                    }
                ]
            }
            const gradesPrimary = { 一年级: 1, 二年级: 2, 三年级: 3, 四年级: 4, 五年级: 5, 六年级: 6 }
            const choices = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7 }
            //获取当前用户年级
            const gradeName = unsafeWindow.__DATA__.userInfo.department.gradeName
            var lib;
            //根据所在年级选择对应题库
            if (gradeName in gradesPrimary) {
                lib = libs.libPrimarySchool
                toastr["success"]("已匹配小学组题库")
            } else {
                lib = libs.libMiddleSchool;
                toastr["success"]("已匹配中学组题库")
            }
            //引入toastr所需样式css
            GM_addStyle(GM_getResourceText('css'))
            var timer = null
            const run = () => {
                clearInterval(timer)
                timer = setInterval(() => {
                    autoanswer()
                }, 2000)
            }
            document.addEventListener("keydown", run);
            var autoanswer = event => {
                //用event.key替换被弃用的event.keyCode
                let questionNum = document.querySelector("div.competiotion-exam-box-all > div.exam-box > div:nth-child(3) > p > span.exam-content-type-text > b")
                if (questionNum) {
                    questionNum = questionNum.innerText
                    var q_txt = document.querySelector("div.competiotion-exam-box-all > div.exam-box > div:nth-child(3) > div").innerText
                    lib.forEach(function (element) {
                        // 使用正则表达式移除非汉字字符,以方便比较
                        var qtxt = q_txt.replaceAll(/[^\u4e00-\u9fa5]/g, '');
                        var ltxt = element.question.replaceAll(/[^\u4e00-\u9fa5]/g, '')
                        if (qtxt.indexOf(ltxt) === 0) {
                            toastr["success"](q_txt, "<h1 style='color:#ffdb01'>" + element.answer + "</h1>")
                            var options = document.querySelector("#app > div > div.home-container > div > div > div.competiotion-exam-box-all > div.exam-box > div:nth-child(4) > div").children
                            //单选题
                            for (var i = 0; i < element.answer.length; i++) {
                                let answer = element.answer.toUpperCase().at(i)
                                let choice = choices[answer]
                                options[choice].click()
                            }
                            sleep(1000).then(() => {
                                let nextButton = document.querySelector("div.competition-sub > button.ant-btn.ant-btn-primary")
                                console.log('nextButton', nextButton)
                                if (nextButton) {
                                    nextButton.click()
                                } else {
                                    clearInterval(timer)
                                }
                            })
                        }
                    });
                }
            }
        }
        batchrun()
    }

})();
