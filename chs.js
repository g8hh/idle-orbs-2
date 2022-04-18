/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    ", \n\t\t\tmore events (like those shadow orbs), and more monsters.": ", \n\t\t\t更多事件（比如那些暗影球），以及更多怪物。",
    "\"That's cool and all, but what's the catch?\" I here you say. \n\t\t\tWell, the game is twice as hard.": "“这很酷，但有什么问题？”我在这里你说。 \n\t\t\t嗯，游戏难度是原来的两倍。",
    "*Secret*": "*秘密*",
    "5th Orb": "第 5 个小球",
    "An orb's damage is equal to its cash value.": "一个小球的伤害等于它的现金价值。",
    "Average": "平均",
    "Back to game": "返回游戏",
    "Basic": "基本球",
    "Basic Orbs": "基本球",
    "Buy": "购买",
    "Buy me a coffee!": "给我买杯咖啡！",
    "Cash": "现金",
    "Circles": "圆球",
    "Clear Game Data": "清除游戏数据",
    "click": "点击",
    "Cost $": "成本 $",
    "Default: 100. Save data before changing to a really high number! (Could crash game": "默认值：100。在更改为非常高的数字之前保存数据！ （可能会崩溃游戏",
    "Double": "双倍",
    "Get Data": "导出存档",
    "Heavier and slower, but has a very high value and does bonus damage to monsters. Additionally, this orb requires 1 of each other orb.": "较重且较慢，但具有非常高的价值并对怪物造成额外伤害。此外，这个小球需要 1 个彼此的小球。",
    "Hm... nah": "嗯……不",
    "How about starting over?": "重新开始怎么样？",
    "Idle Orbs 2": "空闲球 2",
    "In this fresh start, called \"New Game+\", \n\t\t\tyou will unlock the elusive": "在这个名为“新游戏+”的全新开始中，\n\t\t\t您将解锁难以捉摸的",
    "Increase Bounce Area": "增加反弹区域",
    "Increase Bounce Power": "增加弹跳力",
    "Jacoby Y presents": "雅各比 Y 礼物",
    "Just...": "只是...",
    "Like an aerodynamic ping pong ball!": "就像一个空气动力学的乒乓球！",
    "Likes to follow you around.": "喜欢跟着你。",
    "Load Data": "导入存档",
    "Low gravity and drag, but normal value.": "低重力和阻力，但正常值。",
    "Mana": "法力",
    "Max Rendered Orbs": "最大渲染小球",
    "None": "无",
    "Normal gravity, drag, and high value. Spawns smaller, lower value orbs that despawn after a few seconds.": "正常重力、阻力和高值。生成更小、价值更低的小球，并在几秒钟后消失。",
    "Normal gravity, drag, value, etc.": "正常重力、阻力、数值等。",
    "Orb Value Bonus: +": "小球价值奖励：+",
    "Pixelated": "像素化",
    "Press \"E\"": "按“E”",
    "Prestige": "声望",
    "Prestiges": "次声望",
    "Render once every": "每次渲染一次",
    "Rendering Mode": "渲染模式",
    "Sand": "沙",
    "Save Locally": "本地保存",
    "Sell": "出售",
    "Set": "设置",
    "So, what'll it be?": "那么，会是什么？",
    "Squares": "正方形",
    "Starting Cash +1 ($": "初始现金 +1 ($",
    "The sequel nobody asked for": "没人要的续集",
    "This game is dedicated to you, Dad": "这个游戏是献给你的，爸爸",
    "tick": "tick",
    "to lock orbit position": "锁定轨道位置",
    "to toggle shop": "切换商店",
    "Unlock After": "距离解锁还需要",
    "Unlock Auto Bounce": "解锁自动反弹",
    "Use your orbs in The Monster Tower to get Mana.": "在怪物塔中使用你的小球来获得法力。",
    "Value": "价值",
    "Wireframe": "线框",
    "Yeah, I guess": "是的，我猜",
    "You've gotten pretty far...": "你已经走得很远了...",
    "auto bounce": "自动弹跳",
    "off": "关闭",
    "to turn": "去切换",
    "Unlocked!": "已解锁!",
    "Press \"Tab\"": "按 \"Tab键\"",
    "Increases per prestige": "每次声望增加",
    "Max": "最大",
    "Light": "光球",
    "Light Orbs": "光球",
    "on": "开启",
    "Auto Fight?": "自动战斗？",
    "Common": "普通",
    "Monster Tower Lvl": "怪物塔 等级",
    "Monster Tower: Level": "怪物塔：等级",
    "Quit": "退出",
    "Sea Monster": "海怪",
    "Boar": "野猪",
    "Zombie": "僵尸",
    "Young Sea Monster": "小海怪",
    "Spore Orbs": "孢子球",
    "Spore": "孢子球",
    "Increase Orb Value +1%": "增加小球价值 +1%",
    "Homing Orbs": "回旋球",
    "Homing": "回旋球",
    "Baby Boss": "小Boss",
    "Viking Boss": "维京Boss",
    "Uncommon": "罕见",
    "Rare": "稀有",
    "Young Wyvern": "小飞龙",
    "Possessed Sword": "附魔剑",
    "Stone Golem": "石傀儡",
    "Big Boss": "大Boss",
    "Young Dragon": "小龙",
    "Max!": "最大!",
    "J Walker": "J行人",
    "Crystal Golem": "水晶傀儡",
    "Lich Boss": "巫妖Boss",
    "Block Head": "大块头",
    "Elder Dragon": "长老龙",
    "Legendary": "传奇",
    "Seagull": "海鸥",
    "Check settings...": "去设置里面解锁秘密...",
    "*Unlocked*": "*已解锁*",
    "Titan": "泰坦球",
    "Titan Orbs": "泰坦球",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)T$/,
    /^([\d\.]+)Qa$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);