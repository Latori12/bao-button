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

    {
        messages: { zh: "新年好"},
        path: "newyeargreeting.mp3",
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
        messages: { zh: "Padoru~"},
        path: "padoru.mp3",
        tag: "singsongs"
    },

    {
        messages: { zh: "明白我什么意思吗？*2"},
        path: "youknowwhatimean.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "でしょ？"},
        path: "desyo.mp3",
        tag: "sentences"
    },

    {
        messages: { zh: "不安desu"},
        path: "fuandesu.mp3",
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
        messages: { zh: "哈啊~"},
        path: "breatheandsigh.mp3",
        tag: "weirdsounds"
    },

    {
        messages: { zh: "开朗"},
        path: "laughter01.mp3",
        tag: "laughter"
    },

    {
        messages: { zh: "擦盘子壹"},
        path: "Dlaugh01.mp3",
        tag: "dyinglylaugh"
    },

    {
        messages: { zh: "擦盘子贰"},
        path: "Dlaugh02.mp3",
        tag: "dyinglylaugh"
    },

    {
        messages: { zh: "擦盘子叁"},
        path: "Dlaugh03.mp3",
        tag: "dyinglylaugh"
    },

    {
        messages: { zh: "擦盘子肆"},
        path: "Dlaugh04.mp3",
        tag: "dyinglylaugh"
    },

    {
        messages: { zh: "擦盘子伍"},
        path: "Dlaugh05.mp3",
        tag: "dyinglylaugh"
    },

    {
        messages: { zh: "擦盘子陆"},
        path: "Dlaugh06.mp3",
        tag: "dyinglylaugh"
    },

    {
        messages: { zh: "擦盘子柒"},
        path: "Dlaugh07.mp3",
        tag: "dyinglylaugh"
    },

    {
        messages: { zh: "擦盘子捌"},
        path: "Dlaugh08.mp3",
        tag: "dyinglylaugh"
    },

    {
        messages: { zh: "擦盘子玖"},
        path: "Dlaugh09.mp3",
        tag: "dyinglylaugh"
    },

    {
        messages: { zh: "邦邦邦~"},
        path: "bangbangbang.mp3",
        tag: "soundeffect"
    },

    {
        messages: { zh: "受击01"},
        path: "hit01.mp3",
        tag: "soundeffect"
    },

    {
        messages: { zh: "倒吸一口凉皮"},
        path: "gasp01.mp3",
        tag: "soundeffect"
    },

    {
        messages: { zh: "咳嗽"},
        path: "cough01.mp3",
        tag: "cough"
    },

    {
        messages: { zh: "咋地"},
        path: "sowhat01.mp3",
        tag: "northeastwang"
    },

    {
        messages: { zh: "先给你两巴掌"},
        path: "slap01.mp3",
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