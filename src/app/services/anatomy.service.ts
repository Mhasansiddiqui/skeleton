import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnatomyService {

  uniSexConfig = {
    'frt_1': {
      'hover': '<b><u>HEAD</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': 'red',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',

    },
    'frt_2': {
      'hover': '<b><u>EYE</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_3': {
      'hover': '<b><u>EYE</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_4': {
      'hover': '<b><u>EAR</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_5': {
      'hover': '<b><u>EAR</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_6': {
      'hover': '<b><u>NOSE</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_7': {
      'hover': '<b><u>MOUTH</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_8': {
      'hover': '<b><u>NECK</u></b><br>Change the color of each<br>part independently.',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_9': {
      'hover': '<b><u>CHEST</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_10': {
      'hover': 'ABDOMEN',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_11': {
      'hover': '<b><u>PELVIS</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_12': {
      'hover': '<b><u>PUBIS</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_13': {
      'hover': 'SHOULDER',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_14': {
      'hover': '<b><u>SHOULDER</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_15': {
      'hover': '<b><u>ARM</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_16': {
      'hover': '<b><u>ARM</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_17': {
      'hover': '<b><u>ELBOW</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_18': {
      'hover': '<b><u>ELBOW</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_19': {
      'hover': '<b><u>FOREARM</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_20': {
      'hover': '<b><u>FOREARM</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_21': {
      'hover': '<b><u>WRIST</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_22': {
      'hover': '<b><u>WRIST</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_23': {
      'hover': '<b><u>HAND</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_24': {
      'hover': '<b><u>HAND</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_25': {
      'hover': '<b><u>THIGH</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_26': {
      'hover': '<b><u>THIGH</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_27': {
      'hover': '<b><u>KNEE</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_28': {
      'hover': '<b><u>KNEE</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_29': {
      'hover': '<u>LEG</u><br><b>Click to open modal window!</b>',
      'enable': !0,
      'url': '##myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_30': {
      'hover': '<b><u>LEG</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_31': {
      'hover': '<b><u>ANKLE</u></b><br>Change the color of each<br>part independently.',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_32': {
      'hover': '<b><u>ANKLE</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_33': {
      'hover': '<b><u>FOOT</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_34': {
      'hover': '<b><u>FOOT</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'frt_35': {
      'hover': '<b><u>FTTTTTTT</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_1': {
      'hover': '<b><u>HEAD</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': 'red',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',

    },
    'bck_2': {
      'hover': '<b><u>EYE</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_3': {
      'hover': '<b><u>EYE</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_4': {
      'hover': '<b><u>EAR</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_5': {
      'hover': '<b><u>EAR</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_6': {
      'hover': '<b><u>NOSE</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_7': {
      'hover': '<b><u>MOUTH</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_8': {
      'hover': '<b><u>NECK</u></b><br>Change the color of each<br>part independently.',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_9': {
      'hover': '<b><u>CHEST</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_10': {
      'hover': 'ABDOMEN',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_11': {
      'hover': '<b><u>PELVIS</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_12': {
      'hover': '<b><u>PUBIS</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_13': {
      'hover': 'SHOULDER',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_14': {
      'hover': '<b><u>SHOULDER</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_15': {
      'hover': '<b><u>ARM</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_16': {
      'hover': '<b><u>ARM</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_17': {
      'hover': '<b><u>ELBOW</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_18': {
      'hover': '<b><u>ELBOW</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_19': {
      'hover': '<b><u>FOREARM</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_20': {
      'hover': '<b><u>FOREARM</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_21': {
      'hover': '<b><u>WRIST</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_22': {
      'hover': '<b><u>WRIST</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_23': {
      'hover': '<b><u>HAND</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_24': {
      'hover': '<b><u>HAND</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_25': {
      'hover': '<b><u>THIGH</u></b><br><span style="color: #ff1a75;">*Link each part to any webpage*</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_26': {
      'hover': '<b><u>THIGH</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_27': {
      'hover': '<b><u>KNEE</u></b><br>Write any text and load images<br><img src="assets/images/hover.png">',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_28': {
      'hover': '<b><u>KNEE</u></b><br><span style="color: #808080;">Set any part as:<br><b>"active"</b> > clickable or<br><b>"inactive"</b> > not clickable.</span>',
      'enable': !0,
      'url': '#myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    },
    'bck_29': {
      'hover': '<u>LEG</u><br><b>Click to open modal window!</b>',
      'enable': !0,
      'url': '##myModal',
      'target': 'modal',
      'upColor': '#FF0000',
      'upOpacity': '0',
      'outlineUpColor': '#ff8080',
      'outlineUpOpacity': '1',
      'overColor': '#FF0000',
      'overOpacity': '0.3',
      'outlineOverColor': '#ff8080',
      'outlineOverOpacity': '1',
      'downColor': '#FF0000',
      'downOpacity': '0.7',
      'outlineDownColor': '#ff8080',
      'outlineDownOpacity': '1',
    }
  }
  constructor() { }
}
