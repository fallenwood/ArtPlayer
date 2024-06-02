// npm i artplayer-plugin-chapter
// import artplayerPluginChapter from 'artplayer-plugin-chapter';

var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    autoSize: true,
	fullscreen: true,
	fullscreenWeb: true,
    plugins: [
        artplayerPluginChapter({
            chapters: [
                { start: 0, end: 18, title: 'One more chance' },
                { start: 18, end: 36, title: '谁でもいいはずなのに' },
                { start: 36, end: 54, title: '夏の想い出がまわる' },
                { start: 54, end: 72, title: 'こんなとこにあるはずもないのに' },
                { start: 72, end: 90, title: '终わり' },
            ]
        }),
    ],
});