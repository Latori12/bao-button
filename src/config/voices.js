// src/config/voices.js

/**
 * 音频配置文件说明
 * 
 * ============================================
 * 配置结构说明
 * ============================================
 * 
 * 1. 文件导出一个 voices 数组
 * 2. 每个音频对象包含以下属性：
 *    {
 *      messages: object,   // 多语言音频名称（必填）
 *      path: string,       // 音频文件路径（必填）
 *      tag: string         // 分类标签（必填）
 *    }
 * 
 * 3. 路径拼接规则：
 *    完整URL = CDN基础URL + path
 *    例如：https://cdn.example.com/ + "haruka/01.mp3"
 * 
 * ============================================
 * 音频对象详细说明
 * ============================================
 */

export const voices = [
    /**
     * messages 配置说明：
     * 1. 支持多语言显示不同的按钮文本
     * 2. 键名为语言代码：zh(中文)、en(英文)、ja(日文)
     * 3. 如果没有对应的语言，会按以下顺序回退：
     *    - 当前语言 → 中文 → 第一个可用的值
     * 4. 所有音频至少需要配置中文名称
     */
    /*{
        messages: { 
            zh: "he~~~tui",        // 中文名称（必填）
            en: "he~~~tui",        // 英文名称（可选）
            ja: "he~~~tui"         // 日文名称（可选）
        },
        
        /**
         * path 配置说明：
         * 1. 音频文件的相对路径
         * 2. 相对于CDN基础URL或本地public/voices目录
         * 3. 支持子目录，建议按角色或类型分类
         * 4. 建议使用英文文件名，避免编码问题
         */
        /*path: "he~~~tui.mp3",  // 音频文件路径
        
        /**
         * tag 配置说明：
         * 1. 分类标签，用于音频分组显示
         * 2. 需要在 locales/zh.js 中定义对应的中文翻译
         * 3. 标签名建议使用英文，方便多语言扩展
         * 4. 同一tag的音频会显示在同一分类中
         */
        /*tag: "actions"  // 分类标签
    },
    
    /**
     * 示例2：带子目录的音频
     * 完整路径：CDN_URL + "haruka/greetings/hello.mp3"
     */
    /*{
        messages: { zh: "打招呼" },
        path: "haruka/greetings/hello.mp3",  // 使用子目录组织
        tag: "greetings"
    },
    
    /**
     * 示例3：多语言音频名称
     * 不同语言显示不同的按钮文本
     */
    /*{
        messages: { 
            zh: "伸懒腰",
            en: "Stretching",
            ja: "伸びをする"
        },
        path: "伸懒腰.mp3",
        tag: "actions"
    },
    
    /**
     * 示例4：中文文件名（不推荐）
     * 注意：中文文件名可能导致某些CDN或浏览器编码问题
     */
    /*{
        messages: { zh: "你弄死我" },
        path: "你弄死我.mp3",  // ⚠️ 中文文件名，容易出问题
        tag: "threatening"
    },*/

    //问好

    {
        messages: { zh: "新年好"},
        path: "newyeargreeting.mp3",
        tag: "greetings"
    },

    {
        messages: { zh: "早上好~"},
        path: "goodmorning.mp3",
        tag: "greetings"
    },

    {
        messages: { zh: "早上好おはよう~"},
        path: "goodmorningohy.mp3",
        tag: "greetings"
    },

    {
        messages: { zh: "民那~中午好哟~"},
        path: "launchgreeting01.mp3",
        tag: "greetings"
    },

    {
        messages: { zh: "垫饭煲们中午好"},
        path: "launchgreeting02.mp3",
        tag: "greetings"
    },

    {
        messages: { zh: "宝宝~中午好哟~"},
        path: "launchgreeting03.mp3",
        tag: "greetings"
    },

    {
        messages: { zh: "宝宝~晚上好哟~"},
        path: "bbgoodnight.mp3",
        tag: "greetings"
    },

    {
        messages: { zh: "把你的米都给我*4"},
        path: "givmeurmoney.mp3",
        tag: "greetings"
    },

    {
        messages: { zh: "我是硅基生物啊"},
        path: "imsi.mp3",
        tag: "greetings"
    },

    {
        messages: { zh: "反正我是不会说我到底播不播的~"},
        path: "liveornot.mp3",
        tag: "greetings"
    },

    //感谢

    {
        messages: { zh: "感谢舰长"},
        path: "captain01.mp3",
        tag: "thanks"
    },

    {
        messages: { zh: "阿里嘎多~"},
        path: "arigatou01.mp3",
        tag: "thanks"
    },

    {
        messages: { zh: "啾咪啾咪~"},
        path: "jiumi01.mp3",
        tag: "thanks"
    },

    {
        messages: { zh: "阿里嘎多~"},
        path: "argd03.mp3",
        tag: "thanks"
    },

    {
        messages: { zh: "阿里嘎多~"},
        path: "argd05.mp3",
        tag: "thanks"
    },

    {
        messages: { zh: "阿里嘎多~↗↘↗↘↗↘↗↘"},
        path: "argduouououo.mp3",
        tag: "thanks"
    },

    {
        messages: { zh: "爱你哟宝宝~"},
        path: "lvubb.mp3",
        tag: "thanks"
    },

    //狗叫

    {
        messages: { zh: "嗷嗷"},
        path: "aoao.mp3",
        tag: "dogbark"
    },

    {
        messages: { zh: "嗷01"},
        path: "ao01.mp3",
        tag: "dogbark"
    },

    {
        messages: { zh: "嗷02"},
        path: "ao02.mp3",
        tag: "dogbark"
    },

    {
        messages: { zh: "汪01"},
        path: "war01.mp3",
        tag: "dogbark"
    },

    {
        messages: { zh: "能不能不要假设主播是狗啊"},
        path: "pretenddog.mp3",
        tag: "dogbark"
    },

    //猫叫哈气

    {
        messages: { zh: "喵喵喵喵喵喵"},
        path: "miaomiao.mp3",
        tag: "cat"
    },
    
    {
        messages: { zh: "不喵"},
        path: "nomiao01.mp3",
        tag: "cat"
    },
    
    {
        messages: { zh: "不rr喵"},
        path: "normiao02.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "就不喵！"},
        path: "nomiao02.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵————"},
        path: "miao01.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵02"},
        path: "miao02.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵03"},
        path: "miao03.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵04"},
        path: "miao04.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵05"},
        path: "miao05.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵06"},
        path: "miao06.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵07"},
        path: "miao07.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵08"},
        path: "miao08.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵09"},
        path: "miao09.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "喵————————"},
        path: "miao10.mp3",
        tag: "cat"
    },

    {
        messages: { zh: "哈————"},
        path: "ha01.mp3",
        tag: "cat"
    },

    //猪

    {
        messages: { zh: "哼01"},
        path: "pig01.mp3",
        tag: "pig"
    },

    {
        messages: { zh: "哼02"},
        path: "pig02.mp3",
        tag: "pig"
    },

    {
        messages: { zh: "哼03"},
        path: "pig03.mp3",
        tag: "pig"
    },

    {
        messages: { zh: "哼04"},
        path: "pig04.mp3",
        tag: "pig"
    },

    //奶凶

    {
        messages: { zh: "我很可爱！抢钱！"},
        path: "qiangqian.mp3",
        tag: "cutelyfierce"
    },

    {
        messages: { zh: "nia↘"},
        path: "nia01.mp3",
        tag: "cutelyfierce"
    },

    {
        messages: { zh: "喵了个咪咪的"},
        path: "mlgmmd.mp3",
        tag: "cutelyfierce"
    },

    {
        messages: { zh: "M~UA~"},
        path: "mua.mp3",
        tag: "cutelyfierce"
    },

    {
        messages: { zh: "NYA~"},
        path: "nya.mp3",
        tag: "cutelyfierce"
    },

    {
        messages: { zh: "我没有凶呜呜~"},
        path: "haveno.mp3",
        tag: "cutelyfierce"
    },

    //唱

    {
        messages: { zh: "Padoru~"},
        path: "padoru.mp3",
        tag: "singsongs"
    },

    //哼哼唧唧

    {
        messages: { zh: "嘟嘟嘟嘟嘟嘟嘟嘟嘟嘟~"},
        path: "dddddddddd.mp3",
        tag: "hum"
    },

    {
        messages: { zh: "哼哼哼哼哼哼~"},
        path: "hhhhhh.mp3",
        tag: "hum"
    },

    {
        messages: { zh: "囔囔囔囔~"},
        path: "nnnnnn.mp3",
        tag: "hum"
    },

    {
        messages: { zh: "囔囔囔囔囔囔囔囔~"},
        path: "nnnnnnnnnnnn.mp3",
        tag: "hum"
    },

    {
        messages: { zh: "囔囔囔囔囔囔囔囔囔囔~"},
        path: "nnnnnnnnnnnnn.mp3",
        tag: "hum"
    },

    {
        messages: { zh: "囔囔囔囔囔囔囔囔囔囔囔~"},
        path: "nnnnnnnnnnnnnn.mp3",
        tag: "hum"
    },

    {
        messages: { zh: "nyanyanya~"},
        path: "nyanyanyanyanya.mp3",
        tag: "hum"
    },

    {
        messages: { zh: "嗯当当当当当当当当当~"},
        path: "enddddddddd.mp3",
        tag: "hum"
    },

    {
        messages: { zh: "当当当当当~"},
        path: "ddddd.mp3",
        tag: "hum"
    },

    //实用语录

    {
        messages: { zh: "我懂你"},
        path: "iknowu.mp3",
        tag: "sentences"
    },
    
    {
        messages: { zh: "明白我什么意思吗？*2"},
        path: "youknowwhatimean.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "懂了吗"},
        path: "know01.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "你懂吧！懂...懂了没..."},
        path: "douknow.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "ん？なにが？"},
        path: "naniga.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "ね？やさしい？"},
        path: "neyasasii.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "ね？"},
        path: "ne.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "ね？でしょ？"},
        path: "nedesyo.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "でしょ？"},
        path: "desyo.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "でしょ？*3"},
        path: "dsdsds.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "わかるよ↘↗"},
        path: "wakaruyo.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "不安desu"},
        path: "fuandesu.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "太抽象了"},
        path: "abstract.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "激起我的胜负欲了"},
        path: "desiretowin.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "や↘↗ばい↘"},
        path: "yabai01.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "你...我...*3"},
        path: "umeumeume.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "神经病呀———"},
        path: "sjba.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "哈哈（无感情）"},
        path: "haha.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "唉"},
        path: "sigh01.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "哎呀も~うるせぇ真麻烦啊"},
        path: "mourusee.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "不对，这对吗"},
        path: "rightornot.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "给点...时间..."},
        path: "givmesometime.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "我勒个去"},
        path: "wtf.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "哦哟"},
        path: "oyo.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "还真是"},
        path: "hzs.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "好黑的心啊"},
        path: "evilheart.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "就是会这样子嘛~"},
        path: "sothat.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "开心没有廉价高贵之分"},
        path: "happinessnodifference.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "可以了"},
        path: "enough.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "入脑了没"},
        path: "rnlm.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "嘻嘻，一定要活下去"},
        path: "xx.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "一定要活下去口牙"},
        path: "mustlive.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "兄弟嘴一个"},
        path: "kissbro01.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "真的吗"},
        path: "true.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "真的是，嚯哟"},
        path: "righthy.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "我叫你一声你敢答应吗"},
        path: "callyou.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "正经人谁看V啊~"},
        path: "whowatchv.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "nicebody~"},
        path: "nicebody.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "sexy~"},
        path: "sexy.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "别这样怪恶心的"},
        path: "bzy.mp3",
        tag: "sentences"
    },
    
    {
        messages: { zh: "差不多得了"},
        path: "cbddl.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "何意味"},
        path: "hyw.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "かわいいね"},
        path: "kawaiine.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "离我远点口水蹭脸上了"},
        path: "keepaway.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "没辙了"},
        path: "noway.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "那你们没救了"},
        path: "canthelp.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "你说你是爹就算了一定要这么恶心吗"},
        path: "diekimo.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "求求你们"},
        path: "begyou.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "忍住"},
        path: "patient.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "撒娇了"},
        path: "fawn.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "算了"},
        path: "pass.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "我勒个去"},
        path: "wlgq.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "我们还是爆了吧"},
        path: "stillboom.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "我去"},
        path: "wq.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "要抱抱抱什么抱神经"},
        path: "ybbsj.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "要不我们现在下播吧~"},
        path: "liveclose.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "也没有很久嘛~"},
        path: "notlong.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "这是什么啊"},
        path: "whatsthis.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "真没救了"},
        path: "hopeless.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "真受不了"},
        path: "cantbear.mp3",
        tag: "sentences"
    },

    //蜜汁发言

    {
        messages: { zh: "兄弟即使你带着奶龙面具我也会爱你的"},
        path: "nailongmask.mp3",
        tag: "weirdwords"
    },
    
    {
        messages: { zh: "云从龙风从虎"},
        path: "yclfch.mp3",
        tag: "weirdwords"
    },

    {
        messages: { zh: "主播其实是奶龙"},
        path: "imnailong.mp3",
        tag: "weirdwords"
    },

    {
        messages: { zh: "完了鼻涕要吸回去了"},
        path: "biti.mp3",
        tag: "weirdwords"
    },

    {
        messages: { zh: "我是你爹"},
        path: "imyourfather.mp3",
        tag: "weirdwords"
    },

    {
        messages: { zh: "我是逆爹"},
        path: "imyourfather02.mp3",
        tag: "weirdwords"
    },

    {
        messages: { zh: "我是你们的爹"},
        path: "imyourfather03.mp3",
        tag: "weirdwords"
    },

    {
        messages: { zh: "我是你们的爷爷"},
        path: "imyourgrandpa.mp3",
        tag: "weirdwords"
    },

    {
        messages: { zh: "兄弟兄弟看看大的"},
        path: "broseebig.mp3",
        tag: "weirdwords"
    },

    //做梦

    {
        messages: { zh: "感觉今天晚上可以坚持住诶"},
        path: "canholdon.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "感谢男友粉的sc！阿里嘎多————"},
        path: "nyfsc.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "果然是...傲娇男友粉"},
        path: "tsunderenyf01.mp3",
        tag: "dream"
    },
    
    {
        messages: { zh: "哎没办法~傲娇男友粉是这个样子的啦~"},
        path: "tsunderenyf.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "nyf~*3"},
        path: "nyfnyfnyf.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "没关系你也可以当男友粉"},
        path: "ucanalsobenyf.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "不妨碍当我男友粉&你可以劈腿"},
        path: "nyfpt.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "你是我的男友粉呀宝宝~"},
        path: "urmynyfbb.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "大家都是男友粉 怎样 有问题吗"},
        path: "allnyfanyquestion.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "天王老子来了也是男友粉"},
        path: "godisnyf.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "入目所及全都是男友粉~"},
        path: "insightallnyf.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "哇~全都是男友粉~しあわせ～"},
        path: "nyfhappiness.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "诶，感觉可以安静下来了"},
        path: "silence01.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "是不是非常有感觉呀宝宝~"},
        path: "sogoodbb.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "这是熟女直播间还真是"},
        path: "milflivehzs.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "得意于自己这个曼妙的身材"},
        path: "nicebody02.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "主播告诉你什么是大"},
        path: "tellyoubig01.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "就问你大不大！"},
        path: "dbd01.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "好大的雷哈哈哈"},
        path: "hddl01.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "这就是熟女御姐风情直播间"},
        path: "fengqinglive.mp3",
        tag: "dream"
    },

    {
        messages: { zh: "风情~"},
        path: "fengqing.mp3",
        tag: "dream"
    },

    //煲小鬼

    {
        messages: { zh: "バカバカ"},
        path: "bkbk.mp3",
        tag: "mesugaki"
    },

    {
        messages: { zh: "没想到吧~"},
        path: "ahhhmxdb.mp3",
        tag: "mesugaki"
    },

    {
        messages: { zh: "俺恁爹"},
        path: "imurpapa.mp3",
        tag: "mesugaki"
    },

    {
        messages: { zh: "不知道你在说什么，诶嘿~"},
        path: "dontknow.mp3",
        tag: "mesugaki"
    },

    {
        messages: { zh: "弱いね～"},
        path: "yowaine.mp3",
        tag: "mesugaki"
    },

    {
        messages: { zh: "孙贼～"},
        path: "grandson.mp3",
        tag: "mesugaki"
    },

    //什么声音

    {
        messages: { zh: "啊啊啊啊啊呃呃呃"},
        path: "aaaaeee.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "↗↘↗↗↗↘↘"},
        path: "ummm01.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "嗯嗯嗯"},
        path: "enenen.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "溺水"},
        path: "gargle01.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "唔~"},
        path: "em01.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "嗯↗↘↗"},
        path: "enn.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "嗯~~~"},
        path: "ennnn.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "哈啊~"},
        path: "breatheandsigh.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "hiahiahia~"},
        path: "hiahiahiahiahia.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "？"},
        path: "mmmmmm.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "も～（破音）"},
        path: "mo02.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "耶~*n"},
        path: "yeiyyyyyy.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "耶哟~哟~*n"},
        path: "yyyyyyy.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "呀~*n哟~*n"},
        path: "yyyyyyy.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "↑↓"},
        path: "uu.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "um um ↗↘ ↗↘ ↗↘"},
        path: "weirdvoice.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "ummm"},
        path: "ummm.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "嗯嗯嗯嗯嗯~"},
        path: "ennnnn.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "嗯~囔囔囔~"},
        path: "ennan.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "唔————"},
        path: "wuuu.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "呀————"},
        path: "yaaaaa.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "哟吼————"},
        path: "yho.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "嗯mo~好生气"},
        path: "enmosoangry.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "A————"},
        path: "Aaaaa.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "A↗——"},
        path: "Aaa.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "嗯hh————"},
        path: "enhh.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "啊————"},
        path: "aaaa.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "呜————"},
        path: "uuuu.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "邦邦邦~"},
        path: "bangbangbang.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "受击01"},
        path: "hit01.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "受击02"},
        path: "hit02.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "倒吸一口凉皮"},
        path: "gasp01.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "老旧木门(啊)"},
        path: "oldwoodendoor.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "啊呜"},
        path: "au.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "哇~"},
        path: "waa.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "不rrrrrr喵"},
        path: "brrrmiao.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "噗————"},
        path: "prrr.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "哈？"},
        path: "haa.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "小短人索命咒"},
        path: "avada.mp3",
        tag: "weirdsounds"
    },

    //大笑，神人笑声

    {
        messages: { zh: "开朗"},
        path: "laughter01.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "没绷住"},
        path: "laughter05.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "幻想"},
        path: "laughter02.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "得逞"},
        path: "laughter03.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "耶嘿嘿嘿"},
        path: "iehhh.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "哈哈~哈哈~"},
        path: "hhhh.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "呵哈~"},
        path: "heha.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "嘿嘿~"},
        path: "heihei.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "嘿嘿哈~"},
        path: "heiheiha.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "呵呵哈哈哈哈哈~"},
        path: "laughter04.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "噫嘿呵哈哈哈哈~"},
        path: "monkey01.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "乐"},
        path: "laughter07.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "哼哈哈哈~"},
        path: "laughter06.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子壹"},
        path: "Dlaugh01.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子贰"},
        path: "Dlaugh02.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子叁"},
        path: "Dlaugh03.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子肆"},
        path: "Dlaugh04.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子伍"},
        path: "Dlaugh05.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子陆"},
        path: "Dlaugh06.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子柒"},
        path: "Dlaugh07.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子捌"},
        path: "Dlaugh08.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子玖"},
        path: "Dlaugh09.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子拾"},
        path: "Dlaugh10.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子拾壹"},
        path: "Dlaugh11.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子拾贰"},
        path: "Dlaugh12.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子拾叁"},
        path: "Dlaugh13.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子拾肆"},
        path: "Dlaugh14.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子拾伍"},
        path: "Dlaugh15.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "大~~~盒盒盒盒"},
        path: "dalaughter.mp3",
        tag: "laughter"
    },

    //害羞和红温

    {
        messages: { zh: "stf走！stf别来看！"},
        path: "stfaway.mp3",
        tag: "steam"
    },

    {
        messages: { zh: "很丢脸的！"},
        path: "loseface.mp3",
        tag: "steam"
    },

    //急

    {
        messages: { zh: "哈？！"},
        path: "haa01.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "救命啊神经啊！"},
        path: "help.mp3",
        tag: "loudly"
    },
    
    {
        messages: { zh: "爆！"},
        path: "boom01.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "爆！!"},
        path: "boom02.mp3",
        tag: "loudly"
    },
    
    {
        messages: { zh: "让我看到你们的弹幕！"},
        path: "letmeeseeurdm.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "说话————"},
        path: "speak.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "我是有脾气的"},
        path: "temper.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "我的忍耐是有限度的"},
        path: "limitedpatience.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "同接！回来！关注！回来！"},
        path: "comeback.mp3",
        tag: "loudly"
    },
    
    {
        messages: { zh: "你满意了吗？！"},
        path: "rusatisfied.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "打我————"},
        path: "hitme.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "为什么————"},
        path: "whyyy.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "花Q————"},
        path: "fQ.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "你打扰你王阿姨我赚米！"},
        path: "botherme.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "你妨碍我营业！"},
        path: "botherme02.mp3",
        tag: "loudly"
    },
    
    {
        messages: { zh: "你罪大恶极！"},
        path: "flagrance.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "现在大声告诉我！你们是我的谁！"},
        path: "tellme.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "我催眠半天一点用都没有啊——"},
        path: "saiminuseless.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "我不干了！我要回老家——"},
        path: "gohome.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "回老家捡瓶子"},
        path: "bottle.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "我不管！全都是男友粉！"},
        path: "idontcareallnyf.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "呱！"},
        path: "gua01.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "呱呱呱呱呱！"},
        path: "guaguagua.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "滚出来！"},
        path: "comeout.mp3",
        tag: "loudly"
    },

    {
        messages: { zh: "你真的什么都没干吗！"},
        path: "donothing.mp3",
        tag: "loudly"
    },

    //故障

    {
        messages: { zh: "咳嗽"},
        path: "cough01.mp3",
        tag: "cough"
    },

    {
        messages: { zh: "清嗓01"},
        path: "cth01.mp3",
        tag: "cough"
    },

    {
        messages: { zh: "清嗓02"},
        path: "cth02.mp3",
        tag: "cough"
    },

    {
        messages: { zh: "清嗓03"},
        path: "cth03.mp3",
        tag: "cough"
    },

    {
        messages: { zh: "嗝01"},
        path: "hiccup01.mp3",
        tag: "cough"
    },

    {
        messages: { zh: "嗝02"},
        path: "hiccup02.mp3",
        tag: "cough"
    },

    {
        messages: { zh: "嗝03"},
        path: "hiccup03.mp3",
        tag: "cough"
    },

    {
        messages: { zh: "嗝04"},
        path: "hiccup04.mp3",
        tag: "cough"
    },


    //东北口音

    {
        messages: { zh: "你说这夺不好意思诶"},
        path: "sosorry.mp3",
        tag: "northeastwang"
    },
    
    {
        messages: { zh: "咋地"},
        path: "sowhat01.mp3",
        tag: "northeastwang"
    },

    {
        messages: { zh: "憋肘"},
        path: "dontleave.mp3",
        tag: "northeastwang"
    },

    {
        messages: { zh: "费劲巴拉地整这么老半天"},
        path: "fjbl.mp3",
        tag: "northeastwang"
    },

    {
        messages: { zh: "鼠标妹来啊"},
        path: "mouseabsent.mp3",
        tag: "northeastwang"
    },

    {
        messages: { zh: "妹词儿说了"},
        path: "noword.mp3",
        tag: "northeastwang"
    },

    //暴力威胁

    {
        messages: { zh: "宝宝~不要这么暴躁嘛~"},
        path: "dontbesogrumpy.mp3",
        tag: "violence"
    },

    {
        messages: { zh: "给你一拳"},
        path: "onepunch.mp3",
        tag: "violence"
    },
    
    {
        messages: { zh: "先给你两巴掌"},
        path: "slap01.mp3",
        tag: "violence"
    },

    {
        messages: { zh: "给你两拳"},
        path: "punch04.mp3",
        tag: "violence"
    },

    {
        messages: { zh: "给你两拳！呱！"},
        path: "punch01.mp3",
        tag: "violence"
    },

    {
        messages: { zh: "给你两拳邦邦两拳"},
        path: "punch02.mp3",
        tag: "violence"
    },

    {
        messages: { zh: "给你两拳！死变态！"},
        path: "punch03.mp3",
        tag: "violence"
    },

    {
        messages: { zh: "木大木大木大"},
        path: "mudamudamuda.mp3",
        tag: "violence"
    },

    {
        messages: { zh: "把我打似了你就满意了吗你这个暴力狂"},
        path: "satisfaction.mp3",
        tag: "violence"
    },

    //屎尿屁snp

    {
        messages: { zh: "答辩"},
        path: "shit01.mp3",
        tag: "snp"
    },

    {
        messages: { zh: "矢"},
        path: "shit02.mp3",
        tag: "snp"
    },

    {
        messages: { zh: "P"},
        path: "fart.mp3",
        tag: "snp"
    },

    {
        messages: { zh: "撤硕答辩"},
        path: "toiletandshit.mp3",
        tag: "snp"
    },
    
    {
        messages: { zh: "杂鱼答辩"},
        path: "shitwords.mp3",
        tag: "snp"
    },

    {
        messages: { zh: "吔矢啦雷w"},
        path: "eatshit01.mp3",
        tag: "snp"
    },

    //催眠

    {
        messages: { zh: "催眠音声01"},
        path: "saimin01.mp3",
        tag: "saimin"
    },

    {
        messages: { zh: "催眠音声02"},
        path: "saimin02.mp3",
        tag: "saimin"
    },

    {
        messages: { zh: "我是女友御姐势~"},
        path: "imgf.mp3",
        tag: "saimin"
    },

    {
        messages: { zh: "把你的米都给我*4"},
        path: "givmeurmoney.mp3",
        tag: "saimin"
    },

    {
        messages: { zh: "快来当我的男友gachi粉吧~"},
        path: "nygachi.mp3",
        tag: "saimin"
    },

    {
        messages: { zh: "你是我的男友gachi粉*n"},
        path: "urmynyfgachi.mp3",
        tag: "saimin"
    },

    {
        messages: { zh: "快点入脑吧~"},
        path: "rn.mp3",
        tag: "saimin"
    },

    {
        messages: { zh: "快入脑*n"},
        path: "krn.mp3",
        tag: "saimin"
    },

    {
        messages: { zh: "你是王宝煲的男友gachi粉~"},
        path: "urgachi.mp3",
        tag: "saimin"
    },

    {
        messages: { zh: "全都变成我的男友粉~*n"},
        path: "allbemynyf.mp3",
        tag: "saimin"
    },

    //角色扮演

    {
        messages: { zh: "冷淡嫌弃"},
        path: "nauseaaway.mp3",
        tag: "roleplay"
    },
    
    {
        messages: { zh: "真的有够恶心啊"},
        path: "nausea.mp3",
        tag: "roleplay"
    },
    
    {
        messages: { zh: "你自己能好好想想吗？真有够恶心的"},
        path: "sonausea.mp3",
        tag: "roleplay"
    },
    
    {
        messages: { zh: "离我远点可以吗"},
        path: "stayawayfromme.mp3",
        tag: "roleplay"
    },

    //营业

    {
        messages: { zh: "大家晚上好~"},
        path: "evbdgoodnigh.mp3",
        tag: "act"
    },

    {
        messages: { zh: "男友粉们晚上好哟~"},
        path: "nyfgoodnight.mp3",
        tag: "act"
    },

    {
        messages: { zh: "谢谢你男友粉=san"},
        path: "thankunyf.mp3",
        tag: "act"
    },

    {
        messages: { zh: "感谢男友粉的棒棒糖~"},
        path: "nyfbbt.mp3",
        tag: "act"
    },

    {
        messages: { zh: "感谢男友粉的口水黄豆~"},
        path: "nyfkshd.mp3",
        tag: "act"
    },

    {
        messages: { zh: "感谢男友粉的人气票~"},
        path: "nyfrqp.mp3",
        tag: "act"
    },

    {
        messages: { zh: "感谢男友粉的小花花~"},
        path: "nyfxhh.mp3",
        tag: "act"
    },

    {
        messages: { zh: "男友粉男友粉M~UA~"},
        path: "nyfmua.mp3",
        tag: "act"
    },

    {
        messages: { zh: "感谢男友粉的重拳出击~"},
        path: "nyfzqcj.mp3",
        tag: "act"
    },

    {
        messages: { zh: "干嘛啦————"},
        path: "gml.mp3",
        tag: "act"
    },

    {
        messages: { zh: "还是个家暴男友粉..."},
        path: "dvnyf.mp3",
        tag: "act"
    },

    {
        messages: { zh: "没有吵的~宝宝~"},
        path: "nonoisebb.mp3",
        tag: "act"
    },

    {
        messages: { zh: "想铜丝我果然是很爱我吧~"},
        path: "sureloveme.mp3",
        tag: "act"
    },

    {
        messages: { zh: "可能是看错了原谅小王好不好"},
        path: "forgive01.mp3",
        tag: "act"
    },

    {
        messages: { zh: "那你要什么~~~"},
        path: "whatuwant.mp3",
        tag: "act"
    },

    {
        messages: { zh: "宽限宽限吧老爷~"},
        path: "extend.mp3",
        tag: "act"
    },

    {
        messages: { zh: "原谅我好吗~"},
        path: "forgiveme.mp3",
        tag: "act"
    },

    {
        messages: { zh: "主播从来没有哈气过哟~"},
        path: "neverha.mp3",
        tag: "act"
    },

    //营业失败

    {
        messages: { zh: "你是御姐..."},
        path: "saiminfailyujie01.mp3",
        tag: "actfail"
    },

    {
        messages: { zh: "你是我的御...呸！"},
        path: "saiminfailyujie02.mp3",
        tag: "actfail"
    },

    {
        messages: { zh: "你是我的御姐ww...呸！"},
        path: "saiminfailyujie03.mp3",
        tag: "actfail"
    },
    
    {
        messages: { zh: "宝宝哪里没有念你的男...呸！弹幕呀~"},
        path: "sliptongue01.mp3",
        tag: "actfail"
    },

    {
        messages: { zh: "舰长群在复读什么大家知道吗？等等不对"},
        path: "waitno.mp3",
        tag: "actfail"
    },

    {
        messages: { zh: "再也不搞了，切切切切切"},
        path: "neverqie.mp3",
        tag: "actfail"
    },

    {
        messages: { zh: "有没有品味"},
        path: "nosense.mp3",
        tag: "actfail"
    }

    // 更多音频配置...
    // {
    //     messages: { zh: "音频名称" },
    //     path: "目录/文件名.mp3",
    //     tag: "分类标签"
    // }
];

/**
 * ============================================
 * 文件命名规范建议
 * ============================================
 * 
 * 强烈建议：
 * 1. 使用英文文件名，避免编码问题
 * 2. 使用小写字母、数字和下划线
 * 3. 有意义的命名，如：haruka_greeting_01.mp3
 * 4. 按角色或功能建立子目录
 * 
 * 推荐的文件结构：
 * CDN或本地目录/
 * ├── haruka/              # 角色目录
 * │   ├── greetings/       # 问候语分类
 * │   │   ├── hello.mp3
 * │   │   └── good_morning.mp3
 * │   └── reactions/       # 反应分类
 * │       ├── happy.mp3
 * │       └── angry.mp3
 * ├── nene/                # 另一个角色
 * │   └── ...
 * └── common/              # 通用音频
 *     └── ...
 * 
 * ============================================
 * 注意事项
 * ============================================
 * 
 * 1. 音频格式支持：mp3、wav、ogg等浏览器支持的格式
 * 2. 文件大小优化：建议压缩音频，单文件最好在1MB以内
 * 3. 命名一致性：路径中的大小写要一致，Linux系统区分大小写
 * 4. 特殊字符：避免使用空格和特殊字符，用下划线替代
 * 5. 扩展名：确保扩展名正确，浏览器依赖扩展名识别格式
 */