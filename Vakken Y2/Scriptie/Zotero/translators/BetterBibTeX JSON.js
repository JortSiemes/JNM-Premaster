{
	"translatorID": "36a3b0b5-bad0-4a04-b79b-441c7cef77db",
	"label": "BetterBibTeX JSON",
	"description": "exports and imports items in BetterBibTeX debug format. Mostly for BBT-internal use",
	"creator": "Emiliano Heyns",
	"target": "json",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"configOptions": {
		"async": true,
		"getCollections": true,
		"cached": true,
		"hash": "9512362ed56135f1b2c6588042d06c782f5b1c58d21bfdee0abe0909261b1e6c"
	},
	"displayOptions": {
		"exportNotes": true,
		"exportFileData": false,
		"Items": true,
		"Preferences": true,
		"keepUpdated": false,
		"worker": true,
		"Normalize": false
	},
	"translatorType": 3,
	"browserSupport": "gcsv",
	"priority": 49,
	"inRepository": false,
	"lastUpdated": "2025-01-10"
}

ZOTERO_CONFIG = {"GUID":"zotero@zotero.org","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/","PLUGINS_URL":"https://www.zotero.org/support/plugins","NEW_FEATURES_URL":"https://www.zotero.org/blog/zotero-7/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"36a3b0b5-bad0-4a04-b79b-441c7cef77db","label":"BetterBibTeX JSON","description":"exports and imports items in BetterBibTeX debug format. Mostly for BBT-internal use","creator":"Emiliano Heyns","target":"json","minVersion":"4.0.27","maxVersion":"","configOptions":{"async":true,"getCollections":true,"cached":true},"displayOptions":{"exportNotes":true,"exportFileData":false,"Items":true,"Preferences":true,"keepUpdated":false,"worker":true,"Normalize":false},"translatorType":3,"browserSupport":"gcsv","priority":49,"inRepository":false}); // assign new data
      
var { detectImport, doExport, doImport } = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // translators/BetterBibTeX JSON.ts
  var BetterBibTeX_JSON_exports = {};
  __export(BetterBibTeX_JSON_exports, {
    detectImport: () => detectImport,
    doExport: () => doExport,
    doImport: () => doImport
  });

  // gen/translators.ts
  var displayOptions = [
    "Authors",
    "Items",
    "Normalize",
    "Preferences",
    "Title",
    "Year",
    "biblatexAPA",
    "biblatexChicago",
    "cache",
    "custom",
    "dropAttachments",
    "exportDir",
    "exportFileData",
    "exportNotes",
    "exportPath",
    "keepUpdated",
    "markdown",
    "quickCopyMode",
    "useJournalAbbreviation",
    "worker"
  ];
  var headers = [
    {
      "translatorID": "f895aa0d-f28e-47fe-b247-2ea77c6ed583",
      "translatorType": 2,
      "label": "Better BibLaTeX",
      "description": "exports items in BibLaTeX format",
      "creator": "Simon Kornblith, Richard Karnesky, Anders Johansson and Emiliano Heyns",
      "target": "bib",
      "minVersion": "4.0.27",
      "maxVersion": "",
      "browserSupport": "gcsv",
      "configOptions": {
        "getCollections": true,
        "cached": true
      },
      "displayOptions": {
        "exportNotes": false,
        "exportFileData": false,
        "useJournalAbbreviation": false,
        "biblatexAPA": false,
        "biblatexChicago": false,
        "keepUpdated": false,
        "worker": true
      },
      "priority": 50,
      "inRepository": false
    },
    {
      "translatorID": "a515a220-6fef-45ea-9842-8025dfebcc8f",
      "label": "Better BibTeX Citation Key Quick Copy",
      "description": "exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents",
      "creator": "Emiliano heyns",
      "target": "txt",
      "minVersion": "4.0.27",
      "maxVersion": "",
      "translatorType": 2,
      "browserSupport": "gcsv",
      "priority": 100,
      "displayOptions": {
        "quickCopyMode": ""
      },
      "inRepository": false
    },
    {
      "translatorID": "ca65189f-8815-4afe-8c8b-8c7c15f0edca",
      "label": "Better BibTeX",
      "description": "exports items in BibTeX format",
      "creator": "Simon Kornblith, Richard Karnesky and Emiliano heyns",
      "target": "bib",
      "minVersion": "4.0.27",
      "maxVersion": "",
      "configOptions": {
        "async": true,
        "getCollections": true,
        "cached": true
      },
      "displayOptions": {
        "exportNotes": false,
        "exportFileData": false,
        "useJournalAbbreviation": false,
        "keepUpdated": false,
        "worker": true
      },
      "translatorType": 3,
      "browserSupport": "gcsv",
      "priority": 199,
      "inRepository": false
    },
    {
      "translatorID": "f4b52ab0-f878-4556-85a0-c7aeedd09dfc",
      "label": "Better CSL JSON",
      "description": "exports items in pandoc-compatible CSL-JSON format, with added citation keys and parsing of metadata",
      "creator": "Emiliano heyns",
      "target": "json",
      "minVersion": "4.0.27",
      "maxVersion": "",
      "displayOptions": {
        "keepUpdated": false,
        "worker": true
      },
      "configOptions": {
        "getCollections": true,
        "cached": true
      },
      "translatorType": 2,
      "browserSupport": "gcsv",
      "inRepository": false,
      "priority": 100
    },
    {
      "translatorID": "0f238e69-043e-4882-93bf-342de007de19",
      "label": "Better CSL YAML",
      "description": "exports items in pandoc-compatible CSL-YAML format, with added citation keys and parsing of metadata",
      "creator": "Emiliano heyns",
      "target": "yaml",
      "minVersion": "4.0.27",
      "maxVersion": "",
      "displayOptions": {
        "keepUpdated": false,
        "worker": true
      },
      "configOptions": {
        "getCollections": true,
        "cached": true
      },
      "translatorType": 3,
      "browserSupport": "gcsv",
      "priority": 800,
      "inRepository": false
    },
    {
      "translatorID": "36a3b0b5-bad0-4a04-b79b-441c7cef77db",
      "label": "BetterBibTeX JSON",
      "description": "exports and imports items in BetterBibTeX debug format. Mostly for BBT-internal use",
      "creator": "Emiliano Heyns",
      "target": "json",
      "minVersion": "4.0.27",
      "maxVersion": "",
      "configOptions": {
        "async": true,
        "getCollections": true,
        "cached": true
      },
      "displayOptions": {
        "exportNotes": true,
        "exportFileData": false,
        "Items": true,
        "Preferences": true,
        "keepUpdated": false,
        "worker": true,
        "Normalize": false
      },
      "translatorType": 3,
      "browserSupport": "gcsv",
      "priority": 49,
      "inRepository": false
    },
    {
      "translatorID": "19afa3fd-1c7f-4eb8-a37e-8d07768493e8",
      "label": "Citation graph",
      "description": "exports a citation graph in graphml format. Use gephi or yEd to clean up and visualize",
      "creator": "Emiliano heyns",
      "target": "dot",
      "minVersion": "4.0.27",
      "maxVersion": "",
      "translatorType": 2,
      "browserSupport": "gcsv",
      "inRepository": false,
      "displayOptions": {
        "Title": false,
        "Authors": false,
        "Year": false
      },
      "configOptions": {
        "getCollections": true
      },
      "priority": 100
    },
    {
      "translatorID": "e7859c61-54d4-466a-b236-aadcf1f7e83b",
      "label": "Collected notes",
      "description": "exports your notes",
      "creator": "Emiliano heyns",
      "target": "html",
      "displayOptions": {
        "markdown": false
      },
      "minVersion": "4.0.27",
      "maxVersion": "",
      "translatorType": 2,
      "browserSupport": "gcsv",
      "inRepository": false,
      "configOptions": {
        "getCollections": true
      },
      "priority": 100
    }
  ];
  var byId = {};
  var byLabel = {};
  var bySlug = {};
  for (const header of headers) {
    byId[header.translatorID] = byLabel[header.label] = bySlug[header.label.replace(/ /g, "")] = header;
  }

  // gen/preferences/meta.ts
  var defaults = {
    ascii: "",
    asciiBibLaTeX: false,
    asciiBibTeX: true,
    autoAbbrev: false,
    autoExport: "immediate",
    autoExportDelay: 5,
    autoExportIdleWait: 10,
    autoExportPathReplaceDiacritics: false,
    autoExportPathReplaceDirSep: "-",
    autoExportPathReplaceSpace: " ",
    automaticTags: true,
    autoPinDelay: 0,
    auxImport: false,
    baseAttachmentPath: "",
    biblatexExtendedDateFormat: true,
    biblatexExtendedNameFormat: true,
    biblatexExtractEprint: true,
    bibtexEditionOrdinal: false,
    bibtexParticleNoOp: false,
    bibtexURL: "off",
    cache: true,
    cacheDelete: false,
    cacheRetain: false,
    charmap: "",
    citeCommand: "cite",
    citekeyCaseInsensitive: true,
    citekeyFold: true,
    citekeyFormat: "auth.lower + shorttitle(3,3) + year",
    citekeyFormatEditing: "",
    citekeySearch: true,
    citekeyUnsafeChars: `\\"#%'(),={}~`,
    csquotes: "",
    DOIandURL: "both",
    exportBibTeXStrings: "off",
    exportBraceProtection: true,
    exportSort: "citekey",
    exportTitleCase: true,
    extraMergeCitekeys: false,
    extraMergeCSL: false,
    extraMergeTeX: false,
    git: "config",
    import: true,
    importBibTeXStrings: true,
    importCaseProtection: "as-needed",
    importCitationKey: true,
    importDetectURLs: true,
    importExtra: true,
    importJabRefAbbreviations: true,
    importJabRefStrings: true,
    importNoteToExtra: "",
    importSentenceCase: "on+guess",
    importSentenceCaseQuoted: true,
    importUnknownTexCommand: "ignore",
    itemObserverDelay: 5,
    jabrefFormat: 0,
    jieba: false,
    keyConflictPolicy: "keep",
    keyScope: "library",
    kuroshiro: false,
    language: "langid",
    logEvents: true,
    mapMath: "",
    mapText: "",
    packages: "",
    parseParticles: true,
    patchDates: "dateadded=dateAdded, date-added=dateAdded, datemodified=dateModified, date-modified=dateModified",
    platform: "",
    postscript: "",
    postscriptOverride: "",
    preferencesOverride: "",
    qualityReport: false,
    quickCopyEta: "",
    quickCopyMode: "latex",
    quickCopyOrgMode: "zotero",
    quickCopyPandocBrackets: false,
    quickCopySelectLink: "zotero",
    rawImports: false,
    rawLaTag: "#LaTeX",
    relativeFilePaths: false,
    scrubDatabase: false,
    separatorList: "and",
    separatorNames: "and",
    skipFields: "",
    skipWords: "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum",
    startupProgress: "popup",
    strings: "",
    stringsOverride: "",
    testing: false,
    verbatimFields: "url,doi,file,pdf,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/, keywords",
    warnBulkModify: 10,
    warnTitleCased: false
  };

  // translators/lib/collect.ts
  var Items = class {
    constructor() {
      this.items = [];
      this.map = {};
      let item;
      while (item = Zotero.nextItem()) {
        this.items.push(this.map[item.itemID] = this.map[item.itemKey] = item);
      }
    }
    sortkey(item) {
      return `${item.citationKey || ""}	${item.dateAdded || ""}`;
    }
    sort(sort) {
      switch (sort) {
        case "id":
          this.items.sort((a, b) => (a.dateAdded || "").localeCompare(b.dateAdded || ""));
          break;
        case "citekey":
          this.items.sort((a, b) => this.sortkey(a).localeCompare(this.sortkey(b)));
          break;
      }
    }
    erase() {
      this.items = [];
      this.map = {};
      this.current = null;
    }
    cacheable(cacheable) {
      for (const item of this.items) {
        item.$cacheable = cacheable;
      }
    }
    *[Symbol.iterator]() {
      for (const item of this.items) {
        yield item;
      }
    }
    get regular() {
      return this._regular();
    }
    *_regular() {
      for (const item of this.items) {
        switch (item.itemType) {
          case "annotation":
          case "note":
          case "attachment":
            break;
          default:
            yield this.current = item;
        }
      }
    }
  };
  var Collections = class {
    constructor(items) {
      this.items = items;
      this.byKey = {};
      let collection;
      while (collection = Zotero.nextCollection()) {
        this.registerCollection(collection, "");
      }
    }
    erase() {
      this.byKey = {};
    }
    registerCollection(collection, parent) {
      const key = (collection.primary ? collection.primary : collection).key;
      if (this.byKey[key]) return;
      this.byKey[key] = {
        key,
        parent,
        name: collection.name,
        collections: [],
        items: []
      };
      for (const child of collection.descendents || collection.children) {
        switch (child.type) {
          case "collection":
            this.byKey[key].collections.push(child.key);
            this.registerCollection(child, key);
            break;
          case "item":
            this.byKey[key].items.push(child.id);
            break;
        }
      }
    }
    get collectionTree() {
      return Object.values(this.byKey).filter((coll) => !coll.parent).map((coll) => this.nestedCollection(coll));
    }
    nestedCollection(collection) {
      const nested = {
        key: collection.key,
        name: collection.name,
        items: collection.items.map((itemID) => this.items.map[itemID]).filter((item) => item),
        collections: collection.collections.map((key) => this.nestedCollection(this.byKey[key])).filter((coll) => coll)
      };
      for (const coll of nested.collections) {
        coll.parent = nested;
      }
      return nested;
    }
  };
  function slurp() {
    let input = "";
    let read;
    while (read = Zotero.read(1048576)) {
      input += read;
    }
    return input;
  }
  var Collected = class {
    constructor(translator, mode) {
      this.translator = translator;
      this.input = "";
      this.displayOptions = {};
      switch (mode) {
        case "export":
          this.items = new Items();
          this.collections = new Collections(this.items);
          for (const displayOption of displayOptions) {
            this.displayOptions[displayOption] = Zotero.getOption(displayOption);
          }
          break;
        case "import":
          this.input = slurp();
          break;
      }
      this.preferences = Object.entries(defaults).reduce((acc, [pref, dflt]) => {
        var _a;
        acc[pref] = (_a = Zotero.getHiddenPref(`better-bibtex.${pref}`)) != null ? _a : dflt;
        return acc;
      }, {});
      this.preferences.testing = Zotero.getHiddenPref("better-bibtex.testing");
      this.platform = Zotero.getHiddenPref("better-bibtex.platform");
    }
    item(type) {
      return new Zotero.Item(type);
    }
    collection() {
      return new Zotero.Collection();
    }
    progress(pct) {
      Zotero.setProgress(pct);
    }
  };

  // translators/BetterBibTeX JSON.ts
  var chunkSize = 1048576;
  function detectImport() {
    let str;
    let json = "";
    while (str = Zotero.read(chunkSize)) {
      json += str;
      if (json[0] !== "{") return false;
    }
    let data;
    try {
      data = JSON.parse(json);
    } catch {
      return false;
    }
    if (!data.config || data.config.id !== ZOTERO_TRANSLATOR_INFO.translatorID) return false;
    return true;
  }
  async function doImport() {
    await Zotero.BetterBibTeX.importBBTJSON(new Collected(ZOTERO_TRANSLATOR_INFO, "import"));
  }
  function doExport() {
    const translation = Zotero.BetterBibTeX.generateBBTJSON(new Collected(ZOTERO_TRANSLATOR_INFO, "export"));
    Zotero.write(translation.output.body);
  }
  return __toCommonJS(BetterBibTeX_JSON_exports);
})();
