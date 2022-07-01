function isTouchEnabled() { return (("ontouchstart" in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
} jQuery(document).ready(function () { jQuery("#frt_base").hide().animate({
        "opacity": "0"
    },
    100); jQuery("#bck_base").hide().animate({
        "opacity": "0"
    },
    100); jQuery("#rht_base").hide().animate({
        "opacity": "0"
    },
    100); jQuery(".go_brain_frt").on("click", function () { jQuery("#lft_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#bck_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#rht_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#frt_base").show().animate({
            "opacity": "1"
        },
        100)
    }); jQuery(".go_brain_bck").on("click", function () { jQuery("#rht_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#lft_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#frt_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#bck_base").show().animate({
            "opacity": "1"
        },
        100)
    }); jQuery(".go_brain_rht").on("click", function () { jQuery("#lft_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#frt_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#bck_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#rht_base").show().animate({
            "opacity": "1"
        },
        100)
    }); jQuery(".go_brain_lft").on("click", function () { jQuery("#frt_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#bck_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#rht_base").hide().animate({
            "opacity": "0"
        },
        100); jQuery("#lft_base").show().animate({
            "opacity": "1"
        },
        100)
    })
}); jQuery(function () { jQuery("path[id^=ana]").each(function (i, e) { anaaddEvent(jQuery(e).attr("id"))
    })
}); function anaaddEvent(id, relationId) { var arr = id.split(""); var _obj = jQuery("#" + id + "," + arr.slice().join("")); _obj.attr({
        "fill": "rgba(255, 0, 0, 0)",
        "stroke": anaconfig.default.outlineColor
    }); _obj.attr({
        "cursor": "default"
    }); if (anaconfig[id
    ].enabled === !0) { _obj.attr({
            "cursor": "pointer"
        }); _obj.hover(function () { jQuery("#organs-tip").show().html(anaconfig[id
            ].hover); _obj.css({
                "fill": "rgba(255, 0, 0, 0.3)"
            })
        }, function () { jQuery("#organs-tip").hide(); jQuery("#" + id).css({
                "fill": "rgba(255, 0, 0, 0)"
            })
        }); if (anaconfig[id
        ].target !== "none") { _obj.mousedown(function () { jQuery("#" + id).css({
                    "fill": "rgba(255, 0, 0, 0.7)"
                })
            })
        } _obj.mouseup(function () { jQuery("#" + id).css({
                "fill": "rgba(255, 0, 0, 0.3)"
            }); if (anaconfig[id
            ].target === "new_window") { window.open(anaconfig[id
                ].url)
            } else if (anaconfig[id
            ].target === "same_window") { window.parent.location.href = anaconfig[id
                ].url
            } else if (anaconfig[id
            ].target === "modal") { jQuery(anaconfig[id
                ].url).modal("show")
            }
        }); _obj.mousemove(function (e) { var x = e.pageX + 10, y = e.pageY + 15; var tipw = jQuery("#organs-tip").outerWidth(), tiph = jQuery("#organs-tip").outerHeight(), x = (x + tipw > jQuery(document).scrollLeft() + jQuery(window).width()) ? x - tipw - (20 * 2) : x; y = (y + tiph > jQuery(document).scrollTop() + jQuery(window).height()) ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y; jQuery("#organs-tip").css({ left: x, top: y
            })
        }); if (isTouchEnabled()) { _obj.on("touchstart", function (e) { var touch = e.originalEvent.touches[
                    0
                ]; var x = touch.pageX + 10, y = touch.pageY + 15; var tipw = jQuery("#organs-tip").outerWidth(), tiph = jQuery("#organs-tip").outerHeight(), x = (x + tipw > jQuery(document).scrollLeft() + jQuery(window).width()) ? x - tipw - (20 * 2) : x; y = (y + tiph > jQuery(document).scrollTop() + jQuery(window).height()) ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y; jQuery("#" + id).css({
                    "fill": "rgba(255, 0, 0, 0.7)"
                }); jQuery("#organs-tip").show().html(anaconfig[id
                ].hover); jQuery("#organs-tip").css({ left: x, top: y
                })
            }); _obj.on("touchend", function () { jQuery("#" + id).css({
                    "fill": "rgba(255, 0, 0, 0)"
                }); if (anaconfig[id
                ].target === "new_window") { window.open(anaconfig[id
                    ].url)
                } else if (anaconfig[id
                ].target === "same_window") { window.parent.location.href = anaconfig[id
                    ].url
                } else if (anaconfig[id
                ].target === "modal") { jQuery(anaconfig[id
                    ].url).modal("show")
                }
            })
        }
    }
} var anaconfig = {
    "default": {
        "outlineColor": "#FF0000"
    },
    "ana1": {
        "hover": "<b><u>BRAIN STEM</u></b><br>Write any text and load images<br><img src='assets/images/hover.png'>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana2": {
        "hover": "<b><u>CEREBELLUM</u></b><br><span style='color: #808080;'>Set any part as:<br><b>'active'</b> clickable or<br><b>'inactive'</b> > not clickable.</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana3": {
        "hover": "<u>LEFT FRONTAL LOBE</u><br><b>Click to open modal window!</b>",
        "enabled": !0,
        "url": "#mymodal",
        "target": "modal"
    },
    "ana4": {
        "hover": "<b><u>LEFT OCCIPITAL LOBE</u></b><br>Write any text and load images<br><img src='assets/images/hover.png'>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana5": {
        "hover": "<b><u>LEFT PARIETAL LOBE</u></b><br>You can set any part as:<br><b>'active'</b> clickable or<br><span style='color: #808080;'><b>'inactive'</b> > not clickable.</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana6": {
        "hover": "<b><u>LEFT TEMPORAL LOBE</u></b><br>You can set any part as:<br><b>'active'</b> clickable or<br><span style='color: #808080;'><b>'inactive'</b> > not clickable.</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana7": {
        "hover": "<b><u>BRAIN STEM</u></b><br>Write any text and load images<br><img src='assets/images/hover.png'>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana8": {
        "hover": "<b><u>LEFT CEREBELLUM</u></b><br>Change the hover info. for each<br>part independently.",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana9": {
        "hover": "<b><u>RIGHT CEREBELLUM</u></b><br><span style='color: #ff1a75;'>*Link each part to any webpage*</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana10": {
        "hover": "LEFT FRONTAL LOBE",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana11": {
        "hover": "<b><u>RIGHT FRONTAL LOBE</u></b><br><span style='color: #808080;'>Set any part as:<br><b>'active'</b> clickable or<br><b>'inactive'</b> > not clickable.</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana12": {
        "hover": "<b><u>LEFT TEMPORAL LOBE</u></b><br><span style='color: #ff1a75;'>*Link each part to any webpage*</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana13": {
        "hover": "<b><u>RIGHT TEMPORAL LOBE</u></b><br>Write any text and load images<br><img src='assets/images/hover.png'>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana14": {
        "hover": "<b><u>BRAIN STEM</u></b><br><span style='color: #808080;'>Set any part as:<br><b>'active'</b> clickable or<br><b>'inactive'</b> > not clickable.</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana15": {
        "hover": "<b><u>CEREBELLUM</u></b><br>You can write different information<br>for each organ.",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana16": {
        "hover": "<b><u>LEFT OCCIPITAL LOBE</u></b><br>Write any text and load images<br><img src='assets/images/hover.png'>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana17": {
        "hover": "<b><u>RIGHT OCCIPITAL LOBE</u></b><br>You can set any part as:<br><b>'active'</b> clickable or<br><span style='color: #808080;'><b>'inactive'</b> > not clickable.</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana18": {
        "hover": "<b><u>LEFT PARIETAL LOBE</u></b><br>You can set any part as:<br><b>'active'</b> clickable or<br><span style='color: #808080;'><b>'inactive'</b> > not clickable.</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana19": {
        "hover": "<b><u>RIGHT PARIETAL LOBE</u></b><br>Write any text and load images<br><img src='assets/images/hover.png'>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana20": {
        "hover": "<b><u>LEFT TEMPORAL LOBE</u></b><br>Change the hover info. for each<br>part independently.",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana21": {
        "hover": "<b><u>RIGHT TEMPORAL LOBE</u></b><br><span style='color: #ff1a75;'>*Link each part to any webpage*</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana22": {
        "hover": "BRAIN STEM",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana23": {
        "hover": "<b><u>CEREBELLUM</u></b><br><span style='color: #808080;'>Set any part as:<br><b>'active'</b> clickable or<br><b>'inactive'</b> > not clickable.</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana24": {
        "hover": "<b><u>RIGHT FRONTAL LOBE</u></b><br><span style='color: #ff1a75;'>*Link each part to any webpage*</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana25": {
        "hover": "<b><u>RIGHT OCCIPITAL LOBE</u></b><br><span style='color: #808080;'>Set any part as:<br><b>'active'</b> clickable or<br><b>'inactive'</b> > not clickable.</span>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana26": {
        "hover": "<b><u>RIGHT PARIETAL LOBE</u></b><br>You can write different information<br>for each organ.",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    },
    "ana27": {
        "hover": "<b><u>RIGHT TEMPORAL LOBE</u></b><br>Write any text and load images<br><img src='assets/images/hover.png'>",
        "url": "https://www.humananatomyillustrations.com/",
        "target": "same_window",
        "enabled": !0
    }
}; var spotsconfiga = {
    "pins": [
        {
            "hover": "<u><b>Example 'A'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.",
            "pos_X": 278,
            "pos_Y": 221,
            "size": 70,
            "outline": "#cc2900",
            "upColor": "#ff6600",
            "overColor": "#cc2900",
            "url": "https://www.humananatomyillustrations.com/",
            "target": "new_window",
            "enabled": !0
        },
        {
            "hover": "<u><b>Example 'B'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.",
            "pos_X": 610,
            "pos_Y": 450,
            "size": 100,
            "outline": "#FF0000",
            "upColor": "rgba(255, 0, 0, 0.3)",
            "overColor": "rgba(255, 0, 0, 0.7)",
            "url": "https://www.humananatomyillustrations.com/",
            "target": "same_window",
            "enabled": !0
        },
    ]
}; var spotsconfigb = {
    "pins": [
        {
            "hover": "<u><b>Example 'D'</b></u><br>Add unlimited number of spots<br>anywhere on the diagram and<br>customize its colors and size and<br>link it to any webpage.",
            "pos_X": 650,
            "pos_Y": 280,
            "size": 70,
            "outline": "#FF0000",
            "upColor": "rgba(255, 0, 0, 0.3)",
            "overColor": "rgba(255, 0, 0, 0.7)",
            "url": "https://www.humananatomyillustrations.com/",
            "target": "same_window",
            "enabled": !0
        },
    ]
}; function isTouchEnabled() { return (("ontouchstart" in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
} jQuery(function () { var pins_len = spotsconfiga.pins.length; if (pins_len > 0) { var xmlns = "http://www.w3.org/2000/svg"; var tsvg_obj = document.getElementById("anaspotsa"); var svg_circle; for (var i = 0; i < pins_len; i++) { svg_circle = document.createElementNS(xmlns,
            "circle"); svg_circle.setAttributeNS(null,
            "cx", spotsconfiga.pins[i
            ].pos_X); svg_circle.setAttributeNS(null,
            "cy", spotsconfiga.pins[i
            ].pos_Y); svg_circle.setAttributeNS(null,
            "r", spotsconfiga.pins[i
            ].size / 2); svg_circle.setAttributeNS(null,
            "fill", spotsconfiga.pins[i
            ].upColor); svg_circle.setAttributeNS(null,
            "stroke", spotsconfiga.pins[i
            ].outline); svg_circle.setAttributeNS(null,
            "stroke-width",
            1); svg_circle.setAttributeNS(null,
            "id",
            "anaspotsa_" + i); tsvg_obj.appendChild(svg_circle); anaspotsaAddEvent(i)
        }
    }
}); function anaspotsaAddEvent(id) { var obj = jQuery("#anaspotsa_" + id); if (spotsconfiga.pins[id
    ].enabled === !0) { obj.attr({
            "cursor": "pointer"
        }); obj.hover(function () { jQuery("#organs-tip").show().html(spotsconfiga.pins[id
            ].hover); obj.css({
                "fill": spotsconfiga.pins[id
                ].overColor
            })
        }, function () { jQuery("#organs-tip").hide(); obj.css({
                "fill": spotsconfiga.pins[id
                ].upColor
            })
        }); obj.mouseup(function () { obj.css({
                "fill": spotsconfiga.pins[id
                ].overColor
            }); if (spotsconfiga.pins[id
            ].target === "new_window") { window.open(spotsconfiga.pins[id
                ].url)
            } else if (spotsconfiga.pins[id
            ].target === "same_window") { window.parent.location.href = spotsconfiga.pins[id
                ].url
            } else if (spotsconfiga.pins[id
            ].target === "modal") { jQuery(spotsconfiga.pins[id
                ].url).modal("show")
            }
        }); obj.mousemove(function (e) { var x = e.pageX + 10, y = e.pageY + 15; var tipw = jQuery("#organs-tip").outerWidth(), tiph = jQuery("#organs-tip").outerHeight(), x = (x + tipw > jQuery(document).scrollLeft() + jQuery(window).width()) ? x - tipw - (20 * 2) : x; y = (y + tiph > jQuery(document).scrollTop() + jQuery(window).height()) ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y; jQuery("#organs-tip").css({ left: x, top: y
            })
        }); if (isTouchEnabled()) { obj.on("touchstart", function (e) { var touch = e.originalEvent.touches[
                    0
                ]; var x = touch.pageX + 10, y = touch.pageY + 15; var tipw = jQuery("#organs-tip").outerWidth(), tiph = jQuery("#organs-tip").outerHeight(), x = (x + tipw > jQuery(document).scrollLeft() + jQuery(window).width()) ? x - tipw - (20 * 2) : x; y = (y + tiph > jQuery(document).scrollTop() + jQuery(window).height()) ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y; jQuery("#organs-tip").show().html(spotsconfiga.pins[id
                ].hover); jQuery("#organs-tip").css({ left: x, top: y
                })
            }); obj.on("touchend", function () { jQuery("#" + id).css({
                    "fill": spotsconfiga.pins[id
                    ].upColor
                }); if (spotsconfiga.pins[id
                ].target === "new_window") { window.open(spotsconfiga.pins[id
                    ].url)
                } else if (spotsconfiga.pins[id
                ].target === "same_window") { window.parent.location.href = spotsconfiga.pins[id
                    ].url
                } else if (spotsconfiga.pins[id
                ].target === "modal") { jQuery(spotsconfiga.pins[id
                    ].url).modal("show")
                }
            })
        }
    }
} jQuery(function () { var pins_len = spotsconfigb.pins.length; if (pins_len > 0) { var xmlns = "http://www.w3.org/2000/svg"; var tsvg_obj = document.getElementById("anaspotsb"); var svg_circle; for (var i = 0; i < pins_len; i++) { svg_circle = document.createElementNS(xmlns,
            "circle"); svg_circle.setAttributeNS(null,
            "cx", spotsconfigb.pins[i
            ].pos_X); svg_circle.setAttributeNS(null,
            "cy", spotsconfigb.pins[i
            ].pos_Y); svg_circle.setAttributeNS(null,
            "r", spotsconfigb.pins[i
            ].size / 2); svg_circle.setAttributeNS(null,
            "fill", spotsconfigb.pins[i
            ].upColor); svg_circle.setAttributeNS(null,
            "stroke", spotsconfigb.pins[i
            ].outline); svg_circle.setAttributeNS(null,
            "stroke-width",
            1); svg_circle.setAttributeNS(null,
            "id",
            "anaspotsb_" + i); tsvg_obj.appendChild(svg_circle); anaspotsbAddEvent(i)
        }
    }
}); function anaspotsbAddEvent(id) { var obj = jQuery("#anaspotsb_" + id); if (spotsconfigb.pins[id
    ].enabled === !0) { obj.attr({
            "cursor": "pointer"
        }); obj.hover(function () { jQuery("#organs-tip").show().html(spotsconfigb.pins[id
            ].hover); obj.css({
                "fill": spotsconfigb.pins[id
                ].overColor
            })
        }, function () { jQuery("#organs-tip").hide(); obj.css({
                "fill": spotsconfigb.pins[id
                ].upColor
            })
        }); obj.mouseup(function () { obj.css({
                "fill": spotsconfigb.pins[id
                ].overColor
            }); if (spotsconfigb.pins[id
            ].target === "new_window") { window.open(spotsconfigb.pins[id
                ].url)
            } else if (spotsconfigb.pins[id
            ].target === "same_window") { window.parent.location.href = spotsconfigb.pins[id
                ].url
            } else if (spotsconfigb.pins[id
            ].target === "modal") { jQuery(spotsconfigb.pins[id
                ].url).modal("show")
            }
        }); obj.mousemove(function (e) { var x = e.pageX + 10, y = e.pageY + 15; var tipw = jQuery("#organs-tip").outerWidth(), tiph = jQuery("#organs-tip").outerHeight(), x = (x + tipw > jQuery(document).scrollLeft() + jQuery(window).width()) ? x - tipw - (20 * 2) : x; y = (y + tiph > jQuery(document).scrollTop() + jQuery(window).height()) ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y; jQuery("#organs-tip").css({ left: x, top: y
            })
        }); if (isTouchEnabled()) { obj.on("touchstart", function (e) { var touch = e.originalEvent.touches[
                    0
                ]; var x = touch.pageX + 10, y = touch.pageY + 15; var tipw = jQuery("#organs-tip").outerWidth(), tiph = jQuery("#organs-tip").outerHeight(), x = (x + tipw > jQuery(document).scrollLeft() + jQuery(window).width()) ? x - tipw - (20 * 2) : x; y = (y + tiph > jQuery(document).scrollTop() + jQuery(window).height()) ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y; jQuery("#organs-tip").show().html(spotsconfigb.pins[id
                ].hover); jQuery("#organs-tip").css({ left: x, top: y
                })
            }); obj.on("touchend", function () { jQuery("#" + id).css({
                    "fill": spotsconfigb.pins[id
                    ].upColor
                }); if (spotsconfigb.pins[id
                ].target === "new_window") { window.open(spotsconfigb.pins[id
                    ].url)
                } else if (spotsconfigb.pins[id
                ].target === "same_window") { window.parent.location.href = spotsconfigb.pins[id
                    ].url
                } else if (spotsconfigb.pins[id
                ].target === "modal") { jQuery(spotsconfigb.pins[id
                    ].url).modal("show")
                }
            })
        }
    }
}