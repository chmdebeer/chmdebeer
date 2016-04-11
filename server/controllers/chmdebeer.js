'use strict';

exports.index = {
  handler: function (request, reply) {
    reply.view('index')
  }
};

exports.career = {
  handler: function (request, reply) {
    reply.view('career')
  }
};

exports.career = {
  handler: function (request, reply) {
    reply.view('career')
  }
};

exports.welcome = {
  handler: function (request, reply) {
    reply(welcome)
  }
};

var welcome = {
  "timeline":
  {
    "headline":"Career",
    "type":"default",
    "startDate":"1991",
    "text": "<p>Some paragraph.</p>",
/*
    "asset": {
      "media":"http://2.bp.blogspot.com/-dxJbW0CG8Zs/TmkoMA5-cPI/AAAAAAAAAqw/fQpsz9GpFdo/s1600/voyage-dans-la-lune-1902-02-g.jpg",
      "credit":"",
      "caption":""
    },
*/
    "date": [
      {
        "tag": "Talks",
        "startDate": "2010,1",
        "headline": "Essence of TDD",
        "text":"<br>'institution'=>'MWEB http://www.mweb.co.za/"
      },

      {
        "tag": "Talks",
        "startDate": "2010,2",
        "headline": "Introduction to Scrum",
        "text":"<br>'institution'=>'Maccauvlei http://www.maccauvlei.co.za/"
      },

      {
        "tag": "Talks",
        "startDate": "2010,3",
        "headline": "South African ICT Skills Crisis",
        "text":"<br>'institution'=>'IEEE Software Engineering Colloquium http://ieee.org.za/Chapters/Computer/SE10/SE10-v4.htm"
      },

      {
        "tag": "Talks",
        "startDate": "2010,4",
        "headline": "The Agile Mindset",
        "text":"<br>'institution'=>'Scrum User Group South Africa http://www.scrum.org.za/events/agile-mindset"
      },

      {
        "tag": "Talks",
        "startDate": "2010,6",
        "headline": "Business in the real world",
        "text":"<br>'institution'=>'Schoolnet http://www.schoolnet.org.za/"
      },

      {
        "tag": "Talks",
        "startDate": "2010,7",
        "headline": "Paper plane factory",
        "text":"<br>'institution'=>'Scrum User Group South Africa http://www.scrum.org.za/events/sugsa-aeroplane-factory-photos"
      },

      {
        "tag": "Talks",
        "startDate": "2010,9",
        "headline": "Zero to Continuous Integration",
        "text":"<br>'institution'=>'Scrum User Group South Africa http://www.scrumalliance.org/events/200-south-africa"
      },

      {
        "tag": "Talks",
        "startDate": "2010,10",
        "headline": "Agile and Change",
        "text":"institution'=>'Alacrity<br>'url'=>Yii::app()->request->baseUrl.'/pdf/Alacrity Johannesburg Event Invitation.pdf"
      },

      {
        "tag": "Talks",
        "startDate": "2010,10",
        "headline": "Analysts and Agile",
        "text":"<br>'institution'=>'IIBA http://southafrica.iiba.org/download/Speaker_Notes/Analysts_in_Agile_101022.pdf"
      },

      {
        "tag": "Talks",
        "startDate": "2010,10",
        "headline": "Kanban",
        "text":"<br>'institution'=>'MIH http://www.mihswat.com/"
      },

      {
        "tag": "Talks",
        "startDate": "2010,11",
        "headline": "Navigating the Agile Flame Wars",
        "text":"<br>'institution'=>'Johannesburg Scrum User Group http://www.scrum.org.za/events/november-events"
      },

      {
        "tag": "Talks",
        "startDate": "2010,12",
        "headline": "Theatre of Perplexing Predicaments",
        "text":"<br>'institution'=>'Scrum User Group South Africa http://www.scrum.org.za/events/upcoming-cpt-events/december-event-in-cape-town-theatre-of-perplexing-predicaments"
      },

      {
        "tag": "Talks",
        "startDate": "2011,11",
        "headline": "Coping with resistance",
        "text":"<br>'institution'=>'Agile Vancouver http://www.agilevancouver.ca/"
      },

      {
        "tag": "Qualifications",
        "startDate": "1991,1",
        "headline": "B.Engineering (Mecahnical)",
        "text":"<br>'institution'=>'University of Pretoria http://web.up.ac.za/"
      },

      {
        "tag": "Qualifications",
        "startDate": "1993,5",
        "headline": "Government Certificate of Competency",
        "text":"<br>'institution'=>'Department of Labour - South Africa http://www.labour.gov.za/"
      },

      {
        "tag": "Qualifications",
        "startDate": "2009,2",
        "headline": "Scrum Training",
        "text":"<br>'institution'=>'Ken Schwaber http://www.controlchaos.com/"
      },

      {
        "tag": "Qualifications",
        "startDate": "2010,2",
        "headline": "Kanban for the Enterprise",
        "text":"<br>'institution'=>'David Anderson http://agilemanagement.net/"
      },

      {
        "tag": "Qualifications",
        "startDate": "2010,9",
        "headline": "Advanced Agile Facilitator Training",
        "text":"<br>'institution'=>'Dr. Siegfried Kaltenecker http://www.loop-beratung.at/index.php?id=145"
      },

      {
        "tag": "Qualifications",
        "startDate": "2011,7",
        "headline": "Coaching Agile Teams",
        "text":"<br>'institution'=>'Lyssa Adkins http://www.coachingagileteams.com/"
      },

      {
        "tag": "Qualifications",
        "startDate": "2011,7",
        "headline": "Kanban Leadership Retreat",
        "text":"<br>'institution'=>'David Anderson http://agilemanagement.net/"
      },
      {
        "tag": "Employment",
        "startDate": "1991,1",
        "endDate": "1992,8",
        "headline": "Technology Applied to Electro Mechanics",
        "text":"<br>'reportTo'=>'Owner<br>'role'=>'Mechanical Engineer<br>'scope'=>'<br>'achievements'Design of heavy electro-mechanical mining machines"
      },

      {
        "tag": "Employment",
        "startDate": "1992,11",
        "endDate": "1994,3",
        "headline": "Department of Manpower",
        "text":"http://www.labour.gov.za/<br>'reportTo'=>'Regional Director + Industry<br>'role'=>'Senior Mechanical Inspector<br>'scope'=>'<br>'achievements 'Contributions to Occupational Health and Safety Act<br>'Elevator and pressure vessel regulatory software"
      },

      {
        "tag": "Employment",
        "startDate": "1994,4",
        "endDate": "1995,3",
        "headline": "Fraser and Chalmers",
        "text":"http://www.grinaker-lta.com/<br>'reportTo'=>'Director<br>'role'=>'Mechanical Engineer<br>'scope'=>'60 Artisans<br>'achievements Construction of Carvone and TBHQ plant"

      },

      {
        "tag": "Employment",
        "startDate": "1995,4",
        "endDate": "1996,6",
        "headline": "Union Carriage and Wagon",
        "text":"http://www.ucw.co.za/<br>'reportTo'=>'Director of Engineering<br>'role'=>'Mechanical Engineer<br>'scope'=>'<br>'achievements'Designed and tested a push-pull locomotive and Electric Motor Units"

      },

      {
        "tag": "Employment",
        "startDate": "1996,8",
        "endDate": "1997,4",
        "headline": "Menu Software",
        "text":"<br>'reportTo'=>'Owner<br>'role'=>'Control Systems Engineer<br>'scope'=>'<br>'achievements'=>{ R&R Tobacco palitising system<br>'Aluminum Rim injection mould"
      },


      {
        "tag": "Employment",
        "startDate": "1997,5",
        "endDate": "2000,4",
        "headline": "Blake & Associates",
        "text":"http://www.blake.co.za/<br>'reportTo'=>'EXCO<br>'role'=>'Senior Software Developer<br>'scope'=>'5 Developers<br>'achievements Call center system<br>'Arrears account managment system"

      },

      {
        "tag": "Employment",
        "startDate": "2000,6",
        "endDate": "2002,11",
        "headline": "RCS Personal Finance",
        "text":"http://www.rcs.co.za/<br>'reportTo'=>'EXCO<br>'role'=>'Software Design Engineer<br>'scope'=>'5 Developers<br>'achievements'=>{ High-availability call centre<br>'Financial management systems"

      },

      {
        "tag": "Employment",
        "startDate": "2002,12",
        "endDate": "2004,3",
        "headline": "Tellumat",
        "text":"http://www.tellumat.co.za/<br>'reportTo'=>'Director of Engineering<br>'role'=>'Software Systems Engineer<br>'scope'=>'<br>'achievements'=>{ Pre-paid GSM communication platform"

      },

      {
        "tag": "Employment",
        "startDate": "2004,4",
        "endDate": "2006,5",
        "headline": "Silverwave Wireless",
        "text":"http://www.cdrex.com/silverwave-wireless-ltd-6706131.html<br>'reportTo'=>'EXCO<br>'role'=>'R&D Engineer (Software & Digital systems)<br>'scope'=>'8 Developers<br>'achievements'=>{ Pre-paid GSM communication platform<br>'Custom embedded systems"

      },

      {
        "tag": "Employment",
        "startDate": "2007,1",
        "endDate": "2010,1",
        "headline": "Psitek",
        "text":"http://www.psitek.com/<br>'reportTo'=>'EXCO + Stakeholders<br>'role'=>'Engineering lead and mentor<br>'scope'=>'19 Developers<br>'achievements Agile implementation<br>'High-volume, high-availability virtual vending platform<br>'Custom embedded devices"

      },

      {
        "tag": "Employment",
        "startDate": "2010,1",
        "endDate": "2011,11",
        "headline": "Scrum Sense",
        "text":"http://www.scrumsense.com/<br>'reportTo'=>'Customers<br>'role'=>'Agile and Lean consultant, coach and trainer<br>'scope'=>'<br>'achievements'Process Improvement consultant<br>'Financial oversight"

      },
      {
        "tag": "Employment",
        "startDate": "2010,1",
        "endDate": "2012,2",
        "headline": "Scrum Sense",
        "text":"http://www.scrumsense.com/<br>'reportTo'=>'Customers<br>'role'=>'Agile and Lean consultant, coach and trainer<br>'scope'=>'<br>'achievements'Process Improvement consultant<br>'Financial oversight"

      },
      {
        "tag": "Employment",
        "startDate": "2012,3",
        "endDate": "2016,2",
        "headline": "Dominion Marine Media",
        "text":"http://www.scrumsense.com/<br>'reportTo'=>'Customers<br>'role'=>'Agile and Lean consultant, coach and trainer<br>'scope'=>'<br>'achievements'Process Improvement consultant<br>'Financial oversight"

      },
      {
        "tag": "Employment",
        "startDate": "2016,2",
        "headline": "PayByPhone",
        "text":"http://www.scrumsense.com/<br>'reportTo'=>'Customers<br>'role'=>'Agile and Lean consultant, coach and trainer<br>'scope'=>'<br>'achievements'Process Improvement consultant<br>'Financial oversight"

      },
      {
        "tag": "Projects",
        "startDate": "2010,1",
        "endDate": "2010,3",
        "headline": "Identisoft",
        "text":"http://www.identisoft.net/<br>'role'=>'Agile Trainer and Consultant<br>'scope'=>'27 people in 4 teams (including hardware)<br>'achievements"

      },

      {
        "tag": "Projects",
        "startDate": "2010,5",
        "endDate": "2010,7",
        "headline": "DStv",
        "text":"http://www.dstvo.com/<br>'role'=>'Agile Coach and Trainer<br>'scope'=>'60 people in 8 teams<br>'achievements"

      },

      {
        "tag": "Projects",
        "startDate": "2010,2",
        "endDate": "2011,3",
        "headline": "Peresys",
        "text":"http://www.peresys.com/<br>'role'=>'Agile and Lean Coach, Mentor and Trainer<br>'scope'=>'28 people in 5 teams<br>'achievements"

      },

      {
        "tag": "Projects",
        "startDate": "2010,3",
        "endDate": "2011,3",
        "headline": "DirectAxis",
        "text":"<br>'role'=>'Agile and Lean Coach, Mentor and Trainer<br>'scope'=>'24 people in 4 teams<br>'achievements"

      },

      {
        "tag": "Projects",
        "startDate": "2010,9",
        "endDate": "2010,11",
        "headline": "Momentum",
        "text":"http://www.momentum.co.za/<br>'role'=>'Agile Coach and Trainer<br>'scope'=>'30 people in 5 teams<br>'achievements"

      },

      {
        "tag": "Projects",
        "startDate": "2011,1",
        "endDate": "2011,3",
        "headline": "Mix Telematics",
        "text":"http://www.mixtelematics.com<br>'role'=>'Agile Trainer and Coach<br>'scope'=>'18 people in 4 teams<br>'achievements"

      },

      {
        "tag": "Projects",
        "startDate": "2011,4",
        "endDate": "2011,8",
        "headline": "Medgate",
        "text":"http://www.medgate.com<br>'role'=>'Personal Agile Coach<br>'scope'=>'Medical Subject matter expert<br>'achievements"

      },
      {
        "tag": "Products",
        "startDate": "2002,12",
        "endDate": "2003,4",
        "headline": "PubliCell",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'publicell.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'publicell.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2003,4",
        "endDate": "2003,8",
        "headline": "M744",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'M744.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'M744.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2003,8",
        "endDate": "2003,12",
        "headline": "M10i",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'M10i.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'M10i.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2003,12",
        "endDate": "2004,3",
        "headline": "M762",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'M762.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'M762.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2004,4",
        "endDate": "2005,12",
        "headline": "G700",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'G700.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'G700.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2005,11",
        "endDate": "2006,1",
        "headline": "Identicom",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'Identicom.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'Identicom.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2005,12",
        "endDate": "2006,5",
        "headline": "O-Phone",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'O-Phone.jpg<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'O-Phone-Thumb.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2006,6",
        "endDate": "2006,12",
        "headline": "AudioTrex",
        "text":">Yii::app()->request->baseUrl./pdf/products/.'AudioTrex.jpg<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'AudioTrex-Thumb.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2007,1",
        "endDate": "2009,12",
        "headline": "PMC",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'Psitek-Management-Centre.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'pmc.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2007,4",
        "endDate": "2009,12",
        "headline": "ContentReady",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'ContentReady.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'cr.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2008,1",
        "endDate": "2009,2",
        "headline": "Kazang I",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'Kazang.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'Kazang.jpg"
      },

      {
        "tag": "Products",
        "startDate": "2009,1",
        "endDate": "2009,8",
        "headline": "Kazang II",
        "text":"Yii::app()->request->baseUrl./pdf/products/.'Kazang-Vendor.pdf<br>'image'=>Yii::app()->request->baseUrl./pdf/products/.'KazangII.jpg"
      },

      {
        "tag": "Communities",
        "startDate": "2009,7",
        "endDate": "2010,6",
        "headline": "SPIN",
        "text":"http://www.spin.org.za/<br>'role'=>'Committee member<br>'achievements"

      },

      {
        "tag": "Communities",
        "startDate": "2009,9",
        "endDate": "2010,3",
        "headline": "IEEE Software Engineering Colloquium",
        "text":"http://www.ieee.org.za/Chapters/Computer/SE10.pdf<br>'role'=>'Committee member<br>'achievements'=>{"

      },

      {
        "tag": "Communities",
        "startDate": "2010,2",
        "endDate": "2011,1",
        "headline": "Scrum User Group",
        "text":"http://www.scrum.org.za/<br>'role'=>'Committee member<br>'achievements"

      },

      {
        "tag": "Communities",
        "startDate": "2011,1",
        "endDate": "2011,11",
        "headline": "Scrum Coaches Retreat",
        "text":"http://scrumcoachretreat2011.crowdvine.com/<br>'role'=>'Co-organizer<br>'achievements"

      },

      {
        "tag": "Communities",
        "startDate": "2011,6",
        "endDate": "2012,6",
        "headline": "Agile Vancouver",
        "text":"http://www.agilevancouver.ca/<br>'role'=>'Committee member<br>'achievements"

      },

      {
        "tag": "Communities",
        "startDate": "2011,3",
        "endDate": "2011,11",
        "headline": "Agile Vancouver meet-up",
        "text":"http://www.agilemeetup.com/<br>'role'=>'Co-organiser<br>'achievements"

      }
    ]
  }
};
