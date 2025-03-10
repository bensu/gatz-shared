var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./cljs.reader.js");
require("./medley.core.js");
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var crdt=$CLJS.crdt || ($CLJS.crdt = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var gatz=$CLJS.gatz || ($CLJS.gatz = {});
var medley=$CLJS.medley || ($CLJS.medley = {});

$CLJS.SHADOW_ENV.setLoaded("crdt.core.js");

goog.provide('crdt.core');
crdt.core.now = (function crdt$core$now(){
return (new Date());
});
crdt.core.comparable_QMARK_ = (function crdt$core$comparable_QMARK_(x){
return (((x instanceof cljs.core.IComparable)) || (typeof x === 'number'));
});
(Date.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof Date)){
return cljs.core.compare(this$__$1.getTime(),other.getTime());
} else {
throw (new Error("Cannot compare Date with non-Date"));
}
}));
(cljs.core.IComparable["string"] = true);

(cljs.core._compare["string"] = (function (this$,other){
if(typeof other === 'string'){
return this$.localeCompare(other);
} else {
throw (new Error("Cannot compare string with non-string"));
}
}));
crdt.core.rand_uuid = (function crdt$core$rand_uuid(){
return cljs.core.random_uuid();
});

/**
 * @interface
 */
crdt.core.StateCRDT = function(){};

var crdt$core$StateCRDT$_merge$dyn_45298 = (function (this$,that){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (crdt.core._merge[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5351__auto__.call(null, this$,that));
} else {
var m__5349__auto__ = (crdt.core._merge["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5349__auto__.call(null, this$,that));
} else {
throw cljs.core.missing_protocol("StateCRDT.-merge",this$);
}
}
});
crdt.core._merge = (function crdt$core$_merge(this$,that){
if((((!((this$ == null)))) && ((!((this$.crdt$core$StateCRDT$_merge$arity$2 == null)))))){
return this$.crdt$core$StateCRDT$_merge$arity$2(this$,that);
} else {
return crdt$core$StateCRDT$_merge$dyn_45298(this$,that);
}
});


/**
 * @interface
 */
crdt.core.OpCRDT = function(){};

var crdt$core$OpCRDT$_value$dyn_45299 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (crdt.core._value[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (crdt.core._value["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("OpCRDT.-value",this$);
}
}
});
/**
 * Returns the EDN value without the CRDT tracking
 */
crdt.core._value = (function crdt$core$_value(this$){
if((((!((this$ == null)))) && ((!((this$.crdt$core$OpCRDT$_value$arity$1 == null)))))){
return this$.crdt$core$OpCRDT$_value$arity$1(this$);
} else {
return crdt$core$OpCRDT$_value$dyn_45299(this$);
}
});

var crdt$core$OpCRDT$_apply_delta$dyn_45300 = (function (this$,_delta){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (crdt.core._apply_delta[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,_delta) : m__5351__auto__.call(null, this$,_delta));
} else {
var m__5349__auto__ = (crdt.core._apply_delta["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,_delta) : m__5349__auto__.call(null, this$,_delta));
} else {
throw cljs.core.missing_protocol("OpCRDT.-apply-delta",this$);
}
}
});
/**
 * Applies a delta to the CRDT
 */
crdt.core._apply_delta = (function crdt$core$_apply_delta(this$,_delta){
if((((!((this$ == null)))) && ((!((this$.crdt$core$OpCRDT$_apply_delta$arity$2 == null)))))){
return this$.crdt$core$OpCRDT$_apply_delta$arity$2(this$,_delta);
} else {
return crdt$core$OpCRDT$_apply_delta$dyn_45300(this$,_delta);
}
});


/**
 * @interface
 */
crdt.core.CRDTDelta = function(){};

var crdt$core$CRDTDelta$_init$dyn_45301 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (crdt.core._init[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (crdt.core._init["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("CRDTDelta.-init",this$);
}
}
});
/**
 * Returns the empty type of the CRDT it should be applied to
 */
crdt.core._init = (function crdt$core$_init(this$){
if((((!((this$ == null)))) && ((!((this$.crdt$core$CRDTDelta$_init$arity$1 == null)))))){
return this$.crdt$core$CRDTDelta$_init$arity$1(this$);
} else {
return crdt$core$CRDTDelta$_init$dyn_45301(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {crdt.core.StateCRDT}
 * @implements {crdt.core.OpCRDT}
 * @implements {crdt.core.CRDTDelta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
crdt.core.MinWins = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(crdt.core.MinWins.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(crdt.core.MinWins.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k45151,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__45155 = k45151;
var G__45155__$1 = (((G__45155 instanceof cljs.core.Keyword))?G__45155.fqn:null);
switch (G__45155__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45151,else__5303__auto__);

}
}));

(crdt.core.MinWins.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__45156){
var vec__45157 = p__45156;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45157,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45157,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(crdt.core.MinWins.prototype.crdt$core$StateCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.MinWins.prototype.crdt$core$StateCRDT$_merge$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return this$__$1.crdt$core$OpCRDT$_apply_delta$arity$2(null, that);
}));

(crdt.core.MinWins.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#crdt.core.MinWins{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(crdt.core.MinWins.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45150){
var self__ = this;
var G__45150__$1 = this;
return (new cljs.core.RecordIter((0),G__45150__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(crdt.core.MinWins.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(crdt.core.MinWins.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new crdt.core.MinWins(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(crdt.core.MinWins.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(crdt.core.MinWins.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.MinWins.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(crdt.core.MinWins.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var self__ = this;
var this$__$1 = this;
var delta_value = crdt.core._value(delta);
if((delta_value == null)){
return this$__$1;
} else {
if((self__.value == null)){
return (new crdt.core.MinWins(delta_value,null,null,null));
} else {
var G__45160 = cljs.core.compare(self__.value,delta_value);
switch (G__45160) {
case (-1):
return this$__$1;

break;
case (0):
return this$__$1;

break;
case (1):
return (new crdt.core.MinWins(delta_value,null,null,null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45160)].join('')));

}

}
}
}));

(crdt.core.MinWins.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.MinWins.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new crdt.core.MinWins(null,null,null,null));
}));

(crdt.core.MinWins.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1150539511 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(crdt.core.MinWins.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45152,other45153){
var self__ = this;
var this45152__$1 = this;
return (((!((other45153 == null)))) && ((((this45152__$1.constructor === other45153.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45152__$1.value,other45153.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45152__$1.__extmap,other45153.__extmap)))))));
}));

(crdt.core.MinWins.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new crdt.core.MinWins(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(crdt.core.MinWins.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k45151){
var self__ = this;
var this__5307__auto____$1 = this;
var G__45161 = k45151;
var G__45161__$1 = (((G__45161 instanceof cljs.core.Keyword))?G__45161.fqn:null);
switch (G__45161__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45151);

}
}));

(crdt.core.MinWins.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__45150){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__45162 = cljs.core.keyword_identical_QMARK_;
var expr__45163 = k__5309__auto__;
if(cljs.core.truth_((pred__45162.cljs$core$IFn$_invoke$arity$2 ? pred__45162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__45163) : pred__45162.call(null, new cljs.core.Keyword(null,"value","value",305978217),expr__45163)))){
return (new crdt.core.MinWins(G__45150,self__.__meta,self__.__extmap,null));
} else {
return (new crdt.core.MinWins(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__45150),null));
}
}));

(crdt.core.MinWins.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(crdt.core.MinWins.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__45150){
var self__ = this;
var this__5299__auto____$1 = this;
return (new crdt.core.MinWins(self__.value,G__45150,self__.__extmap,self__.__hash));
}));

(crdt.core.MinWins.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(crdt.core.MinWins.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(crdt.core.MinWins.cljs$lang$type = true);

(crdt.core.MinWins.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"crdt.core/MinWins",null,(1),null));
}));

(crdt.core.MinWins.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"crdt.core/MinWins");
}));

/**
 * Positional factory function for crdt.core/MinWins.
 */
crdt.core.__GT_MinWins = (function crdt$core$__GT_MinWins(value){
return (new crdt.core.MinWins(value,null,null,null));
});

/**
 * Factory function for crdt.core/MinWins, taking a map of keywords to field values.
 */
crdt.core.map__GT_MinWins = (function crdt$core$map__GT_MinWins(G__45154){
var extmap__5342__auto__ = (function (){var G__45165 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45154,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__45154)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45165);
} else {
return G__45165;
}
})();
return (new crdt.core.MinWins(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__45154),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

crdt.core.min_wins = (function crdt$core$min_wins(value){
if((value instanceof crdt.core.MinWins)){
return value;
} else {
return crdt.core.__GT_MinWins(value);
}
});
(crdt.core.MinWins.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.MinWins.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,_){
var obj__$1 = this;
var tagged_value = cljs.core.tagged_literal(new cljs.core.Symbol("crdt","min-wins","crdt/min-wins",885127570,null),obj__$1.value);
return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tagged_value], 0)));
}));
/**
 * Used by the reader like so:
 * 
 * #crdt/min-wins 1
 * #crdt/min-wins "a"
 * #crdt/min-wins #inst "2021-06-01"
 * #crdt/min-wins #uuid "08f711cd-1d4d-4f61-b157-c36a8be8ef95"
 */
crdt.core.read_min_wins = (function crdt$core$read_min_wins(value){
return crdt.core.__GT_MinWins(value);
});
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("crdt","min-wins","crdt/min-wins",885127570,null),crdt.core.read_min_wins);
crdt.core.min_wins_instance_QMARK_ = (function crdt$core$min_wins_instance_QMARK_(x){
return (x instanceof crdt.core.MinWins);
});
crdt.core.min_wins_schema = (function crdt$core$min_wins_schema(value_schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value_schema], null)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {crdt.core.StateCRDT}
 * @implements {crdt.core.OpCRDT}
 * @implements {crdt.core.CRDTDelta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
crdt.core.MaxWins = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(crdt.core.MaxWins.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(crdt.core.MaxWins.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k45167,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__45171 = k45167;
var G__45171__$1 = (((G__45171 instanceof cljs.core.Keyword))?G__45171.fqn:null);
switch (G__45171__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45167,else__5303__auto__);

}
}));

(crdt.core.MaxWins.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__45172){
var vec__45173 = p__45172;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45173,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45173,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(crdt.core.MaxWins.prototype.crdt$core$StateCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.MaxWins.prototype.crdt$core$StateCRDT$_merge$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return this$__$1.crdt$core$OpCRDT$_apply_delta$arity$2(null, that);
}));

(crdt.core.MaxWins.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#crdt.core.MaxWins{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(crdt.core.MaxWins.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45166){
var self__ = this;
var G__45166__$1 = this;
return (new cljs.core.RecordIter((0),G__45166__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(crdt.core.MaxWins.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(crdt.core.MaxWins.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new crdt.core.MaxWins(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(crdt.core.MaxWins.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(crdt.core.MaxWins.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.MaxWins.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(crdt.core.MaxWins.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var self__ = this;
var this$__$1 = this;
var delta_value = crdt.core._value(delta);
if((delta_value == null)){
return this$__$1;
} else {
if((self__.value == null)){
return (new crdt.core.MaxWins(delta_value,null,null,null));
} else {
var G__45176 = cljs.core.compare(self__.value,delta_value);
switch (G__45176) {
case (-1):
return (new crdt.core.MaxWins(delta_value,null,null,null));

break;
case (0):
return this$__$1;

break;
case (1):
return this$__$1;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45176)].join('')));

}

}
}
}));

(crdt.core.MaxWins.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.MaxWins.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new crdt.core.MaxWins(null,null,null,null));
}));

(crdt.core.MaxWins.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-951037943 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(crdt.core.MaxWins.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45168,other45169){
var self__ = this;
var this45168__$1 = this;
return (((!((other45169 == null)))) && ((((this45168__$1.constructor === other45169.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45168__$1.value,other45169.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45168__$1.__extmap,other45169.__extmap)))))));
}));

(crdt.core.MaxWins.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new crdt.core.MaxWins(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(crdt.core.MaxWins.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k45167){
var self__ = this;
var this__5307__auto____$1 = this;
var G__45177 = k45167;
var G__45177__$1 = (((G__45177 instanceof cljs.core.Keyword))?G__45177.fqn:null);
switch (G__45177__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45167);

}
}));

(crdt.core.MaxWins.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__45166){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__45178 = cljs.core.keyword_identical_QMARK_;
var expr__45179 = k__5309__auto__;
if(cljs.core.truth_((pred__45178.cljs$core$IFn$_invoke$arity$2 ? pred__45178.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__45179) : pred__45178.call(null, new cljs.core.Keyword(null,"value","value",305978217),expr__45179)))){
return (new crdt.core.MaxWins(G__45166,self__.__meta,self__.__extmap,null));
} else {
return (new crdt.core.MaxWins(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__45166),null));
}
}));

(crdt.core.MaxWins.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(crdt.core.MaxWins.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__45166){
var self__ = this;
var this__5299__auto____$1 = this;
return (new crdt.core.MaxWins(self__.value,G__45166,self__.__extmap,self__.__hash));
}));

(crdt.core.MaxWins.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(crdt.core.MaxWins.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(crdt.core.MaxWins.cljs$lang$type = true);

(crdt.core.MaxWins.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"crdt.core/MaxWins",null,(1),null));
}));

(crdt.core.MaxWins.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"crdt.core/MaxWins");
}));

/**
 * Positional factory function for crdt.core/MaxWins.
 */
crdt.core.__GT_MaxWins = (function crdt$core$__GT_MaxWins(value){
return (new crdt.core.MaxWins(value,null,null,null));
});

/**
 * Factory function for crdt.core/MaxWins, taking a map of keywords to field values.
 */
crdt.core.map__GT_MaxWins = (function crdt$core$map__GT_MaxWins(G__45170){
var extmap__5342__auto__ = (function (){var G__45181 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45170,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__45170)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45181);
} else {
return G__45181;
}
})();
return (new crdt.core.MaxWins(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__45170),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

crdt.core.max_wins = (function crdt$core$max_wins(value){
if((value instanceof crdt.core.MaxWins)){
return value;
} else {
return crdt.core.__GT_MaxWins(value);
}
});
(crdt.core.MaxWins.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.MaxWins.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,_){
var obj__$1 = this;
var tagged_value = cljs.core.tagged_literal(new cljs.core.Symbol("crdt","max-wins","crdt/max-wins",1772255516,null),obj__$1.value);
return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tagged_value], 0)));
}));
/**
 * Used by the reader like so:
 * 
 * #crdt/max-wins 1
 * #crdt/max-wins "a"
 * #crdt/max-wins #inst "2021-06-01"
 * #crdt/max-wins #uuid "08f711cd-1d4d-4f61-b157-c36a8be8ef95"
 */
crdt.core.read_max_wins = (function crdt$core$read_max_wins(value){
return crdt.core.__GT_MaxWins(value);
});
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("crdt","max-wins","crdt/max-wins",1772255516,null),crdt.core.read_max_wins);
crdt.core.max_wins_instance_QMARK_ = (function crdt$core$max_wins_instance_QMARK_(x){
return (x instanceof crdt.core.MaxWins);
});
crdt.core.max_wins_schema = (function crdt$core$max_wins_schema(value_schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value_schema], null)], null);
});

/**
 * @interface
 */
crdt.core.IHLC = function(){};

var crdt$core$IHLC$_increment$dyn_45308 = (function (this$,now){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (crdt.core._increment[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,now) : m__5351__auto__.call(null, this$,now));
} else {
var m__5349__auto__ = (crdt.core._increment["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,now) : m__5349__auto__.call(null, this$,now));
} else {
throw cljs.core.missing_protocol("IHLC.-increment",this$);
}
}
});
/**
 * Increment the clock
 */
crdt.core._increment = (function crdt$core$_increment(this$,now){
if((((!((this$ == null)))) && ((!((this$.crdt$core$IHLC$_increment$arity$2 == null)))))){
return this$.crdt$core$IHLC$_increment$arity$2(this$,now);
} else {
return crdt$core$IHLC$_increment$dyn_45308(this$,now);
}
});

var crdt$core$IHLC$_receive$dyn_45309 = (function (this$,that,now){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (crdt.core._receive[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,that,now) : m__5351__auto__.call(null, this$,that,now));
} else {
var m__5349__auto__ = (crdt.core._receive["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,that,now) : m__5349__auto__.call(null, this$,that,now));
} else {
throw cljs.core.missing_protocol("IHLC.-receive",this$);
}
}
});
/**
 * Combine two clocks
 */
crdt.core._receive = (function crdt$core$_receive(this$,that,now){
if((((!((this$ == null)))) && ((!((this$.crdt$core$IHLC$_receive$arity$3 == null)))))){
return this$.crdt$core$IHLC$_receive$arity$3(this$,that,now);
} else {
return crdt$core$IHLC$_receive$dyn_45309(this$,that,now);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {crdt.core.IHLC}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {crdt.core.StateCRDT}
 * @implements {crdt.core.OpCRDT}
 * @implements {crdt.core.CRDTDelta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
crdt.core.HLC = (function (ts,counter,node,__meta,__extmap,__hash){
this.ts = ts;
this.counter = counter;
this.node = node;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 141312;
});
(crdt.core.HLC.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(crdt.core.HLC.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k45183,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__45187 = k45183;
var G__45187__$1 = (((G__45187 instanceof cljs.core.Keyword))?G__45187.fqn:null);
switch (G__45187__$1) {
case "ts":
return self__.ts;

break;
case "counter":
return self__.counter;

break;
case "node":
return self__.node;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45183,else__5303__auto__);

}
}));

(crdt.core.HLC.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__45188){
var vec__45189 = p__45188;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45189,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45189,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(crdt.core.HLC.prototype.crdt$core$StateCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.HLC.prototype.crdt$core$StateCRDT$_merge$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return this$__$1.crdt$core$OpCRDT$_apply_delta$arity$2(null, that);
}));

(crdt.core.HLC.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#crdt.core.HLC{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ts","ts",1617209904),self__.ts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"counter","counter",804008177),self__.counter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null))], null),self__.__extmap));
}));

(crdt.core.HLC.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45182){
var self__ = this;
var G__45182__$1 = this;
return (new cljs.core.RecordIter((0),G__45182__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"node","node",581201198)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(crdt.core.HLC.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(crdt.core.HLC.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new crdt.core.HLC(self__.ts,self__.counter,self__.node,self__.__meta,self__.__extmap,self__.__hash));
}));

(crdt.core.HLC.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(crdt.core.HLC.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.HLC.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(crdt.core.HLC.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var self__ = this;
var this$__$1 = this;
var G__45192 = cljs.core.compare(this$__$1,delta);
switch (G__45192) {
case (-1):
return delta;

break;
case (0):
return this$__$1;

break;
case (1):
return this$__$1;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45192)].join('')));

}
}));

(crdt.core.HLC.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.HLC.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new crdt.core.HLC(self__.ts,(0),self__.node,null,null,null));
}));

(crdt.core.HLC.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1000904628 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(crdt.core.HLC.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45184,other45185){
var self__ = this;
var this45184__$1 = this;
return (((!((other45185 == null)))) && ((((this45184__$1.constructor === other45185.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45184__$1.ts,other45185.ts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45184__$1.counter,other45185.counter)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45184__$1.node,other45185.node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45184__$1.__extmap,other45185.__extmap)))))))))));
}));

(crdt.core.HLC.prototype.crdt$core$IHLC$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.HLC.prototype.crdt$core$IHLC$_increment$arity$2 = (function (_,now){
var self__ = this;
var ___$1 = this;
if((self__.ts.getTime() < now.getTime())){
return (new crdt.core.HLC(now,(0),self__.node,null,null,null));
} else {
return (new crdt.core.HLC(self__.ts,(self__.counter + (1)),self__.node,null,null,null));
}
}));

(crdt.core.HLC.prototype.crdt$core$IHLC$_receive$arity$3 = (function (_,remote,now){
var self__ = this;
var ___$1 = this;
if((((self__.ts.getTime() < now.getTime())) && ((new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(remote).getTime() < now.getTime())))){
return (new crdt.core.HLC(now,(0),self__.node,null,null,null));
} else {
var G__45193 = cljs.core.compare(self__.ts,new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(remote));
switch (G__45193) {
case (-1):
return (new crdt.core.HLC(new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(remote),(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(remote) + (1)),self__.node,null,null,null));

break;
case (0):
return (new crdt.core.HLC(self__.ts,((function (){var x__5087__auto__ = self__.counter;
var y__5088__auto__ = new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(remote);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})() + (1)),self__.node,null,null,null));

break;
case (1):
return (new crdt.core.HLC(self__.ts,(self__.counter + (1)),self__.node,null,null,null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45193)].join('')));

}
}
}));

(crdt.core.HLC.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"ts","ts",1617209904),null,new cljs.core.Keyword(null,"counter","counter",804008177),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new crdt.core.HLC(self__.ts,self__.counter,self__.node,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(crdt.core.HLC.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k45183){
var self__ = this;
var this__5307__auto____$1 = this;
var G__45194 = k45183;
var G__45194__$1 = (((G__45194 instanceof cljs.core.Keyword))?G__45194.fqn:null);
switch (G__45194__$1) {
case "ts":
case "counter":
case "node":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45183);

}
}));

(crdt.core.HLC.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__45182){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__45195 = cljs.core.keyword_identical_QMARK_;
var expr__45196 = k__5309__auto__;
if(cljs.core.truth_((pred__45195.cljs$core$IFn$_invoke$arity$2 ? pred__45195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ts","ts",1617209904),expr__45196) : pred__45195.call(null, new cljs.core.Keyword(null,"ts","ts",1617209904),expr__45196)))){
return (new crdt.core.HLC(G__45182,self__.counter,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45195.cljs$core$IFn$_invoke$arity$2 ? pred__45195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter","counter",804008177),expr__45196) : pred__45195.call(null, new cljs.core.Keyword(null,"counter","counter",804008177),expr__45196)))){
return (new crdt.core.HLC(self__.ts,G__45182,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45195.cljs$core$IFn$_invoke$arity$2 ? pred__45195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),expr__45196) : pred__45195.call(null, new cljs.core.Keyword(null,"node","node",581201198),expr__45196)))){
return (new crdt.core.HLC(self__.ts,self__.counter,G__45182,self__.__meta,self__.__extmap,null));
} else {
return (new crdt.core.HLC(self__.ts,self__.counter,self__.node,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__45182),null));
}
}
}
}));

(crdt.core.HLC.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ts","ts",1617209904),self__.ts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"counter","counter",804008177),self__.counter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node","node",581201198),self__.node,null))], null),self__.__extmap));
}));

(crdt.core.HLC.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__45182){
var self__ = this;
var this__5299__auto____$1 = this;
return (new crdt.core.HLC(self__.ts,self__.counter,self__.node,G__45182,self__.__extmap,self__.__hash));
}));

(crdt.core.HLC.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(crdt.core.HLC.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
var G__45198 = cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"ts","ts",1617209904)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(that,new cljs.core.Keyword(null,"ts","ts",1617209904)));
switch (G__45198) {
case (-1):
return (-1);

break;
case (1):
return (1);

break;
case (0):
var G__45199 = cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"counter","counter",804008177)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(that,new cljs.core.Keyword(null,"counter","counter",804008177)));
switch (G__45199) {
case (-1):
return (-1);

break;
case (1):
return (1);

break;
case (0):
var G__45200 = cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"node","node",581201198)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(that,new cljs.core.Keyword(null,"node","node",581201198)));
switch (G__45200) {
case (-1):
return (-1);

break;
case (1):
return (1);

break;
case (0):
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45200)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45199)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45198)].join('')));

}
}));

(crdt.core.HLC.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"ts","ts",-1037225865,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Date","js/Date",946858373,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"counter","counter",-1850427592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"UUID","UUID",-880853215,null)], null))], null);
}));

(crdt.core.HLC.cljs$lang$type = true);

(crdt.core.HLC.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"crdt.core/HLC",null,(1),null));
}));

(crdt.core.HLC.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"crdt.core/HLC");
}));

/**
 * Positional factory function for crdt.core/HLC.
 */
crdt.core.__GT_HLC = (function crdt$core$__GT_HLC(ts,counter,node){
return (new crdt.core.HLC(ts,counter,node,null,null,null));
});

/**
 * Factory function for crdt.core/HLC, taking a map of keywords to field values.
 */
crdt.core.map__GT_HLC = (function crdt$core$map__GT_HLC(G__45186){
var extmap__5342__auto__ = (function (){var G__45201 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45186,new cljs.core.Keyword(null,"ts","ts",1617209904),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"counter","counter",804008177),new cljs.core.Keyword(null,"node","node",581201198)], 0));
if(cljs.core.record_QMARK_(G__45186)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45201);
} else {
return G__45201;
}
})();
return (new crdt.core.HLC(new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(G__45186),new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(G__45186),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__45186),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

(crdt.core.HLC.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.HLC.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,_){
var obj__$1 = this;
var tagged_value = cljs.core.tagged_literal(new cljs.core.Symbol("crdt","hlc","crdt/hlc",-500131509,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1.ts,obj__$1.counter,obj__$1.node], null));
return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tagged_value], 0)));
}));
crdt.core.new_hlc = (function crdt$core$new_hlc(var_args){
var G__45203 = arguments.length;
switch (G__45203) {
case 1:
return crdt.core.new_hlc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return crdt.core.new_hlc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crdt.core.new_hlc.cljs$core$IFn$_invoke$arity$1 = (function (node){
return crdt.core.new_hlc.cljs$core$IFn$_invoke$arity$2(node,crdt.core.now());
}));

(crdt.core.new_hlc.cljs$core$IFn$_invoke$arity$2 = (function (node,now){
return (new crdt.core.HLC(now,(0),node,null,null,null));
}));

(crdt.core.new_hlc.cljs$lang$maxFixedArity = 2);

/**
 * Used by the reader like so:
 * 
 * #crdt/hlc [#uuid "08f711cd-1d4d-4f61-b157-c36a8be8ef95"]
 * #crdt/hlc [1 #uuid "08f711cd-1d4d-4f61-b157-c36a8be8ef95"]
 * #crdt/hlc [#inst "2021-06-01" 1 #uuid "08f711cd-1d4d-4f61-b157-c36a8be8ef95"]
 */
crdt.core.read_hlc = (function crdt$core$read_hlc(value){
if(cljs.core.vector_QMARK_(value)){
} else {
throw (new Error(["Assert failed: ","HLC must be a vector","\n","(vector? value)"].join('')));
}

if((cljs.core.count(value) <= (3))){
} else {
throw (new Error(["Assert failed: ","HLC must have 0, 1, 2, or 3 elements","\n","(<= (count value) 3)"].join('')));
}

var G__45204 = cljs.core.count(value);
switch (G__45204) {
case (0):
return crdt.core.__GT_HLC(crdt.core.now(),(0),cljs.core.random_uuid());

break;
case (1):
return crdt.core.__GT_HLC(crdt.core.now(),(0),cljs.core.first(value));

break;
case (2):
return crdt.core.__GT_HLC(crdt.core.now(),cljs.core.first(value),cljs.core.second(value));

break;
case (3):
return crdt.core.__GT_HLC(cljs.core.first(value),cljs.core.second(value),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(2)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45204)].join('')));

}
});
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("crdt","hlc","crdt/hlc",-500131509,null),crdt.core.read_hlc);
crdt.core.hlc_instance_QMARK_ = (function crdt$core$hlc_instance_QMARK_(x){
return (x instanceof crdt.core.HLC);
});
crdt.core.hlc_schema = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ts","ts",1617209904),cljs.core.inst_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null)], null);
crdt.core.inc_time = (function crdt$core$inc_time(d){
return (new Date((d.getTime() + (1))));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
crdt.core.ClientClock = (function (event_number,ts,user_id,conn_id,__meta,__extmap,__hash){
this.event_number = event_number;
this.ts = ts;
this.user_id = user_id;
this.conn_id = conn_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 141312;
});
(crdt.core.ClientClock.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(crdt.core.ClientClock.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k45206,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__45210 = k45206;
var G__45210__$1 = (((G__45210 instanceof cljs.core.Keyword))?G__45210.fqn:null);
switch (G__45210__$1) {
case "event-number":
return self__.event_number;

break;
case "ts":
return self__.ts;

break;
case "user-id":
return self__.user_id;

break;
case "conn-id":
return self__.conn_id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45206,else__5303__auto__);

}
}));

(crdt.core.ClientClock.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__45211){
var vec__45212 = p__45211;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45212,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45212,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(crdt.core.ClientClock.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#crdt.core.ClientClock{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-number","event-number",-297055826),self__.event_number],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ts","ts",1617209904),self__.ts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user-id","user-id",-206822291),self__.user_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn-id","conn-id",83297724),self__.conn_id],null))], null),self__.__extmap));
}));

(crdt.core.ClientClock.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45205){
var self__ = this;
var G__45205__$1 = this;
return (new cljs.core.RecordIter((0),G__45205__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-number","event-number",-297055826),new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Keyword(null,"conn-id","conn-id",83297724)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(crdt.core.ClientClock.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(crdt.core.ClientClock.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new crdt.core.ClientClock(self__.event_number,self__.ts,self__.user_id,self__.conn_id,self__.__meta,self__.__extmap,self__.__hash));
}));

(crdt.core.ClientClock.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(crdt.core.ClientClock.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-164346443 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(crdt.core.ClientClock.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45207,other45208){
var self__ = this;
var this45207__$1 = this;
return (((!((other45208 == null)))) && ((((this45207__$1.constructor === other45208.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45207__$1.event_number,other45208.event_number)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45207__$1.ts,other45208.ts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45207__$1.user_id,other45208.user_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45207__$1.conn_id,other45208.conn_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45207__$1.__extmap,other45208.__extmap)))))))))))));
}));

(crdt.core.ClientClock.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null,new cljs.core.Keyword(null,"event-number","event-number",-297055826),null,new cljs.core.Keyword(null,"ts","ts",1617209904),null,new cljs.core.Keyword(null,"conn-id","conn-id",83297724),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new crdt.core.ClientClock(self__.event_number,self__.ts,self__.user_id,self__.conn_id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(crdt.core.ClientClock.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k45206){
var self__ = this;
var this__5307__auto____$1 = this;
var G__45215 = k45206;
var G__45215__$1 = (((G__45215 instanceof cljs.core.Keyword))?G__45215.fqn:null);
switch (G__45215__$1) {
case "event-number":
case "ts":
case "user-id":
case "conn-id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45206);

}
}));

(crdt.core.ClientClock.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__45205){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__45216 = cljs.core.keyword_identical_QMARK_;
var expr__45217 = k__5309__auto__;
if(cljs.core.truth_((pred__45216.cljs$core$IFn$_invoke$arity$2 ? pred__45216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-number","event-number",-297055826),expr__45217) : pred__45216.call(null, new cljs.core.Keyword(null,"event-number","event-number",-297055826),expr__45217)))){
return (new crdt.core.ClientClock(G__45205,self__.ts,self__.user_id,self__.conn_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45216.cljs$core$IFn$_invoke$arity$2 ? pred__45216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ts","ts",1617209904),expr__45217) : pred__45216.call(null, new cljs.core.Keyword(null,"ts","ts",1617209904),expr__45217)))){
return (new crdt.core.ClientClock(self__.event_number,G__45205,self__.user_id,self__.conn_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45216.cljs$core$IFn$_invoke$arity$2 ? pred__45216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-id","user-id",-206822291),expr__45217) : pred__45216.call(null, new cljs.core.Keyword(null,"user-id","user-id",-206822291),expr__45217)))){
return (new crdt.core.ClientClock(self__.event_number,self__.ts,G__45205,self__.conn_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45216.cljs$core$IFn$_invoke$arity$2 ? pred__45216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conn-id","conn-id",83297724),expr__45217) : pred__45216.call(null, new cljs.core.Keyword(null,"conn-id","conn-id",83297724),expr__45217)))){
return (new crdt.core.ClientClock(self__.event_number,self__.ts,self__.user_id,G__45205,self__.__meta,self__.__extmap,null));
} else {
return (new crdt.core.ClientClock(self__.event_number,self__.ts,self__.user_id,self__.conn_id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__45205),null));
}
}
}
}
}));

(crdt.core.ClientClock.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"event-number","event-number",-297055826),self__.event_number,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ts","ts",1617209904),self__.ts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user-id","user-id",-206822291),self__.user_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conn-id","conn-id",83297724),self__.conn_id,null))], null),self__.__extmap));
}));

(crdt.core.ClientClock.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__45205){
var self__ = this;
var this__5299__auto____$1 = this;
return (new crdt.core.ClientClock(self__.event_number,self__.ts,self__.user_id,self__.conn_id,G__45205,self__.__extmap,self__.__hash));
}));

(crdt.core.ClientClock.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(crdt.core.ClientClock.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
var G__45219 = cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"event-number","event-number",-297055826)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(that,new cljs.core.Keyword(null,"event-number","event-number",-297055826)));
switch (G__45219) {
case (-1):
return (-1);

break;
case (1):
return (1);

break;
case (0):
var G__45220 = cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"ts","ts",1617209904)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(that,new cljs.core.Keyword(null,"ts","ts",1617209904)));
switch (G__45220) {
case (-1):
return (-1);

break;
case (1):
return (1);

break;
case (0):
var G__45221 = cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(that,new cljs.core.Keyword(null,"user-id","user-id",-206822291)));
switch (G__45221) {
case (-1):
return (-1);

break;
case (1):
return (1);

break;
case (0):
var G__45222 = cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.Keyword(null,"conn-id","conn-id",83297724)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(that,new cljs.core.Keyword(null,"conn-id","conn-id",83297724)));
switch (G__45222) {
case (-1):
return (-1);

break;
case (1):
return (1);

break;
case (0):
return (0);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45222)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45221)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45220)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45219)].join('')));

}
}));

(crdt.core.ClientClock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-number","event-number",1343475701,null),new cljs.core.Symbol(null,"ts","ts",-1037225865,null),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Symbol(null,"conn-id","conn-id",1723829251,null)], null);
}));

(crdt.core.ClientClock.cljs$lang$type = true);

(crdt.core.ClientClock.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"crdt.core/ClientClock",null,(1),null));
}));

(crdt.core.ClientClock.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"crdt.core/ClientClock");
}));

/**
 * Positional factory function for crdt.core/ClientClock.
 */
crdt.core.__GT_ClientClock = (function crdt$core$__GT_ClientClock(event_number,ts,user_id,conn_id){
return (new crdt.core.ClientClock(event_number,ts,user_id,conn_id,null,null,null));
});

/**
 * Factory function for crdt.core/ClientClock, taking a map of keywords to field values.
 */
crdt.core.map__GT_ClientClock = (function crdt$core$map__GT_ClientClock(G__45209){
var extmap__5342__auto__ = (function (){var G__45223 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45209,new cljs.core.Keyword(null,"event-number","event-number",-297055826),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Keyword(null,"conn-id","conn-id",83297724)], 0));
if(cljs.core.record_QMARK_(G__45209)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45223);
} else {
return G__45223;
}
})();
return (new crdt.core.ClientClock(new cljs.core.Keyword(null,"event-number","event-number",-297055826).cljs$core$IFn$_invoke$arity$1(G__45209),new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(G__45209),new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(G__45209),new cljs.core.Keyword(null,"conn-id","conn-id",83297724).cljs$core$IFn$_invoke$arity$1(G__45209),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

crdt.core.choose_incoming_QMARK_ = (function crdt$core$choose_incoming_QMARK_(existing,incoming){
if((incoming == null)){
return false;
} else {
if((existing == null)){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(incoming),cljs.core.type(existing))){
var G__45224 = cljs.core.compare(cljs.core.type(incoming),cljs.core.type(existing));
switch (G__45224) {
case (-1):
return false;

break;
case (1):
return true;

break;
case (0):
return false;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45224)].join('')));

}
} else {
if(((crdt.core.comparable_QMARK_(incoming)) && (crdt.core.comparable_QMARK_(existing)))){
var G__45225 = cljs.core.compare(incoming,existing);
switch (G__45225) {
case (-1):
return false;

break;
case (1):
return true;

break;
case (0):
return false;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45225)].join('')));

}
} else {
return true;

}
}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {crdt.core.StateCRDT}
 * @implements {crdt.core.OpCRDT}
 * @implements {crdt.core.CRDTDelta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
crdt.core.LWW = (function (clock,value,__meta,__extmap,__hash){
this.clock = clock;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(crdt.core.LWW.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(crdt.core.LWW.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k45227,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__45231 = k45227;
var G__45231__$1 = (((G__45231 instanceof cljs.core.Keyword))?G__45231.fqn:null);
switch (G__45231__$1) {
case "clock":
return self__.clock;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45227,else__5303__auto__);

}
}));

(crdt.core.LWW.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__45232){
var vec__45233 = p__45232;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45233,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45233,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(crdt.core.LWW.prototype.crdt$core$StateCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.LWW.prototype.crdt$core$StateCRDT$_merge$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return this$__$1.crdt$core$OpCRDT$_apply_delta$arity$2(null, that);
}));

(crdt.core.LWW.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#crdt.core.LWW{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clock","clock",-894301127),self__.clock],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(crdt.core.LWW.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45226){
var self__ = this;
var G__45226__$1 = this;
return (new cljs.core.RecordIter((0),G__45226__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(crdt.core.LWW.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(crdt.core.LWW.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new crdt.core.LWW(self__.clock,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(crdt.core.LWW.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(crdt.core.LWW.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.LWW.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(crdt.core.LWW.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var self__ = this;
var this$__$1 = this;
var delta_clock = delta.clock;
var delta_value = delta.value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("crdt.core","empty","crdt.core/empty",-1739054400),delta_clock)){
return this$__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("crdt.core","empty","crdt.core/empty",-1739054400),self__.clock)){
return delta;
} else {
var G__45236 = cljs.core.compare(self__.clock,delta_clock);
switch (G__45236) {
case (-1):
return delta;

break;
case (1):
return this$__$1;

break;
case (0):
if(cljs.core.truth_(crdt.core.choose_incoming_QMARK_(self__.value,delta_value))){
return delta;
} else {
return this$__$1;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45236)].join('')));

}

}
}
}));

(crdt.core.LWW.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.LWW.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new crdt.core.LWW(new cljs.core.Keyword("crdt.core","empty","crdt.core/empty",-1739054400),crdt.core._init(self__.value),null,null,null));
}));

(crdt.core.LWW.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-290600614 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(crdt.core.LWW.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45228,other45229){
var self__ = this;
var this45228__$1 = this;
return (((!((other45229 == null)))) && ((((this45228__$1.constructor === other45229.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45228__$1.clock,other45229.clock)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45228__$1.value,other45229.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45228__$1.__extmap,other45229.__extmap)))))))));
}));

(crdt.core.LWW.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"clock","clock",-894301127),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new crdt.core.LWW(self__.clock,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(crdt.core.LWW.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k45227){
var self__ = this;
var this__5307__auto____$1 = this;
var G__45237 = k45227;
var G__45237__$1 = (((G__45237 instanceof cljs.core.Keyword))?G__45237.fqn:null);
switch (G__45237__$1) {
case "clock":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45227);

}
}));

(crdt.core.LWW.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__45226){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__45238 = cljs.core.keyword_identical_QMARK_;
var expr__45239 = k__5309__auto__;
if(cljs.core.truth_((pred__45238.cljs$core$IFn$_invoke$arity$2 ? pred__45238.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clock","clock",-894301127),expr__45239) : pred__45238.call(null, new cljs.core.Keyword(null,"clock","clock",-894301127),expr__45239)))){
return (new crdt.core.LWW(G__45226,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45238.cljs$core$IFn$_invoke$arity$2 ? pred__45238.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__45239) : pred__45238.call(null, new cljs.core.Keyword(null,"value","value",305978217),expr__45239)))){
return (new crdt.core.LWW(self__.clock,G__45226,self__.__meta,self__.__extmap,null));
} else {
return (new crdt.core.LWW(self__.clock,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__45226),null));
}
}
}));

(crdt.core.LWW.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clock","clock",-894301127),self__.clock,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(crdt.core.LWW.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__45226){
var self__ = this;
var this__5299__auto____$1 = this;
return (new crdt.core.LWW(self__.clock,self__.value,G__45226,self__.__extmap,self__.__hash));
}));

(crdt.core.LWW.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(crdt.core.LWW.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clock","clock",746230400,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(crdt.core.LWW.cljs$lang$type = true);

(crdt.core.LWW.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"crdt.core/LWW",null,(1),null));
}));

(crdt.core.LWW.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"crdt.core/LWW");
}));

/**
 * Positional factory function for crdt.core/LWW.
 */
crdt.core.__GT_LWW = (function crdt$core$__GT_LWW(clock,value){
return (new crdt.core.LWW(clock,value,null,null,null));
});

/**
 * Factory function for crdt.core/LWW, taking a map of keywords to field values.
 */
crdt.core.map__GT_LWW = (function crdt$core$map__GT_LWW(G__45230){
var extmap__5342__auto__ = (function (){var G__45241 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45230,new cljs.core.Keyword(null,"clock","clock",-894301127),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__45230)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45241);
} else {
return G__45241;
}
})();
return (new crdt.core.LWW(new cljs.core.Keyword(null,"clock","clock",-894301127).cljs$core$IFn$_invoke$arity$1(G__45230),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__45230),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

crdt.core.lww = (function crdt$core$lww(clock,value){
if((value instanceof crdt.core.LWW)){
return value;
} else {
return crdt.core.__GT_LWW(clock,value);
}
});
(crdt.core.LWW.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.LWW.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,_){
var obj__$1 = this;
var tagged_value = cljs.core.tagged_literal(new cljs.core.Symbol("crdt","lww","crdt/lww",-443575776,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1.clock,obj__$1.value], null));
return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tagged_value], 0)));
}));
/**
 * Used by the reader like so:
 * 
 * #crdt/lww [clock value]
 * 
 * #crdt/lww [1 "a"]
 * #crdt/lww [#inst "2021-06-01" nil]
 * #crdt/lww [#crdt/hlc [#uuid "08f711cd-1d4d-4f61-b157-c36a8be8ef95"] 3]
 */
crdt.core.read_lww = (function crdt$core$read_lww(value){
if(cljs.core.vector_QMARK_(value)){
} else {
throw (new Error(["Assert failed: ","LWW must be a vector","\n","(vector? value)"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(value),(2))){
} else {
throw (new Error(["Assert failed: ","LWW must have 2 elements","\n","(= (count value) 2)"].join('')));
}

return crdt.core.__GT_LWW(cljs.core.first(value),cljs.core.second(value));
});
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("crdt","lww","crdt/lww",-443575776,null),crdt.core.read_lww);
crdt.core.lww_instance_QMARK_ = (function crdt$core$lww_instance_QMARK_(x){
return (x instanceof crdt.core.LWW);
});
crdt.core.lww_schema = (function crdt$core$lww_schema(var_args){
var G__45243 = arguments.length;
switch (G__45243) {
case 1:
return crdt.core.lww_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return crdt.core.lww_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crdt.core.lww_schema.cljs$core$IFn$_invoke$arity$1 = (function (value_schema){
return crdt.core.lww_schema.cljs$core$IFn$_invoke$arity$2(crdt.core.hlc_schema,value_schema);
}));

(crdt.core.lww_schema.cljs$core$IFn$_invoke$arity$2 = (function (clock_schema,value_schema){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clock","clock",-894301127),clock_schema], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value_schema], null)], null);
}));

(crdt.core.lww_schema.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {crdt.core.StateCRDT}
 * @implements {crdt.core.OpCRDT}
 * @implements {crdt.core.CRDTDelta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
crdt.core.GrowOnlySet = (function (xs,__meta,__extmap,__hash){
this.xs = xs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(crdt.core.GrowOnlySet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k45245,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__45249 = k45245;
var G__45249__$1 = (((G__45249 instanceof cljs.core.Keyword))?G__45249.fqn:null);
switch (G__45249__$1) {
case "xs":
return self__.xs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45245,else__5303__auto__);

}
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__45250){
var vec__45251 = p__45250;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(crdt.core.GrowOnlySet.prototype.crdt$core$StateCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.GrowOnlySet.prototype.crdt$core$StateCRDT$_merge$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (new crdt.core.GrowOnlySet(clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(that)),null,null,null));
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#crdt.core.GrowOnlySet{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"xs","xs",649443341),self__.xs],null))], null),self__.__extmap));
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45244){
var self__ = this;
var G__45244__$1 = this;
return (new cljs.core.RecordIter((0),G__45244__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new crdt.core.GrowOnlySet(self__.xs,self__.__meta,self__.__extmap,self__.__hash));
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(crdt.core.GrowOnlySet.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.GrowOnlySet.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.xs;
}));

(crdt.core.GrowOnlySet.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((crdt.core.grow_only_set_instance_QMARK_.cljs$core$IFn$_invoke$arity$1 ? crdt.core.grow_only_set_instance_QMARK_.cljs$core$IFn$_invoke$arity$1(delta) : crdt.core.grow_only_set_instance_QMARK_.call(null, delta)))){
return (new crdt.core.GrowOnlySet(clojure.set.union.cljs$core$IFn$_invoke$arity$2(self__.xs,crdt.core._value(delta)),null,null,null));
} else {
return (new crdt.core.GrowOnlySet(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.xs,crdt.core._value(delta)),null,null,null));

}
}));

(crdt.core.GrowOnlySet.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.GrowOnlySet.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new crdt.core.GrowOnlySet(cljs.core.PersistentHashSet.EMPTY,null,null,null));
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (147828805 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45246,other45247){
var self__ = this;
var this45246__$1 = this;
return (((!((other45247 == null)))) && ((((this45246__$1.constructor === other45247.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45246__$1.xs,other45247.xs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45246__$1.__extmap,other45247.__extmap)))))));
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new crdt.core.GrowOnlySet(self__.xs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k45245){
var self__ = this;
var this__5307__auto____$1 = this;
var G__45254 = k45245;
var G__45254__$1 = (((G__45254 instanceof cljs.core.Keyword))?G__45254.fqn:null);
switch (G__45254__$1) {
case "xs":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45245);

}
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__45244){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__45255 = cljs.core.keyword_identical_QMARK_;
var expr__45256 = k__5309__auto__;
if(cljs.core.truth_((pred__45255.cljs$core$IFn$_invoke$arity$2 ? pred__45255.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xs","xs",649443341),expr__45256) : pred__45255.call(null, new cljs.core.Keyword(null,"xs","xs",649443341),expr__45256)))){
return (new crdt.core.GrowOnlySet(G__45244,self__.__meta,self__.__extmap,null));
} else {
return (new crdt.core.GrowOnlySet(self__.xs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__45244),null));
}
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"xs","xs",649443341),self__.xs,null))], null),self__.__extmap));
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__45244){
var self__ = this;
var this__5299__auto____$1 = this;
return (new crdt.core.GrowOnlySet(self__.xs,G__45244,self__.__extmap,self__.__hash));
}));

(crdt.core.GrowOnlySet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(crdt.core.GrowOnlySet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null);
}));

(crdt.core.GrowOnlySet.cljs$lang$type = true);

(crdt.core.GrowOnlySet.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"crdt.core/GrowOnlySet",null,(1),null));
}));

(crdt.core.GrowOnlySet.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"crdt.core/GrowOnlySet");
}));

/**
 * Positional factory function for crdt.core/GrowOnlySet.
 */
crdt.core.__GT_GrowOnlySet = (function crdt$core$__GT_GrowOnlySet(xs){
return (new crdt.core.GrowOnlySet(xs,null,null,null));
});

/**
 * Factory function for crdt.core/GrowOnlySet, taking a map of keywords to field values.
 */
crdt.core.map__GT_GrowOnlySet = (function crdt$core$map__GT_GrowOnlySet(G__45248){
var extmap__5342__auto__ = (function (){var G__45258 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45248,new cljs.core.Keyword(null,"xs","xs",649443341));
if(cljs.core.record_QMARK_(G__45248)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45258);
} else {
return G__45258;
}
})();
return (new crdt.core.GrowOnlySet(new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(G__45248),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

(crdt.core.GrowOnlySet.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.GrowOnlySet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,_){
var obj__$1 = this;
var tagged_value = cljs.core.tagged_literal(new cljs.core.Symbol("crdt","gos","crdt/gos",-299569948,null),obj__$1.xs);
return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tagged_value], 0)));
}));
/**
 * Used by the reader like so:
 * 
 * #crdt/gos #{1 2 3}
 */
crdt.core.read_gos = (function crdt$core$read_gos(xs){
if(cljs.core.set_QMARK_(xs)){
} else {
throw (new Error(["Assert failed: ","GrowOnlySet must be a set","\n","(set? xs)"].join('')));
}

return crdt.core.__GT_GrowOnlySet(xs);
});
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("crdt","gos","crdt/gos",-299569948,null),crdt.core.read_gos);
crdt.core.grow_only_set_instance_QMARK_ = (function crdt$core$grow_only_set_instance_QMARK_(x){
return (x instanceof crdt.core.GrowOnlySet);
});
crdt.core.grow_only_set_schema = (function crdt$core$grow_only_set_schema(value_schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),value_schema], null)], null)], null);
});
crdt.core.gos = (function crdt$core$gos(xs){
return crdt.core.__GT_GrowOnlySet(cljs.core.set(xs));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {crdt.core.StateCRDT}
 * @implements {crdt.core.OpCRDT}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
crdt.core.LWWSet = (function (xs,__meta,__extmap,__hash){
this.xs = xs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(crdt.core.LWWSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(crdt.core.LWWSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k45260,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__45264 = k45260;
var G__45264__$1 = (((G__45264 instanceof cljs.core.Keyword))?G__45264.fqn:null);
switch (G__45264__$1) {
case "xs":
return self__.xs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45260,else__5303__auto__);

}
}));

(crdt.core.LWWSet.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__45265){
var vec__45266 = p__45265;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45266,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45266,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(crdt.core.LWWSet.prototype.crdt$core$StateCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.LWWSet.prototype.crdt$core$StateCRDT$_merge$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return this$__$1.crdt$core$OpCRDT$_apply_delta$arity$2(null, new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(that));
}));

(crdt.core.LWWSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#crdt.core.LWWSet{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"xs","xs",649443341),self__.xs],null))], null),self__.__extmap));
}));

(crdt.core.LWWSet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45259){
var self__ = this;
var G__45259__$1 = this;
return (new cljs.core.RecordIter((0),G__45259__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(crdt.core.LWWSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(crdt.core.LWWSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new crdt.core.LWWSet(self__.xs,self__.__meta,self__.__extmap,self__.__hash));
}));

(crdt.core.LWWSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(crdt.core.LWWSet.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.LWWSet.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45269){
var vec__45270 = p__45269;
var _x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45270,(0),null);
var lww = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45270,(1),null);
return crdt.core._value(lww);
}),self__.xs)));
}));

(crdt.core.LWWSet.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (_,delta){
var self__ = this;
var ___$1 = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_(delta),cljs.core.every_QMARK_(crdt.core.lww_instance_QMARK_,cljs.core.vals(delta))], null)], null);

return (new crdt.core.LWWSet(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__45273){
var vec__45274 = p__45273;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45274,(0),null);
var lww = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45274,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,x,crdt.core._apply_delta,lww);
}),self__.xs,delta),null,null,null));
}));

(crdt.core.LWWSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (924213555 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(crdt.core.LWWSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45261,other45262){
var self__ = this;
var this45261__$1 = this;
return (((!((other45262 == null)))) && ((((this45261__$1.constructor === other45262.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45261__$1.xs,other45262.xs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45261__$1.__extmap,other45262.__extmap)))))));
}));

(crdt.core.LWWSet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new crdt.core.LWWSet(self__.xs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(crdt.core.LWWSet.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k45260){
var self__ = this;
var this__5307__auto____$1 = this;
var G__45277 = k45260;
var G__45277__$1 = (((G__45277 instanceof cljs.core.Keyword))?G__45277.fqn:null);
switch (G__45277__$1) {
case "xs":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45260);

}
}));

(crdt.core.LWWSet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__45259){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__45278 = cljs.core.keyword_identical_QMARK_;
var expr__45279 = k__5309__auto__;
if(cljs.core.truth_((pred__45278.cljs$core$IFn$_invoke$arity$2 ? pred__45278.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xs","xs",649443341),expr__45279) : pred__45278.call(null, new cljs.core.Keyword(null,"xs","xs",649443341),expr__45279)))){
return (new crdt.core.LWWSet(G__45259,self__.__meta,self__.__extmap,null));
} else {
return (new crdt.core.LWWSet(self__.xs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__45259),null));
}
}));

(crdt.core.LWWSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"xs","xs",649443341),self__.xs,null))], null),self__.__extmap));
}));

(crdt.core.LWWSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__45259){
var self__ = this;
var this__5299__auto____$1 = this;
return (new crdt.core.LWWSet(self__.xs,G__45259,self__.__extmap,self__.__hash));
}));

(crdt.core.LWWSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(crdt.core.LWWSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null);
}));

(crdt.core.LWWSet.cljs$lang$type = true);

(crdt.core.LWWSet.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"crdt.core/LWWSet",null,(1),null));
}));

(crdt.core.LWWSet.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"crdt.core/LWWSet");
}));

/**
 * Positional factory function for crdt.core/LWWSet.
 */
crdt.core.__GT_LWWSet = (function crdt$core$__GT_LWWSet(xs){
return (new crdt.core.LWWSet(xs,null,null,null));
});

/**
 * Factory function for crdt.core/LWWSet, taking a map of keywords to field values.
 */
crdt.core.map__GT_LWWSet = (function crdt$core$map__GT_LWWSet(G__45263){
var extmap__5342__auto__ = (function (){var G__45281 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45263,new cljs.core.Keyword(null,"xs","xs",649443341));
if(cljs.core.record_QMARK_(G__45263)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45281);
} else {
return G__45281;
}
})();
return (new crdt.core.LWWSet(new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(G__45263),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

(crdt.core.LWWSet.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(crdt.core.LWWSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,_){
var obj__$1 = this;
var tagged_value = cljs.core.tagged_literal(new cljs.core.Symbol("crdt","lww-set","crdt/lww-set",-497123604,null),obj__$1.xs);
return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tagged_value], 0)));
}));
crdt.core.lww_set = (function crdt$core$lww_set(var_args){
var G__45283 = arguments.length;
switch (G__45283) {
case 0:
return crdt.core.lww_set.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return crdt.core.lww_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crdt.core.lww_set.cljs$core$IFn$_invoke$arity$0 = (function (){
return crdt.core.lww_set.cljs$core$IFn$_invoke$arity$2(null,cljs.core.PersistentHashSet.EMPTY);
}));

(crdt.core.lww_set.cljs$core$IFn$_invoke$arity$2 = (function (clock,xs){
if((xs instanceof crdt.core.LWWSet)){
return xs;
} else {
var inner = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(new crdt.core.LWW(clock,true,null,null,null))], null);
}),(function (){var or__5002__auto__ = xs;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})()));
return (new crdt.core.LWWSet(inner,null,null,null));
}
}));

(crdt.core.lww_set.cljs$lang$maxFixedArity = 2);

crdt.core.read_lww_set = (function crdt$core$read_lww_set(xs){
if((xs instanceof crdt.core.LWWSet)){
return xs;
} else {
return (new crdt.core.LWWSet(xs,null,null,null));
}
});
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("crdt","lww-set","crdt/lww-set",-497123604,null),crdt.core.read_lww_set);
crdt.core.lww_set_delta = (function crdt$core$lww_set_delta(var_args){
var G__45285 = arguments.length;
switch (G__45285) {
case 2:
return crdt.core.lww_set_delta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crdt.core.lww_set_delta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crdt.core.lww_set_delta.cljs$core$IFn$_invoke$arity$2 = (function (clock,s){
return crdt.core.lww_set_delta.cljs$core$IFn$_invoke$arity$3(clock,s,true);
}));

(crdt.core.lww_set_delta.cljs$core$IFn$_invoke$arity$3 = (function (clock,s,in_QMARK_){
if(((cljs.core.map_QMARK_(s)) || (cljs.core.set_QMARK_(s)))){
} else {
throw (new Error("Assert failed: (or (map? s) (set? s))"));
}

if(cljs.core.boolean_QMARK_(in_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? in?)"));
}

if(cljs.core.set_QMARK_(s)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,crdt.core.lww(clock,in_QMARK_)], null);
}),s));
} else {
if(cljs.core.map_QMARK_(s)){
return s;
} else {
throw (new Error(["Assert failed: ","Only sets or maps are allowed","\n","false"].join('')));

}
}
}));

(crdt.core.lww_set_delta.cljs$lang$maxFixedArity = 3);

crdt.core.lww_set_schema = (function crdt$core$lww_set_schema(var_args){
var G__45287 = arguments.length;
switch (G__45287) {
case 1:
return crdt.core.lww_set_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return crdt.core.lww_set_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crdt.core.lww_set_schema.cljs$core$IFn$_invoke$arity$1 = (function (value_schema){
return crdt.core.lww_set_schema.cljs$core$IFn$_invoke$arity$2(crdt.core.hlc_schema,value_schema);
}));

(crdt.core.lww_set_schema.cljs$core$IFn$_invoke$arity$2 = (function (clock_schema,value_schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),value_schema,crdt.core.lww_schema.cljs$core$IFn$_invoke$arity$2(clock_schema,cljs.core.boolean_QMARK_)], null)], null)], null);
}));

(crdt.core.lww_set_schema.cljs$lang$maxFixedArity = 2);

crdt.core.lww_set_delta_schema = (function crdt$core$lww_set_delta_schema(var_args){
var G__45289 = arguments.length;
switch (G__45289) {
case 1:
return crdt.core.lww_set_delta_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return crdt.core.lww_set_delta_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crdt.core.lww_set_delta_schema.cljs$core$IFn$_invoke$arity$1 = (function (value_schema){
return crdt.core.lww_set_delta_schema.cljs$core$IFn$_invoke$arity$2(crdt.core.hlc_schema,value_schema);
}));

(crdt.core.lww_set_delta_schema.cljs$core$IFn$_invoke$arity$2 = (function (clock_schema,value_schema){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),value_schema,crdt.core.lww_schema.cljs$core$IFn$_invoke$arity$2(clock_schema,cljs.core.boolean_QMARK_)], null);
}));

(crdt.core.lww_set_delta_schema.cljs$lang$maxFixedArity = 2);

(crdt.core.CRDTDelta["null"] = true);

(crdt.core._init["null"] = (function (_){
return null;
}));

(cljs.core.IMap.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IMap.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));
(crdt.core.CRDTDelta["object"] = true);

(crdt.core._init["object"] = (function (this$){
return this$;
}));
(crdt.core.CRDTDelta["number"] = true);

(crdt.core._init["number"] = (function (this$){
return this$;
}));

(crdt.core.CRDTDelta["string"] = true);

(crdt.core._init["string"] = (function (this$){
return this$;
}));

(crdt.core.CRDTDelta["boolean"] = true);

(crdt.core._init["boolean"] = (function (this$){
return this$;
}));

(crdt.core.CRDTDelta["array"] = true);

(crdt.core._init["array"] = (function (this$){
return this$;
}));

(Date.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.uuid.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.uuid.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.Keyword.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.Symbol.prototype.crdt$core$CRDTDelta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.crdt$core$CRDTDelta$_init$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
(crdt.core.OpCRDT["null"] = true);

(crdt.core._value["null"] = (function (_){
return null;
}));

(crdt.core._apply_delta["null"] = (function (_,delta){
return crdt.core._apply_delta(crdt.core._init(delta),delta);
}));
crdt.core.value_map = (function crdt$core$value_map(this$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__45290){
var vec__45291 = p__45290;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45291,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45291,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,crdt.core._value(v));
}),cljs.core.PersistentArrayMap.EMPTY,this$);
});
crdt.core.apply_delta_map = (function crdt$core$apply_delta_map(this$,delta){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__45294){
var vec__45295 = p__45294;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45295,(0),null);
var val_delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45295,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,k,crdt.core._apply_delta,val_delta);
}),this$,delta);
});
(cljs.core.PersistentArrayMap.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (this$){
var this$__$1 = this;
return crdt.core.value_map(this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var this$__$1 = this;
return crdt.core.apply_delta_map(this$__$1,delta);
}));

(cljs.core.PersistentTreeMap.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (this$){
var this$__$1 = this;
return crdt.core.value_map(this$__$1);
}));

(cljs.core.PersistentTreeMap.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var this$__$1 = this;
return crdt.core.apply_delta_map(this$__$1,delta);
}));

(cljs.core.PersistentHashMap.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (this$){
var this$__$1 = this;
return crdt.core.value_map(this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var this$__$1 = this;
return crdt.core.apply_delta_map(this$__$1,delta);
}));
(cljs.core.PersistentHashMap.prototype.crdt$core$StateCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.crdt$core$StateCRDT$_merge$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(crdt.core._merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1,that], 0));
}));

(cljs.core.PersistentArrayMap.prototype.crdt$core$StateCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.crdt$core$StateCRDT$_merge$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(crdt.core._merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1,that], 0));
}));

(cljs.core.PersistentTreeMap.prototype.crdt$core$StateCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.crdt$core$StateCRDT$_merge$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(crdt.core._merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1,that], 0));
}));
crdt.core.throw_unsupported_op = (function crdt$core$throw_unsupported_op(this$,delta){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Applied a delta to a value that is not a CRDT: %s \n %s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(this$)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delta], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$,new cljs.core.Keyword(null,"delta","delta",108939957),delta], null));
});
(crdt.core.OpCRDT["object"] = true);

(crdt.core._value["object"] = (function (this$){
return this$;
}));

(crdt.core._apply_delta["object"] = (function (this$,delta){
return crdt.core.throw_unsupported_op(this$,delta);
}));
(crdt.core.OpCRDT["number"] = true);

(crdt.core._value["number"] = (function (this$){
return this$;
}));

(crdt.core._apply_delta["number"] = (function (this$,delta){
return crdt.core.throw_unsupported_op(this$,delta);
}));

(crdt.core.OpCRDT["string"] = true);

(crdt.core._value["string"] = (function (this$){
return this$;
}));

(crdt.core._apply_delta["string"] = (function (this$,delta){
return crdt.core.throw_unsupported_op(this$,delta);
}));

(crdt.core.OpCRDT["boolean"] = true);

(crdt.core._value["boolean"] = (function (this$){
return this$;
}));

(crdt.core._apply_delta["boolean"] = (function (this$,delta){
return crdt.core.throw_unsupported_op(this$,delta);
}));

(crdt.core.OpCRDT["array"] = true);

(crdt.core._value["array"] = (function (this$){
return this$;
}));

(crdt.core._apply_delta["array"] = (function (this$,delta){
return crdt.core.throw_unsupported_op(this$,delta);
}));

(Date.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(Date.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var this$__$1 = this;
return crdt.core.throw_unsupported_op(this$__$1,delta);
}));

(cljs.core.uuid.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.uuid.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.uuid.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var this$__$1 = this;
return crdt.core.throw_unsupported_op(this$__$1,delta);
}));

(cljs.core.Keyword.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.Keyword.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var this$__$1 = this;
return crdt.core.throw_unsupported_op(this$__$1,delta);
}));

(cljs.core.Symbol.prototype.crdt$core$OpCRDT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.crdt$core$OpCRDT$_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.Symbol.prototype.crdt$core$OpCRDT$_apply_delta$arity$2 = (function (this$,delta){
var this$__$1 = this;
return crdt.core.throw_unsupported_op(this$__$1,delta);
}));
crdt.core.clock_QMARK_ = (function crdt$core$clock_QMARK_(x){
return crdt.core.comparable_QMARK_(x);
});
/**
 * Recursively walks the map turning all its leaf nodes to LWW
 */
crdt.core.__GT_lww_map = (function crdt$core$__GT_lww_map(m,clock){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error("Assert failed: (map? m)"));
}

if(crdt.core.clock_QMARK_(clock)){
} else {
throw (new Error("Assert failed: (clock? clock)"));
}

var _PERCENT_ = medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((function (v){
if(cljs.core.map_QMARK_(v)){
return (crdt.core.__GT_lww_map.cljs$core$IFn$_invoke$arity$2 ? crdt.core.__GT_lww_map.cljs$core$IFn$_invoke$arity$2(v,clock) : crdt.core.__GT_lww_map.call(null, v,clock));
} else {
return (new crdt.core.LWW(clock,v,null,null,null));
}
}),m);
if(cljs.core.map_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (map? %)"));
}

return _PERCENT_;
});

//# sourceMappingURL=crdt.core.js.map
