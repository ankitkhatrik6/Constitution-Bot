/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ConstitutionArticle {
  number: number;
  title: string;
  part: number;
  partTitle: string;
  content: string;
  summary: string;
  keywords: string[];
}

export interface ConstitutionPart {
  number: number;
  title: string;
  articlesRange: string;
  description: string;
}

export const CONSTITUTION_PARTS: ConstitutionPart[] = [
  { number: 1, title: "Preliminary", articlesRange: "Articles 1-9", description: "Constitution as the fundamental law, sovereignty, nation, state of Nepal, national interest, languages, official language, national flag, and national anthem." },
  { number: 2, title: "Citizenship", articlesRange: "Articles 10-15", description: "Not to deprive of citizenship, citizenship by descent, naturalization, non-resident citizenship, and gender identity." },
  { number: 3, title: "Fundamental Rights and Duties", articlesRange: "Articles 16-48", description: "Right to live with dignity, freedom, equality, communication, justice, victims, torture, untouchability, property, religion, clean environment, education, language, employment, health, food, women, children, Dalit, and senior citizens, along with duties of citizens." },
  { number: 4, title: "Directive Principles, Policies and Obligations of the State", articlesRange: "Articles 49-55", description: "Guiding principles, political, social, cultural, and economic policies, and reporting obligations." },
  { number: 5, title: "Structure of State and Distribution of State Power", articlesRange: "Articles 56-60", description: "Main structure of the State (Federation, State, Local), distribution of power, residual powers, and fiscal distribution." },
  { number: 6, title: "President and Vice-President", articlesRange: "Articles 61-73", description: "Election, term, qualifications, and functions of the President and Vice-President." },
  { number: 7, title: "Federal Executive", articlesRange: "Articles 74-82", description: "Form of government, Council of Ministers, appointment of Prime Minister, and transaction of business." },
  { number: 8, title: "Federal Legislature", articlesRange: "Articles 83-108", description: "House of Representatives, National Assembly, qualifications, privileges, and sessions." },
  { number: 9, title: "Federal Legislative Procedures", articlesRange: "Articles 109-114", description: "Introduction, passage, and assent of bills, and ordinance powers." },
  { number: 10, title: "Federal Financial Procedures", articlesRange: "Articles 115-125", description: "Taxes, Consolidated Fund, annual estimates, supplementary budget, and advance votes." },
  { number: 11, title: "Judiciary", articlesRange: "Articles 126-156", description: "Supreme Court, High Courts, District Courts, appointment of Chief Justice, and Judicial Council." },
  { number: 12, title: "Attorney General", articlesRange: "Articles 157-161", description: "Appointment, functions, duties, and powers of the Attorney General of Nepal." },
  { number: 13, title: "State Executive", articlesRange: "Articles 162-174", description: "Executive power of states, Chief of State, and State Council of Ministers." },
  { number: 14, title: "State Legislature", articlesRange: "Articles 175-196", description: "State Assembly composition, terms, qualifications, and officers." },
  { number: 15, title: "State Legislative Procedures", articlesRange: "Articles 197-202", description: "Passage of bills and state ordinances." },
  { number: 16, title: "State Financial Procedures", articlesRange: "Articles 203-213", description: "State Consolidated Fund and annual budgets." },
  { number: 17, title: "Local Executive", articlesRange: "Articles 214-220", description: "Executive power at local levels, Village and Municipal Executives, and Judicial Committees." },
  { number: 18, title: "Local Legislature", articlesRange: "Articles 221-227", description: "Village Assembly and Municipal Assembly law-making powers." },
  { number: 19, title: "Local Financial Procedures", articlesRange: "Articles 228-230", description: "Local tax collection, Consolidated Fund, and local budgets." },
  { number: 20, title: "Interrelations between Federation, State and Local Level", articlesRange: "Articles 231-237", description: "Legislative and executive relations, coordination mechanisms, and inter-state trade." },
  { number: 21, title: "Commission for the Investigation of Abuse of Authority", articlesRange: "Articles 238-239", description: "CIAA structure, powers, and anti-corruption mandates." },
  { number: 22, title: "Auditor General", articlesRange: "Articles 240-241", description: "Auditing of federal, state, and local government bodies." },
  { number: 23, title: "Public Service Commission", articlesRange: "Articles 242-244", description: "Civil service examinations and appointments." },
  { number: 24, title: "Election Commission", articlesRange: "Articles 245-247", description: "Electoral rolls, conducting of general, state, and local elections." },
  { number: 25, title: "National Human Rights Commission", articlesRange: "Articles 248-249", description: "Investigating human rights violations and promoting protections." },
  { number: 26, title: "National Natural Resources and Fiscal Commission", articlesRange: "Articles 250-251", description: "Modality for revenue distribution and resource management between tiers." },
  { number: 27, title: "Other Commissions", articlesRange: "Articles 252-265", description: "Commissions for Women, Dalit, Inclusion, Indigenous Nationalities, Madhesi, Tharu, and Muslims." },
  { number: 28, title: "Provisions Relating to National Security", articlesRange: "Articles 266-268", description: "National Security Council, Nepal Army, Nepal Police, and Armed Police Force." },
  { number: 29, title: "Provisions Relating to Political Parties", articlesRange: "Articles 269-272", description: "Formation, registration, and regulation of political parties." },
  { number: 30, title: "Emergency Power", articlesRange: "Article 273", description: "Declaration and parameters of a State of Emergency." },
  { number: 31, title: "Amendment to the Constitution", articlesRange: "Article 274", description: "Amending procedures, state consent requirements, and unamendable provisions." },
  { number: 32, title: "Miscellaneous", articlesRange: "Articles 275-284", description: "Referendums, pardons, treaties, and the Constitutional Council." },
  { number: 33, title: "Transitional Provisions", articlesRange: "Articles 285-305", description: "Arrangements for existing institutions, laws, and public services." },
  { number: 34, title: "Definitions and Interpretations", articlesRange: "Article 306", description: "Legal definitions of terms used throughout the Constitution." },
  { number: 35, title: "Short Title, Commencement and Repeal", articlesRange: "Articles 307-308", description: "Short title, the Bikram Sambat commencement date (20 September 2015), and repeal of the 2007 Interim Constitution." }
];

export const CONSTITUTION_ARTICLES: ConstitutionArticle[] = [
  {
    number: 1,
    title: "Constitution as the fundamental law",
    part: 1,
    partTitle: "Preliminary",
    content: "(1) This Constitution is the fundamental law of Nepal. Any law inconsistent with this Constitution shall, to the extent of such inconsistency, be void.\n(2) It shall be the duty of every person to observe this Constitution.",
    summary: "Declares the Constitution as the supreme law of Nepal; any law that conflicts with it is void.",
    keywords: ["fundamental", "void", "law", "inconsistent", "duty", "observe"]
  },
  {
    number: 2,
    title: "Sovereignty and state authority",
    part: 1,
    partTitle: "Preliminary",
    content: "The sovereignty and state authority of Nepal shall be vested in the Nepalese people. It shall be exercised in accordance with the provisions set forth in this Constitution.",
    summary: "Vests the supreme power (sovereignty) and state authority of Nepal in the Nepalese people, to be exercised as per the Constitution.",
    keywords: ["sovereignty", "state authority", "nepalese people", "power"]
  },
  {
    number: 3,
    title: "Nation",
    part: 1,
    partTitle: "Preliminary",
    content: "All the Nepalese people, with multiethnic, multilingual, multi-religious, multicultural characteristics and in geographical diversities, and having common aspirations and being united by a bond of allegiance to national independence, territorial integrity, national interest and prosperity of Nepal, collectively constitute the nation.",
    summary: "Defines the nation as the collective Nepalese people united in diversity, possessing common aspirations of independence, integrity, and prosperity.",
    keywords: ["nation", "multiethnic", "multilingual", "multicultural", "united", "diversity", "allegiance"]
  },
  {
    number: 4,
    title: "State of Nepal",
    part: 1,
    partTitle: "Preliminary",
    content: "(1) Nepal is an independent, indivisible, sovereign, secular, inclusive, democratic, socialism-oriented, federal democratic republican state.\nExplanation: For the purposes of this Article, \"secular\" means religious, cultural freedoms, including protection of religion, culture handed down from the time immemorial.\n(2) The territory of Nepal shall comprise:\n(a) the territory existing at the time of commencement of this Constitution, and\n(b) such other territory as may be acquired after the commencement of this Constitution.",
    summary: "Defines Nepal as an independent, secular, federal democratic republican state, and outlines its territorial boundaries.",
    keywords: ["secular", "republic", "socialism", "democratic", "territory", "indivisible", "state"]
  },
  {
    number: 5,
    title: "National interest",
    part: 1,
    partTitle: "Preliminary",
    content: "(1) Safeguarding of the freedom, sovereignty, territorial integrity, nationality, independence and dignity of Nepal, the rights of the Nepalese people, border security, economic wellbeing and prosperity shall be the basic elements of the national interest of Nepal.\n(2) Any conduct and act contrary to the national interest shall be punishable by the Federal law.",
    summary: "Specifies what constitutes national interest, including sovereignty, integrity, rights of the people, and borders; acts against it are punishable.",
    keywords: ["national interest", "sovereignty", "integrity", "border", "punishable", "contrary"]
  },
  {
    number: 6,
    title: "Languages of the nation",
    part: 1,
    partTitle: "Preliminary",
    content: "All languages spoken as the mother tongues in Nepal are the languages of the nation.",
    summary: "Recognizes all native mother tongues spoken inside Nepal as languages of the nation.",
    keywords: ["languages", "mother tongues", "diversity"]
  },
  {
    number: 7,
    title: "Official language",
    part: 1,
    partTitle: "Preliminary",
    content: "(1) The Nepali language in the Devnagari script shall be the official language of Nepal.\n(2) A State may, by a State law, determine one or more than one languages of the nation spoken by a majority of people within the State as its official language(s), in addition to the Nepali language.\n(3) Other matters relating to language shall be as decided by the Government of Nepal, on recommendation of the Language Commission.",
    summary: "Declares Nepali in Devnagari script as the official language of Nepal, while allowing states to adopt other native languages as additional official languages.",
    keywords: ["official language", "nepali", "devnagari", "state law", "language commission"]
  },
  {
    number: 8,
    title: "National flag",
    part: 1,
    partTitle: "Preliminary",
    content: "(1) The national flag of Nepal consists of two juxtaposed triangular figures with a crimson-coloured base and deep blue borders, there being a white emblem of the crescent moon with eight rays visible out of sixteen in the upper part and a white emblem of a twelve rayed sun in the lower part.\n(2) The method of drawing out the flag and other particulars relating thereto shall be as set forth in Schedule-1.",
    summary: "Describes the geometry, colors, and symbols of the unique double-triangular National Flag of Nepal.",
    keywords: ["national flag", "triangular", "crimson", "blue", "moon", "sun", "schedule 1"]
  },
  {
    number: 9,
    title: "National anthem etc.",
    part: 1,
    partTitle: "Preliminary",
    content: "(1) The national anthem of Nepal shall be as set forth in Schedule-2.\n(2) The coat-of-arms of Nepal shall be as set forth in Schedule-3.\n(3) The Rhododendron Arboreum shall be the national flower, Crimson Colour shall be the national colour, the Cow shall be the national animal and the Lophophorus shall be the national bird of Nepal.",
    summary: "Establishes the National Anthem, Coat of Arms, and National Symbols (flower: Rhododendron, animal: Cow, bird: Lophophorus (Danphe), color: Crimson).",
    keywords: ["national anthem", "coat of arms", "rhododendron", "cow", "lophophorus", "danphe", "crimson"]
  },
  {
    number: 10,
    title: "Not to deprive of citizenship",
    part: 2,
    partTitle: "Citizenship",
    content: "(1) No citizen of Nepal may be deprived of the right to obtain citizenship.\n(2) There is a provision of single federal citizenship with State identity in Nepal.",
    summary: "Ensures no citizen is deprived of citizenship, and establishes a single federal citizenship with state-specific identities.",
    keywords: ["citizenship", "deprived", "federal citizenship", "identity"]
  },
  {
    number: 11,
    title: "To be citizens of Nepal",
    part: 2,
    partTitle: "Citizenship",
    content: "(1) The persons who have obtained the citizenship of Nepal at the time of commencement of this Constitution and who are qualified to obtain citizenship in accordance with this Part shall be the citizens of Nepal.\n(2) The following person who has his or her permanent domicile in Nepal at the time of commencement of this Constitution shall be the citizen of Nepal by descent:\n(a) a person who has obtained the citizenship of Nepal by descent prior to the commencement of this Constitution,\n(b) a person whose father or mother was a citizen of Nepal at his or her birth.\n(3) A child of a citizen having obtained the citizenship of Nepal by birth prior to the commencement of Nepal shall, upon attaining majority, acquire the citizenship of Nepal by descent if the child's father and mother both are citizens of Nepal.\n(4) Every minor who is found within Nepal and the whereabouts of whose father and mother are not known shall, until the father or the mother of the child is traced, be a citizen of Nepal by descent.\n(5) A person who is born in Nepal from a woman who is a citizen of Nepal and has resided in Nepal and whose father is not traced shall be provided with the citizenship of Nepal by descent. Provided that his or her father is held to be a foreign citizen, the citizenship of such person shall be converted into naturalized citizenship.\n(6) A foreign woman who has a matrimonial relationship with a citizen of Nepal may, if she so wishes, acquire the naturalized citizenship of Nepal as provided for in the Federal law.",
    summary: "Defines qualifications for citizenship by descent, citizenship by birth, minors with unknown parents, and foreign women married to Nepalese citizens.",
    keywords: ["matrimonial", "by descent", "by birth", "naturalized", "matrimonial relationship", "minor", "foreign woman"]
  },
  {
    number: 12,
    title: "Citizenship with identity of descent and gender",
    part: 2,
    partTitle: "Citizenship",
    content: "A person who obtains the citizenship of Nepal by descent in accordance with this Constitution may obtain a certificate of citizenship of Nepal with gender identity by the name of his or her mother or father.",
    summary: "Grants citizenship certificates carrying the person's gender identity and allowing either parent's name.",
    keywords: ["gender identity", "gender", "mother", "father", "descent"]
  },
  {
    number: 13,
    title: "Acquisition, reacquisition and termination of citizenship",
    part: 2,
    partTitle: "Citizenship",
    content: "Other matters relating to the acquisition, reacquisition and termination of citizenship shall be as provided for in the Federal law.",
    summary: "Federal law governs how citizenship is acquired, reacquired, or lost.",
    keywords: ["acquisition", "reacquisition", "termination", "federal law"]
  },
  {
    number: 14,
    title: "Power to grant non-resident Nepalese citizenship",
    part: 2,
    partTitle: "Citizenship",
    content: "The non-residential citizenship of Nepal may be so granted to a person who has acquired the citizenship of a foreign country, has resided in a country other than a member state of SAARC, and who or whose father or mother, grandfather or grandmother was previously a citizen of Nepal by descent or birth but subsequently acquired the citizenship of the foreign country that such person may enjoy economic, social and cultural rights in accordance with the Federal law.",
    summary: "Provides for Non-Resident Nepalese (NRN) citizenship for persons of Nepalese origin who acquired foreign citizenship (outside SAARC), granting social, economic, and cultural rights.",
    keywords: ["non-resident", "nrn", "foreign country", "saarc", "economic", "social", "cultural"]
  },
  {
    number: 15,
    title: "Other provisions relating to citizenship of Nepal",
    part: 2,
    partTitle: "Citizenship",
    content: "Other matters relating to the maintenance of records setting out the identity of every citizen of Nepal and the citizenship of Nepal shall be as provided for in the Federal law.",
    summary: "Citizen identity registers and federal records are maintained in accordance with federal law.",
    keywords: ["records", "records maintenance", "identity", "federal records"]
  },
  {
    number: 16,
    title: "Right to live with dignity",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every person shall have the right to live with dignity.\n(2) No law shall be made providing for the death penalty to any one.",
    summary: "Guarantees the right to live with dignity and explicitly bans the death penalty (capital punishment) in Nepal.",
    keywords: ["live with dignity", "dignity", "death penalty", "capital punishment", "no death penalty"]
  },
  {
    number: 17,
    title: "Right to freedom",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) No person shall be deprived of his or her personal liberty except in accordance with law.\n(2) Every citizen shall have the following freedoms:\n(a) freedom of opinion and expression,\n(b) freedom to assemble peaceably and without arms,\n(c) freedom to form political parties,\n(d) freedom to form unions and associations,\n(e) freedom to move and reside in any part of Nepal,\n(f) freedom to practice any profession, carry on any occupation, and establish and operate any industry, trade and business in any part of Nepal.\nProvided that reasonable restrictions may be imposed by law to prevent acts undermining sovereignty, integrity, public order, or incitement of crimes.",
    summary: "Protects personal liberty and outlines six essential freedoms: expression, peaceful assembly, forming political parties/unions, free movement, and choice of occupation, subject to reasonable restrictions.",
    keywords: ["freedom", "opinion", "expression", "assemble", "unions", "profession", "move", "reside", "restrictions"]
  },
  {
    number: 18,
    title: "Right to equality",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) All citizens shall be equal before law. No person shall be denied the equal protection of law.\n(2) No discrimination shall be made in the application of general laws on grounds of origin, religion, race, caste, tribe, sex, physical condition, condition of health, marital status, pregnancy, economic condition, language or region, ideology or on similar other grounds.\n(3) Provided that nothing shall prevent the making of special provisions by law for the protection, empowerment or development of backward or marginalized communities (such as women, Dalit, indigenous peoples, persons with disabilities, Khas Arya, etc.).\n(4) No discrimination shall be made on the ground of gender with regard to remuneration and social security for the same work.\n(5) All offspring shall have the equal right to the ancestral property without discrimination on the ground of gender.",
    summary: "Guarantees equality before the law, bans discrimination on any grounds, protects affirmative action for marginalized groups, ensures equal pay for equal work, and guarantees equal inheritance rights to ancestral property for all genders.",
    keywords: ["equality", "discrimination", "equal pay", "remuneration", "ancestral property", "inheritance", "affirmative action", "marginalized"]
  },
  {
    number: 19,
    title: "Right to communication",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) No publication and broadcasting or dissemination or printing of any news item, editorial, feature article or other reading, audio and audio-visual material through any means whatsoever including electronic publication, broadcasting and printing shall be censored.\n(2) No radio, television, on-line or other form of digital or electronic equipment, press or other means of communication publishing, broadcasting or printing shall be closed or seized nor shall registration thereof be cancelled.\n(3) No means of communication including the press, electronic broadcasting and telephone shall be interrupted except in accordance with law.",
    summary: "Bans press censorship, prevents seizure or closure of media outlets (including digital and online), and prohibits telecommunication shut-downs except under legal rules.",
    keywords: ["press", "censorship", "media", "broadcasting", "seized", "internet", "communication", "telephone"]
  },
  {
    number: 20,
    title: "Rights relating to justice",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) No person shall be detained in custody without informing him or her of the ground for his or her arrest.\n(2) Any person who is arrested shall have the right to consult a legal practitioner of his or her choice from the time of such arrest and to be defended by such legal practitioner. Any consultation made by such person with, and advice given by, his or her legal practitioner shall be confidential.\n(3) Any person who is arrested shall be produced before the adjudicating authority within twenty-four hours.\n(4) No person shall be liable for punishment for an act which was not punishable by the law in force when the act was committed (no ex-post facto laws).\n(5) Every person charged with an offence shall be presumed innocent until proved guilty.\n(6) No person shall be tried and punished for the same offence in a court more than once (no double jeopardy).\n(7) No person charged with an offence shall be compelled to testify against himself or herself.\n(8) Every person shall have the right to be informed of any proceedings taken against him or her.\n(9) Every person shall have the right to a fair trial by an independent, impartial and competent court or judicial body.\n(10) Any indigent party shall have the right to free legal aid in accordance with law.",
    summary: "Provides 10 key justice rights, including: right to know grounds for arrest, legal counsel, production in court within 24 hours, presumption of innocence, no ex-post facto laws, double jeopardy protection, no self-incrimination, fair trial, and free legal aid.",
    keywords: ["arrest", "legal counsel", "twenty-four hours", "ex-post facto", "presumed innocent", "double jeopardy", "self-incrimination", "legal aid"]
  },
  {
    number: 21,
    title: "Right of victim of crime",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) A victim of crime shall have the right to get information about the investigation and proceedings of a case in which he or she is the victim.\n(2) A victim of crime shall have the right to justice including social rehabilitation and compensation in accordance with law.",
    summary: "Grants crime victims the right to details on case investigations and proceedings, and guarantees justice, rehabilitation, and compensation.",
    keywords: ["victim", "crime victim", "rehabilitation", "compensation", "investigation info"]
  },
  {
    number: 22,
    title: "Right against torture",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) No person who is arrested or detained shall be subjected to physical or mental torture or to cruel, inhuman or degrading treatment.\n(2) Any act of torture shall be punishable by law, and any person who is the victim of such treatment shall have the right to obtain compensation in accordance with law.",
    summary: "Prohibits physical or mental torture and cruel/degrading treatment of detainees; acts are punishable and victims can claim compensation.",
    keywords: ["torture", "physical torture", "mental torture", "degrading treatment", "cruel", "punished", "detained"]
  },
  {
    number: 23,
    title: "Right against preventive detention",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) No person shall be held under preventive detention unless there is a sufficient ground of the existence of an immediate threat to the sovereignty, territorial integrity or public peace and order of Nepal.\n(2) Information about the situation of a person who is held under preventive detention pursuant to clause (1) must be given immediately to his or her family members or relatives.\n(3) If the authority making preventive detention holds any person under preventive detention contrary to law or in bad faith, the person held under preventive detention shall have the right to obtain compensation in accordance with law.",
    summary: "Restricts preventive detention to immediate threats to national sovereignty or public order; requires immediate relative notification and awards compensation for bad-faith detentions.",
    keywords: ["preventive detention", "detention", "sovereignty", "relatives", "immediate threat", "bad faith"]
  },
  {
    number: 24,
    title: "Right against untouchability and discrimination",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) No person shall be subjected to any form of untouchability or discrimination in any private and public places on grounds of his or her origin, caste, tribe, community, profession, occupation or physical condition.\n(2) In producing or distributing any goods, services or facilities, no person belonging to any particular caste or tribe shall be prevented from purchasing or acquiring such goods, services or facilities.\n(3) No act purporting to demonstrate any person or community as superior or inferior on grounds of caste, tribe, or untouchability shall be allowed.\n(4) No discrimination in any form shall be allowed at a workplace with or without making untouchability on the ground of caste.\n(5) Any act of untouchability and discrimination committed in contravention of this Article shall be punishable by law as a severe social offence, and the victim shall have the right to obtain compensation.",
    summary: "Strictly bans caste-based untouchability and discrimination in both public and private spaces, businesses, and workplaces. Violations are punishable as severe social offences with mandatory victim compensation.",
    keywords: ["untouchability", "discrimination", "caste discrimination", "workplace discrimination", "social offence", "compensation"]
  },
  {
    number: 25,
    title: "Right relating to property",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every citizen shall, subject to law, have the right to acquire, own, sell, dispose, acquire business profits from, and otherwise deal with, property.\n(2) The State shall not, except for public interest, requisition, acquire, or otherwise create any encumbrance on, property of a person.\n(3) The basis of compensation to be provided and procedures to be followed in the requisition by the State of property of any person for public interest shall be as provided for in the Act.",
    summary: "Guarantees citizens the right to own and trade property, while limiting State acquisition to public interest under clear legal compensation rules.",
    keywords: ["property", "buy property", "own property", "requisition", "compensation", "public interest"]
  },
  {
    number: 26,
    title: "Right to freedom of religion",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every person who has faith in religion shall have the freedom to profess, practice and protect his or her religion according to his or her conviction.\n(2) Every religious denomination shall have the right to operate and protect its religious sites and religious Guthi (trusts).\n(3) No person shall, in the exercise of the right conferred by this Article, do, or cause to be done, any act which may be contrary to public health, decency and morality or breach public peace, or convert another person from one religion to another or any act or conduct that may jeopardize other's religion.",
    summary: "Protects freedom of religious practice and denomination-run sites/trusts (Guthi), while explicitly prohibiting forced or active proselytization (conversions) and acts disturbing public decency or health.",
    keywords: ["religion", "religious freedom", "guthi", "conversions", "proselytization", "convert", "morality"]
  },
  {
    number: 27,
    title: "Right to information",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "Every citizen shall have the right to demand and receive information on any matter of his or her interest or of public interest. Provided that no one shall be compelled to provide information on any matter of which confidentiality must be maintained in accordance with law.",
    summary: "Guarantees right to request and access personal or public-interest government information, excluding legally confidential state secrets.",
    keywords: ["information", "right to information", "rti", "public interest", "confidentiality"]
  },
  {
    number: 28,
    title: "Right to privacy",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "The privacy of any person, his or her residence, property, document, data, correspondence and matters relating to his or her character shall, except in accordance with law, be inviolable.",
    summary: "Protects individual privacy of home, letters, digital data, documents, and reputation from unlawful intrusion.",
    keywords: ["privacy", "home privacy", "data privacy", "reputation", "correspondence", "surveillance"]
  },
  {
    number: 29,
    title: "Right against exploitation",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every person shall have the right against exploitation.\n(2) No person shall be exploited in any manner on the grounds of religion, custom, tradition, usage, practice or on any other grounds.\n(3) No one shall be subjected to trafficking nor shall one be held in slavery or servitude.\n(4) No one shall be forced to work against his or her will.\nProvided that compulsory public service mandated by law is permitted.",
    summary: "Outlaws human exploitation, human trafficking, slavery, and forced labor, while allowing compulsory state-mandated public service.",
    keywords: ["exploitation", "trafficking", "human trafficking", "slavery", "forced labor", "compulsory service"]
  },
  {
    number: 30,
    title: "Right to clean environment",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every citizen shall have the right to live in a clean and healthy environment.\n(2) The victim shall have the right to obtain compensation, in accordance with law, for any injury caused from environmental pollution or degradation.\n(3) This Article shall not prevent the making of necessary legal provisions for a proper balance between the environment and development.",
    summary: "Guarantees citizens a clean and healthy environment, with constitutional rights to environmental compensation, balancing ecology with national development.",
    keywords: ["environment", "clean environment", "pollution", "healthy environment", "compensation", "ecology"]
  },
  {
    number: 31,
    title: "Right relating to education",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every citizen shall have the right of access to basic education.\n(2) Every citizen shall have the right to get compulsory and free education up to the basic level and free education up to the secondary level from the State.\n(3) The citizens with disabilities and the economically indigent citizens shall have the right to get free higher education in accordance with law.\n(4) The visually impaired citizens shall have the right to get free education through brail script and the citizens with hearing or speaking impairment, to get free education through sign language, in accordance with law.\n(5) Every Nepalese community residing in Nepal shall have the right to get education in its mother tongue and, for that purpose, to open and operate schools and educational institutes, in accordance with law.",
    summary: "Ensures access to basic education; makes basic education compulsory and free, and secondary education free. Protects native-language schooling, and free higher education for the disabled and indigent.",
    keywords: ["education", "free education", "basic education", "secondary education", "disabilities", "mother tongue", "indigent"]
  },
  {
    number: 32,
    title: "Right to language and culture",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every person and community shall have the right to use their languages.\n(2) Every person and community shall have the right to participate in the cultural life of their communities.\n(3) Every Nepalese community residing in Nepal shall have the right to preserve and promote its language, script, culture, cultural civilization and heritage.",
    summary: "Grants citizens and ethnic communities rights to use mother languages, participate in cultural life, and protect script and cultural heritage.",
    keywords: ["language", "culture", "native language", "script", "heritage", "diversity"]
  },
  {
    number: 33,
    title: "Right to employment",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every citizen shall have the right to employment. The terms and conditions of employment, and unemployment benefit shall be as provided for in the Federal law.\n(2) Every citizen shall have the right to choose employment.",
    summary: "Guarantees every citizen the right to gainful employment, choice of profession, and unemployment benefits as governed by federal law.",
    keywords: ["employment", "job", "choose job", "unemployment benefit"]
  },
  {
    number: 34,
    title: "Right to labour",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every labourer shall have the right to practice appropriate labour.\nExplanation: For the purposes of this Article, \"labourer\" means a labourer or worker who does physical or mental work for an employer in consideration for remuneration.\n(2) Every labourer shall have the right to appropriate remuneration, facilities and contributory social security.\n(3) Every labourer shall have the right to form and join trade unions and to engage in collective bargaining, in accordance with law.",
    summary: "Defines a worker/labourer, guarantees the right to appropriate remuneration, social security, trade union registration, and collective bargaining.",
    keywords: ["labour", "worker", "salary", "trade union", "unions", "collective bargaining"]
  },
  {
    number: 35,
    title: "Right relating to health",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every citizen shall have the right to free basic health services from the State, and no one shall be deprived of emergency health services.\n(2) Every person shall have the right to get information about his or her medical treatment.\n(3) Every citizen shall have equal access to health services.\n(4) Every citizen shall have the right of access to clean drinking water and sanitation.",
    summary: "Guarantees free basic healthcare, equal health access, clean drinking water, sanitation, and protects individuals from deprivation of emergency health services.",
    keywords: ["health", "basic health", "emergency health", "medical", "drinking water", "sanitation", "healthcare"]
  },
  {
    number: 36,
    title: "Right relating to food",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every citizen shall have the right relating to food.\n(2) Every citizen shall have the right to be safe from the state of being in danger of life from the scarcity of food.\n(3) Every citizen shall have the right to food sovereignty in accordance with law.",
    summary: "Ensures the constitutional right to food security, safety from starvation/food scarcity, and guarantees food sovereignty.",
    keywords: ["food", "food security", "starvation", "food sovereignty", "scarcity", "nutrition"]
  },
  {
    number: 37,
    title: "Right to housing",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every citizen shall have the right to an appropriate housing.\n(2) No citizen shall be evicted from the residence owned by him or her nor shall his or her residence be infringed except in accordance with law.",
    summary: "Guarantees appropriate housing, and protects citizens from unlawful eviction or infringement of private housing.",
    keywords: ["housing", "eviction", "home", "evicted"]
  },
  {
    number: 38,
    title: "Rights of women",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every woman shall have equal lineage right without gender based discrimination.\n(2) Every woman shall have the right to safe motherhood and reproductive health.\n(3) No woman shall be subjected to physical, mental, sexual, psychological or other form of violence or exploitation on grounds of religion, social, cultural tradition, practice or on any other grounds.\n(4) Women shall have the right to participate in all bodies of the State on the basis of the principle of proportional inclusion.\n(5) Women shall have the right to obtain special opportunity in education, health, employment and social security, on the basis of positive discrimination.\n(6) The spouse shall have the equal right to property and family affairs.",
    summary: "Ensures women have equal lineage rights, right to safe motherhood/reproductive health, complete protection from gender-based violence, proportional representation in state bodies, positive discrimination opportunities, and equal conjugal rights in property/family.",
    keywords: ["women", "lineage rights", "motherhood", "gender violence", "violence against women", "proportional inclusion", "positive discrimination", "spouse", "family affairs", "female"]
  },
  {
    number: 39,
    title: "Rights of the child",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every child shall have the right to name and birth registration along with his or her identity.\n(2) Every child shall have the right to education, health, maintenance, proper care, sports, entertainment and overall personality development.\n(3) Every child shall have the right to elementary child development and child participation.\n(4) No child shall be employed to work in any factory, mine or engaged in similar other hazardous work (child labor bans).\n(5) No child shall be subjected to child marriage, transported illegally, abducted/kidnapped or taken in hostage.\n(6) No child shall be recruited or used in army, police or any armed group.\n(7) No child shall be subjected to physical, mental or any other form of torture in home, school or other place.",
    summary: "Guarantees children's rights to identity, care, healthcare, and education; strictly bans child labor, child marriage, child abduction, military recruitment, and child abuse/torture in any institution or home.",
    keywords: ["child", "children", "birth registration", "child labor", "child marriage", "recruited", "abuse", "school torture", "kidnap"]
  },
  {
    number: 40,
    title: "Rights of Dalit",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) The Dalit shall have the right to participate in all bodies of the State on the basis of the principle of proportional inclusion. Special provision shall be made by law for the representation and participation of the Dalit community in public services and employment.\n(2) Provision of free education with scholarship, from primary to higher education, shall be made by law for Dalit students.\n(3) Special provision shall be made by law to provide health and social security to the Dalit community.\n(4) The Dalit community shall have the right to use, protect and develop their traditional occupation, knowledge, skill and technology.\n(5) The State shall once provide land to the landless Dalit in accordance with law.\n(6) The State shall arrange settlement for the Dalit who do not have housing.",
    summary: "Guarantees Dalit citizens proportional state representation, free education with scholarships, social security, protection of traditional skills, a one-time grant of land for the landless, and housing arrangements for the homeless.",
    keywords: ["dalit", "proportional", "scholarship", "traditional occupation", "landless dalit", "housing"]
  },
  {
    number: 41,
    title: "Rights of senior citizens",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "The senior citizens shall have the right to special protection and social security from the State.",
    summary: "Guarantees elder citizens state-level social security, pension structures, and special protections.",
    keywords: ["senior citizens", "elders", "social security", "pension"]
  },
  {
    number: 42,
    title: "Right to social justice",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) The socially backward women, Dalit, indigenous people, indigenous nationalities, Madhesi, Tharu, minorities, persons with disabilities, marginalized communities, Muslims, backward classes, gender and sexual minorities, youths, farmers, labourers, oppressed or citizens of backward regions and indigent Khas Arya shall have the right to participate in the State bodies on the basis of inclusive principle.\n(2) The indigent citizens and citizens of the communities on the verge of extinction shall have the right to get special opportunities and benefits in education, health, housing, employment, food and social security.",
    summary: "Grants proportional representation and positive discrimination opportunities across public sectors to diverse marginalized groups, backward regions, and communities facing extinction.",
    keywords: ["social justice", "proportional representation", "backward classes", "minorities", "madhesi", "tharu", "muslims", "sexual minorities", "indigent", "extinction", "lgbtq"]
  },
  {
    number: 43,
    title: "Right to social security",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "The indigent citizens, incapacitated and helpless citizens, helpless single women, citizens with disabilities, children, citizens who cannot take care themselves and citizens belonging to the tribes on the verge of extinction shall have the right to social security, in accordance with law.",
    summary: "Guarantees social security benefits to vulnerable populations, including single women, disabled citizens, children, and indigenous tribes on the verge of extinction.",
    keywords: ["social security", "disabled", "single women", "helpless", "vulnerable"]
  },
  {
    number: 44,
    title: "Rights of the consumer",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "(1) Every consumer shall have the right to obtain quality goods and services.\n(2) A person who has suffered injury from any substandard goods or services shall have the right to obtain compensation in accordance with law.",
    summary: "Protects consumer rights to quality goods and services, and guarantees legal compensation for injuries from substandard goods.",
    keywords: ["consumer", "consumer rights", "quality goods", "substandard", "compensation"]
  },
  {
    number: 45,
    title: "Right against exile",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "No citizen shall be exiled.",
    summary: "Strictly bans exiling or banishing any Nepalese citizen from the country.",
    keywords: ["exile", "exiled", "banished"]
  },
  {
    number: 46,
    title: "Right to constitutional remedies",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "There shall be a right to obtain constitutional remedies in the manner set forth in Article 133 or 144 for the enforcement of the rights conferred by this Part.",
    summary: "Guarantees citizens the right to petition the Supreme Court (Article 133) or High Courts (Article 144) for writs to enforce their fundamental rights.",
    keywords: ["remedies", "constitutional remedies", "writ", "article 133", "article 144", "enforcement"]
  },
  {
    number: 47,
    title: "Implementation of fundamental rights",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "The State shall, as required, make legal provisions for the implementation of the rights conferred by this Part, within three years of the commencement of this Constitution.",
    summary: "Mandates that the government enact enabling legislation to implement all constitutional fundamental rights within three years of promulgation.",
    keywords: ["implementation", "legislation", "laws", "three years"]
  },
  {
    number: 48,
    title: "Duties of citizens",
    part: 3,
    partTitle: "Fundamental Rights and Duties",
    content: "Every citizen shall have the following duties:\n(a) to safeguard the nationality, sovereignty and integrity of Nepal, while being loyal to the nation,\n(b) to abide by the Constitution and law,\n(c) to render compulsory service as and when the State so requires,\n(d) to protect and preserve public property.",
    summary: "Lists four core civic duties: protecting sovereignty and integrity, obeying laws, rendering compulsory service, and protecting public property.",
    keywords: ["duties", "citizens duties", "sovereignty", "loyal", "public property"]
  },
  {
    number: 56,
    title: "Structure of State",
    part: 5,
    partTitle: "Structure of State and Distribution of State Power",
    content: "(1) The main structure of the Federal Democratic Republic of Nepal shall be of three levels, namely the Federation, the State and the Local level.\n(2) The Federation, State and Local levels shall exercise the power of State of Nepal pursuant to this Constitution and law.\n(3) There shall be States consisting of the Districts as mentioned in Schedule-4.\n(4) There shall be Village Institutions, Municipalities and District Assemblies under the Local level.",
    summary: "Defines the 3-tier government structure of federal Nepal: Federal, Provincial/State, and Local (Municipalities/Villages).",
    keywords: ["structure of state", "federation", "state", "local", "districts", "municipalities"]
  },
  {
    number: 74,
    title: "Form of government",
    part: 7,
    partTitle: "Federal Executive",
    content: "The form of government of Nepal shall be multi-party, competitive, federal, democratic, republican, parliamentary form of government based on pluralism.",
    summary: "Establishes Nepal's federal, parliamentary, multi-party democratic republican system of government.",
    keywords: ["form of government", "parliamentary", "republican", "democracy", "pluralism"]
  },
  {
    number: 76,
    title: "Constitution of Council of Ministers",
    part: 7,
    partTitle: "Federal Executive",
    content: "(1) The President shall appoint the leader of a parliamentary party that commands majority in the House of Representatives as the Prime Minister.\n(2) In cases where no party has a clear majority, the President shall appoint a member of the House of Representatives who can command majority with the support of two or more parties.\n(3) If Prime Minister cannot be appointed under clause (2), the President shall appoint the leader of the largest party.\n(4) The PM appointed under (2) or (3) must obtain a vote of confidence within thirty days.\n(5) If largest party PM fails vote of confidence, any member presenting majority support can be appointed.\n(6) If PM commands are not secured, the PM can recommend House dissolution and call elections within six months.\n(9) PM forms Council of Ministers with maximum 25 Ministers.",
    summary: "Outlines the steps for appointing the Prime Minister based on majority, coalition, or largest party status, and limits the cabinet to a maximum of 25 ministers.",
    keywords: ["prime minister", "cabinet", "majority", "coalition", "dissolution", "vote of confidence", "government formation"]
  },
  {
    number: 83,
    title: "Federal Legislature",
    part: 8,
    partTitle: "Federal Legislature",
    content: "There shall be a Federal Legislature consisting of two Houses to be known as the House of Representatives and the National Assembly, which shall be called as the Federal Parliament.",
    summary: "Sets up Nepal's bicameral federal parliament, consisting of the House of Representatives (Pratinidhi Sabha) and the National Assembly (Rastriya Sabha).",
    keywords: ["federal parliament", "parliament", "house of representatives", "national assembly", "bicameral"]
  },
  {
    number: 126,
    title: "Courts to exercise powers relating to justice",
    part: 11,
    partTitle: "Judiciary",
    content: "(1) Powers relating to justice in Nepal shall be exercised by courts and other judicial bodies in accordance with this Constitution, other laws and the recognized principles of justice.\n(2) All shall abide by the orders or decisions made in the course of trial of lawsuits by the courts.",
    summary: "Establishes that judicial power is held and exercised exclusively by courts of law in accordance with the Constitution and recognized justice principles.",
    keywords: ["judiciary", "justice", "courts", "court orders", "decisions"]
  },
  {
    number: 127,
    title: "Courts",
    part: 11,
    partTitle: "Judiciary",
    content: "(1) There shall be the following courts in Nepal:\n(a) Supreme Court,\n(b) High Court, and\n(c) District Court.\n(2) In addition to the courts under clause (1), judicial bodies may be formed at the Local level to try cases under law.",
    summary: "Lists the three levels of standard courts in Nepal: Supreme Court (apex), High Courts (provincial), and District Courts (local), along with local-level judicial committees.",
    keywords: ["courts", "levels of courts", "supreme court", "high court", "district court", "local level judicial"]
  },
  {
    number: 128,
    title: "Supreme Court",
    part: 11,
    partTitle: "Judiciary",
    content: "(1) There shall be a Supreme Court in Nepal.\n(2) The Supreme Court shall be a court of record. It shall have the final authority to interpret this Constitution and laws.\n(4) All must abide by any interpretation of the Constitution or a law made by or any legal principle laid down by the Supreme Court.",
    summary: "Declares the Supreme Court as a court of record, the apex court of Nepal, and the final authority on the interpretation of the Constitution.",
    keywords: ["supreme court", "apex court", "court of record", "interpretation", "precedent"]
  },
  {
    number: 137,
    title: "Formation of Constitutional Bench",
    part: 11,
    partTitle: "Judiciary",
    content: "(1) There shall be a Constitutional Bench in the Supreme Court. The Constitutional Bench shall consist of the Chief Justice and other four Judges designated by the Chief Justice on recommendation of the Judicial Council.\n(2) The Bench shall hear: (a) Disputes relating to jurisdiction between Federation, State, and Local levels, (b) disputes relating to elections or disqualifications of Federal or State lawmakers.",
    summary: "Establishes the Constitutional Bench in the Supreme Court consisting of the Chief Justice and four designated Supreme Court judges, to rule on jurisdictional disputes between federal levels and election issues.",
    keywords: ["constitutional bench", "bench", "jurisdiction", "federal dispute", "supreme court bench"]
  },
  {
    number: 238,
    title: "Commission for the Investigation of Abuse of Authority (CIAA)",
    part: 21,
    partTitle: "Commission for the Investigation of Abuse of Authority",
    content: "(1) There shall be a Commission for the Investigation of Abuse of Authority of Nepal, consisting of the Chief Commissioner and four other Commissioners.\n(2) The President shall, on recommendation of the Constitutional Council, appoint the Chief Commissioner and Commissioners.",
    summary: "Establishes the CIAA (Akhtiyar) as Nepal's independent anti-corruption constitutional body.",
    keywords: ["ciaa", "corruption", "akhtiyar", "independent commission", "abuse of authority", "graft"]
  },
  {
    number: 273,
    title: "Emergency power",
    part: 30,
    partTitle: "Emergency Power",
    content: "(1) If a grave emergency arises in regard to the sovereignty, territorial integrity of Nepal or the security of any part thereof, by war, external aggression, armed rebellion, extreme economic disarray, natural calamity or epidemic, the President may declare or order a state of emergency in respect of the whole of Nepal or of any specified part thereof.\n(10) At the time of making a declaration of a state of emergency, the fundamental rights as provided in Part-3 may be suspended, EXCEPT: Article 16 (Dignity), 17(2)(a) (Expression), 18 (Equality), 19 (Communication), 20 (Justice), 21 (Victim), 22 (Torture), 24 (Untouchability), 26 (Religion), 29 (Exploitation), 30 (Environment), 31 (Education), 35 (Health), 36 (Food), 38 (Women), 39 (Child), 40 (Dalit), 41 (Seniors), 42 (Social Justice), 43 (Social Security), 45 (Exile), 46 (Habeas Corpus / Remedy).",
    summary: "Allows the President to declare a State of Emergency during crises, outlining which fundamental rights can be suspended and which are strictly non-suspendable (such as habeas corpus and core human rights).",
    keywords: ["emergency", "state of emergency", "suspend rights", "habeas corpus", "sovereignty threat", "natural calamity"]
  },
  {
    number: 274,
    title: "Amendment to Constitution",
    part: 31,
    partTitle: "Amendment to the Constitution",
    content: "(1) No amendment shall be made to this Constitution in manner to be prejudicial to the sovereignty, territorial integrity, independence of Nepal and sovereignty vested in the people.\n(2) Subject to clause (1), a Bill to amend or repeal any Article may be introduced in either House.\n(4) If a Bill is related to alteration of state borders or Schedule-6 (State powers), it must be sent to State Assemblies for consent.",
    summary: "Sets forth the constitutional amendment process, safeguarding Nepal's sovereignty, integrity, independence, and democracy as unamendable core features.",
    keywords: ["amendment", "amend", "unamendable", "change constitution", "borders alteration", "state consent"]
  },
  {
    number: 288,
    title: "Capital",
    part: 32,
    partTitle: "Miscellaneous",
    content: "(1) The capital of Nepal shall be situated in Kathmandu.\n(2) The capital of a State under this Constitution shall be as decided by a two-thirds majority of the number of the then members of the concerned State Assembly.",
    summary: "Declares Kathmandu as the federal capital of Nepal, and outlines that provincial capitals are decided by a two-thirds majority in their respective state assemblies.",
    keywords: ["capital", "kathmandu", "provincial capital", "state capital"]
  }
];
