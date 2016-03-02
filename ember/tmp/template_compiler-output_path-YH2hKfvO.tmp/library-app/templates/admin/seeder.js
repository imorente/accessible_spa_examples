export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 25,
          "column": 2
        }
      },
      "moduleName": "library-app/templates/admin/seeder.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"data-page-title","Seeder");
      var el2 = dom.createTextNode("Seeder, our Data Center");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-md-4");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-md-4");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-md-4");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
      morphs[3] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[4] = dom.createMorphAt(fragment,6,6,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","number-box",[],["title","Libraries","number",["subexpr","@mut",[["get","libraries.length",["loc",[null,[4,62],[4,78]]]]],[],[]]],["loc",[null,[4,24],[4,80]]]],
      ["inline","number-box",[],["title","Authors","number",["subexpr","@mut",[["get","authors.length",["loc",[null,[5,60],[5,74]]]]],[],[]]],["loc",[null,[5,24],[5,76]]]],
      ["inline","number-box",[],["title","Books","number",["subexpr","@mut",[["get","books.length",["loc",[null,[6,58],[6,70]]]]],[],[]]],["loc",[null,[6,24],[6,72]]]],
      ["inline","seeder-block",[],["sectionTitle","Libraries","counter",["subexpr","@mut",[["get","librariesCounter",["loc",[null,[11,12],[11,28]]]]],[],[]],"generateAction","generateLibraries","deleteAction","deleteLibraries","createReady",["subexpr","@mut",[["get","libDone",["loc",[null,[14,16],[14,23]]]]],[],[]],"deleteReady",["subexpr","@mut",[["get","libDelDone",["loc",[null,[15,16],[15,26]]]]],[],[]]],["loc",[null,[9,0],[16,2]]]],
      ["inline","seeder-block",[],["sectionTitle","Authors with Books","counter",["subexpr","@mut",[["get","authorCounter",["loc",[null,[20,10],[20,23]]]]],[],[]],"generateAction","generateBooksAndAuthors","deleteAction","deleteBooksAndAuthors","createReady",["subexpr","@mut",[["get","authDone",["loc",[null,[23,14],[23,22]]]]],[],[]],"deleteReady",["subexpr","@mut",[["get","authDelDone",["loc",[null,[24,14],[24,25]]]]],[],[]]],["loc",[null,[18,0],[25,2]]]]
    ],
    locals: [],
    templates: []
  };
}()));