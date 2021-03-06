

// jQuery Code
const items = []
$('.all-apps-item').each(function(){
    const item = {}
    item.image = $(this).find('.all-apps-item__icon').attr('src')
    item.name = $(this).find('.all-apps-item__name ').html().trim()
    item.description = $(this).find('.all-apps-item__description ').html().trim()
    items.push(item)
})
console.log(items)

// JS code 
const items = []
document.querySelectorAll('.all-apps-item').forEach(function(item){
    const item = {}
    item.image = item.querySelector('.all-apps-item__icon').getAttribute('src')
    item.name = item.querySelector('.all-apps-item__name ').innerHTML.trim()
    item.description = item.querySelector('.all-apps-item__description ').innerHTML.trim()
    items.push(item)
})
console.log(items)



const items = [
    {
        "image": "https://imgix.setapp.com/app/79/5156/icon-1635424450-617a98c223900.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Gemini",
        "description": "Remove duplicate files from your Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/433/5304/icon-1637837816-619f6bf851b71.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "ClearVPN",
        "description": "Secure and expand your online experiences"
    },
    {
        "image": "https://imgix.setapp.com/app/83/5252/icon-1637094096-619412d072544.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Chronicle",
        "description": "Easily master your finances"
    },
    {
        "image": "https://imgix.setapp.com/app/98/5356/icon-1638990968-61b1047821992.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Paste",
        "description": "Use a smart clipboard for your work"
    },
    {
        "image": "https://imgix.setapp.com/app/230/5332/icon-1638545104-61aa36d028f08.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "SQLPro Studio",
        "description": "Manage Postgres and MySQL databases"
    },
    {
        "image": "https://imgix.setapp.com/app/250/5338/icon-1638817371-61ae5e5bd4c19.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Dropshare",
        "description": "Quickly share any file or folder"
    },
    {
        "image": "https://imgix.setapp.com/app/68/3002/icon-1589145448-5eb86f68bae68.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "2Do",
        "description": "Plan all your activities in a smarter way"
    },
    {
        "image": "https://imgix.setapp.com/app/272/5321/icon-1638281733-61a632058ed8d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "PDF Search",
        "description": "Search within PDFs with maximum relevance"
    },
    {
        "image": "https://imgix.setapp.com/app/267/5315/icon-1638116961-61a3ae61509bd.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Wokabulary",
        "description": "Learn and organize foreign words efficiently"
    },
    {
        "image": "https://imgix.setapp.com/app/280/5192/icon-1635962977-6182d061f0106.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "NotePlan",
        "description": "Organize your life with the benefits of markdown"
    },
    {
        "image": "https://imgix.setapp.com/app/67/5173/icon-1635858211-61813723650ff.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Ulysses",
        "description": "Write your first novel"
    },
    {
        "image": "https://imgix.setapp.com/app/307/5050/icon-1633681179-615fff1b16a62.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Canary Mail",
        "description": "Beautify your emailing experience"
    },
    {
        "image": "https://imgix.setapp.com/app/326/5367/icon-1639088602-61b281dad3862.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Taskheat",
        "description": "Plan a detailed path to any of your goals"
    },
    {
        "image": "https://imgix.setapp.com/app/320/5205/icon-1636134221-61856d4df026b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "MindNode",
        "description": "Visualize your ideas with mind maps"
    },
    {
        "image": "https://imgix.setapp.com/app/347/5361/icon-1639043895-61b1d33782ed1.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Diarly",
        "description": "Keep your personal diary neatly organized"
    },
    {
        "image": "https://imgix.setapp.com/app/378/4018/icon-1611523469-600de58d5dc65.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Step Two",
        "description": "Generate two-factor authentication codes"
    },
    {
        "image": "https://imgix.setapp.com/app/380/5279/icon-1637379629-61986e2d1f098.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Timemator",
        "description": "Track everything you do on your Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/392/5117/icon-1634896751-61728b6f5f10a.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "AdGuard",
        "description": "Block trackers and ads"
    },
    {
        "image": "https://imgix.setapp.com/app/416/5239/icon-1637068177-6193ad91d6c1f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Newton",
        "description": "Best email client for teams"
    },
    {
        "image": "https://imgix.setapp.com/app/435/4858/icon-1632167587-6148e6a350370.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Euclid",
        "description": "Calculator at its finest"
    },
    {
        "image": "https://imgix.setapp.com/app/428/5374/icon-1639162364-61b3a1fc8c7d2.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Session",
        "description": "Pomodoro timer with analytics"
    },
    {
        "image": "https://imgix.setapp.com/app/442/4855/icon-1631621446-614091468ac5b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Collabio",
        "description": "Create and collaborate on your documents"
    },
    {
        "image": "https://imgix.setapp.com/app/477/5292/icon-1637729024-619dc30068936.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Speeko",
        "description": "AI-powered communication coach"
    },
    {
        "image": "https://imgix.setapp.com/app/460/5283/icon-1637533310-619ac67e3abd2.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Repeat",
        "description": "Track your habits"
    },
    {
        "image": "https://imgix.setapp.com/app/78/5353/icon-1638957048-61b07ff8379cc.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "CleanMyMac X",
        "description": "Free up space, protect and speed up Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/269/1726/icon-1593690549-5efdc9b5cc2f0.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Wallpaper Wizard",
        "description": "Beautify your Mac with HD desktop pictures"
    },
    {
        "image": "https://imgix.setapp.com/app/70/5314/icon-1638113146-61a39f7ab103b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Pagico",
        "description": "Manage tasks and projects"
    },
    {
        "image": "https://imgix.setapp.com/app/80/5143/icon-1635280764-6178677cf14db.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Marked",
        "description": "Write in Markdown with live preview"
    },
    {
        "image": "https://imgix.setapp.com/app/194/4304/icon-1616170708-6054ced4dfc67.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Archiver",
        "description": "Easily archive files in any format"
    },
    {
        "image": "https://imgix.setapp.com/app/136/3424/icon-1600183707-5f60dd9be2f72.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Renamer",
        "description": "Quickly rename files by the batch"
    },
    {
        "image": "https://imgix.setapp.com/app/232/4908/icon-1630520013-612fc2cd84372.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Sip",
        "description": "Design like a pro with a perfect color picker"
    },
    {
        "image": "https://imgix.setapp.com/app/188/5118/icon-1635153288-61767588ca10c.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "PDF Squeezer",
        "description": "Make large PDFs lighter"
    },
    {
        "image": "https://imgix.setapp.com/app/276/3608/icon-1605023890-5faab892494ed.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Rocket Typist",
        "description": "Enhance your typing by doing less of it"
    },
    {
        "image": "https://imgix.setapp.com/app/74/5222/icon-1636524053-618b60158fc05.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "WiFi Explorer",
        "description": "Monitor your network environment"
    },
    {
        "image": "https://imgix.setapp.com/app/178/4801/icon-1637951353-61a127792d637.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Elmedia Player",
        "description": "Play media files of any format"
    },
    {
        "image": "https://imgix.setapp.com/app/202/5202/icon-1637153842-6194fc328a5f4.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Folx",
        "description": "Download files and torrents really fast"
    },
    {
        "image": "https://imgix.setapp.com/app/286/4515/icon-1620309373-6093f57df1af2.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "PhotoBulk",
        "description": "Save time by editing bulks of photos at once"
    },
    {
        "image": "https://imgix.setapp.com/app/289/4869/icon-1629714890-612379ca860ca.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "CloudMounter",
        "description": "Mount your online drives directly into Finder"
    },
    {
        "image": "https://imgix.setapp.com/app/366/4942/icon-1631200926-613a269ef2a07.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Commander One",
        "description": "Manage your files and connections"
    },
    {
        "image": "https://imgix.setapp.com/app/370/4870/icon-1635927551-618245ff09aab.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "JustStream",
        "description": "Stream your videos or mirror Mac display to TV"
    },
    {
        "image": "https://imgix.setapp.com/app/391/3039/icon-1589874689-5ec390012394e.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Uplet",
        "description": "Upload photos and videos to instagram"
    },
    {
        "image": "https://imgix.setapp.com/app/135/3573/icon-1604234671-5f9eadafecafa.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Base",
        "description": "Browse and edit your SQLite 3 files"
    },
    {
        "image": "https://imgix.setapp.com/app/187/5369/icon-1639137503-61b340dfeade8.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "iThoughtsX",
        "description": "Make a mind map in 5 minutes"
    },
    {
        "image": "https://imgix.setapp.com/app/195/5125/icon-1635097099-61759a0b1ce18.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Image2icon",
        "description": "Convert any image into icon"
    },
    {
        "image": "https://imgix.setapp.com/app/175/4882/icon-1629952299-6127192b52acd.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Capto",
        "description": "Make a video of your screen"
    },
    {
        "image": "https://imgix.setapp.com/app/291/4880/icon-1629885900-612615cc56367.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Boom 3D",
        "description": "Boost and enhance your Mac's audio output"
    },
    {
        "image": "https://imgix.setapp.com/app/145/2735/icon-1582637839-5e55230f7685e.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Manuscripts",
        "description": "Write a book and do it easily"
    },
    {
        "image": "https://imgix.setapp.com/app/184/5203/icon-1636119259-618532db8c4fa.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Timing",
        "description": "Automatically track time spent on your Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/201/4697/icon-1625288226-60dfee229f504.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Simon",
        "description": "Monitor your servers at all times"
    },
    {
        "image": "https://imgix.setapp.com/app/364/4604/icon-1622688671-60b8439fab0e5.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Time Out",
        "description": "Remind yourself to take a quick break"
    },
    {
        "image": "https://imgix.setapp.com/app/64/5178/icon-1635784966-61801906ad32f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "RapidWeaver",
        "description": "Create websites without coding"
    },
    {
        "image": "https://imgix.setapp.com/app/209/4822/icon-1628527104-61115a008de92.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Squash",
        "description": "Compress files to make them lighter"
    },
    {
        "image": "https://imgix.setapp.com/app/193/1970/icon-1558078558-5cde645e2405f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Remote Mouse",
        "description": "Control your Mac via iPhone or iPad"
    },
    {
        "image": "https://imgix.setapp.com/app/192/4755/icon-1626799182-60f6fc4e31d85.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Hype",
        "description": "Create animated web content"
    },
    {
        "image": "https://imgix.setapp.com/app/463/4921/icon-1630702918-61328d4659d3f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Whisk",
        "description": "HTML and PHP editor"
    },
    {
        "image": "https://imgix.setapp.com/app/213/4296/icon-1616067567-60533befa5f24.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "TaskPaper",
        "description": "Remember everything you need to do"
    },
    {
        "image": "https://imgix.setapp.com/app/173/4568/icon-1621930731-60acb2eb59404.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Be Focused",
        "description": "Get any job done with a timer"
    },
    {
        "image": "https://imgix.setapp.com/app/174/4461/icon-1619107204-60819d84234bd.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Cloud Outliner",
        "description": "Outline your ideas to align your life"
    },
    {
        "image": "https://imgix.setapp.com/app/212/5116/icon-1634896124-617288fc833a7.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "HazeOver",
        "description": "Focus on the task at hand, dim the rest"
    },
    {
        "image": "https://imgix.setapp.com/app/197/4867/icon-1629655336-61229128db227.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Gifox",
        "description": "Quickly make GIFs from your screen"
    },
    {
        "image": "https://imgix.setapp.com/app/186/3767/icon-1606581603-5fc27d6373217.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Numi",
        "description": "Calculate anything, anywhere"
    },
    {
        "image": "https://imgix.setapp.com/app/134/5206/icon-1636143188-61859054bb58b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Focused",
        "description": "Write articles and don't get distracted"
    },
    {
        "image": "https://imgix.setapp.com/app/122/5148/icon-1635334757-61793a65a0789.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "CodeRunner",
        "description": "Edit and run code in any language"
    },
    {
        "image": "https://imgix.setapp.com/app/500/5336/icon-1638752094-61ad5f5ebab8a.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Aeon Timeline",
        "description": "Create timelines for your projects"
    },
    {
        "image": "https://imgix.setapp.com/app/206/5144/icon-1635303020-6178be6ca0a3d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "GoodTask",
        "description": "Keep all your tasks in one place"
    },
    {
        "image": "https://imgix.setapp.com/app/144/5272/icon-1637291221-619714d55b097.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "iStat Menus",
        "description": "Monitor your Mac's health and system"
    },
    {
        "image": "https://imgix.setapp.com/app/75/4902/icon-1630416431-612e2e2f4cc9c.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Jump Desktop",
        "description": "Access any computer from your Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/215/3955/icon-1610054365-5ff77add390e4.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "MoneyWiz",
        "description": "Keep your budget in perfect order"
    },
    {
        "image": "https://imgix.setapp.com/app/210/4933/icon-1631029657-6137899924755.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Get Backup Pro",
        "description": "Keep your Mac backed up and protected"
    },
    {
        "image": "https://imgix.setapp.com/app/95/5240/icon-1636992439-619285b792b77.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Swift Publisher",
        "description": "Create effective printable materials of any kind"
    },
    {
        "image": "https://imgix.setapp.com/app/82/5091/icon-1635877308-618181bce4dca.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Disk Drill",
        "description": "Recover data and protect your files"
    },
    {
        "image": "https://imgix.setapp.com/app/218/5268/icon-1637263254-6196a796893c0.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Screens",
        "description": "Access any other computer from your Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/125/5017/icon-1632808597-6152ae950af89.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "SnippetsLab",
        "description": "Write and organize your code snippets"
    },
    {
        "image": "https://imgix.setapp.com/app/219/5362/icon-1639050708-61b1edd41f2ff.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Permute",
        "description": "Convert any media into any format"
    },
    {
        "image": "https://imgix.setapp.com/app/222/5360/icon-1639047585-61b1e1a1203ce.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Downie",
        "description": "Download media from the web"
    },
    {
        "image": "https://imgix.setapp.com/app/382/5371/icon-1639143728-61b35930122fa.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "UctoX",
        "description": "Manage and edit your invoices"
    },
    {
        "image": "https://imgix.setapp.com/app/217/5214/icon-1636408543-61899cdf6dc1c.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "ChronoSync Express",
        "description": "Keep files backed up and synchronized"
    },
    {
        "image": "https://imgix.setapp.com/app/224/4658/icon-1624035734-60ccd196d881d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Home Inventory",
        "description": "Know what you have in your house"
    },
    {
        "image": "https://imgix.setapp.com/app/229/5236/icon-1636875938-6190bea26ea8a.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "iFlicks",
        "description": "Add your videos to iTunes"
    },
    {
        "image": "https://imgix.setapp.com/app/333/5345/icon-1638880965-61af56c5a580e.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "SQLPro for SQLite",
        "description": "Take full control of your SQLite databases"
    },
    {
        "image": "https://imgix.setapp.com/app/231/5302/icon-1637782393-619e937917d76.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Studies",
        "description": "Finish your academic paper in no time"
    },
    {
        "image": "https://imgix.setapp.com/app/227/3676/icon-1606144266-5fbbd10ab7b18.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Shimo",
        "description": "Use the most reliable VPN software"
    },
    {
        "image": "https://imgix.setapp.com/app/235/4479/icon-1619487789-60876c2d77019.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Lacona",
        "description": "Give your Mac quick commands"
    },
    {
        "image": "https://imgix.setapp.com/app/234/4790/icon-1627648067-6103f04370af5.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Forecast Bar",
        "description": "Know exact weather anywhere"
    },
    {
        "image": "https://imgix.setapp.com/app/285/3613/icon-1605028209-5faac9714f25b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "InstaCal",
        "description": "Have your calendars always at hand"
    },
    {
        "image": "https://imgix.setapp.com/app/240/1401/icon-1537949331-5bab3e93aa91a.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "ChatMate for WhatsApp",
        "description": "Use WhatsApp on Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/223/5175/icon-1635769047-617fdad770dd2.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "NetSpot",
        "description": "Run wireless site surveys on Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/243/2650/icon-1580279631-5e31274f5b2e7.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Expressions",
        "description": "Have fun with regular expressions"
    },
    {
        "image": "https://imgix.setapp.com/app/268/3850/icon-1608029722-5fd8961acb004.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Workspaces",
        "description": "Organize your working environment properly"
    },
    {
        "image": "https://imgix.setapp.com/app/308/2651/icon-1580236368-5e307e50bbba2.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "TeaCode",
        "description": "Start writing your code the quicker way"
    },
    {
        "image": "https://imgix.setapp.com/app/365/5352/icon-1638956180-61b07c9473e00.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "SideNotes",
        "description": "Keep any of your notes just a click away"
    },
    {
        "image": "https://imgix.setapp.com/app/245/4677/icon-1624526122-60d44d2a26633.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "BetterZip",
        "description": "Quickly archive files and folders"
    },
    {
        "image": "https://imgix.setapp.com/app/244/5256/icon-1637153870-6194fc4e9e702.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "TripMode",
        "description": "Save your mobile data when on the go"
    },
    {
        "image": "https://imgix.setapp.com/app/246/4662/icon-1624243463-60cffd07c27ae.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "World Clock Pro",
        "description": "Know what time it is in any city"
    },
    {
        "image": "https://imgix.setapp.com/app/247/5032/icon-1633107266-61573d4224742.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Mosaic",
        "description": "Organize windows on your desktop"
    },
    {
        "image": "https://imgix.setapp.com/app/294/2215/icon-1566995620-5d6674a445de5.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Spotless",
        "description": "Organize your files the smartest way possible"
    },
    {
        "image": "https://imgix.setapp.com/app/241/4964/icon-1637574591-619b67bfcf204.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Merlin Project Express",
        "description": "Manage all your projects like a pro"
    },
    {
        "image": "https://imgix.setapp.com/app/248/5329/icon-1638448332-61a8bccc5eab6.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Mate Translate",
        "description": "Translate anything on the go"
    },
    {
        "image": "https://imgix.setapp.com/app/238/5165/icon-1635954317-6182ae8da6090.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "n-Track Studio",
        "description": "Become a musician and mix tracks"
    },
    {
        "image": "https://imgix.setapp.com/app/242/3909/icon-1609182599-5fea2d877ac7d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Unclutter",
        "description": "Keep any files on desktop with no clutter"
    },
    {
        "image": "https://imgix.setapp.com/app/249/4732/icon-1626357813-60f040354f995.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "News Explorer",
        "description": "Have your newsfeed delivered to you"
    },
    {
        "image": "https://imgix.setapp.com/app/335/5111/icon-1634852454-6171de664f80c.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Movie Explorer Pro",
        "description": "Organize your movie collection beautifully"
    },
    {
        "image": "https://imgix.setapp.com/app/130/3569/icon-1604047179-5f9bd14bc431b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Noizio",
        "description": "Turn on the sounds to help you concentrate"
    },
    {
        "image": "https://imgix.setapp.com/app/169/1479/icon-1539884247-5bc8c4d7b9f0c.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Unibox",
        "description": "Have all your mail grouped by sender"
    },
    {
        "image": "https://imgix.setapp.com/app/252/1703/icon-1548766005-5c504b35d2c57.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "WaitingList",
        "description": "Create beautiful countdowns to events"
    },
    {
        "image": "https://imgix.setapp.com/app/94/5323/icon-1638283705-61a639b941763.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Paw",
        "description": "Send HTTP requests, describe RESTful APIs"
    },
    {
        "image": "https://imgix.setapp.com/app/255/5288/icon-1637686910-619d1e7eaedcf.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Tayasui Sketches",
        "description": "Draw with amazing realistic brushes"
    },
    {
        "image": "https://imgix.setapp.com/app/253/5009/icon-1632491149-614dd68d6811e.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "ForkLift",
        "description": "Manage your files with dual pane convenience"
    },
    {
        "image": "https://imgix.setapp.com/app/264/4951/icon-1631564524-613fb2ec68e07.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "IconJar",
        "description": "Store all your icons in one place, just a click away"
    },
    {
        "image": "https://imgix.setapp.com/app/270/5300/icon-1637767004-619e575c5bf87.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Lungo",
        "description": "Prevent your Mac from going to sleep"
    },
    {
        "image": "https://imgix.setapp.com/app/266/4659/icon-1624558502-60d4cba6f3596.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Focus",
        "description": "Block distracting websites"
    },
    {
        "image": "https://imgix.setapp.com/app/282/676/icon-1509646262-59fb5fb64ad64.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "MacGourmet Deluxe",
        "description": "Discover and collect your favorite food recipes"
    },
    {
        "image": "https://imgix.setapp.com/app/284/5347/icon-1638901212-61afa5dcf3237.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "TextSoap",
        "description": "Edit your texts with the ease of automation"
    },
    {
        "image": "https://imgix.setapp.com/app/274/2035/icon-1560341591-5d00ec57400f6.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "KeyKey Typing Tutor",
        "description": "Learn and improve your blind typing skills"
    },
    {
        "image": "https://imgix.setapp.com/app/288/5189/icon-1635947203-618292c3248ac.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Secrets",
        "description": "Store your passwords and sensitive data securely"
    },
    {
        "image": "https://imgix.setapp.com/app/153/5308/icon-1637930874-61a0d77a2c438.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Bartender",
        "description": "Take full control of your menu bar icons"
    },
    {
        "image": "https://imgix.setapp.com/app/296/3685/icon-1605729873-5fb57e510c414.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "IM+",
        "description": "Combine messaging apps into one, at last"
    },
    {
        "image": "https://imgix.setapp.com/app/297/5381/icon-1639326245-61b62225523e3.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "TablePlus",
        "description": "Manage multiple databases the easy way"
    },
    {
        "image": "https://imgix.setapp.com/app/298/3887/icon-1608646953-5fe20129783f8.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "TouchRetouch",
        "description": "Refine your photos with the right tools for the job"
    },
    {
        "image": "https://imgix.setapp.com/app/295/5233/icon-1636722327-618e66973c096.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "BetterTouchTool",
        "description": "Take full control of your Mac's input devices"
    },
    {
        "image": "https://imgix.setapp.com/app/300/1846/icon-1552923693-5c8fbc2d391a3.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Aquarelo",
        "description": "Prepare, mix and export perfect color palettes"
    },
    {
        "image": "https://imgix.setapp.com/app/299/5261/icon-1637198742-6195ab96092e6.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "CameraBag Pro",
        "description": "Edit your videos and apply cinematic filters to them"
    },
    {
        "image": "https://imgix.setapp.com/app/160/5266/icon-1637251517-619679bd5115a.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Prizmo",
        "description": "Apply optical character recognition to any images"
    },
    {
        "image": "https://imgix.setapp.com/app/304/5375/icon-1639306451-61b5d4d3e8b02.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "BusyCal",
        "description": "Take full control of all your schedule"
    },
    {
        "image": "https://imgix.setapp.com/app/369/5198/icon-1636059894-61844af6bedff.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "BusyContacts",
        "description": "Manage your contacts efficiently"
    },
    {
        "image": "https://imgix.setapp.com/app/306/4868/icon-1629662363-6122ac9b09103.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "uBar",
        "description": "Replace your Dock with a more versatile tool"
    },
    {
        "image": "https://imgix.setapp.com/app/301/3842/icon-1607792173-5fd4f62de1d07.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Endurance",
        "description": "Extend your Mac's battery life without effort"
    },
    {
        "image": "https://imgix.setapp.com/app/311/5053/icon-1633719652-6160956473902.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "DCommander",
        "description": "Go dual-pane with your file management"
    },
    {
        "image": "https://imgix.setapp.com/app/353/2097/icon-1562101545-5d1bc7290703b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Strike",
        "description": "Collaborate on your team writing with proper tools"
    },
    {
        "image": "https://imgix.setapp.com/app/314/4563/icon-1621865087-60abb27f45d01.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Moonitor",
        "description": "Track your cryptocurrency investments real-time"
    },
    {
        "image": "https://imgix.setapp.com/app/315/5219/icon-1636458480-618a5ff027829.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Typeface",
        "description": "Organize and manage your font collections"
    },
    {
        "image": "https://imgix.setapp.com/app/316/3886/icon-1608639861-5fe1e5759a044.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Espresso",
        "description": "Design, write, and code your own website"
    },
    {
        "image": "https://imgix.setapp.com/app/155/5262/icon-1637211345-6195dcd171b8a.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Dropzone",
        "description": "Improve your drag and drop experience"
    },
    {
        "image": "https://imgix.setapp.com/app/324/5306/icon-1637854912-619faec04dfc3.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "GlueMotion",
        "description": "Create time lapse videos from separate photos"
    },
    {
        "image": "https://imgix.setapp.com/app/356/4037/icon-1611680948-60104cb4eb4e8.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "MetaImage",
        "description": "Edit and adjust image metadata with ease"
    },
    {
        "image": "https://imgix.setapp.com/app/323/5137/icon-1635248011-6177e78b7dbf7.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "MarginNote",
        "description": "Study better with powerful annotation"
    },
    {
        "image": "https://imgix.setapp.com/app/322/4676/icon-1624506421-60d40035a3060.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "PDFpen",
        "description": "Edit and create PDFs using powerful tools"
    },
    {
        "image": "https://imgix.setapp.com/app/327/1553/icon-1542042300-5be9b2bca6b33.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "MathKey",
        "description": "Convert written formulas into proper formats"
    },
    {
        "image": "https://imgix.setapp.com/app/319/5269/icon-1637266690-6196b502a372d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "ToothFairy",
        "description": "Connect your Bluetooth headphones in a click"
    },
    {
        "image": "https://imgix.setapp.com/app/321/5213/icon-1636390927-6189580fc0b06.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "CleanShot X",
        "description": "Take screenshots better than you did before"
    },
    {
        "image": "https://imgix.setapp.com/app/358/5078/icon-1634291169-61694de15fcfc.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "PixelSnap",
        "description": "Accurately measure any proportion on your screen"
    },
    {
        "image": "https://imgix.setapp.com/app/328/5058/icon-1634899149-617294cd9e41f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "AnyTrans for iOS",
        "description": "Manage and back up your iOS devices from Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/336/5057/icon-1634610125-616e2bcdb586e.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "AnyDroid",
        "description": "Manage and back up your Android from Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/337/2908/icon-1587116419-5e997983f2361.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "iMeetingX",
        "description": "Plan and conduct your meetings effectively"
    },
    {
        "image": "https://imgix.setapp.com/app/339/5378/icon-1639238098-61b4c9d211411.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Core Shell",
        "description": "Make use of a full-featured SSH terminal"
    },
    {
        "image": "https://imgix.setapp.com/app/453/4541/icon-1621363202-60a40a02228d0.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "SheetPlanner",
        "description": "Stay in the know of your daily activities"
    },
    {
        "image": "https://imgix.setapp.com/app/330/5140/icon-1635268352-6178370024075.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Yoink",
        "description": "Simplify and improve your drag and drop experience"
    },
    {
        "image": "https://imgix.setapp.com/app/481/5100/icon-1634716149-616fc9f55fe37.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Transloader",
        "description": "Download files remotely to your Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/340/5350/icon-1638919545-61afed798bf5b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Unite",
        "description": "Create separate apps out of favorite websites"
    },
    {
        "image": "https://imgix.setapp.com/app/363/5211/icon-1636343248-61889dd0a0579.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Coherence X",
        "description": "Turn any website into a Chrome based app"
    },
    {
        "image": "https://imgix.setapp.com/app/458/4502/icon-1619948878-608e754e8de13.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Luminar",
        "description": "AI-powered photo editing toolkit"
    },
    {
        "image": "https://imgix.setapp.com/app/343/5334/icon-1638559770-61aa701ad7a67.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "MarsEdit",
        "description": "Create and publish your blog efficiently"
    },
    {
        "image": "https://imgix.setapp.com/app/345/4986/icon-1632262202-614a583a2f064.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Goldie App",
        "description": "Maintain golden ratio in your visuals"
    },
    {
        "image": "https://imgix.setapp.com/app/346/5358/icon-1639020834-61b179220f492.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Proxyman",
        "description": "View network requests from apps and domains"
    },
    {
        "image": "https://imgix.setapp.com/app/344/5313/icon-1638089603-61a34383699ee.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Movist Pro",
        "description": "Watch and adjust any media files to your liking"
    },
    {
        "image": "https://imgix.setapp.com/app/351/5088/icon-1634553311-616d4ddf2a93c.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Receipts",
        "description": "Automize your financial document management"
    },
    {
        "image": "https://imgix.setapp.com/app/350/3843/icon-1607874816-5fd639000196c.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Silenz",
        "description": "Take control of your sound surroundings"
    },
    {
        "image": "https://imgix.setapp.com/app/349/5274/icon-1637303751-619745c799993.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "One Switch",
        "description": "Control various macOS features with a click"
    },
    {
        "image": "https://imgix.setapp.com/app/424/5008/icon-1632477865-614da2a966ce2.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Moment",
        "description": "Create countdown events"
    },
    {
        "image": "https://imgix.setapp.com/app/355/4301/icon-1616149660-60547c9cf120a.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "PocketCAS",
        "description": "Solve math equations with numerous utilities"
    },
    {
        "image": "https://imgix.setapp.com/app/357/4706/icon-1625594746-60e49b7adf864.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Trickster",
        "description": "Access your recent files from the menu bar"
    },
    {
        "image": "https://imgix.setapp.com/app/362/4957/icon-1631643359-6140e6dfcf4d3.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Path Finder",
        "description": "Manage your files with tons of features"
    },
    {
        "image": "https://imgix.setapp.com/app/367/4900/icon-1630347624-612d2168bfdab.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Slidepad",
        "description": "Use slide over browser to improve your multitasking"
    },
    {
        "image": "https://imgix.setapp.com/app/371/5349/icon-1638913124-61afd4640d1ea.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Pulltube",
        "description": "Download, trim, convert online video or audio"
    },
    {
        "image": "https://imgix.setapp.com/app/372/4357/icon-1623072532-60be1f146c08f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Filepane",
        "description": "Manage your files using quick shortcuts to actions"
    },
    {
        "image": "https://imgix.setapp.com/app/374/2380/icon-1575904907-5dee668b94e66.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Ghostnote",
        "description": "Attach notes to any file, folder, app or website"
    },
    {
        "image": "https://imgix.setapp.com/app/375/2403/icon-1572656089-5dbcd3d997103.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Sketch Export for Xcode",
        "description": "Import colors from Sketch to Xcode"
    },
    {
        "image": "https://imgix.setapp.com/app/376/4505/icon-1620068867-60904a035048e.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Mission Control Plus",
        "description": "Manage windows in Mission Control"
    },
    {
        "image": "https://imgix.setapp.com/app/393/5095/icon-1634721388-616fde6c46880.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Batteries",
        "description": "Keep track of battery level for all of your devices"
    },
    {
        "image": "https://imgix.setapp.com/app/373/5305/icon-1637853142-619fa7d66dbeb.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Mockuuups Studio",
        "description": "Generate mockups to showcase your product"
    },
    {
        "image": "https://imgix.setapp.com/app/377/5142/icon-1635275668-61785394488ff.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "start",
        "description": "Organize and swiftly open your apps, docs or folders"
    },
    {
        "image": "https://imgix.setapp.com/app/379/2880/icon-1586340524-5e8da2ac271ed.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Mouseless",
        "description": "Master keyboard shortcuts"
    },
    {
        "image": "https://imgix.setapp.com/app/388/3321/icon-1597392937-5f36482910313.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Glyphfinder",
        "description": "Find any glyph in a second"
    },
    {
        "image": "https://imgix.setapp.com/app/381/4724/icon-1626116349-60ec90fdc27ec.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Backtrack",
        "description": "Record local audio from the past"
    },
    {
        "image": "https://imgix.setapp.com/app/476/4723/icon-1626115574-60ec8df662aa3.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Serenity",
        "description": "Mute notification sounds"
    },
    {
        "image": "https://imgix.setapp.com/app/475/5048/icon-1633636207-615f4f6fa37e7.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Yac",
        "description": "Asynchronous voice and video messenger"
    },
    {
        "image": "https://imgix.setapp.com/app/479/5020/icon-1632930393-61548a59c8554.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Ohtipi",
        "description": "One-time-password filler"
    },
    {
        "image": "https://imgix.setapp.com/app/486/5024/icon-1633020607-6155eabfed3b6.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Lift",
        "description": "Watch floating videos while you work"
    },
    {
        "image": "https://imgix.setapp.com/app/384/5248/icon-1637068826-6193b01ae8133.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "iBoysoft NTFS for Mac",
        "description": "Work with NTFS drives on Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/385/5281/icon-1637439856-61995970a114d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Gitfox",
        "description": "Powerful Git Client for Mac OS"
    },
    {
        "image": "https://imgix.setapp.com/app/387/2893/icon-1586533684-5e9095349d6bf.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Timeless",
        "description": "Customize clock ranges to reduce time stress"
    },
    {
        "image": "https://imgix.setapp.com/app/417/3632/icon-1605795350-5fb67e162ce6b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Petrify",
        "description": "Generate images from your code snippets"
    },
    {
        "image": "https://imgix.setapp.com/app/383/4108/icon-1612730973-6020525d6bb69.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Short Menu",
        "description": "Shorten your URLs"
    },
    {
        "image": "https://imgix.setapp.com/app/138/4152/icon-1613499296-602c0ba01290a.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Beamer",
        "description": "Stream directly to Apple TV and Chromecast"
    },
    {
        "image": "https://imgix.setapp.com/app/395/5138/icon-1635254493-617800dd328a0.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "SSH Config Editor",
        "description": "Manage your OpenSSH client configuration"
    },
    {
        "image": "https://imgix.setapp.com/app/390/4128/icon-1612958877-6023cc9dd59fc.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Vidrio",
        "description": "Use holographic screencasting"
    },
    {
        "image": "https://imgix.setapp.com/app/396/5273/icon-1637298746-6197323af01b1.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Default Folder X",
        "description": "Improve the Open and Save dialogs"
    },
    {
        "image": "https://imgix.setapp.com/app/466/4745/icon-1626526477-60f2d30d5e23b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "App Tamer",
        "description": "Spot and tame CPU-hogging apps"
    },
    {
        "image": "https://imgix.setapp.com/app/401/3969/icon-1610400765-5ffcc3fde2173.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Presentify",
        "description": "Give better presentations"
    },
    {
        "image": "https://imgix.setapp.com/app/394/3965/icon-1610318168-5ffb81580432f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "VirtualHostX",
        "description": "Build and test web apps"
    },
    {
        "image": "https://imgix.setapp.com/app/407/5316/icon-1638124714-61a3ccaa4bc79.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "XCOrganizer",
        "description": "Organize your Xcode projects"
    },
    {
        "image": "https://imgix.setapp.com/app/389/4743/icon-1626461347-60f1d4a3d613d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Meta",
        "description": "Manage your digital music collection"
    },
    {
        "image": "https://imgix.setapp.com/app/406/5216/icon-1636431577-6189f6d93d671.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "PliimPRO",
        "description": "Hide distractions during your presentation"
    },
    {
        "image": "https://imgix.setapp.com/app/408/5089/icon-1634652681-616ed209d703e.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Diagrams",
        "description": "Create diagrams for your projects"
    },
    {
        "image": "https://imgix.setapp.com/app/402/4775/icon-1627482395-6101691b16720.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Meeter",
        "description": "Instantly join any online meeting"
    },
    {
        "image": "https://imgix.setapp.com/app/404/3163/icon-1592945947-5ef26d1b392b4.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Webfont",
        "description": "Manage and collaborate on your icon collection"
    },
    {
        "image": "https://imgix.setapp.com/app/403/5149/icon-1635341373-6179543d4ad98.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Swish",
        "description": "Control apps and windows via trackpad"
    },
    {
        "image": "https://imgix.setapp.com/app/405/3656/icon-1605830401-5fb70701d188f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "24 Hour Wallpaper",
        "description": "Enjoy wallpapers that sync with time"
    },
    {
        "image": "https://imgix.setapp.com/app/437/3680/icon-1605756499-5fb5e65302d6b.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Magic Window Air",
        "description": "Aerial Screen Saver"
    },
    {
        "image": "https://imgix.setapp.com/app/420/5160/icon-1635455670-617b12b65ca3d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Grids",
        "description": "Enjoy Instagram on your Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/426/5311/icon-1637970885-61a173c53b614.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Asset Catalog Creator Pro",
        "description": "Turn images into sets of icons"
    },
    {
        "image": "https://imgix.setapp.com/app/431/4660/icon-1624171410-60cee39277f02.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "TextSniper",
        "description": "Extract text from anything"
    },
    {
        "image": "https://imgix.setapp.com/app/427/3815/icon-1607402148-5fcf02a4223dd.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Grapefruit",
        "description": "Your emotional health tracker"
    },
    {
        "image": "https://imgix.setapp.com/app/419/4979/icon-1632151524-6148a7e462520.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Flinto",
        "description": "Design interactive app prototypes"
    },
    {
        "image": "https://imgix.setapp.com/app/436/5289/icon-1637696825-619d453928e34.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Hustl",
        "description": "Showcase your work in a time lapse"
    },
    {
        "image": "https://imgix.setapp.com/app/445/5051/icon-1633684085-61600a750c89e.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "DevUtils",
        "description": "Developer utilities, offline and effortless"
    },
    {
        "image": "https://imgix.setapp.com/app/448/4102/icon-1612586584-601e1e58c62c2.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "QuickLens",
        "description": "Inspect and improve your UI"
    },
    {
        "image": "https://imgix.setapp.com/app/438/5171/icon-1635730513-617f44510d218.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Keysmith",
        "description": "Shortcuts for anything on Mac and the web"
    },
    {
        "image": "https://imgix.setapp.com/app/434/5340/icon-1639123613-61b30a9d3c11c.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Due",
        "description": "Never forget anything important"
    },
    {
        "image": "https://imgix.setapp.com/app/152/5224/icon-1636556585-618bdf29c24fa.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Dash",
        "description": "Search and access API documentation offline"
    },
    {
        "image": "https://imgix.setapp.com/app/451/5260/icon-1637187130-61957e3ae52f5.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Mimir",
        "description": "Native podcast app for MacOS"
    },
    {
        "image": "https://imgix.setapp.com/app/452/5346/icon-1638896016-61af919099598.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "HoudahSpot",
        "description": "Find any file with ease"
    },
    {
        "image": "https://imgix.setapp.com/app/450/4818/icon-1628427030-610fd31665713.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "MeetInOne",
        "description": "Native Google Meet app"
    },
    {
        "image": "https://imgix.setapp.com/app/459/5355/icon-1638976932-61b0cda4c4964.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "OpenIn",
        "description": "Choose a browser for every link"
    },
    {
        "image": "https://imgix.setapp.com/app/430/5134/icon-1638362404-61a76d2469a65.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Sizzy",
        "description": "Improve your development flow"
    },
    {
        "image": "https://imgix.setapp.com/app/467/4546/icon-1621450926-60a560aea143d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Buildwatch",
        "description": "Track your build time in Xcode"
    },
    {
        "image": "https://imgix.setapp.com/app/465/4472/icon-1619280031-6084409f1177e.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Paletro",
        "description": "Quick access to all features of the current app"
    },
    {
        "image": "https://imgix.setapp.com/app/469/4408/icon-1618232817-607445f1711ef.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Glyphs Mini",
        "description": "Create fonts, icon sets, and logos with this magic font creator for Mac"
    },
    {
        "image": "https://imgix.setapp.com/app/470/5084/icon-1634354548-616a45745cf98.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "StarUML",
        "description": "UML software modeling tool"
    },
    {
        "image": "https://imgix.setapp.com/app/478/5370/icon-1639141076-61b34ed4b6fc6.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Tape",
        "description": "Screen recorder for collaboration"
    },
    {
        "image": "https://imgix.setapp.com/app/485/5244/icon-1637055976-61937de83bb1a.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Auxl",
        "description": "Organise, test, and develop APIs."
    },
    {
        "image": "https://imgix.setapp.com/app/483/5377/icon-1639237478-61b4c7663154f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "AlDente Pro",
        "description": "Increase battery lifespan"
    },
    {
        "image": "https://imgix.setapp.com/app/487/5357/icon-1639004360-61b138c81f038.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Almighty",
        "description": "Extra utilities to better your Mac experience"
    },
    {
        "image": "https://imgix.setapp.com/app/489/5297/icon-1637754689-619e2741467e4.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "DisplayBuddy",
        "description": "Control your external monitors"
    },
    {
        "image": "https://imgix.setapp.com/app/488/5230/icon-1638368423-61a784a75504d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Tab Finder",
        "description": "Manage open tabs"
    },
    {
        "image": "https://imgix.setapp.com/app/482/5368/icon-1639094756-61b299e4e8d29.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "CoScreen",
        "description": "Screen sharing for remote teams"
    },
    {
        "image": "https://imgix.setapp.com/app/493/4998/icon-1633693300-61602e744c0d2.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Quit All",
        "description": "Quickly quit running apps from one spot"
    },
    {
        "image": "https://imgix.setapp.com/app/494/5339/icon-1638821930-61ae702aea127.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Mental Walk",
        "description": "Reflect on your life"
    },
    {
        "image": "https://imgix.setapp.com/app/492/5042/icon-1635810093-61807b2dc5fe4.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Flow",
        "description": "Design UX animation"
    },
    {
        "image": "https://imgix.setapp.com/app/496/5363/icon-1639044702-61b1d65e72bcb.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Pareto Security",
        "description": "Check security settings"
    },
    {
        "image": "https://imgix.setapp.com/app/502/5379/icon-1639256496-61b511b00572d.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "MonsterWriter",
        "description": "Write a paper, thesis, note, or blog post."
    },
    {
        "image": "https://imgix.setapp.com/app/499/5348/icon-1639148573-61b36c1d1bd0f.png?auto=format%2Ccompress&ixlib=php-3.3.1&q=75&w=80",
        "name": "Wunderbucket",
        "description": "Turn folders into websites"
    }
]