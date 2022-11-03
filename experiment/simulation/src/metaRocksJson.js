tempMasterJson = {};
var masterJsonArr = [];
var tempQuestionArr = [];
masterJson = {};

questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "None of these",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"correctAns": "Green",
	"wrongAns1": "Gray",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Black",
	"correctAns": "White",
	"wrongAns2": "Dark green",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous",
	"wrongAns2": "Pearly",
	"wrongAns3": "Dull"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns1": "Poor",
	"wrongAns2": "Perfect",
	"wrongAns3": "Flat cleavage surface of a medium-grade schist"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "5.5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.9-3.3",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Ca<sub>2</sub>(Mg<sub>4.5-2.5</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>)Si<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 1,
	"originalName": "Actiolite Schist",
	"dummyName": "metaRock1",
	"src": "images/ACTINOLLITESCHIST.jpg",
	"src1": "images/ACTINOLLITESCHIST1.jpg",
	"src2": "images/ACTINOLLITESCHIST2.jpg",
	"chemical_Classification": "NA",
	"colour": "Green",
	"streak": "White",
	"luster": "Vitreous",
	"mohs_Hardness": "5.5-6",
	"cleavage": "Perfect	in two directions at close to 60 to 120 degree angles",
	"diaphaneity": "Opaque",
	"gravity": "2.9-3.3",
	"chemical_Composition": "Ca<sub>2</sub>(Mg<sub>4.5-2.5</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>)Si<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>",
	"specialProperties": " Actinolite is an amphibole mineral abundant in the metamorphic rocks called schists that are easily divided into layers or flakes. The substance, which is typically formed during low-grade metamorphism of certain igneous or carbon-rich rocks, occurs in several different varieties. ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// Second metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Regional Metamorphism",
	"wrongAns1": "Silicate",
	"wrongAns2": "Quartz",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Brown",
	"correctAns": "Light- and dark-coloured layer",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Greenish black to brownish black",
	"correctAns": "Gneisses tend to be banded on a large scale with layers and streaks of darker and lighter coloured gneiss",
	"wrongAns2": "Light blue to dark blue",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Silky",
	"correctAns": "Dull",
	"wrongAns2": "Pearly",
	"wrongAns3": "vitreous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Poor",
	"wrongAns1": "Flat cleavage surface of a medium-grade schist",
	"wrongAns2": "Perfect",
	"wrongAns3": "Rhombohedral cleavage"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Quartz and feldspar with hornblende and mica",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Transparent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 2,
	"originalName": "Augen Gneiss",
	"dummyName": "metaRock2",
	"src": "images/AUGENGNEISS.jpg",
	"src1": "images/AUGENGNEISS1.jpg",
	"src2": "images/AUGENGNEISS2.jpg",
	"chemical_Classification": "Regional Metamorphism",
	"colour": "Light- and dark-coloured layers",
	"streak": "Gneisses tend to be banded on a large scale with layers and streaks of darker and lighter coloured gneiss",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "Poor",
	"diaphaneity": "Opaque",
	"gravity": "2.7",
	"chemical_Composition": "Quartz and feldspar with hornblende and mica",
	"specialProperties": " A medium- to coarse-grained, banded, regional metamorphic rock composed mainly of quartz and feldspar with hornblende and mica also present in variable quantities, and characterized by large ovoidal megacrysts of feldspar known as augens (derived from the German for eyes). ",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// Third metaRock

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Fe Ore",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Red to Brown",
	"correctAns": "Blood Red",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Red ",
	"correctAns": "Red to Reddish Brown",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Dull",
	"correctAns": "Metallic, earthy",
	"wrongAns2": "vitreous",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "None",
	"wrongAns1": "Perfect",
	"wrongAns2": "Rhombohedral cleavage",
	"wrongAns3": "Poor"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "5-6.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-5",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "5-5.3",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.2-2.9",
	"wrongAns3": "3.5-2"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns1": "BaSO<sub>4</sub>Mg<sub>4.5-2.3</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>",
	"wrongAns2": "SiO<sub>2</sub>Cu(OH)<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. "
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 3,
	"originalName": "Banded Haematite Quartzite",
	"dummyName": "metaRock3",
	"src": "images/BANDEDHAEMATITE.jpg",
	"src1": "images/BANDEDHAEMATITE1.jpg",
	"src2": "images/BANDEDHAEMATITE2.jpg",
	"chemical_Classification": "Fe Ore",
	"colour": "Blood Red",
	"streak": "Red to Reddish Brown",
	"luster": "Metallic, earthy",
	"mohs_Hardness": "5 - 6.5",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "5 to 5.3",
	"chemical_Composition": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"specialProperties": " It also occurs as short, black, rhombohedral crystals and may have an iridescent tarnish. The soft, fine-grained, and earthy form of hematite is used as a pigment. ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourth metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Medium- to high-grade foliated metamorphic rock.",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Banded Haematite Quartzite",
	"wrongAns3": "Fe Ore"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "White",
	"correctAns": "Black, dark green, dark brown",
	"wrongAns2": " Brown",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Red to Reddish Brown ",
	"correctAns": "White and occasionally greyish flakes",
	"wrongAns2": "Black",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Dull",
	"correctAns": "Pearly",
	"wrongAns2": "Shiny",
	"wrongAns3": "Metallic, earthy"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Perfect",
	"wrongAns1": "None",
	"wrongAns2": "Rhombohedral cleavage",
	"wrongAns3": "Poor"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2.5-3	",
	"wrongAns1": "3.5-4",
	"wrongAns2": "6.5-5",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.7-3.4",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.2-2.9",
	"wrongAns3": "3.5-2"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite	",
	"wrongAns1": "BaSO<sub>4</sub>Mg<sub>4.5-2.3</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>",
	"wrongAns2": "SiO<sub>2</sub>Cu(OH)<sub>2</sub>",
	"wrongAns3": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Transparent to translucent to opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Opaque to translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 4,
	"originalName": "Biotite Schist",
	"dummyName": "metaRock4",
	"src": "images/Biotite_Schist.jpg",
//	"src1": "images/Biotite_Schist1.jpg",
//	"src2": "images/Biotite_Schist2.jpg",
	"chemical_Classification": "Medium- to high-grade foliated metamorphic rock.",
	"colour": "Black, dark green, dark brown",
	"streak": "White and occasionally greyish flakes",
	"luster": "Pearly",
	"mohs_Hardness": "2.5-3",
	"cleavage": "Perfect",
	"diaphaneity": "Transparent to translucent to opaque	",
	"gravity": "2.7-3.4",
	"chemical_Composition": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite",
	"specialProperties": " Schist is a type of metamorphic rock in which lamellar minerals, such as muscovite, biotite, and chlorite, or prismatic minerals, such as hornblende and tremolite, are oriented parallel to a secondary platy or laminated structure termed the schistosity. ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Fifth metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Red",
	"correctAns": "Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Black",
	"correctAns": "Green, Brown",
	"wrongAns2": "Pale gray",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous",
	"wrongAns2": "Dull",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Rhombohedral cleavage",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree anglesIndiscernible",
	"wrongAns3": "Poor"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2-2.5	",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5.6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "3",
	"wrongAns1": "3.2",
	"wrongAns2": "2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "It is primarily composed of quartz, sericite mica, and chlorite	",
	"wrongAns1": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Transparent",
	"wrongAns1": "Opaque",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 5,
	"originalName": "Chlorite Phyllite",
	"dummyName": "metaRock5",
	"src": "images/CHLORITEPHYLLITE.jpg",
	"src1": "images/CHLORITEPHYLLITE1.jpg",
	"src2": "images/CHLORITEPHYLLITE2.jpg",
	
	"chemical_Classification": "Silicate",
	"colour": "Brown",
	"streak": "Green, Brown",
	"luster": "Vitreous",
	"mohs_Hardness": "2 to 2.5",
	"cleavage": "Perfect	",
	"diaphaneity": "Transparent",
	"gravity": "3",
	"chemical_Composition": "It is primarily composed of quartz, sericite mica, and chlorite	",
	"specialProperties": " Unlike slate, phyllite has a characteristic glossy sheen, its foliation is usually slightly contorted, and it rarely retains traces of the original sedimentary bedding . Phyllite also lacks the large, visible mica crystals and high-grade index minerals diagnostic of schist , its higher-grade metamorphic cousin. ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Sixth metaRock

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Silicate	",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Green",
	"correctAns": "Various shades of Green ",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Pale gray",
	"correctAns": "Pale green to gray ",
	"wrongAns2": "Black",
	"wrongAns3": "Gray"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Vitreous, dull, pearly",
	"wrongAns2": "Dull",
	"wrongAns3": "Pearly"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Perfect 001",
	"wrongAns1": "Rhombohedral cleavage",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree anglesIndiscernible",
	"wrongAns3": "Poor"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2-2.5	",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5.6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.6-3.3",
	"wrongAns1": "3.2",
	"wrongAns2": "2.9-3.2",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "(Mg,Fe)<sub>3</sub>(Si,Al)<sub>4</sub>O<sub>10</sub>(OH)<sub>2</sub>.(Mg,Fe)<sub>3</sub>(OH)<sub>6</sub>	",
	"wrongAns1": "Ca<sub>2</sub>(Mg<sub>4.5-2.3</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>)Si<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "None of these",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 6,
	"originalName": "Chlorite Quartz",
	"dummyName": "metaRock6",
	"src": "images/Chlorite_Quartz.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Various shades of Green ",
	"streak": "Pale green to gray ",
	"luster": "Vitreous, dull, pearly",
	"mohs_Hardness": "2-2.5",
	"cleavage": "Perfect	001",
	"diaphaneity": "NA",
	"gravity": "2.6-3.3",
	"chemical_Composition": "(Mg,Fe)<sub>3</sub>(Si,Al)<sub>4</sub>O<sub>10</sub>(OH)<sub>2</sub>.(Mg,Fe)<sub>3</sub>(OH)<sub>6</sub>	",
	"specialProperties": " Chlorites characteristically occur as alteration products of other minerals. They are common rock-forming minerals in clastic sediments and in hydrothermally altered igneous rocks; chlorites are widespread and important constituents of such metamorphic rocks as greenschists or chlorite schists.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// Seventh metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Medium- to high-grade foliated metamorphic rock",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Quartz"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Black",
	"correctAns": "Shiny, medium gray",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Pale gray",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Silky",
	"correctAns": "High",
	"wrongAns2": "Dull",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Schists easily split along cleavage lines into thin flexible layers	",
	"wrongAns1": "Rhombohedral cleavage",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "4-5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "5-6",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "3.58-4.32",
	"wrongAns1": "4.3-5",
	"wrongAns2": "3.2-5.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite	",
	"wrongAns1": "It is primarily composed of quartz, sericite mica, and chlorite",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Transparent to Translucent to Opaque",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "Translucent to opaque",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);


//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 7,
	"originalName": "Chorite schist with Garnet",
	"dummyName": "metaRock7",
	"src": "images/Chorite_schist_with_Garnet.jpg",
	"chemical_Classification": "Medium- to high-grade foliated metamorphic rock",
	"colour": "Shiny, medium gray",
	"streak": "White",
	"luster": "High",
	"mohs_Hardness": "4 to 5",
	"cleavage": "Schists easily split along cleavage lines into thin flexible layers",
	"diaphaneity": "Transparent to Translucent to Opaque",
	"gravity": "3.58-4.32",
	"chemical_Composition": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite",
	"specialProperties": " The ease with which the rock splits along the aligned grains accounts for the schistosity. Though not a defining characteristic, schists very often contain porphyroblasts (individual crystals of unusual size) of distinctive minerals, such as garnet, staurolite, kyanite, sillimanite, or cordierite. ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// Eighth metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Mostly quartz and feldspar",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Medium- to high-grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Black",
	"correctAns": "light in colour, but it can be quite dark",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Light Gray",
	"correctAns": "Darker and lighter coloured gneiss",
	"wrongAns2": "Black",
	"wrongAns3": "lightBrown "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Silky",
	"correctAns": "High",
	"wrongAns2": "Dull",
	"wrongAns3": "Vitreous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Poor	",
	"wrongAns1": "None",
	"wrongAns2": "Perfect",
	"wrongAns3": "Rhombohedral cleavage"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "8-9",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.7-2.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "3.2-5.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Feldspars, quartz, mica, and smaller amounts of dark colored minerals like hornblende",
	"wrongAns1": "It is primarily composed of quartz, sericite mica, and chlorite",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Opaque",
	"wrongAns1": "Translucent to opaque",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 8,
	"originalName": "Granite Gneiss",
	"dummyName": "metaRock8",
	"src": "images/GRANITEGNEISS.jpg",
	"src1": "images/GRANITEGNEISS1.jpg",
	"src2": "images/GRANITEGNEISS2.jpg",
	"chemical_Classification": "Mostly quartz and feldspar",
	"colour": "It is usually light in colour, but it can be quite dark",
	"streak": "Darker and lighter coloured gneiss",
	"luster": "High",
	"mohs_Hardness": "6-7",
	"cleavage": "Poor",
	"diaphaneity": "Opaque",
	"gravity": "2.7-2.8",
	"chemical_Composition": "Feldspars, quartz, mica, and smaller amounts of dark colored minerals like hornblende",
	"specialProperties": " Gneiss is foliated, which means that it has layers of lighter and darker minerals. These layers are of different densities and come about because of the intense pressure used to form gneiss. Gneiss is made up of coarse-grained minerals such as quartz and feldspar. ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


// Ninth metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": " Medium- to high-grade foliated metamorphic rock",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Mostly quartz and feldspar"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "Silver-gray",
	"wrongAns2": "White",
	"wrongAns3": "Silver"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": " Gray",
	"correctAns": "White",
	"wrongAns2": "Pale gray",
	"wrongAns3": "Silver "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Silky",
	"correctAns": "High",
	"wrongAns2": "Dull",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Flat cleavage surface of a medium-grade schist",
	"wrongAns1": "None",
	"wrongAns2": "Poor",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2.5",
	"wrongAns1": "3",
	"wrongAns2": "2.1",
	"wrongAns3": "5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.1-2.3	",
	"wrongAns1": "3.2-3.8",
	"wrongAns2": "1.9-2.6",
	"wrongAns3": "3"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite",
	"wrongAns1": "It is primarily composed of quartz, sericite mica, and chlorite",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Feldspars, quartz, mica, and smaller amounts of dark colored minerals like hornblende"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Translucent to opaque",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "None of these",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 9,
	"originalName": "Graphite Mica Schist",
	"dummyName": "metaRock9",
	"src": "images/Graphite_Mica_Schist.jpg",

	"chemical_Classification": "Medium- to high-grade foliated metamorphic rock.",
	"colour": "Silver-gray",
	"streak": "White",
	"luster": "High",
	"mohs_Hardness": "2.5",
	"cleavage": "Flat cleavage surface of a medium-grade schist",
	"diaphaneity": "Translucent to Opaque",
	"gravity": "2.1-2.3",
	"chemical_Composition": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite",
	"specialProperties": " Graphite occurs primarily in metamorphic rocks where it forms by the deterioration of organic compounds during metamorphism. It thus can be found in schists, marbles and quartzites that form from the metamorphism of sedimentary rocks. ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Tenth metaRock
tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Silicate ",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Medium- to high-grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "Black to dark green or brown",
	"wrongAns2": "White",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Dark gray",
	"correctAns": "Pale gray, gray-white, white, colorless",
	"wrongAns2": "Colorless",
	"wrongAns3": "Silver "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Vitreous to dull",
	"wrongAns2": "Dull",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Two perfect cleavages that intersect at about 60&deg; or 120&deg;",
	"wrongAns1": "Poor",
	"wrongAns2": "Flat cleavage surface of a medium-grade schist",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "5-6",
	"wrongAns1": "3-5",
	"wrongAns2": "2.1",
	"wrongAns3": "5-6.2"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.9	",
	"wrongAns1": "3.2",
	"wrongAns2": "1.9",
	"wrongAns3": "3.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "(Ca,Na)<sub>2-3</sub>(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH,F)<sub>2</sub>",
	"wrongAns1": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Ca<sub>2</sub>(Mg<sub>4.5-2.3</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>)Si<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Translucent to nearly opaque",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "None of these",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);


//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 10,
	"originalName": "Hornblende Biotite Gneiss",
	"dummyName": "metaRock10",
	"src": "images/HORNBLENDEBIOTITEGNEISS.jpg",
	"src1": "images/HORNBLENDEBIOTITEGNEISS1.jpg",
	"src2": "images/HORNBLENDEBIOTITEGNEISS2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Black to dark green or brown",
	"streak": "Pale gray, gray-white, white, colorless",
	"luster": "Vitreous to dull",
	"mohs_Hardness": "5-6",
	"cleavage": "Two perfect cleavages that intersect at about 60&deg; or 120&deg;",
	"diaphaneity": "Translucent to nearly opaque",
	"gravity": "2.9",
	"chemical_Composition": "(Ca,Na)<sub>2-3</sub>(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH,F)<sub>2</sub>",
	"specialProperties": " The hornblende gneiss contains plagioclase, quartz, hornblende, and biotite with/without orthopyroxene. Accessory minerals are garnet, muscovite, clinozoisite, perthitic orthoclase, iron-titanium oxides, sphene, and apatite.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// Eleventh metaRock

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Medium- to high-grade foliated metamorphic rock ",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Silicate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "Black to dark green or brown",
	"wrongAns2": "White",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Dark gray",
	"correctAns": "Pale gray, gray-white, white, colorless",
	"wrongAns2": "Colorless",
	"wrongAns3": "Silver "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Vitreous to dull",
	"wrongAns2": "Dull",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Two directions intersecting at 124 and 56 degrees",
	"wrongAns1": "Two perfect cleavages that intersect at about 60&deg; or 120&deg;",
	"wrongAns2": "Flat cleavage surface of a medium-grade schist",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "5-6",
	"wrongAns1": "3-5",
	"wrongAns2": "2.1",
	"wrongAns3": "5-6.2"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.9	",
	"wrongAns1": "3.2",
	"wrongAns2": "1.9",
	"wrongAns3": "3.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "(Ca,Na)<sub>2-3</sub>(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH,F)<sub>2</sub>",
	"wrongAns1": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Ca<sub>2</sub>(Mg<sub>4.5-2.3</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>)Si<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Translucent to nearly opaque",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "None of these",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 11,
	"originalName": "Hornblende Schist",
	"dummyName": "metaRock11",
	"src": "images/HORNBLENDESCHIST.jpg",
	"src1": "images/HORNBLENDESCHIST1.jpg",
	"src2": "images/HORNBLENDESCHIST2.jpg",
	"chemical_Classification": "Medium- to high-grade foliated metamorphic rock",
	"colour": "Black to dark green or brown",
	"streak": "Pale gray, gray-white, white, colorless",
	"luster": "Vitreous to dull",
	"mohs_Hardness": "5-6",
	"cleavage": "Two directions intersecting at 124 and 56 degrees",
	"diaphaneity": "Translucent to nearly opaque",
	"gravity": "2.9",
	"chemical_Composition": "(Ca,Na)<sub>2-3</sub>(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH,F)<sub>2</sub>",
	"specialProperties": " Hornblende schist, for example, is a variety of schist rich in the amphibole mineral hornblende, though the rock may also contain an abundance of plagioclase feldspar and other substances as well. Hornblende, like other members of the amphibole group, is a common rock-forming mineral.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Twelth metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Metamorphic rock ",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Silicate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "Pale gray, pink, brown, green, yellow, or blue ",
	"wrongAns2": "White",
	"wrongAns3": "Silver"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Dark gray",
	"correctAns": "Black",
	"wrongAns2": "Greenish",
	"wrongAns3": "Silver "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Very sparkly",
	"wrongAns2": "Dull",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Rhombohedral cleavage",
	"wrongAns1": "Two perfect cleavages that intersect at about 60&deg; or 120&deg;",
	"wrongAns2": "Flat cleavage surface of a medium-grade schist",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2-3",
	"wrongAns1": "3-5",
	"wrongAns2": "2.1",
	"wrongAns3": "5-6.2"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.57",
	"wrongAns1": "3.2",
	"wrongAns2": "1.9",
	"wrongAns3": "3.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "38-42% Lime (CaO), 20-25% Silica (SiO2), 2-4% Alumina (Al2O<sub>3</sub>), 1.5-2.5% oxides (NaO and MgO), and 30-32% (MgCO<sub>3</sub>> and others)",
	"wrongAns1": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Ca<sub>2</sub>(Mg<sub>4.5-2.3</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>)Si<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "Translucent to transparent",
	"wrongAns2": "None of these",
	"wrongAns3": "Translucent to nearly opaque"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 12,
	"originalName": "Marble",
	"dummyName": "metaRock12",
	"src": "images/MARBLE.jpg",
	"src1": "images/MARBLE1.jpg",
	"src2": "images/MARBLE2.jpg",
	"chemical_Classification": "Metamorphic rock",
	"colour": "Pale gray, pink, brown, green, yellow, or blue ",
	"streak": "Black",
	"luster": "Very sparkly",
	"mohs_Hardness": "2-3",
	"cleavage": "Rhombohedral cleavage",
	"diaphaneity": "Transparent to Translucent ",
	"gravity": "2.57",
	"chemical_Composition": "38-42% Lime (CaO), 20-25% Silica (SiO2), 2-4% Alumina (Al2O3), 1.5-2.5% oxides (NaO and MgO), and 30-32% (MgCO3 and others)",
	"specialProperties": " Marble is one of the most effective acid neutralizing agents. As the Marble has Calcite, on the scale of Mohs hardness scale, it ranges at the number It can be easily carved and its translucent property is also taken advantage of. Marble has high solubility and low hardness.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Thirteen metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Medium- to high-grade foliated metamorphic rock",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Sulfide",
	"wrongAns3": "Quartz"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Brown",
	"correctAns": "Silver to gray",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "White to greyish",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Silky",
	"correctAns": "Sub vitreous to resinous",
	"wrongAns2": "Dull",
	"wrongAns3": "Resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Flat cleavage surface of a medium-grade schist",
	"wrongAns1": "Rhombohedral cleavage",
	"wrongAns2": "Breaks with a conchoidal fracture",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "7-7.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5-6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "3.7-3.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Muscovite, Biotite, Staurolite, Garnet, Quartz, Feldspar	",
	"wrongAns1": "Quartz and feldspar with hornblende and mica",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Transparent to Opaque",
	"wrongAns1": "Translucent to transparent",
	"wrongAns2": "None of these",
	"wrongAns3": "Translucent to nearly opaque"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 13,
	"originalName": "Mica Schist with Garnet & Staurolite",
	"dummyName": "metaRock13",
	"src": "images/MICASCHIST.jpg",
	"src1": "images/MICASCHIST1.jpg",
	"src2": "images/MICASCHIST2.jpg",
	"chemical_Classification": "Medium- to high-grade foliated metamorphic rock",
	"colour": "Silver to gray",
	"streak": "White to greyish",
	"luster": "Sub vitreous to resinous",
	"mohs_Hardness": "7-7.5",
	"cleavage": "Flat cleavage surface of a medium-grade schist",
	"diaphaneity": "Transparent to opaque",
	"gravity": "3.7 to 3.8",
	"chemical_Composition": "Muscovite, Biotite, Staurolite, Garnet, Quartz, Feldspar",
	"specialProperties": " Hardness-generally hard. Colour - variable - often alternating lighter and darker bands, often shiny. Mineralogy - mica minerals (biotite, chlorite, muscovite), quartz and plagioclase often present as monomineralic bands, garnet porphyroblasts common. Other features - generally smoothish to touch.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Fourteen metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Muscovite, Biotite, Garnet, Quartz, Feldspar",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Medium- to high-grade foliated metamorphic rock",
	"wrongAns3": "Quartz"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Brown",
	"correctAns": "Shiny, medium gray",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "White to greyish",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "High",
	"wrongAns2": "Dull",
	"wrongAns3": "Resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Flat cleavage surface of a medium-grade schist",
	"wrongAns1": "Rhombohedral cleavage",
	"wrongAns2": "Poor",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "6.5-7.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5-6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.85",
	"wrongAns1": "3.2",
	"wrongAns2": "2.5-3.9",
	"wrongAns3": "4.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Muscovite, Biotite, Staurolite, Garnet, Quartz, Feldspar	",
	"wrongAns1": "Quartz and feldspar with hornblende and mica",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Opaque",
	"wrongAns1": "Translucent to transparent",
	"wrongAns2": "None of these",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);


//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 14,
	"originalName": "Mica Schist with Garnet",
	"dummyName": "metaRock14",
	"src": "images/Mica_Schist_with_Garnet.jpg",
	"chemical_Classification": "Muscovite, Biotite, Garnet, Quartz, Feldspar",
	"colour": "Shiny, medium gray",
	"streak": "White to greyish",
	"luster": "High",
	"mohs_Hardness": "6.5 to 7.5",
	"cleavage": "Flat cleavage surface of a medium-grade schist",
	"diaphaneity": "Opaque",
	"gravity": "2.85",
	"chemical_Composition": "Muscovite, Biotite, Staurolite, Garnet, Quartz, Feldspar",
	"specialProperties": " It is used in building houses or walls. Because of it is strong and durable. It has been previously used to make decorative rock walls. Presently, It is used as a decorative stone as well as for jwellery.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fifteenth metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Medium- to high-grade foliated metamorphic rock",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Muscovite, Biotite, Garnet, Quartz, Feldspar",
	"wrongAns3": "Quartz"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Brown",
	"correctAns": "Silver to gray ",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "White to greyish",
	"correctAns": "Gray",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Dull",
	"correctAns": "High",
	"wrongAns2": "Silky",
	"wrongAns3": "Resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "None",
	"wrongAns1": "Flat cleavage surface of a medium-grade schist",
	"wrongAns2": "Poor",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5-6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.87",
	"wrongAns1": "3.2",
	"wrongAns2": "2.5-3.9",
	"wrongAns3": "4.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Muscovite, Biotite, Quartz, Feldspar	",
	"wrongAns1": "Quartz and feldspar with hornblende and mica",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Opaque",
	"wrongAns1": "Transparent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 15,
	"originalName": "Mica Schist",
	"dummyName": "metaRock15",
	"src": "images/Mica_Schist.jpg",
	"chemical_Classification": "Medium- to high-grade foliated metamorphic rock",
	"colour": "Silver to gray",
	"streak": "Gray",
	"luster": "High",
	"mohs_Hardness": "5-6",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.87",
	"chemical_Composition": "Muscovite, Biotite, Quartz, Feldspar",
	"specialProperties": " Because of its natural metamorphosis, schist is said to help break ingrained habits or old ways of thinking, allowing for the healing properties of garnet to come in, which include raising self-esteem and adapting well to change.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Sixteenth metaRock

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Medium- to high-grade foliated metamorphic rock",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Muscovite, Biotite, Garnet, Quartz, Feldspar",
	"wrongAns3": "Quartz"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Brown",
	"correctAns": "Shiny, medium gray",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "White to grayish ",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "vitreous",
	"correctAns": "Very shiny ",
	"wrongAns2": "Dull",
	"wrongAns3": "Resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Perfect on the {001}",
	"wrongAns1": "Flat cleavage surface of a medium-grade schist",
	"wrongAns2": "Rhombohedral cleavage",
	"wrongAns3": "Poor"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2-2.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5-6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.76-3",
	"wrongAns1": "3.2",
	"wrongAns2": "2.5-3.9",
	"wrongAns3": "4.7-5.2"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Platy minerals",
	"wrongAns1": "Quartz and feldspar with hornblende and mica",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Muscovite, Biotite, Quartz, Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 16,
	"originalName": "Muscovite Schist",
	"dummyName": "metaRock16",
	"src": "images/MUSCOVISTSCHIST.jpg",
	"src1": "images/MUSCOVISTSCHIST1.jpg",
	"src2": "images/MUSCOVISTSCHIST2.jpg",
	"chemical_Classification": "Medium- to high-grade foliated metamorphic rock",
	"colour": "Shiny, medium gray",
	"streak": "White to grayish ",
	"luster": "Very shiny ",
	"mohs_Hardness": "2-2.5",
	"cleavage": "Perfect on the {001}",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.76-3",
	"chemical_Composition": "Platy minerals",
	"specialProperties": "Two-dimensional sheets of transparent muscovite, a mineral in the mica family that once formed in layers on the ocean floor, adorn the cliffs and peaks of the mountains and the rocks of the Bass Creek drainage.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Seventeenth metaRock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Foliated metamorphic rock",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Muscovite, Biotite, Garnet, Quartz, Feldspar",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Brown",
	"correctAns": "Shiny gray",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "Black to gray, or light greenish gray in color",
	"wrongAns2": "White",
	"wrongAns3": "Black to green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Poor",
	"correctAns": "Lustrous sheen rock ",
	"wrongAns2": "Very shiny",
	"wrongAns3": "Resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Phyllite has flat or crinkled cleavage faces and shiny color",
	"wrongAns1": "Flat cleavage surface of a medium-grade schist",
	"wrongAns2": "Rhombohedral cleavage",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "1-2",
	"wrongAns1": "2.5-3",
	"wrongAns2": "1.5-2.4",
	"wrongAns3": "5.5-6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.72-2.73",
	"wrongAns1": "3.6-4.2",
	"wrongAns2": "2.5-3.19",
	"wrongAns3": "4.7-5.2"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Microcrystalline quartz, fine-grained micas (sericite, muscovite), and chlorite",
	"wrongAns1": "Quartz and feldspar with hornblende and mica",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Muscovite, Biotite, Quartz, Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "None of these",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 17,
	"originalName": "Phyllite",
	"dummyName": "metaRock17",
	"src": "images/PHYLLITE.jpg",
	"src1": "images/PHYLLITE1.jpg",
	"src2": "images/PHYLLITE2.jpg",
	"chemical_Classification": "Foliated metamorphic rock",
	"colour": "Shiny Gray ",
	"streak": "Black to gray, or light greenish gray in color ",
	"luster": "Lustrous sheen rock",
	"mohs_Hardness": "1-2",
	"cleavage": "Phyllite has flat or crinkled cleavage faces and shiny color",
	"diaphaneity": "NA",
	"gravity": "2.72-2.73",
	"chemical_Composition": "Microcrystalline quartz, fine-grained micas (sericite, muscovite), and chlorite",
	"specialProperties": "Phyllite is a foliated metamorphic rock rich in tiny sheets of sericite mica. Phyllite is a durable and soft rock and used as decorative aggregates, floor tiles, and as exterior building, or facing stone. The other uses include cemetery markers, commemorative tablets, creative artwork, and writing slates.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Eighteenth metaRock

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Metamorphic rock",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Muscovite, Biotite, Garnet, Quartz, Feldspar",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Brown",
	"correctAns": "Pink ",
	"wrongAns2": "White",
	"wrongAns3": "Red"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "Black",
	"wrongAns2": "White",
	"wrongAns3": "Black to Red"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Dull",
	"correctAns": "Very sparkly",
	"wrongAns2": "Very shiny",
	"wrongAns3": "Resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Rhombohedral cleavage",
	"wrongAns1": "Flat cleavage surface of a medium-grade schist",
	"wrongAns2": "Poor",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2-3",
	"wrongAns1": "2.5-3",
	"wrongAns2": "1-2",
	"wrongAns3": "5.5-6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.57",
	"wrongAns1": "3.6-4.2",
	"wrongAns2": "3.3",
	"wrongAns3": "4"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "38-42% Lime (CaO), 20-25% Silica (SiO2), 2-4% Alumina (Al2O<sub>3</sub>), 1.5-2.5% oxides (NaO and MgO), and 30-32% (MgCO<sub>3</sub> and others)",
	"wrongAns1": "Quartz and feldspar with hornblende and mica",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Muscovite, Biotite, Quartz, Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Opaque, Translucent, Transparent",
	"wrongAns3": "Obvious-to-translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 18,
	"originalName": "Pink Marble",
	"dummyName": "metaRock18",
	"src": "images/Pink_Marble.jpg",
//	"src1": "images/PinkMarble1.jpg",
//	"src2": "images/PinkMarble2.jpg",
	"chemical_Classification": "Metamorphic rock",
	"colour": "Pink ",
	"streak": "Black",
	"luster": "Very sparkly",
	"mohs_Hardness": "2-3",
	"cleavage": "Rhombohedral cleavage",
	"diaphaneity": "Transparent to Translucent ",
	"gravity": "2.57",
	"chemical_Composition": "38-42% Lime (CaO), 20-25% Silica (SiO2), 2-4% Alumina (Al2O<sub>3</sub>), 1.5-2.5% oxides (NaO and MgO), and 30-32% (MgCO<sub>3</sub> and others)",
	"specialProperties": "Marble is one of the most effective acid neutralizing agents. As the Marble has Calcite, on the scale of Mohs hardness scale, it ranges at the number It can be easily carved and its translucent property is also taken advantage of. Marble has high solubility and low hardness",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Ninteenth metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Metamorphic",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Muscovite, Biotite, Garnet, Quartz, Feldspar",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "Green",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Black",
	"correctAns": "Gray",
	"wrongAns2": "White",
	"wrongAns3": "Black to Red"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Dull",
	"correctAns": "High",
	"wrongAns2": "Very shiny",
	"wrongAns3": "Resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Slaty",
	"wrongAns1": "Rhombohedral cleavage",
	"wrongAns2": "Poor",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "7",
	"wrongAns1": "4",
	"wrongAns2": "8",
	"wrongAns3": "6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.7",
	"wrongAns1": "3.6-4.2",
	"wrongAns2": "3.3",
	"wrongAns3": "4"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite",
	"wrongAns1": "Quartz and feldspar with hornblende and mica",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Muscovite, Biotite, Quartz, Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "None of these",
	"wrongAns1": "Transparent , opaque",
	"wrongAns2": "Translucent, Transparent",
	"wrongAns3": "Obvious-to-translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 19,
	"originalName": "Schistose Quartzite",
	"dummyName": "metaRock19",
	"src": "images/QUARTZSCHIST.jpg",
	"src1": "images/QUARTZSCHIST1.jpg",
	"src2": "images/QUARTZSCHIST2.jpg",
	"chemical_Classification": "Metamorphic",
	"colour": "Green",
	"streak": "Gray",
	"luster": "High",
	"mohs_Hardness": "7",
	"cleavage": "Slaty",
	"diaphaneity": "NA",
	"gravity": "2.7",
	"chemical_Composition": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite",
	"specialProperties": "Pure quartzites are a source of silica for metallurgical purposes and for the manufacture of silica brick. Quartzite is also quarried for paving blocks, riprap, road metal (crushed stone), railroad ballast, and roofing granules.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Twenty th metaRock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Medium grade metamorphic rock",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Muscovite, Biotite, Garnet, Quartz, Feldspar",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray",
	"correctAns": "White (colorless)",
	"wrongAns2": "Greenish",
	"wrongAns3": "White to Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Black",
	"correctAns": "Gray",
	"wrongAns2": "Greenish",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Dull",
	"correctAns": "High",
	"wrongAns2": "Very shiny",
	"wrongAns3": "Resinous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "A type of cleavage that instead occurs in rocks with coarser grains	",
	"wrongAns1": "Rhombohedral cleavage",
	"wrongAns2": "Poor",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2.5-4",
	"wrongAns1": "4-4.8",
	"wrongAns2": "8.2",
	"wrongAns3": "2"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.73-3.19",
	"wrongAns1": "3.6-4.2",
	"wrongAns2": "3.3",
	"wrongAns3": "4"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite",
	"wrongAns1": "Quartz and feldspar with hornblende and mica",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Muscovite, Biotite, Quartz, Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Translucent to opaque",
	"wrongAns1": "Transparent",
	"wrongAns2": "Translucent to Transparent",
	"wrongAns3": "Obvious-to-translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 20,
	"originalName": "Sericite Schist",
	"dummyName": "metaRock20",
	"src": "images/SERICITESCHIST.jpg",
	"src1": "images/SERICITESCHIST1.jpg",
	"src2": "images/SERICITESCHIST2.jpg",
	"chemical_Classification": "Medium grade metamorphic rock",
	"colour": "White (colorless)",
	"streak": "Gray",
	"luster": "High",
	"mohs_Hardness": "2.5 to 4",
	"cleavage": "A type of cleavage that instead occurs in rocks with coarser grains",
	"diaphaneity": "Translucent to Opaque",
	"gravity": "2.73-3.19",
	"chemical_Composition": "Platy minerals such as muscovite, chlorite, talc, sericite, biotite, and graphite",
	"specialProperties": "Schist is formed from shale or mud but at a much higher temperature than slate. Schist is not a very strong rock, so it is not often used as a building material. However it can be used for garden decoration, paving and sometimes sculpture.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Twentyfirst metaRock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Metamorphic",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Garnet, Quartz, Feldspar",
	"wrongAns3": "Medium to high grade foliated metamorphic rock"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray to yellowish",
	"correctAns": "White, yellowish, shades of green. Yellowish green, brownish green, blueish white to blueish green, brownish red. Some varieties have color banding.	",
	"wrongAns2": "Blue to Greenish",
	"wrongAns3": "White to Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Black",
	"correctAns": "White	",
	"wrongAns2": "Gray",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Dull",
	"correctAns": "Greasy or waxy",
	"wrongAns2": "Very shiny",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Perfect (001) (antigorite) None (chrysotile)",
	"wrongAns1": "Rhombohedral cleavage",
	"wrongAns2": "Poor",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2.5-3.5",
	"wrongAns1": "4-4.8",
	"wrongAns2": "8.2",
	"wrongAns3": "2"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "Variable, 2.44-2.77 is gem range; bowenite, 2.58-2.62",
	"wrongAns1": "3.6-4.2",
	"wrongAns2": "3.3",
	"wrongAns3": "4.8-6.9"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Mg<sub>6</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>8</sub>",
	"wrongAns1": "Mg<sub>4.5-2.3</sub>Fe<sup>2+</sup>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Muscovite, Biotite, Quartz, Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Translucent",
	"wrongAns1": "Transparent to opaque",
	"wrongAns2": "Translucent to Transparent",
	"wrongAns3": "None of these"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 21,
	"originalName": "Serpentine Marble",
	"dummyName": "metaRock21",
	"src": "images/SERPENTINEMARBLE.jpg",
	"src1": "images/SERPENTINEMARBLE1.jpg",
	"src2": "images/SERPENTINEMARBLE2.jpg",
	"chemical_Classification": "Metamorphic",
	"colour": "White, yellowish, shades of green. Yellowish green, brownish green, blueish white to blueish green, brownish red. Some varieties have color banding.",
	"streak": "White",
	"luster": "Greasy or waxy ",
	"mohs_Hardness": "2.5 to 3.5",
	"cleavage": "Perfect (001) (antigorite) None (chrysotile)",
	"diaphaneity": "Translucent",
	"gravity": "Variable, 2.44-2.77 is gem range; bowenite, 2.58-2.62",
	"chemical_Composition": "Mg<sub>6</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>8</sub>",
	"specialProperties": "According to metaphysical beliefs, serpentine provides a clearing of thought to better facilitate meditation. Serpentine is said to clear clouded areas of the chakras and stimulate the crown chakra, promoting spiritual understanding and psychic abilities.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Twenty second metaRock
tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Fine-grained, foliated, homogeneous metamorphic rock",
	"wrongAns1": "Regional Metamorphism",
	"wrongAns2": "Garnet, Quartz, Feldspar",
	"wrongAns3": "Muscovite, Biotite,Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray to yellowish",
	"correctAns": "Bluish gray",
	"wrongAns2": "Blue to Greenish",
	"wrongAns3": "White to Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Black",
	"correctAns": "Light to dark brown",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Shiny",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Slaty",
	"wrongAns1": "Rhombohedral cleavage",
	"wrongAns2": "Poor",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "3-4",
	"wrongAns1": "4-4.8",
	"wrongAns2": "8.2",
	"wrongAns3": "2-3"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.65-2.8",
	"wrongAns1": "3.6-4.2",
	"wrongAns2": "3.3",
	"wrongAns3": "4.8-6.9"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Quartz, illite, and chlorite",
	"wrongAns1": "Mg<sub>6</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>8</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Muscovite, Biotite, Quartz, Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Opaque",
	"wrongAns1": "Transparent",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 22,
	"originalName": "Slate",
	"dummyName": "metaRock22",
	"src": "images/SLATE.jpg",
	"src1": "images/SLATE1.jpg",
	"src2": "images/SLATE2.jpg",
	"chemical_Classification": "Fine-grained, foliated, homogeneous metamorphic rock",
	"colour": "Bluish gray",
	"streak": "Light to dark brown ",
	"luster": "Dull",
	"mohs_Hardness": "3-4",
	"cleavage": "Slaty",
	"diaphaneity": "Opaque",
	"gravity": "2.65-2.8",
	"chemical_Composition": "Quartz, illite, and chlorite",
	"specialProperties": "Slate has two lines of breakability - cleavage and grain - which make it possible to split the stone into thin sheets. When broken, slate retains a natural appearance while remaining relatively flat and easy to stack.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Twenty third metaRock
tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Carbonate",
	"wrongAns1": "Fine-grained, foliated, homogeneous metamorphic rock",
	"wrongAns2": "Garnet, Quartz, Feldspar",
	"wrongAns3": "Muscovite, Biotite,Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray to yellowish",
	"correctAns": "Grayish-green colour",
	"wrongAns2": "Blue to Greenish",
	"wrongAns3": "White to Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "Black",
	"correctAns": "Grayish-white",
	"wrongAns2": "Gray",
	"wrongAns3": "Silver"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Dull",
	"correctAns": "Pearly",
	"wrongAns2": "Vitreous",
	"wrongAns3": "High"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "A type of cleavage that instead occurs in rocks with coarser grains	",
	"wrongAns1": "Slaty",
	"wrongAns2": "Rhombohedral cleavage",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "1",
	"wrongAns1": "4",
	"wrongAns2": "2",
	"wrongAns3": "2.3"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.89",
	"wrongAns1": "1-2.7",
	"wrongAns2": "3.3",
	"wrongAns3": "4.8-5.2"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "SiO<sub>2</sub> 42.19-59.03%; Al<sub>2</sub>O<sub>3</sub> 1.1 - 11.8%; Fe<sub>2</sub>O<sub>3</sub> 7.64-9.56%; MgO 24.47-26.639%; Ni 594-1207ppm; Co 43.2-113.9ppm; Sn 6-41ppm; V 32-75ppm and Zr 1.3-58.7ppm",
	"wrongAns1": "Mg<sub>6</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>8</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Ca<sub>2</sub>(Mg<sub>4.5-2.3</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>)Si<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Opaque",
	"wrongAns1": "Transparent",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 23,
	"originalName": "Talc Chlorite Schist",
	"dummyName": "metaRock23",
	"src": "images/TALCACTINOLITESCHIST.jpg",
	"src1": "images/TALCACTINOLITESCHIST1.jpg",
	"src2": "images/TALCACTINOLITESCHIST2.jpg",
	"chemical_Classification": "Carbonate",
	"colour": "Grayish-green colour",
	"streak": "Grayish-white",
	"luster": "Pearly",
	"mohs_Hardness": "1",
	"cleavage": "A type of cleavage that instead occurs in rocks with coarser grains",
	"diaphaneity": "Opaque",
	"gravity": "2.89",
	"chemical_Composition": "SiO<sub>2</sub> 42.19-59.03%; Al<sub>2</sub>O<sub>3</sub> 1.1 - 11.8%; Fe<sub>2</sub>O<sub>3</sub> 7.64-9.56%; MgO 24.47-26.639%; Ni 594-1207ppm; Co 43.2-113.9ppm; Sn 6-41ppm; V 32-75ppm and Zr 1.3-58.7ppm",
	"specialProperties": "A schistose metamorphic rock with chlorite minerals as the major (>50%) constituent. Chlorite imparts a schistosity by parallel arrangement of its flakes. Quartz, epidote, magnetite, and garnet may be accessories, the last two often as conspicuous porphyroblasts.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Twenty fourth metaRock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Carbonate",
	"wrongAns1": "Fine-grained, foliated, homogeneous metamorphic rock",
	"wrongAns2": "Garnet, Quartz, Feldspar",
	"wrongAns3": "Muscovite, Biotite,Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray to yellowish",
	"correctAns": "Grayish-green colour",
	"wrongAns2": "Blue to Greenish",
	"wrongAns3": "White to Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "White",
	"correctAns": "Thin flakes or slabs",
	"wrongAns2": "Gray",
	"wrongAns3": "Silver"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Dull",
	"correctAns": "Pearly",
	"wrongAns2": "Shiny",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "A type of cleavage that instead occurs in rocks with coarser grains",
	"wrongAns1": "Slaty",
	"wrongAns2": "Rhombohedral cleavage",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "1",
	"wrongAns1": "4",
	"wrongAns2": "2",
	"wrongAns3": "2.3"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.67",
	"wrongAns1": "2.65-2.7",
	"wrongAns2": "3.3",
	"wrongAns3": "4.8-5.2"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Metamorphosis of talc-bearing carbonate rocks formed by hydrothermal alteration",
	"wrongAns1": "Mg<sub>6</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>8</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Quartz and feldspar with hornblende and mica"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Translucent to Opaque",
	"wrongAns1": "Transparent",
	"wrongAns2": "None of these",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 24,
	"originalName": "Talc Schist",
	"dummyName": "metaRock24",
	"src": "images/TALCSCHIST.jpg",
	"src1": "images/TALCSCHIST1.jpg",
	"src2": "images/TALCSCHIST2.jpg",
	"chemical_Classification": "Carbonate",
	"colour": "Grayish-green colour",
	"streak": "Thin flakes or slabs",
	"luster": "Pearly",
	"mohs_Hardness": "1",
	"cleavage": "A type of cleavage that instead occurs in rocks with coarser grains",
	"diaphaneity": "Translucent to Opaque",
	"gravity": "2.67",
	"chemical_Composition": "Metamorphosis of talc-bearing carbonate rocks formed by hydrothermal alteration",
	"specialProperties": "A regional metamorphic rock composed predominantly of talc, and displaying a schistosity. The rock forms by the metamorphism and deformation of ultrabasic igneous rocks in regional terranes.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Twenty Fifth metaRock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Carbonate",
	"wrongAns1": "Fine-grained, foliated, homogeneous metamorphic rock",
	"wrongAns2": "Garnet, Quartz, Feldspar",
	"wrongAns3": "Muscovite, Biotite,Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Gray to yellowish",
	"correctAns": "Grayish-green colour",
	"wrongAns2": "Blue to Greenish",
	"wrongAns3": "White to Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "White",
	"correctAns": "Thin flakes or slabs",
	"wrongAns2": "Gray",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Perfect",
	"correctAns": "Pearly",
	"wrongAns2": "High",
	"wrongAns3": "Dull"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "A type of cleavage that instead occurs in rocks with coarser grains",
	"wrongAns1": "Slaty",
	"wrongAns2": "Rhombohedral cleavage",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "1",
	"wrongAns1": "4",
	"wrongAns2": "2",
	"wrongAns3": "2.3"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.67",
	"wrongAns1": "2.65-2.7",
	"wrongAns2": "3.3",
	"wrongAns3": "4.8-5.2"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "Metamorphosis of talc-bearing carbonate rocks formed by hydrothermal alteration",
	"wrongAns1": "Mg<sub>6</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>8</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Quartz and feldspar with hornblende and mica"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Translucent to Opaque",
	"wrongAns1": "Transparent",
	"wrongAns2": "None of these",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 25,
	"originalName": "The Actinolite Schist",
	"dummyName": "metaRock25",
	"src": "images/The_Actinolite_Schist.jpg",
	"chemical_Classification": "Carbonate",
	"colour": "Grayish-green colour",
	"streak": "Thin flakes or slabs",
	"luster": "Pearly",
	"mohs_Hardness": "1",
	"cleavage": "A type of cleavage that instead occurs in rocks with coarser grains",
	"diaphaneity": "Translucent to Opaque",
	"gravity": "2.67",
	"chemical_Composition": "Metamorphosis of talc-bearing carbonate rocks formed by hydrothermal alteration",
	"specialProperties": "A regional metamorphic rock composed predominantly of talc, and displaying a schistosity. The rock forms by the metamorphism and deformation of ultrabasic igneous rocks in regional terranes.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Twenty sixth metaRock

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this metamorphic rock?",
	"correctAns": "Metamorphic rock",
	"wrongAns1": "Fine-grained, foliated",
	"wrongAns2": "Garnet, Quartz, Feldspar",
	"wrongAns3": "Muscovite, Biotite,Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this metamorphic rock?",
	"wrongAns1": "Grayish-green colour",
	"correctAns": "Pale gray, pink, brown, green, yellow, or blue ",
	"wrongAns2": "Blue to Greenish",
	"wrongAns3": "White to bluish"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this metamorphic rock?",
	"wrongAns1": "White",
	"correctAns": "Black",
	"wrongAns2": "Gray",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this metamorphic rock?",
	"wrongAns1": "Silky",
	"correctAns": "Very sparkly",
	"wrongAns2": "Green",
	"wrongAns3": "Gray"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this metamorphic rock?",
	"correctAns": "Rhombohedral cleavage",
	"wrongAns1": "A type of cleavage that instead occurs in rocks with coarser grains",
	"wrongAns2": "Poor",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this metamorphic rock?",
	"correctAns": "2-3",
	"wrongAns1": "4-4.5",
	"wrongAns2": "2-2.4",
	"wrongAns3": "2.3"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this metamorphic rock?",
	"correctAns": "2.57",
	"wrongAns1": "2.65-2.17",
	"wrongAns2": "3.3",
	"wrongAns3": "4.8-5.2"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this metamorphic rock?",
	"correctAns": "38-42% Lime (CaO), 20-25% Silica (SiO<sub>2</sub>), 2-4% Alumina (Al<sub>2</sub>O<sub>3</sub>), 1.5-2.5% oxides (NaO and MgO), and 30-32% (MgCO<sub>3</sub> and others)",
	"wrongAns1": "Mg<sub>6</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>8</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "Quartz and feldspar with hornblende and mica"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this metamorphic rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "Transparent",
	"wrongAns2": "Opaque",
	"wrongAns3": "Translucent to Opaque"
};
tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 26,
	"originalName": "White Marble",
	"dummyName": "metaRock26",
	"src": "images/WHITEMARBLE.jpg",
	"src1": "images/WHITEMARBLE1.jpg",
	"src2": "images/WHITEMARBLE2.jpg",
	"chemical_Classification": "Metamorphic rock",
	"colour": "Pale gray, pink, brown, green, yellow, or blue ",
	"streak": "Black",
	"luster": "Very sparkly",
	"mohs_Hardness": "2-3",
	"cleavage": "Rhombohedral cleavage",
	"diaphaneity": "Transparent to Translucent",
	"gravity": "2.57",
	"chemical_Composition": "38-42% Lime (CaO), 20-25% Silica (SiO<sub>2</sub>), 2-4% Alumina (Al<sub>2</sub>O<sub>3</sub>), 1.5-2.5% oxides (NaO and MgO), and 30-32% (MgCO<sub>3</sub> and others)",
	"specialProperties": "Marble is one of the most effective acid neutralizing agents. As the Marble has Calcite, on the scale of Mohs hardness scale, it ranges at the number It can be easily carved and its translucent property is also taken advantage of. Marble has high solubility and low hardness.",

	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;











