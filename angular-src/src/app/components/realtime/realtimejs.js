$(function() {
    console.log("hello");
         var config = {
                apiKey: "AIzaSyANWi-_f8yUqut3VTmIGWf8xqoebF0Qpzc",
                authDomain: "realtimearea-966eb.firebaseapp.com",
                databaseURL: "https://realtimearea-966eb.firebaseio.com",
                storageBucket: "gs://realtimearea-966eb.appspot.com",
                messagingSenderId: "1034104784847"
            };
        if(firebase.initializeApp(config))
        {
            console.log("hello");
        }

        var editorId = Url.queryString("id") || "_";

        var LS_THEME_KEY = "editor-theme";
    
        function getTheme() {
            return localStorage.getItem(LS_THEME_KEY) || "ace/theme/monokai";
        }

        $("#select-theme").change(function () {

            editor.setTheme(this.value);


            try {
                localStorage.setItem(LS_THEME_KEY, this.value);
            } catch (e) {}
        }).val(getTheme());

        var $selectLang = $("#select-lang").change(function () {

            currentEditorValue.update({
                lang: this.value
            });

            editor.getSession().setMode("ace/mode/" + this.value);
        });

        var uid = Math.random().toString();
        var editor = null;


        var db = firebase.database();
        console.log(db);


        var editorValues = db.ref("editor_values");
        console.log(editorValues);

        var currentEditorValue = editorValues.child(editorId);
        console.log(currentEditorValue);

        var openPageTimestamp = Date.now();
        console.log("hello");

        console.log(currentEditorValue.child("content"));
        
        $("#loader").fadeOut();
        $("#editor").fadeIn();


        currentEditorValue.child("content").once("value", function (contentRef) {
            console.log("hello");


            currentEditorValue.child("lang").on("value", function (r) {
                var value = r.val();

                var cLang = $selectLang.val();
                if (cLang !== value) {
                    $selectLang.val(value).change();
                }
            });
            console.log("hello");

            $("#loader").fadeOut();
            $("#editor").fadeIn();
            console.log("hello");


            editor = ace.edit("editor");
            console.log("hello");
            console.log(editor);
            editor.setTheme(getTheme());
            editor.$blockScrolling = Infinity;

            var queueRef = currentEditorValue.child("queue");

            var applyingDeltas = false;

            editor.on("change", function(e) {
                
                if (applyingDeltas) {
                    return;
                }
    
                currentEditorValue.update({
                    content: editor.getValue()
                });


                
            });


            var doc = editor.getSession().getDocument();


            queueRef.on("child_added", function (ref) {

                var timestamp = ref.key.split(":")[0];

                if (openPageTimestamp > timestamp) {
                    return;
                }

                var value = ref.val();


                if (value.by === uid) { return; }
            
                applyingDeltas = true;

                doc.applyDeltas([value.event]);

                applyingDeltas = false;
            });
    
            var val = contentRef.val();

            if (val === null) {
                val = "/* Welcome to FireEdit! */";


                editorValues.child(editorId).set({
                    lang: "javascript",
                    queue: {},
                    content: val
                });
            }

            applyingDeltas = true;
            
            editor.setValue(val, -1);

            applyingDeltas = false;
            
            editor.focus();
        });
    });
    