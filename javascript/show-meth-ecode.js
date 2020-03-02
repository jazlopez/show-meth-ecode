/**
 *
 * Created by Jaziel Lopez
 *
 * Contact: jlopez.mx
 */

"use strict";

/**
 *
 * @param fn
 */
var fnRunStep = function(fn) {

    new Function('return fn' + ucFirst(fn) + '();')();
};

/**
 *
 * @param callables
 */
var fnMain = function(callables) {

    setInterval(function() {

        var step = document.location.hash.replace('#', '');

        resetCmd();

        for(var i = 0; i <= callables.indexOf(step); i++) fnRunStep(callables[i]);

    }, 333);
};

/**
 *
 * @param demo
 * @param i
 */
var fnWriteCmd = function(demo, i) {
    
    var ln = document.querySelectorAll('.mtc-ln').length + 1;
    var p = document.createElement('div');
    var lnContainer = document.querySelector('.mtc-editor-ro-ln');
    var lnCmd = document.createElement('div');
    
    lnCmd.innerHTML = ln.toString();
    lnCmd.classList.add('mtc-ln');
    lnContainer.appendChild(lnCmd);
    p.innerHTML = i.content;
    p.style.textIndent = i.indent.toString() + 'px';
    demo.appendChild(p);
};

/**
 *
 * @param cms
 */
var flushCmd = function(cms) {
    var demo = document.querySelector('#demo');

    cms.map(function(i) {
        fnWriteCmd(demo, i);
    });
};

/**
 *
 */
var fnGetStarted = function() {
    var cms = [
        {content: '#!/usr/bin/env python', indent: 0},
        {content: '&nbsp;', indent:0},
        {content: '"""', indent:0},
        {content: 'print("hello world")', indent:0},
        {content: 'github.com/jazlopez', indent:0},
        {content: '02/2020', indent:0},
        {content: '"""', indent:0},
        {content: '&nbsp;', indent:0}
    ];

    flushCmd(cms);
};

/**
 *
 */
var fnDeclareMain = function() {

    var cms = [
        {content: 'def main():', indent:0},
        {content: 'print("hello workd")', indent: 4}
    ];

    flushCmd(cms);
};

/**
 *
 */
var fnRunMain = function() {

    var cms = [
        {content: '&nbsp;', indent:0},
        {content: 'main()', indent: 0},
        {content: '&nbsp;', indent:0}];

    flushCmd(cms);
};

/**
 *
 */
var resetCmd = function() {

    var demo = document.querySelector('#demo');
    var lnCmd = document.querySelector('.mtc-editor-ro-ln');
    
    demo.innerHTML = '';
    lnCmd.innerHTML = '';
};

/**
 *
 * @param fn
 * @returns {string}
 */
var ucFirst = function (fn) {

    return fn.charAt(0).toUpperCase() + fn.slice(1);
};