;
window.onload = function ()
{
	app.start();
};

/*
var options = {};
(location.href.split("?")[1] || "").split("&").map(function (t)
{
	return t.split("=")
}).forEach(function (t)
{
	options[t[0]] = decodeURIComponent(t[1])
}), chrome.storage.local.debug = options.debug;
var app = angular.module("TorrentStream", ["treeControl", "ngSanitize", "angucomplete-alt", "com.2fdevs.videogular", "com.2fdevs.videogular.plugins.controls"]);
app.factory("Promise", ["$q", function (t)
{
	return function (e)
	{
		var n = t.defer();
		return e(n.resolve, n.reject), n.promise
	}
}]), app.controller("Main", ["$sce", "$scope", "$interval", "$timeout", "Promise", function (t, e, n)
{
	function o(t)
	{
		function n(t)
		{
			this.name = t, this.children = []
		}

		function o(t, e)
		{
			if (!e.length)return t;
			for (var i in t.children)if (t.children[i].name == e[0])return o(t.children[i], e.slice(1));
			var r = new n(e[0]);
			return t.addChild(r), o(r, e.slice(1))
		}

		n.prototype.addChild = function (t)
		{
			this.children.push(t)
		};
		var i = new n("/");
		return t.forEach(function (t)
		{
			var n = t.path.split("/"), r = n.slice(0, n.length - 1), s = (n[n.length - 1], o(i, r));
			if (s.addChild(t), !e.input_file.length && e.is_video_file(t))
			{
				e.input_file = t;
				for (var l in r)e.expanded_nodes.push(o(i, r.slice(0, l)));
				e.expanded_nodes.push(s)
			}
		}), i
	}

	e.config = {
		sources: [],
		tracks: [],
		theme: {url: "../css/videogular.css"},
		plugins: {controls: {autoHide: !1, autoHideTime: 5e3}},
		autoPlay: !0
	}, e.subLanguages = [], e.torrent = null, e.magnet_url = options.url || myTorrent, e.tree = null, e.input_file = {}, e.onUpdateState = function ()
	{
	}, e.onUpdateTime = function ()
	{
		e.config.plugins.controls.autoHide || (e.config.plugins.controls.autoHide = !0)
	}, e.setSubLang = function (t)
	{
		e.options.subLang = t.originalObject.SubLanguageID, e.torrent_file && e.set_subtitles(e.torrent_file)
	}, e.$watch("options", function (t)
	{
		chrome.storage.local.set({options: t})
	}, !0), e.$watch("input_file", function (t)
	{
		e.is_video_file(t) && e.set_input_video_file(t)
	}), e.$watch("magnet_url", function (t)
	{
		t && e.open_url(t)
	}), e.toggle_settings_dialog = function ()
	{
		e.settings_dialog_visible = !e.settings_dialog_visible, e.settings_dialog_visible && $(".settings_dialog").off("keydown.ts").on("keydown.ts", function (t)
		{
			27 == t.keyCode && e.$apply(function ()
			{
				e.settings_dialog_visible = !1
			})
		}).focus()
	}, e.set_subtitles = function (n)
	{
		torrent.opensubs.get_opensubtitles(n, {lang: e.options.subLang}).then(function (o)
		{
			e.$apply(function ()
			{
				n.subtitles = o, console.log("subtitles", o && o.length || !1);
				var i = "http://localhost:" + e.torrent.httpPort + "/subtitles/" + n.index + "?lang=" + e.options.subLang;
				e.config.tracks = [{
					src: t.trustAsResourceUrl(i),
					kind: "subtitles",
					srclang: "en",
					label: "English",
					"default": ""
				}]
			})
		}, function ()
		{
			chrome.notifications.create("subtitles", {
				type: "basic",
				title: "Subtitles",
				iconUrl: "../images/icon64.png",
				message: "no subtitles found"
			}, function ()
			{
			})
		})
	}, e.set_input_video_file = function (n)
	{
		e.torrent_file = n;
		var o = "http://localhost:" + e.torrent.httpPort + "/" + n.index + "/" + n.name;
		console.log("video file selected", n, o), e.config.sources = [{
			src: t.trustAsResourceUrl(o),
			type: "video/mp4"
		}], e.set_subtitles(n)
	}, e.open_url = function (t)
	{
		return e.torrent ? void e.torrent.remove(function ()
		{
			e.torrent.destroy(function ()
			{
				console.log("destroyed"), e.torrent = null, e.open_url(t)
			})
		}) : (e.torrent = torrent.TorrentStream(t, {
			verify: !1,
			storage: torrent.MemoryStorage,
			connections: 50,
			uploads: 10,
			dht: !0,
			tracker: !0
		}), e.torrent.listen(6666), void e.torrent.on("ready", function ()
		{
			var t = torrent.HttpServer(e.torrent);
			console.log("torrent", e.torrent), t.listen(0, function ()
			{
				e.$apply(function ()
				{
					e.torrent.files.forEach(function (t, e)
					{
						t.index = e //conntect between original array and tree
					});
 					//duplicate and sort by path
					var n = e.torrent.files.slice().sort(function (t, e)
					{
						return t.path > e.path ? 1 : t.path == e.path ? 0 : -1
					});
					e.tree = o(n);
					var i = t.address();
					console.log("listening on", i), e.torrent.httpPort = i.port
				})
			})
		}))
	},
	e.selected_node = {},
	e.expanded_nodes = [],
	e.is_video_file = function (t)
	{
		//looks for a file which is atleast 10MB size.
		return t && t.length > 1e7
	}, e.tree_options = {dirSelectable: !1}, n(function ()
	{
	}, 1e3), torrent.opensubs.get_lang_ids().then(function (t)
	{
		e.subLanguages = t
	}), chrome.storage.local.get("options", function (t)
	{
		e.options = t.options || {subLang: "eng"}, e.magnet_url && e.open_url(e.magnet_url)
	}), console.log("started !")
}]);
*/