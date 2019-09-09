/*********************************************************************************
*  WEB422 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Nikolai Rubtcov Student ID: 134471168 Date: September 14 2018
*
*
********************************************************************************/ 

$(document).ready(function () {
    $("#teams-menu").on("click", function () {
        event.preventDefault();
        $.ajax({
            url: "https://protected-wildwood-80515.herokuapp.com/teams",
            type: "GET",
            //data: ,
            contentType: "application/json"
        })
            .done(function (result) {
                $(".well").empty();
                $(".well").append("<h3>Teams</h3>");
                $(".well").append(JSON.stringify(result));

            })
            .fail(function (err) {
                console.log("error: " + err.statusText);
            })
    })
});

$(document).ready(function () {
    $("#employees-menu").on("click", function () {
        event.preventDefault();
        $.ajax({
            url: "https://protected-wildwood-80515.herokuapp.com/employees",
            type: "GET",
            //data: ,
            contentType: "application/json"
        })
            .done(function (result) {
                $(".well").empty();
                $(".well").append("<h3>Employees</h3>");
                $(".well").append(JSON.stringify(result));

            })
            .fail(function (err) {
                console.log("error: " + err.statusText);
            })
    })
});


$(document).ready(function () {
    $("#projects-menu").on("click", function () {
        event.preventDefault();
        $.ajax({
            url: "https://protected-wildwood-80515.herokuapp.com/projects",
            type: "GET",
            //data: ,
            contentType: "application/json"
        })
            .done(function (result) {
                $(".well").empty();
                $(".well").append("<h3>Projects</h3>");
                $(".well").append(JSON.stringify(result));

            })
            .fail(function (err) {
                console.log("error: " + err.statusText);
            })
    })
});

$(document).ready(function () {
    $("#positions-menu").on("click", function () {
        event.preventDefault();
        $.ajax({
            url: "https://protected-wildwood-80515.herokuapp.com/positions",
            type: "GET",
            //data: ,
            contentType: "application/json"
        })
            .done(function (result) {
                $(".well").empty();
                $(".well").append("<h3>Positions</h3>");
                $(".well").append(JSON.stringify(result));

            })
            .fail(function (err) {
                console.log("error: " + err.statusText);
            })
    })
});