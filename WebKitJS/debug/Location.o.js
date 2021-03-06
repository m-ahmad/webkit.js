// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](88 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 88;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore8LocationC1EPNS_5FrameE;
/* memory initializer */ allocate([35,0,0,0,0,0,0,0,63,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore8LocationE=(H_BASE+40)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 4 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = (i2 | 0) == 0;
 if (i10) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 i13 = (i3 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i15 = _llvm_uadd_with_overflow_i32(i11 + i8 | 0, i14 | 0) | 0;
 i14 = i15;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i10) {
  i16 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i16 = 9;
  }
 }
 do {
  if ((i16 | 0) == 9) {
   if (!i13) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i14 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i16 = 28;
      break;
     }
     i10 = i2 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i17 = i2;
     i18 = 0;
    } else {
     if (i14 >>> 0 > 4294967275 >>> 0) {
      i16 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i14 + 20 | 0);
     i2 = i6 | 0;
     i10 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i10 | 0) == 0) {
      i16 = 28;
      break;
     }
     i2 = i10 + 20 | 0;
     HEAP32[i10 >> 2] = 2;
     HEAP32[i10 + 4 >> 2] = i14;
     HEAP32[i10 + 8 >> 2] = i2;
     HEAP32[i10 + 12 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 32;
     i17 = i10;
     i18 = i2;
    }
   } while (0);
   if ((i16 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   i10 = _strlen(i2 | 0) | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i19 = 0;
    } else {
     i8 = HEAP32[i15 + 4 >> 2] | 0;
     i11 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     } else {
      i20 = 0;
     }
     while (1) {
      HEAP8[i18 + i20 | 0] = HEAP8[i11 + i20 | 0] | 0;
      i20 = i20 + 1 | 0;
      if (i20 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
     i8 = HEAP32[i9 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     }
     i19 = HEAP32[i8 + 4 >> 2] | 0;
    }
   } while (0);
   _memcpy(i18 + i19 | 0, i2 | 0, i10) | 0;
   i15 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = i21 + i15 | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i11 = HEAP32[i15 + 4 >> 2] | 0;
     i22 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP8[i18 + (i8 + i23) | 0] = HEAP8[i22 + i23 | 0] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i11 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i14 | 0) == 0) {
   i17 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i17 | 0) == 0) {
    i16 = 55;
    break;
   }
   i23 = i17 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   i24 = i17;
   i25 = 0;
  } else {
   if (i14 >>> 0 > 2147483637 >>> 0) {
    i16 = 55;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i14 << 1) + 20 | 0);
   i17 = i5 | 0;
   i23 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   if ((i23 | 0) == 0) {
    i16 = 55;
    break;
   }
   i17 = i23 + 20 | 0;
   HEAP32[i23 >> 2] = 2;
   HEAP32[i23 + 4 >> 2] = i14;
   HEAP32[i23 + 8 >> 2] = i17;
   HEAP32[i23 + 12 >> 2] = 0;
   HEAP32[i23 + 16 >> 2] = 0;
   i24 = i23;
   i25 = i17;
  }
 } while (0);
 if ((i16 | 0) == 55) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i16 = HEAP32[i7 >> 2] | 0;
 i14 = _strlen(i16 | 0) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i26 = 0;
   i27 = 0;
  } else {
   i17 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i28 = 0;
     }
     while (1) {
      HEAP16[i25 + (i28 << 1) >> 1] = HEAP16[i23 + (i28 << 1) >> 1] | 0;
      i28 = i28 + 1 | 0;
      if (i28 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    } else {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP16[i25 + (i29 << 1) >> 1] = HEAPU8[i23 + i29 | 0] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i17 = HEAP32[i9 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i26 = 0;
    i27 = 0;
    break;
   }
   i26 = HEAP32[i17 + 4 >> 2] | 0;
   i27 = i17;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  i30 = i27;
 } else {
  i27 = 0;
  while (1) {
   HEAP16[i25 + (i27 + i26 << 1) >> 1] = HEAPU8[i16 + i27 | 0] | 0;
   i27 = i27 + 1 | 0;
   if (i27 >>> 0 >= i14 >>> 0) {
    break;
   }
  }
  i30 = HEAP32[i9 >> 2] | 0;
 }
 i9 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 if ((i30 | 0) == 0) {
  i31 = 0;
 } else {
  i31 = HEAP32[i30 + 4 >> 2] | 0;
 }
 i30 = i31 + i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = HEAP32[i9 + 4 >> 2] | 0;
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i32 = 0;
    }
    while (1) {
     HEAP16[i25 + (i32 + i30 << 1) >> 1] = HEAP16[i31 + (i32 << 1) >> 1] | 0;
     i32 = i32 + 1 | 0;
     if (i32 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   } else {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i33 = 0;
    }
    while (1) {
     HEAP16[i25 + (i33 + i30 << 1) >> 1] = HEAPU8[i31 + i33 | 0] | 0;
     i33 = i33 + 1 | 0;
     if (i33 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i24;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8Location7setHashERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 56 | 0;
 i9 = i5 + 64 | 0;
 i10 = i5 + 72 | 0;
 i11 = i5 + 80 | 0;
 i12 = i1 + 4 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i13 = HEAP32[i1 + 456 >> 2] | 0;
 i1 = i7 | 0;
 i14 = HEAP32[i13 + 356 >> 2] | 0;
 HEAP32[i1 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = 0;
  i16 = i7 + 4 | 0;
 } else {
  i17 = i14 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  i17 = i7 + 4 | 0;
  i15 = HEAP8[i17] & -2;
  i16 = i17;
 }
 i17 = i13 + 360 | 0;
 i14 = i15 | HEAP8[i17] & 1;
 HEAP8[i16] = i14;
 HEAP8[i16] = i14 & -3 | HEAP8[i17] & 2;
 HEAP32[i7 + 8 >> 2] = HEAP32[i13 + 364 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i13 + 368 >> 2];
 HEAP32[i7 + 16 >> 2] = HEAP32[i13 + 372 >> 2];
 HEAP32[i7 + 20 >> 2] = HEAP32[i13 + 376 >> 2];
 HEAP32[i7 + 24 >> 2] = HEAP32[i13 + 380 >> 2];
 HEAP32[i7 + 28 >> 2] = HEAP32[i13 + 384 >> 2];
 HEAP32[i7 + 32 >> 2] = HEAP32[i13 + 388 >> 2];
 HEAP32[i7 + 36 >> 2] = HEAP32[i13 + 392 >> 2];
 HEAP32[i7 + 40 >> 2] = HEAP32[i13 + 396 >> 2];
 HEAP32[i7 + 44 >> 2] = HEAP32[i13 + 400 >> 2];
 __ZNK7WebCore3URL18fragmentIdentifierEv(i8, i7);
 i13 = i9 | 0;
 i17 = i2 | 0;
 i14 = HEAP32[i17 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 do {
  if ((i14 | 0) != 0) {
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i16 = HEAP32[i17 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
    break;
   }
   i15 = i16 + 8 | 0;
   if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
    i18 = HEAP16[HEAP32[i15 >> 2] >> 1] | 0;
   } else {
    i18 = HEAPU8[HEAP32[i15 >> 2] | 0] | 0;
   }
   if (i18 << 16 >> 16 != 35) {
    break;
   }
   __ZNK3WTF6String9substringEjj(i10, i2, 1, -1);
   i15 = i10 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i19 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i16;
   do {
    if ((i19 | 0) != 0) {
     i16 = i19 | 0;
     i20 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i16 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i15 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i20 = i19 | 0;
   i16 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i20 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN7WebCore3URL21setFragmentIdentifierERKN3WTF6StringE(i7, i9);
 __ZNK7WebCore3URL18fragmentIdentifierEv(i11, i7);
 i9 = i8 | 0;
 i8 = i11 | 0;
 i11 = __ZN3WTF20equalIgnoringNullityEPNS_10StringImplES1_(HEAP32[i9 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (!i11) {
   i10 = i7 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) + 80 | 0;
   i8 = i6 | 0;
   HEAP32[i8 >> 2] = 0;
   i18 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i2, i6, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = i2 | 0;
     i17 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i8 >> 2] = i17;
      break;
     }
    }
   } while (0);
   if ((i18 | 0) == 0) {
    break;
   }
   __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i18 + 456 >> 2] | 0) + 336 >> 2] | 0, i10, i3, i4, 0);
  }
 } while (0);
 i4 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i13 = i4 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i2 | 0) | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i7 | 0, i10 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (i9) {
   if ((i10 | 0) == 0) {
    i12 = 9;
   } else {
    i12 = 11;
   }
  } else {
   i11 = (i10 | 0) == 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    if (i11) {
     i12 = 9;
     break;
    } else {
     i12 = 11;
     break;
    }
   }
   do {
    if (i11) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i12 = 34;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i13 = i5 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i12 = 34;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i10;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 0;
     i15 = i14;
     i16 = i13;
    }
   } while (0);
   if ((i12 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i16 + (i11 << 1) >> 1] = HEAPU8[i2 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i17 = 0;
      }
      while (1) {
       HEAP16[i16 + (i17 + i7 << 1) >> 1] = HEAP16[i14 + (i17 << 1) >> 1] | 0;
       i17 = i17 + 1 | 0;
       if (i17 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     } else {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i18 = 0;
      }
      while (1) {
       HEAP16[i16 + (i18 + i7 << 1) >> 1] = HEAPU8[i14 + i18 | 0] | 0;
       i18 = i18 + 1 | 0;
       if (i18 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  } else if ((i12 | 0) == 11) {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i15 = i6 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i12 = 18;
    break;
   }
   i15 = i18 + 20 | 0;
   HEAP32[i18 >> 2] = 2;
   HEAP32[i18 + 4 >> 2] = i10;
   HEAP32[i18 + 8 >> 2] = i15;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = 32;
   i19 = i18;
   i20 = i15;
  }
 } while (0);
 if ((i12 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 _memcpy(i20 | 0, i2 | 0, i7) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i12 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i21 = 0;
   }
   while (1) {
    HEAP8[i20 + (i21 + i7) | 0] = HEAP8[i12 + i21 | 0] | 0;
    i21 = i21 + 1 | 0;
    if (i21 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore8Location4hostEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i7 + 456 >> 2] | 0;
 if ((HEAP8[i2 + 360 | 0] & 1) == 0) {
  i8 = __ZN7WebCore8blankURLEv() | 0;
 } else {
  i8 = i2 + 356 | 0;
 }
 if ((HEAP32[i8 + 24 >> 2] | 0) >= (HEAP32[i8 + 28 >> 2] | 0)) {
  __ZNK7WebCore3URL4hostEv(i1, i8);
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore3URL4hostEv(i5, i8);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i9 = 0;
  } else {
   i7 = i5 | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   i11 = i10 + 2 | 0;
   HEAP32[i7 >> 2] = i10 + 4;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    i9 = i5;
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    i9 = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF6String6numberEi(i6, (__ZNK7WebCore3URL4portEv(i8) | 0) & 65535);
 i8 = (i9 | 0) == 0;
 if (!i8) {
  i5 = i9 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i11 = (i6 | 0) == 0;
 if (!i11) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i9;
 if (!i8) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i4 + 4 >> 2] = H_BASE + 32;
 i10 = i4 + 8 | 0;
 HEAP32[i10 >> 2] = i6;
 do {
  if (!i11) {
   i12 = i6 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i13 + 2;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i6 = i9 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i1, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i4 = i9 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i9 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore8Location6searchEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i8 + 456 >> 2] | 0;
 if ((HEAP8[i2 + 360 | 0] & 1) == 0) {
  i9 = __ZN7WebCore8blankURLEv() | 0;
 } else {
  i9 = i2 + 356 | 0;
 }
 __ZNK7WebCore3URL5queryEv(i6, i9);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i10 = 7;
  } else {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i10 = 7;
    break;
   }
   __ZNK7WebCore3URL5queryEv(i7, i9);
   i8 = i7 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i12 = 0;
    } else {
     i13 = i11 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     i15 = i14 + 2 | 0;
     HEAP32[i13 >> 2] = i14 + 4;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      i12 = i11;
      break;
     } else {
      HEAP32[i13 >> 2] = i15;
      i12 = i11;
      break;
     }
    }
   } while (0);
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = i12;
   i15 = (i12 | 0) == 0;
   if (!i15) {
    i13 = i12 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, H_BASE + 16 | 0, i5);
   i13 = i4 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i13 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i11 = i13 | 0;
     i16 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i11 >> 2] = i16;
      break;
     }
    }
   } while (0);
   if ((i14 | 0) == 0) {
    _WTFCrash();
   }
   HEAP32[i1 >> 2] = i14;
   do {
    if (!i15) {
     i13 = i12 | 0;
     i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i8 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i14 = i15 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if ((i10 | 0) == 7) {
   i12 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i12;
   if ((i12 | 0) == 0) {
    break;
   }
   i4 = i12 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8Location7setPortERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i1 + 456 >> 2] | 0;
 i1 = i7 | 0;
 i10 = HEAP32[i9 + 356 >> 2] | 0;
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = 0;
  i12 = i7 + 4 | 0;
 } else {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
  i13 = i7 + 4 | 0;
  i11 = HEAP8[i13] & -2;
  i12 = i13;
 }
 i13 = i9 + 360 | 0;
 i10 = i11 | HEAP8[i13] & 1;
 HEAP8[i12] = i10;
 HEAP8[i12] = i10 & -3 | HEAP8[i13] & 2;
 HEAP32[i7 + 8 >> 2] = HEAP32[i9 + 364 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i9 + 368 >> 2];
 HEAP32[i7 + 16 >> 2] = HEAP32[i9 + 372 >> 2];
 HEAP32[i7 + 20 >> 2] = HEAP32[i9 + 376 >> 2];
 HEAP32[i7 + 24 >> 2] = HEAP32[i9 + 380 >> 2];
 HEAP32[i7 + 28 >> 2] = HEAP32[i9 + 384 >> 2];
 HEAP32[i7 + 32 >> 2] = HEAP32[i9 + 388 >> 2];
 HEAP32[i7 + 36 >> 2] = HEAP32[i9 + 392 >> 2];
 HEAP32[i7 + 40 >> 2] = HEAP32[i9 + 396 >> 2];
 HEAP32[i7 + 44 >> 2] = HEAP32[i9 + 400 >> 2];
 i9 = __ZNK3WTF6String5toIntEPb(i2, 0) | 0;
 do {
  if (i9 >>> 0 > 65535 >>> 0) {
   i14 = 8;
  } else {
   i13 = HEAP32[i2 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i14 = 8;
    break;
   }
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    i14 = 8;
    break;
   }
   __ZN7WebCore3URL7setPortEt(i7, i9 & 65535);
  }
 } while (0);
 if ((i14 | 0) == 8) {
  __ZN7WebCore3URL10removePortEv(i7);
 }
 i14 = i7 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) + 80 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i7, i6, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) != 0) {
  __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0, i14, i3, i4, 0);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore8Location11setProtocolERKN3WTF6StringERNS_9DOMWindowES6_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i1 + 4 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = HEAP32[i1 + 456 >> 2] | 0;
 i1 = i8 | 0;
 i11 = HEAP32[i10 + 356 >> 2] | 0;
 HEAP32[i1 >> 2] = i11;
 if ((i11 | 0) == 0) {
  i12 = 0;
  i13 = i8 + 4 | 0;
 } else {
  i14 = i11 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  i14 = i8 + 4 | 0;
  i12 = HEAP8[i14] & -2;
  i13 = i14;
 }
 i14 = i10 + 360 | 0;
 i11 = i12 | HEAP8[i14] & 1;
 HEAP8[i13] = i11;
 HEAP8[i13] = i11 & -3 | HEAP8[i14] & 2;
 HEAP32[i8 + 8 >> 2] = HEAP32[i10 + 364 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i10 + 368 >> 2];
 HEAP32[i8 + 16 >> 2] = HEAP32[i10 + 372 >> 2];
 HEAP32[i8 + 20 >> 2] = HEAP32[i10 + 376 >> 2];
 HEAP32[i8 + 24 >> 2] = HEAP32[i10 + 380 >> 2];
 HEAP32[i8 + 28 >> 2] = HEAP32[i10 + 384 >> 2];
 HEAP32[i8 + 32 >> 2] = HEAP32[i10 + 388 >> 2];
 HEAP32[i8 + 36 >> 2] = HEAP32[i10 + 392 >> 2];
 HEAP32[i8 + 40 >> 2] = HEAP32[i10 + 396 >> 2];
 HEAP32[i8 + 44 >> 2] = HEAP32[i10 + 400 >> 2];
 do {
  if (__ZN7WebCore3URL11setProtocolERKN3WTF6StringE(i8, i2) | 0) {
   i10 = i8 | 0;
   i14 = (HEAP32[i9 >> 2] | 0) + 80 | 0;
   i11 = i7 | 0;
   HEAP32[i11 >> 2] = 0;
   i13 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i14, i7, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
   i14 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i11 = i14 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i13 + 456 >> 2] | 0) + 336 >> 2] | 0, i10, i3, i4, 0);
  } else {
   HEAP32[i5 >> 2] = 12;
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i5 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZNK7WebCore8Location4hashEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i7 + 456 >> 2] | 0;
 if ((HEAP8[i2 + 360 | 0] & 1) == 0) {
  i8 = __ZN7WebCore8blankURLEv() | 0;
 } else {
  i8 = i2 + 356 | 0;
 }
 __ZNK7WebCore3URL18fragmentIdentifierEv(i6, i8);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i9 = 7;
  } else {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i9 = 7;
    break;
   }
   i2 = i6 | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   i10 = i7 + 2 | 0;
   HEAP32[i2 >> 2] = i7 + 4;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
   } else {
    HEAP32[i2 >> 2] = i10;
   }
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = i6;
   i2 = (i6 | 0) == 0;
   if (!i2) {
    i7 = i6 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, H_BASE + 8 | 0, i5);
   i7 = i4 | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i7 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i10 = i7 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i10 >> 2] = i12;
      break;
     }
    }
   } while (0);
   if ((i11 | 0) == 0) {
    _WTFCrash();
   }
   HEAP32[i1 >> 2] = i11;
   if (i2) {
    break;
   }
   i7 = i6 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i12;
    break;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 7) {
   i6 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = i6 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8Location7setHostERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i1 + 456 >> 2] | 0;
 i1 = i7 | 0;
 i10 = HEAP32[i9 + 356 >> 2] | 0;
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = 0;
  i12 = i7 + 4 | 0;
 } else {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
  i13 = i7 + 4 | 0;
  i11 = HEAP8[i13] & -2;
  i12 = i13;
 }
 i13 = i9 + 360 | 0;
 i10 = i11 | HEAP8[i13] & 1;
 HEAP8[i12] = i10;
 HEAP8[i12] = i10 & -3 | HEAP8[i13] & 2;
 HEAP32[i7 + 8 >> 2] = HEAP32[i9 + 364 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i9 + 368 >> 2];
 HEAP32[i7 + 16 >> 2] = HEAP32[i9 + 372 >> 2];
 HEAP32[i7 + 20 >> 2] = HEAP32[i9 + 376 >> 2];
 HEAP32[i7 + 24 >> 2] = HEAP32[i9 + 380 >> 2];
 HEAP32[i7 + 28 >> 2] = HEAP32[i9 + 384 >> 2];
 HEAP32[i7 + 32 >> 2] = HEAP32[i9 + 388 >> 2];
 HEAP32[i7 + 36 >> 2] = HEAP32[i9 + 392 >> 2];
 HEAP32[i7 + 40 >> 2] = HEAP32[i9 + 396 >> 2];
 HEAP32[i7 + 44 >> 2] = HEAP32[i9 + 400 >> 2];
 __ZN7WebCore3URL14setHostAndPortERKN3WTF6StringE(i7, i2);
 i2 = i7 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) + 80 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i7, i6, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) != 0) {
  __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0, i2, i3, i4, 0);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore8Location11setPathnameERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i1 + 456 >> 2] | 0;
 i1 = i7 | 0;
 i10 = HEAP32[i9 + 356 >> 2] | 0;
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = 0;
  i12 = i7 + 4 | 0;
 } else {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
  i13 = i7 + 4 | 0;
  i11 = HEAP8[i13] & -2;
  i12 = i13;
 }
 i13 = i9 + 360 | 0;
 i10 = i11 | HEAP8[i13] & 1;
 HEAP8[i12] = i10;
 HEAP8[i12] = i10 & -3 | HEAP8[i13] & 2;
 HEAP32[i7 + 8 >> 2] = HEAP32[i9 + 364 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i9 + 368 >> 2];
 HEAP32[i7 + 16 >> 2] = HEAP32[i9 + 372 >> 2];
 HEAP32[i7 + 20 >> 2] = HEAP32[i9 + 376 >> 2];
 HEAP32[i7 + 24 >> 2] = HEAP32[i9 + 380 >> 2];
 HEAP32[i7 + 28 >> 2] = HEAP32[i9 + 384 >> 2];
 HEAP32[i7 + 32 >> 2] = HEAP32[i9 + 388 >> 2];
 HEAP32[i7 + 36 >> 2] = HEAP32[i9 + 392 >> 2];
 HEAP32[i7 + 40 >> 2] = HEAP32[i9 + 396 >> 2];
 HEAP32[i7 + 44 >> 2] = HEAP32[i9 + 400 >> 2];
 __ZN7WebCore3URL7setPathERKN3WTF6StringE(i7, i2);
 i2 = i7 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) + 80 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i7, i6, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) != 0) {
  __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0, i2, i3, i4, 0);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore8Location11setHostnameERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i1 + 456 >> 2] | 0;
 i1 = i7 | 0;
 i10 = HEAP32[i9 + 356 >> 2] | 0;
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = 0;
  i12 = i7 + 4 | 0;
 } else {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
  i13 = i7 + 4 | 0;
  i11 = HEAP8[i13] & -2;
  i12 = i13;
 }
 i13 = i9 + 360 | 0;
 i10 = i11 | HEAP8[i13] & 1;
 HEAP8[i12] = i10;
 HEAP8[i12] = i10 & -3 | HEAP8[i13] & 2;
 HEAP32[i7 + 8 >> 2] = HEAP32[i9 + 364 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i9 + 368 >> 2];
 HEAP32[i7 + 16 >> 2] = HEAP32[i9 + 372 >> 2];
 HEAP32[i7 + 20 >> 2] = HEAP32[i9 + 376 >> 2];
 HEAP32[i7 + 24 >> 2] = HEAP32[i9 + 380 >> 2];
 HEAP32[i7 + 28 >> 2] = HEAP32[i9 + 384 >> 2];
 HEAP32[i7 + 32 >> 2] = HEAP32[i9 + 388 >> 2];
 HEAP32[i7 + 36 >> 2] = HEAP32[i9 + 392 >> 2];
 HEAP32[i7 + 40 >> 2] = HEAP32[i9 + 396 >> 2];
 HEAP32[i7 + 44 >> 2] = HEAP32[i9 + 400 >> 2];
 __ZN7WebCore3URL7setHostERKN3WTF6StringE(i7, i2);
 i2 = i7 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) + 80 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i7, i6, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) != 0) {
  __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0, i2, i3, i4, 0);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore8Location9setSearchERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i1 + 456 >> 2] | 0;
 i1 = i7 | 0;
 i10 = HEAP32[i9 + 356 >> 2] | 0;
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = 0;
  i12 = i7 + 4 | 0;
 } else {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
  i13 = i7 + 4 | 0;
  i11 = HEAP8[i13] & -2;
  i12 = i13;
 }
 i13 = i9 + 360 | 0;
 i10 = i11 | HEAP8[i13] & 1;
 HEAP8[i12] = i10;
 HEAP8[i12] = i10 & -3 | HEAP8[i13] & 2;
 HEAP32[i7 + 8 >> 2] = HEAP32[i9 + 364 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i9 + 368 >> 2];
 HEAP32[i7 + 16 >> 2] = HEAP32[i9 + 372 >> 2];
 HEAP32[i7 + 20 >> 2] = HEAP32[i9 + 376 >> 2];
 HEAP32[i7 + 24 >> 2] = HEAP32[i9 + 380 >> 2];
 HEAP32[i7 + 28 >> 2] = HEAP32[i9 + 384 >> 2];
 HEAP32[i7 + 32 >> 2] = HEAP32[i9 + 388 >> 2];
 HEAP32[i7 + 36 >> 2] = HEAP32[i9 + 392 >> 2];
 HEAP32[i7 + 40 >> 2] = HEAP32[i9 + 396 >> 2];
 HEAP32[i7 + 44 >> 2] = HEAP32[i9 + 400 >> 2];
 __ZN7WebCore3URL8setQueryERKN3WTF6StringE(i7, i2);
 i2 = i7 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) + 80 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i7, i6, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) != 0) {
  __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i9 + 456 >> 2] | 0) + 336 >> 2] | 0, i2, i3, i4, 0);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore8Location8protocolEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i7 + 456 >> 2] | 0;
 if ((HEAP8[i2 + 360 | 0] & 1) == 0) {
  i8 = __ZN7WebCore8blankURLEv() | 0;
 } else {
  i8 = i2 + 356 | 0;
 }
 __ZNK7WebCore3URL8protocolEv(i6, i8);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i9 = 0;
  } else {
   i2 = i6 | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   i10 = i7 + 2 | 0;
   HEAP32[i2 >> 2] = i7 + 4;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i9 = i6;
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    i9 = i6;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i9;
 i10 = (i9 | 0) == 0;
 if (!i10) {
  i2 = i9 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, H_BASE + 32 | 0);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 }
 HEAP32[i1 >> 2] = i4;
 do {
  if (!i10) {
   i4 = i9 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i9 | 0;
 i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13DOMStringList6appendERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 4 | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
   i6 = i5 + 1 | 0;
   i7 = i3 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if (i8 >>> 0 > i2 >>> 0) {
     i9 = 6;
    } else {
     if ((i8 + (i5 << 2) | 0) >>> 0 <= i2 >>> 0) {
      i9 = 6;
      break;
     }
     __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
     i10 = HEAP32[i7 >> 2] | 0;
     i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
     i12 = i10;
    }
   } while (0);
   if ((i9 | 0) == 6) {
    __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
    i11 = i2;
    i12 = HEAP32[i7 >> 2] | 0;
   }
   i8 = HEAP32[i11 >> 2] | 0;
   HEAP32[i12 + (HEAP32[i4 >> 2] << 2) >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  } else {
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 << 2) >> 2] = i10;
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = i10 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
 } while (0);
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore8Location6reloadERNS_9DOMWindowE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(HEAP32[i1 + 456 >> 2] | 0) + 336 >> 2] | 0;
 i1 = HEAP32[(__ZNK7WebCore9DOMWindow8documentEv(i2) | 0) + 100 >> 2] | 0;
 if (__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(i1, HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 100 >> 2] | 0) | 0) {
  if (__ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE((HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0) | 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore19NavigationScheduler15scheduleRefreshEv((HEAP32[i5 >> 2] | 0) + 376 | 0);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9DOMWindow29crossDomainAccessErrorMessageERKS0_(i4, i6, i2);
 __ZN7WebCore9DOMWindow17printErrorMessageERKN3WTF6StringE(i6, i4);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i6 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore8Location15ancestorOriginsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 i6 = i5;
 HEAP32[i5 >> 2] = 1;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 0;
 HEAP32[i5 + 12 >> 2] = 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i2 = __ZNK7WebCore9FrameTree6parentEv(i5 + 40 | 0) | 0;
 if ((i2 | 0) != 0) {
  i5 = i4 | 0;
  i7 = i2;
  while (1) {
   __ZNK7WebCore14SecurityOrigin8toStringEv(i4, HEAP32[(HEAP32[i7 + 456 >> 2] | 0) + 100 >> 2] | 0);
   __ZN7WebCore13DOMStringList6appendERKN3WTF6StringE(i6, i4);
   i2 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = i2 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = __ZNK7WebCore9FrameTree6parentEv(i7 + 40 | 0) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZNK7WebCore8Location8pathnameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i5 + 456 >> 2] | 0;
 if ((HEAP8[i2 + 360 | 0] & 1) == 0) {
  i6 = __ZN7WebCore8blankURLEv() | 0;
 } else {
  i6 = i2 + 356 | 0;
 }
 __ZNK7WebCore3URL4pathEv(i4, i6);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i7 = 7;
  } else {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    i7 = 7;
    break;
   }
   __ZNK7WebCore3URL4pathEv(i1, i6);
  }
 } while (0);
 if ((i7 | 0) == 7) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 24 | 0);
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8Location7setHrefERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 i8 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i7 + 80 | 0, i6, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i8 + 456 >> 2] | 0) + 336 >> 2] | 0, i2, i3, i4, 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Location6assignERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 i8 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i7 + 80 | 0, i6, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i8 + 456 >> 2] | 0) + 336 >> 2] | 0, i2, i3, i4, 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Location11setLocationERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[i1 + 4 >> 2] | 0) + 80 | 0;
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 i8 = __ZN7WebCore11FrameLoader22findFrameForNavigationERKN3WTF12AtomicStringEPNS_8DocumentE(i7, i6, __ZNK7WebCore9DOMWindow8documentEv(i3) | 0) | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i8 + 456 >> 2] | 0) + 336 >> 2] | 0, i2, i3, i4, 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore8Location6originEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i5 + 456 >> 2] | 0;
 if ((HEAP8[i2 + 360 | 0] & 1) == 0) {
  i6 = __ZN7WebCore8blankURLEv() | 0;
 } else {
  i6 = i2 + 356 | 0;
 }
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i4, i6);
 i6 = i4 | 0;
 __ZNK7WebCore14SecurityOrigin8toStringEv(i1, HEAP32[i6 >> 2] | 0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore8Location4portEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i2 = HEAP32[i3 + 456 >> 2] | 0;
 if ((HEAP8[i2 + 360 | 0] & 1) == 0) {
  i4 = __ZN7WebCore8blankURLEv() | 0;
 } else {
  i4 = i2 + 356 | 0;
 }
 if ((HEAP32[i4 + 24 >> 2] | 0) < (HEAP32[i4 + 28 >> 2] | 0)) {
  __ZN3WTF6String6numberEi(i1, (__ZNK7WebCore3URL4portEv(i4) | 0) & 65535);
  return;
 } else {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 88 | 0);
  return;
 }
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZNK7WebCore8Location4hrefEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i2 = HEAP32[i3 + 456 >> 2] | 0;
 if ((HEAP8[i2 + 360 | 0] & 1) == 0) {
  i4 = __ZN7WebCore8blankURLEv() | 0;
 } else {
  i4 = i2 + 356 | 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore8Location7replaceERKN3WTF6StringERNS_9DOMWindowES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore9DOMWindow11setLocationERKN3WTF6StringERS0_S5_NS_18SetLocationLockingE(HEAP32[(HEAP32[i5 + 456 >> 2] | 0) + 336 >> 2] | 0, i2, i3, i4, 1);
 return;
}
function __ZNK7WebCore8Location8hostnameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i2 = HEAP32[i3 + 456 >> 2] | 0;
 if ((HEAP8[i2 + 360 | 0] & 1) == 0) {
  i4 = __ZN7WebCore8blankURLEv() | 0;
 } else {
  i4 = i2 + 356 | 0;
 }
 __ZNK7WebCore3URL4hostEv(i1, i4);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 12;
}
function __ZN7WebCore8LocationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore17DOMWindowPropertyD2Ev(i1 | 0);
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore8LocationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore17DOMWindowPropertyD2Ev(i1 | 0);
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore8LocationC2EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 1;
 __ZN7WebCore17DOMWindowPropertyC2EPNS_5FrameE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 48;
 return;
}
function __ZN7WebCore8LocationC1EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 1;
 __ZN7WebCore17DOMWindowPropertyC2EPNS_5FrameE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 48;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv(i1 | 0);
}
function vi___ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,vi___ZN7WebCore17DOMWindowProperty30willDestroyGlobalObjectInFrameEv__wrapper,b0,vi___ZN7WebCore17DOMWindowProperty27disconnectFrameForPageCacheEv__wrapper,b0,vi___ZN7WebCore17DOMWindowProperty36willDestroyGlobalObjectInCachedFrameEv__wrapper,b0,__ZN7WebCore8LocationD1Ev,b0,vi___ZN7WebCore17DOMWindowProperty31willDetachGlobalObjectFromFrameEv__wrapper,b0,__ZN7WebCore8LocationD0Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore17DOMWindowProperty27reconnectFrameFromPageCacheEPNS_5FrameE__wrapper,b1,__ZN7WebCore8LocationC2EPNS_5FrameE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore8Location11setProtocolERKN3WTF6StringERNS_9DOMWindowES6_Ri","__ZN7WebCore8Location7setHostERKN3WTF6StringERNS_9DOMWindowES6_","__ZN7WebCore8Location7setPortERKN3WTF6StringERNS_9DOMWindowES6_","__ZN7WebCore8Location7setHashERKN3WTF6StringERNS_9DOMWindowES6_","__ZNK7WebCore8Location8hostnameEv","__ZNK7WebCore8Location8protocolEv","__ZN7WebCore8LocationD1Ev","__ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev","__ZN7WebCore8LocationD0Ev","__ZNK7WebCore8Location6searchEv","__ZN7WebCore8Location9setSearchERKN3WTF6StringERNS_9DOMWindowES6_","__ZN7WebCore8Location6assignERKN3WTF6StringERNS_9DOMWindowES6_","__ZN7WebCore8Location11setPathnameERKN3WTF6StringERNS_9DOMWindowES6_","__ZNK7WebCore8Location6originEv","__ZNK7WebCore8Location15ancestorOriginsEv","_memset","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore13DOMStringList6appendERKN3WTF6StringE","__ZNK7WebCore8Location4hostEv","__ZNK7WebCore8Location4hashEv","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore8Location11setLocationERKN3WTF6StringERNS_9DOMWindowES6_","__ZNK7WebCore8Location4portEv","__ZN7WebCore8Location11setHostnameERKN3WTF6StringERNS_9DOMWindowES6_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore8LocationC2EPNS_5FrameE","__ZN7WebCore14SecurityOriginD2Ev","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore8Location7setHrefERKN3WTF6StringERNS_9DOMWindowES6_","__ZN7WebCore8Location7replaceERKN3WTF6StringERNS_9DOMWindowES6_","_memcpy","__ZNK7WebCore8Location4hrefEv","__ZNK7WebCore8Location8pathnameEv","__ZN7WebCore8Location6reloadERNS_9DOMWindowE"]
