var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("cljs.repl.js");

goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40103){
var map__40105 = p__40103;
var map__40105__$1 = cljs.core.__destructure_map(map__40105);
var m = map__40105__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40105__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40108_40318 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40109_40319 = null;
var count__40110_40320 = (0);
var i__40111_40321 = (0);
while(true){
if((i__40111_40321 < count__40110_40320)){
var f_40326 = chunk__40109_40319.cljs$core$IIndexed$_nth$arity$2(null, i__40111_40321);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40326], 0));


var G__40327 = seq__40108_40318;
var G__40328 = chunk__40109_40319;
var G__40329 = count__40110_40320;
var G__40330 = (i__40111_40321 + (1));
seq__40108_40318 = G__40327;
chunk__40109_40319 = G__40328;
count__40110_40320 = G__40329;
i__40111_40321 = G__40330;
continue;
} else {
var temp__5804__auto___40331 = cljs.core.seq(seq__40108_40318);
if(temp__5804__auto___40331){
var seq__40108_40332__$1 = temp__5804__auto___40331;
if(cljs.core.chunked_seq_QMARK_(seq__40108_40332__$1)){
var c__5525__auto___40333 = cljs.core.chunk_first(seq__40108_40332__$1);
var G__40335 = cljs.core.chunk_rest(seq__40108_40332__$1);
var G__40336 = c__5525__auto___40333;
var G__40337 = cljs.core.count(c__5525__auto___40333);
var G__40338 = (0);
seq__40108_40318 = G__40335;
chunk__40109_40319 = G__40336;
count__40110_40320 = G__40337;
i__40111_40321 = G__40338;
continue;
} else {
var f_40339 = cljs.core.first(seq__40108_40332__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40339], 0));


var G__40340 = cljs.core.next(seq__40108_40332__$1);
var G__40341 = null;
var G__40342 = (0);
var G__40343 = (0);
seq__40108_40318 = G__40340;
chunk__40109_40319 = G__40341;
count__40110_40320 = G__40342;
i__40111_40321 = G__40343;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40344 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40344], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40344)))?cljs.core.second(arglists_40344):arglists_40344)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40133_40352 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40134_40353 = null;
var count__40135_40354 = (0);
var i__40136_40355 = (0);
while(true){
if((i__40136_40355 < count__40135_40354)){
var vec__40152_40356 = chunk__40134_40353.cljs$core$IIndexed$_nth$arity$2(null, i__40136_40355);
var name_40357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40152_40356,(0),null);
var map__40155_40358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40152_40356,(1),null);
var map__40155_40359__$1 = cljs.core.__destructure_map(map__40155_40358);
var doc_40360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155_40359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155_40359__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40357], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40361], 0));

if(cljs.core.truth_(doc_40360)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40360], 0));
} else {
}


var G__40362 = seq__40133_40352;
var G__40363 = chunk__40134_40353;
var G__40364 = count__40135_40354;
var G__40365 = (i__40136_40355 + (1));
seq__40133_40352 = G__40362;
chunk__40134_40353 = G__40363;
count__40135_40354 = G__40364;
i__40136_40355 = G__40365;
continue;
} else {
var temp__5804__auto___40366 = cljs.core.seq(seq__40133_40352);
if(temp__5804__auto___40366){
var seq__40133_40367__$1 = temp__5804__auto___40366;
if(cljs.core.chunked_seq_QMARK_(seq__40133_40367__$1)){
var c__5525__auto___40372 = cljs.core.chunk_first(seq__40133_40367__$1);
var G__40373 = cljs.core.chunk_rest(seq__40133_40367__$1);
var G__40374 = c__5525__auto___40372;
var G__40375 = cljs.core.count(c__5525__auto___40372);
var G__40376 = (0);
seq__40133_40352 = G__40373;
chunk__40134_40353 = G__40374;
count__40135_40354 = G__40375;
i__40136_40355 = G__40376;
continue;
} else {
var vec__40164_40377 = cljs.core.first(seq__40133_40367__$1);
var name_40378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164_40377,(0),null);
var map__40167_40379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164_40377,(1),null);
var map__40167_40380__$1 = cljs.core.__destructure_map(map__40167_40379);
var doc_40381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40167_40380__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40167_40380__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40378], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40382], 0));

if(cljs.core.truth_(doc_40381)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40381], 0));
} else {
}


var G__40385 = cljs.core.next(seq__40133_40367__$1);
var G__40386 = null;
var G__40387 = (0);
var G__40388 = (0);
seq__40133_40352 = G__40385;
chunk__40134_40353 = G__40386;
count__40135_40354 = G__40387;
i__40136_40355 = G__40388;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40171 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40172 = null;
var count__40173 = (0);
var i__40174 = (0);
while(true){
if((i__40174 < count__40173)){
var role = chunk__40172.cljs$core$IIndexed$_nth$arity$2(null, i__40174);
var temp__5804__auto___40392__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40392__$1)){
var spec_40393 = temp__5804__auto___40392__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40393)], 0));
} else {
}


var G__40394 = seq__40171;
var G__40395 = chunk__40172;
var G__40396 = count__40173;
var G__40397 = (i__40174 + (1));
seq__40171 = G__40394;
chunk__40172 = G__40395;
count__40173 = G__40396;
i__40174 = G__40397;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__40171);
if(temp__5804__auto____$1){
var seq__40171__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40171__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40171__$1);
var G__40402 = cljs.core.chunk_rest(seq__40171__$1);
var G__40403 = c__5525__auto__;
var G__40404 = cljs.core.count(c__5525__auto__);
var G__40405 = (0);
seq__40171 = G__40402;
chunk__40172 = G__40403;
count__40173 = G__40404;
i__40174 = G__40405;
continue;
} else {
var role = cljs.core.first(seq__40171__$1);
var temp__5804__auto___40407__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40407__$2)){
var spec_40408 = temp__5804__auto___40407__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40408)], 0));
} else {
}


var G__40409 = cljs.core.next(seq__40171__$1);
var G__40410 = null;
var G__40411 = (0);
var G__40412 = (0);
seq__40171 = G__40409;
chunk__40172 = G__40410;
count__40173 = G__40411;
i__40174 = G__40412;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40220 = datafied_throwable;
var map__40220__$1 = cljs.core.__destructure_map(map__40220);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40220__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40220__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40220__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40221 = cljs.core.last(via);
var map__40221__$1 = cljs.core.__destructure_map(map__40221);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40221__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40221__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40221__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40222 = data;
var map__40222__$1 = cljs.core.__destructure_map(map__40222);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40222__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40222__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40222__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40223 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40223__$1 = cljs.core.__destructure_map(map__40223);
var top_data = map__40223__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40223__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40228 = phase;
var G__40228__$1 = (((G__40228 instanceof cljs.core.Keyword))?G__40228.fqn:null);
switch (G__40228__$1) {
case "read-source":
var map__40231 = data;
var map__40231__$1 = cljs.core.__destructure_map(map__40231);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40231__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40231__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40232 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40232__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40232,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40232);
var G__40232__$2 = (cljs.core.truth_((function (){var fexpr__40233 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40233.cljs$core$IFn$_invoke$arity$1 ? fexpr__40233.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40233.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40232__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40232__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40232__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40232__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40234 = top_data;
var G__40234__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40234,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40234);
var G__40234__$2 = (cljs.core.truth_((function (){var fexpr__40237 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40237.cljs$core$IFn$_invoke$arity$1 ? fexpr__40237.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40237.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40234__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40234__$1);
var G__40234__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40234__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40234__$2);
var G__40234__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40234__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40234__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40234__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40234__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40241 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40241,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40241,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40241,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40241,(3),null);
var G__40244 = top_data;
var G__40244__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40244,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40244);
var G__40244__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40244__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40244__$1);
var G__40244__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40244__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40244__$2);
var G__40244__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40244__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40244__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40244__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40244__$4;
}

break;
case "execution":
var vec__40252 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40252,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40252,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40252,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40252,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40216_SHARP_){
var or__5002__auto__ = (p1__40216_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__40256 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40256.cljs$core$IFn$_invoke$arity$1 ? fexpr__40256.cljs$core$IFn$_invoke$arity$1(p1__40216_SHARP_) : fexpr__40256.call(null, p1__40216_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__40257 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40257__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40257,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40257);
var G__40257__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40257__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40257__$1);
var G__40257__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40257__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40257__$2);
var G__40257__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40257__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40257__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40257__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40257__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40228__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40262){
var map__40263 = p__40262;
var map__40263__$1 = cljs.core.__destructure_map(map__40263);
var triage_data = map__40263__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40263__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40263__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40263__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40263__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40263__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40263__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40263__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40264 = phase;
var G__40264__$1 = (((G__40264 instanceof cljs.core.Keyword))?G__40264.fqn:null);
switch (G__40264__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40265 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40266 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40267 = loc;
var G__40268 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40269_40577 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40270_40578 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40271_40579 = true;
var _STAR_print_fn_STAR__temp_val__40272_40580 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40271_40579);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40272_40580);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40260_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40260_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40270_40578);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40269_40577);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40265,G__40266,G__40267,G__40268) : format.call(null, G__40265,G__40266,G__40267,G__40268));

break;
case "macroexpansion":
var G__40273 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40274 = cause_type;
var G__40275 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40276 = loc;
var G__40277 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40273,G__40274,G__40275,G__40276,G__40277) : format.call(null, G__40273,G__40274,G__40275,G__40276,G__40277));

break;
case "compile-syntax-check":
var G__40278 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40279 = cause_type;
var G__40280 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40281 = loc;
var G__40282 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40278,G__40279,G__40280,G__40281,G__40282) : format.call(null, G__40278,G__40279,G__40280,G__40281,G__40282));

break;
case "compilation":
var G__40283 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40284 = cause_type;
var G__40285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40286 = loc;
var G__40287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40283,G__40284,G__40285,G__40286,G__40287) : format.call(null, G__40283,G__40284,G__40285,G__40286,G__40287));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40288 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40289 = symbol;
var G__40290 = loc;
var G__40291 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40292_40591 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40293_40592 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40294_40593 = true;
var _STAR_print_fn_STAR__temp_val__40295_40594 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40294_40593);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40295_40594);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40261_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40261_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40293_40592);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40292_40591);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40288,G__40289,G__40290,G__40291) : format.call(null, G__40288,G__40289,G__40290,G__40291));
} else {
var G__40299 = "Execution error%s at %s(%s).\n%s\n";
var G__40300 = cause_type;
var G__40301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40302 = loc;
var G__40303 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40299,G__40300,G__40301,G__40302,G__40303) : format.call(null, G__40299,G__40300,G__40301,G__40302,G__40303));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40264__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
