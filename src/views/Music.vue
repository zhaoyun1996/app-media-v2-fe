<template lang="">
    <div id="music-container"></div>
    <div id="music">
        <!-- <button @click="getChartHome">Get Chart Home</button> -->
        <!-- <button @click="getNewReleaseChart">Get New Release Chart</button> -->
        <div class="lyric-left" v-if="sentences && sentences.new">
            <div
                v-for="(item, index) in sentences.new"
                class="lyric-left-item"
                :key="idSongActived + index"
            >
                {{ item.dataSource }}
            </div>
        </div>
        <div class="player">
            <div class="dashboard">
                <div class="header" v-if="idSongActived">
                    <h2 id="title">{{ title }}</h2>
                </div>
                <div class="cd">
                    <div
                        class="cd-thumb"
                        :style="{ backgroundImage: 'url(' + thumbnailM + ')' }"
                    ></div>
                    <div class="playing-icon" v-if="isPlay"></div>
                </div>
                <div class="control">
                    <div
                        class="btn btn-repeat"
                        :class="{ active: isRepeat }"
                        @click="repeat"
                    >
                        <i class="fas fa-redo"></i>
                    </div>
                    <div class="btn btn-prev" @click="prevSong">
                        <i class="fas fa-step-backward"></i>
                    </div>
                    <div
                        class="btn btn-toggle-play"
                        v-if="isPlay"
                        @click="pause"
                    >
                        <i class="fas fa-pause icon-pause"></i>
                    </div>
                    <div class="btn btn-toggle-play" v-else-if="isLoading">
                        <i class="fas fa-spinner fa-spin"></i>
                    </div>
                    <div class="btn btn-toggle-play" v-else @click="play">
                        <i class="fas fa-play icon-play"></i>
                    </div>
                    <div class="btn btn-next" @click="nextSong">
                        <i class="fas fa-step-forward"></i>
                    </div>
                    <div
                        class="btn btn-random"
                        :class="{ active: isRandom }"
                        @click="random"
                    >
                        <i class="fas fa-random"></i>
                    </div>
                </div>

                <div class="time-progress">
                    <div class="current-time">{{ currentTime }}</div>
                    <div class="progress" @click="progressChange($event)">
                        <div class="progress-temp"></div>
                        <input
                            v-show="false"
                            id="progress"
                            type="range"
                            value="0"
                            step="1"
                            min="0"
                            max="100"
                        />
                    </div>
                    <div class="total-time">{{ totalTime }}</div>
                </div>

                <div class="lyric" v-html="lyric"></div>

                <audio id="music-control" controls v-show="false">
                    <source type="audio/mpeg" />
                </audio>
            </div>

            <div
                class="playlist"
                :style="lyric ? 'margin-top: 516px' : 'margin-top: 492px'"
            >
                <div
                    v-for="(item, index) in songs"
                    :key="index"
                    class="song"
                    :class="{ active: item.encodeId == idSongActived }"
                    :id="item.encodeId"
                    @click="selectSong"
                >
                    <div
                        class="thumb"
                        :style="{
                            backgroundImage: 'url(' + item.thumbnail + ')',
                        }"
                    ></div>
                    <div class="body">
                        <h3 class="title">{{ item.title }}</h3>
                        <p class="author">{{ item.artistsNames }}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="lyric-right" v-if="singer">
            <div class="lyric-right-item">
                <span>Tên thật: </span>
                <span>{{ singer.realname }}</span>
            </div>
            <div class="lyric-right-item">
                <span>Nghệ danh: </span>
                <span>{{ singer.name }}</span>
            </div>
            <div class="lyric-right-item">
                <span>Quốc gia: </span>
                <span>{{ singer.national }}</span>
            </div>
            <div class="lyric-right-item">
                <span>Tiểu sử: </span>
                <span v-html="singer.biography"></span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "Music",

    data() {
        return {
            songs: [],
            idSongActived: "",
            title: "",
            thumbnailM: "",
            isPlay: false,
            musicControl: null,
            cdThumbAnimate: null,
            isRepeat: false,
            isRandom: false,
            currentTime: "00:00",
            totalTime: "00:00",
            sentences: {
                old: [],
                new: [],
            },
            lyric: "",
            timeStart: 0,
            word: "",
            rowLyric: -1,
            singer: null,
            isLoading: false,
        };
    },

    methods: {
        /**
         * Thực hiện lấy bài hát
         * Get Song
         */
        async getSong(id) {
            const me = this;

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getSong?id=${id}`,
            });

            me.musicControl.src = res.data.data[128];
        },

        /**
         * TODO: Thực hiện lấy chi tiết các danh sách
         * Get Detail Playlist
         */
        async getDetailPlaylist() {
            let id = "ZWZB969E";

            let res = await axios({
                method: "GET",
                url: `${
                    import.meta.env.VITE_API_URL
                }/getDetailPlaylist?id=${id}`,
            });

            console.log(res);
        },

        /**
         * TODO: Thực hiện lấy bài hát ở trang chủ
         * Get Home
         */
        async getHome() {
            let id = "1";

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getHome?id=${id}`,
            });

            console.log(res);
        },

        /**
         * TODO: Thực hiện lấy top 100
         * Get Top 100
         */
        async getTop100() {
            const me = this;

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getTop100`,
            });

            if (res && res.data && res.data.msg == "Success" && res.data.data) {
                me.songs = res.data.data.songs;
            }

            console.log(res);
        },

        /**
         * Thực hiện lấy bảng xếp hạng
         * Get Chart Home
         */
        async getChartHome() {
            const me = this;

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getChartHome`,
            });

            if (res && res.data && res.data.msg == "Success" && res.data.data) {
                me.songs = res.data.data.RTChart.items;

                if (me.songs.length > 0) {
                    me.idSongActived = me.songs[0].encodeId;
                    me.selectSong();
                }
            }
        },

        /**
         * Thực hiện lấy bảng xếp hạng mới nhất
         * Get New Release Chart
         */
        async getNewReleaseChart() {
            const me = this;

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getNewReleaseChart`,
            });

            if (res && res.data && res.data.msg == "Success" && res.data.data) {
                me.songs = res.data.data.items;

                if (me.songs.length > 0) {
                    me.idSongActived = me.songs[0].encodeId;
                    me.selectSong();
                }
            }
        },

        /**
         * TODO: Thực hiện lấy thông tin bài hát
         * Get Song Info
         */
        async getInfoSong() {
            const me = this;

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getInfoSong?id=${
                    me.idSongActived
                }`,
            });
            // music = document.getElementById("music");

            console.log(res);
        },

        /**
         * TODO: Thực hiện lấy thông tin ca sĩ
         * Get Artist
         */
        async getArtist(id) {
            const me = this;

            var song = me.songs.find((item) => item.encodeId == id);

            if (song) {
                let res = await axios({
                    method: "GET",
                    url: `${
                        import.meta.env.VITE_API_URL
                    }/getArtist?artistsNames=${song.artistsNames}`,
                });

                if (
                    res &&
                    res.data &&
                    res.data.msg == "Success" &&
                    res.data.data
                ) {
                    me.singer = res.data.data;
                }
            }
        },

        /**
         * Thực hiện lấy lời bài hát
         * Get Lyric Song
         */
        async getLyric(id) {
            const me = this;

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getLyric?id=${id}`,
            });

            if (res && res.data && res.data.msg == "Success" && res.data.data) {
                me.sentences.old = res.data.data.sentences;
                me.sentences.new = [];
                me.lyric = "";
                me.rowLyric = -1;

                if (Array.isArray(me.sentences.old)) {
                    me.sentences.old.forEach((item) => {
                        me.sentences.new.push({
                            startTime: item.words[0].startTime,
                            endTime: item.words[item.words.length - 1].endTime,
                            data: item.words
                                .map(
                                    (x, index) =>
                                        `<span id="word-${index}">${x.data}</span>`
                                )
                                .join(" "),
                            dataSource: item.words.map((x) => x.data).join(" "),
                        });
                    });
                }

                // Khi chọn bài mới thì scroll lời bên trái lên đầu
                me.$nextTick(() => {
                    let lyricLeftItem =
                        document.getElementsByClassName("lyric-left-item");

                    if (lyricLeftItem && lyricLeftItem.length > 0) {
                        lyricLeftItem[0].scrollIntoView();
                    }
                });
            }
        },

        /**
         * Thực hiện tìm kiếm bài hát
         * Search Song
         */
        async search(searchValue) {
            const me = this;

            let res = await axios({
                method: "GET",
                url: `${
                    import.meta.env.VITE_API_URL
                }/search?searchValue=${searchValue}`,
            });

            if (res && res.data && res.data.msg == "Success" && res.data.data) {
                me.songs = res.data.data.songs;

                if (me.songs.length > 0) {
                    me.idSongActived = me.songs[0].encodeId;
                    me.selectSong();
                }
            }
        },

        /**
         * TODO: Thực hiện lấy danh sách MV
         * Get List MV
         */
        async getListMV() {
            // const me = this;

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getListMV`,
            });
            // music = document.getElementById("music");

            console.log(res);
        },

        /**
         * TODO: Thực hiện lấy danh mục MV
         * Get Category MV
         */
        async getCategoryMV() {
            // const me = this;

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getCategoryMV`,
            });
            // music = document.getElementById("music");

            console.log(res);
        },

        /**
         * TODO: Thực hiện lấy video MV
         * Get Video MV
         */
        async getVideo() {
            // const me = this;

            let res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_URL}/getVideo`,
            });
            // music = document.getElementById("music");

            console.log(res);
        },

        /**
         * Lắng nghe sự kiện
         */
        listenEvent() {
            const me = this,
                progress = document.getElementById("progress");

            let songInterval;

            // Khi nhạc đang phát
            me.musicControl.onplay = () => {
                songInterval = setInterval(() => {
                    me.currentTime = me.convertTime(
                        parseInt(me.musicControl.currentTime, 10)
                    );

                    me.runLyric();
                }, 100);
            };

            // Khi nhạc dừng lại
            me.musicControl.onpause = () => {
                clearInterval(songInterval);
            };

            // Khi hết bài
            me.musicControl.onended = () => {
                // Random bài hát
                if (me.isRandom) {
                    me.randomSong();
                }
                // Lặp lại bài hát
                else if (me.isRepeat) {
                    me.selectSong();
                }
                // Chuyển sang bài kế tiếp
                else {
                    me.nextSong();
                }

                // TODO: Làm phần tự động scroll bài đang active
            };

            // Khi tiến độ bài hát thay đổi
            // When the song progress changes
            me.musicControl.ontimeupdate = () => {
                if (me.musicControl.duration) {
                    const progressPercent = (
                        (me.musicControl.currentTime /
                            me.musicControl.duration) *
                        100
                    ).toFixed(2);
                    progress.value = progressPercent;

                    // Lấy width của thanh progress thật
                    if (
                        document.getElementsByClassName("progress") &&
                        document.getElementsByClassName("progress").length > 0
                    ) {
                        let widthProgress = document
                            .getElementsByClassName("progress")[0]
                            .getBoundingClientRect().width;

                        // Tính toán lại width của thanh progress tạm thời
                        document.getElementsByClassName(
                            "progress-temp"
                        )[0].style.width = `${
                            (widthProgress * progressPercent) / 100
                        }px`;
                    }
                }
            };
        },

        /**
         * Chọn bài hát
         */
        async selectSong(e) {
            const me = this;

            me.mask();

            // Nếu là người dùng tự chọn bài
            if (e) {
                // Nếu chọn khác bài đang phát thì chuyển bài
                if (me.idSongActived != e.currentTarget.getAttribute("id")) {
                    me.idSongActived = e.currentTarget.getAttribute("id");
                }
                // Ngược lại thì không làm gì cả
                else {
                    return;
                }
            }

            me.setSong(me.idSongActived);

            await me.getSong(me.idSongActived);

            me.getLyric(me.idSongActived);

            me.scrollToActiveSong();

            me.play();

            me.unmask();
        },

        /**
         * Bài hát liền sau
         */
        nextSong() {
            const me = this;

            if (!me.isLoading) {
                var indexSong = me.songs.findIndex(
                    (item) => item.encodeId == me.idSongActived
                );

                if (indexSong > -1) {
                    var indexSongNew =
                        indexSong + 1 == me.songs.length ? 0 : indexSong + 1;

                    me.idSongActived = me.songs[indexSongNew].encodeId;
                    me.title = me.songs[indexSongNew].title;
                    me.thumbnailM = me.songs[indexSongNew].thumbnailM;
                    me.totalTime = me.convertTime(
                        me.songs[indexSongNew].duration
                    );
                }

                me.selectSong();
            }
        },

        /**
         * Bài hát liền trước
         */
        prevSong() {
            const me = this;

            if (!me.isLoading) {
                var indexSong = me.songs.findIndex(
                    (item) => item.encodeId == me.idSongActived
                );

                if (indexSong > -1) {
                    var indexSongNew =
                        indexSong - 1 < 0 ? me.songs.length - 1 : indexSong - 1;

                    me.idSongActived = me.songs[indexSongNew].encodeId;
                    me.title = me.songs[indexSongNew].title;
                    me.thumbnailM = me.songs[indexSongNew].thumbnailM;
                    me.totalTime = me.convertTime(
                        me.songs[indexSongNew].duration
                    );
                }

                me.selectSong();
            }
        },

        /**
         * Bài hát ngẫu nhiên
         */
        randomSong() {
            const me = this;

            for (let i = 0; ; i++) {
                let indexSong = Math.floor(Math.random() * me.songs.length);

                if (me.idSongActived != me.songs[indexSong].encodeId) {
                    me.idSongActived = me.songs[indexSong].encodeId;
                    me.title = me.songs[indexSong].title;
                    me.thumbnailM = me.songs[indexSong].thumbnailM;
                    me.totalTime = me.convertTime(me.songs[indexSong].duration);
                    break;
                }
            }

            me.selectSong();
        },

        /**
         * Gán bài hát để chuẩn bị phát
         */
        setSong(id) {
            const me = this;

            var song = me.songs.find((item) => item.encodeId == id);

            if (song) {
                me.title = song.title;
                me.thumbnailM = song.thumbnailM;
                me.totalTime = me.convertTime(song.duration);
            }
        },

        /**
         * Phát nhạc
         */
        async play() {
            const me = this;

            me.isPlay = true;

            me.cdThumbAnimate.play();

            me.musicControl.play();
        },

        /**
         * Dừng nhạc
         */
        async pause() {
            const me = this;

            me.isPlay = false;

            me.cdThumbAnimate.pause();

            me.musicControl.pause();
        },

        /**
         * Khi chọn lặp lại bài hát
         */
        repeat() {
            const me = this;

            if (!me.isLoading) {
                me.isRandom = false;
                me.isRepeat = !me.isRepeat;
            }
        },

        /**
         * Khi chọn ngẫu nhiên bài hát
         */
        random() {
            const me = this;

            if (!me.isLoading) {
                me.isRandom = !me.isRandom;
                me.isRepeat = false;
            }
        },

        /**
         * Chuyển đổi thời gian từ giây sang phút và giây
         */
        convertTime(time) {
            let sec = time % 60,
                min = (time - sec) / 60;

            if (min < 10 && sec < 10) {
                return `0${min}:0${sec}`;
            } else if (min >= 10 && sec < 10) {
                return `${min}:0${sec}`;
            } else if (min < 10 && sec >= 10) {
                return `0${min}:${sec}`;
            } else {
                return `${min}:${sec}`;
            }
        },

        /**
         * Di chuyển đến bài đang phát
         */
        scrollToActiveSong() {
            setTimeout(() => {
                document
                    .getElementsByClassName("playlist")[0]
                    .getElementsByClassName("song active")[0]
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            }, 300);
        },

        /**
         * Chạy lời bài hát
         */
        runLyric() {
            const me = this;

            if (Array.isArray(me.sentences.old)) {
                // Xử lý lời ở cd
                for (
                    let i = me.rowLyric + 1;
                    i < me.sentences.new.length;
                    i++
                ) {
                    let sentence = me.sentences.new[i];
                    let timeLyric = me.musicControl.currentTime * 1000;
                    if (
                        timeLyric >= sentence.startTime &&
                        timeLyric <= sentence.endTime
                    ) {
                        me.lyric = sentence.data;
                        if (i != me.rowLyric) {
                            me.runLyricLeft(i);
                        }
                        me.rowLyric = i;
                        break;
                    }
                }

                // Xử lý từng chữ trong lời bài hát
                let sentence = me.sentences.old[me.rowLyric];
                if (sentence && Array.isArray(sentence.words)) {
                    for (let y = 0; y < sentence.words.length; y++) {
                        let timeLyric = me.musicControl.currentTime * 1000;
                        let word = sentence.words[y];

                        // Sửa lại style
                        let text = document.getElementById(`word-${y}`);
                        if (text && timeLyric >= word.startTime) {
                            text.style.color = "red";
                        }

                        if (
                            timeLyric >= word.startTime &&
                            timeLyric <= word.endTime
                        ) {
                            me.word = word.data;
                            return;
                        }
                    }
                }
            }
        },

        /**
         * Chạy lời bài hát bên trái
         */
        runLyricLeft(rowIndex) {
            const me = this;

            let lyricLeftItem =
                document.getElementsByClassName("lyric-left-item");

            if (lyricLeftItem && lyricLeftItem.length > 0) {
                let lyricLeftItemActive = document.getElementsByClassName(
                    "lyric-left-item row-active"
                );

                if (lyricLeftItemActive && lyricLeftItemActive.length > 0) {
                    lyricLeftItemActive[0].classList.add("is-over");
                    lyricLeftItemActive[0].classList.remove("row-active");
                }

                lyricLeftItem[rowIndex ?? me.rowLyric].classList.add(
                    "row-active"
                );
                lyricLeftItem[rowIndex ?? me.rowLyric].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        },

        /**
         * Sự kiện khi tua bài hát
         */
        progressChange(event) {
            const me = this;

            // Nếu có bài hát thì mới cho tua
            if (!Number.isNaN(me.musicControl.duration)) {
                let widthProgressTemp =
                        event.pageX - event.target.getBoundingClientRect().x,
                    widthProgress = event.target.getBoundingClientRect().width;

                // Tính toán lại width của thanh progress tạm thời
                document.getElementsByClassName(
                    "progress-temp"
                )[0].style.width = `${widthProgressTemp}px`;

                // Thay đổi tiến độ thực của bài hát
                me.musicControl.currentTime =
                    (me.musicControl.duration / widthProgress) *
                    widthProgressTemp;
            }
        },

        /**
         * Hiển thị loading
         */
        mask() {
            const me = this;

            me.isPlay = false;
            me.isLoading = true;
        },

        /**
         * Ẩn loading
         */
        unmask() {
            const me = this;

            me.isPlay = true;
            me.isLoading = false;
        },
    },

    mounted() {
        const me = this;

        // Bắt sự kiện search nhạc từ ô tìm kiếm
        this.emitter.on("search", (searchValue) => {
            me.search(searchValue);
        });

        // Lấy control music để xử lý
        me.musicControl = document.getElementById("music-control");

        // Xử lý CD quay / dừng
        // Handle CD spins / stops
        me.cdThumbAnimate = document
            .getElementsByClassName("cd-thumb")[0]
            .animate([{ transform: "rotate(360deg)" }], {
                duration: 10000, // 10 seconds
                iterations: Infinity,
            });
        me.cdThumbAnimate.pause();

        // Lắng nghe các event của control music
        me.listenEvent();
    },
};
</script>
<style lang="css" scoped>
#music {
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    color: #18191a;
}

.player {
    position: relative;
    max-width: 480px;
    margin: 0 auto;
}

/* DASHBOARD */
.dashboard {
    padding: 16px 16px 14px;
    background-color: #fff;
    top: 120px;
    width: 100%;
    max-width: 448px;
    border-bottom: 1px solid #ebebeb;
    position: fixed;
    border-radius: 5px;
}

.dashboard .header {
    text-align: center;
}

.dashboard .header h2 {
    margin-bottom: 10px;
    font-size: 20px;
}

.dashboard .cd {
    display: flex;
    margin: auto;
    width: 200px;
    position: relative;
}

.dashboard .cd .cd-thumb {
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    background-color: #333;
    background-size: cover;
    margin: auto;
}

.playing-icon {
    position: absolute;
    top: calc(50% - 12px);
    left: calc(50% - 12px);
    height: 24px;
    width: 24px;
    background-size: cover;
    background-image: url("https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif");
}

/* CONTROL */
.control {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 18px 0 8px 0;
}

.control .btn {
    color: #666;
    padding: 18px;
    font-size: 18px;
}

.control .btn.active {
    color: #ec1f55;
}

.control .btn-toggle-play {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    font-size: 24px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ec1f55;
}

.time-progress {
    display: flex;
    font-size: 14px;
    align-items: center;
}

.progress {
    width: 100%;
    -webkit-appearance: none;
    height: 6px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

.progress::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 6px;
    background-color: #ec1f55;
    cursor: pointer;
}

.current-time {
    margin-right: 5px;
    line-height: 100%;
}

.total-time {
    margin-left: 5px;
    line-height: 100%;
}

.progress-temp {
    width: 0px;
    height: 100%;
    background-color: pink;
}

/* PLAYLIST */
.playlist {
    padding: 12px;
}

.song {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    background-color: #fff;
    padding: 8px 16px;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.song.active {
    background-color: #ec1f55;
}

.song:active {
    opacity: 0.8;
}

.song.active .option,
.song.active .author,
.song.active .title {
    color: #fff;
}

.song .thumb {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-size: cover;
    margin: 0 8px;
}

.song .body {
    flex: 1;
    padding: 0 16px;
}

.song .title {
    font-size: 18px;
    color: #333;
}

.song .author {
    font-size: 12px;
    color: #999;
}

.song .option {
    padding: 16px 8px;
    color: #999;
    font-size: 18px;
}

.lyric {
    margin-top: 10px;
    text-align: center;
}

/* LYRIC LEFT */
.lyric-left {
    position: fixed;
    top: 120px;
    height: 420px;
    overflow: auto;
    -webkit-mask-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0),
        hsla(0, 0%, 100%, 0.8) 10%,
        #fff 25%,
        #fff 75%,
        hsla(0, 0%, 100%, 0.8) 90%,
        hsla(0, 0%, 100%, 0)
    );
    width: calc((85% - 520px) / 2);
}

.lyric-left-item {
    padding: 10px 0;
    letter-spacing: -1px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    font-size: 20px;
}

.row-active {
    color: #ffed00;
}

.is-over {
    color: hsla(0, 0%, 100%, 0.5);
}

/* LYRIC RIGHT */
.lyric-right {
    position: fixed;
    top: 120px;
    right: 0;
    height: 420px;
    overflow: auto;
    width: calc((85% - 520px) / 2);
    padding: 0 10px;
}

.lyric-right-item {
    padding: 10px 0;
    letter-spacing: -1px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    font-size: 20px;
}
</style>
