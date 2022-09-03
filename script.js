function run(){
    alert(`Servies is currently unavailable!`);
}
let about = document.getElementById('about');
let vision = document.getElementById('vision');
let committe = document.getElementById('committe');
let libServices = document.getElementById('libServices');
let libTimings = document.getElementById('libTimings');
let libRules = document.getElementById('libRules');
let libFacilities = document.getElementById('libFacilities');
let libCollections = document.getElementById('libCollections');
let libJournel = document.getElementById('libJournel');
let libSubscribed = document.getElementById('libSubscribed');
let libNews = document.getElementById('libNews');
let libPR = document.getElementById('libPR');
let libCareer = document.getElementById('libCareer');
let libEResources = document.getElementById('libEResources');
let libStaff = document.getElementById('libStaff');
let libContactUs = document.getElementById('libContactUs');
let alwaysChange = document.getElementById('alwaysChange');
about.addEventListener('click', () => {
    alwaysChange.innerHTML = `
    <div id="about" class="commonThing">
                <h2>About Library</h2>
                <div class="infoMore">
                 <p>Central library of any organization is seat of learning endeavor in any institution and so is ours. Central Library believes in “Student first” philosophy and gives priority to serve students first.  Keeping pace with growing resources in the world, we strife hard to achieve expectation os users and make them technological sound by making available global resources all at one place.  PRMCEAM Library is on its way to become an outstanding learning resource center catering to the ever growing and uncompromising information and intellectual requirements of the students and faculty.</p>
                <p>A balanced programme on the development of the collection of hard copy, audio/video resources and other electronic form of documents is being followed.  The Library has one of the finest collections of latest Engineering publications.  It made its modest beginning in May 2009 with 7000 books.  Since then the book collection has increased up to more than 36,000 volumes.  Library subscribes to 74 National & International printed journals and full text online databases from world class publishers in scientific and technical publication namely IEEE(ASPP), Springer, ASCE, J-Gate, Elsevier, McGraw Hill and ASTM Digital Library. To cater motivational need of students Library adds General books including biographies, self help books and also Marathi novels to its collection.  NPTEL(Phase I & Phase II) facility (National Programme on Technology Enhanced Learning) to access video lectures by eminent lecturers is also made available in the Library.</p>
                <p>Library provides resources to its students and faculty with an user-friendly approach. It offers a fully integrated and dynamic environment for conducting academic study.  Book bank facility is provided to all the students in every semester. Multiple copies ensure that resources are easily available in Reference Section and Stock Section as well. Besides this, it provides all the facilities which are essential as well as made desirable by AICTE.</p>
                </div>
            </div>`;
})
vision.addEventListener('click', function () {
    alwaysChange.innerHTML = `
    <div id="vision" class="comgmonThing">
                <h2>Vision and Mission</h2>
                <div class="split">
                    <div class="vision">
                        <h2>Vision</h2>
                        <div>
                            <ul>
                                <li>Understand the teaching, learning and research needs of its users.</li>
                                <li>Build collections and create tools to support teaching, learning and research.</li>
                                <li>Developing and maintaining collections in support of the academic pursuits of the college.</li>
                                <li>Create hospitable physical and virtual environments for study, teaching and research.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mission">
                        <h2>Mission</h2>
                        <p>The Library’s mission is to provide comprehensive resources and services in support of the research, teaching, and learning needs of PRMCEAM.</p>
                        <div>
                            <ul>
                                <li>Selecting , acquiring, organizing, preserving and providing access to library materials and resources.</li>
                                <li>Provide high-quality services that meet expectations of a diverse user community.</li>
                                <li>Providing the physical facilities and the technical infrastructure that enhance the learning and research environment.</li>
                                <li>Creating a climate where staff is approachable and users receive individual attention and a positive learning experience.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
})
committe.addEventListener('click', function () {
    alwaysChange.innerHTML = `
    <div class="maxHeight" id="committe">
                <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Library Committee</h2>
                <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})
libServices.addEventListener('click', () => {
    alwaysChange.innerHTML = `<div class="maxHeight" id="libServices">
    <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Library Services</h2>
    <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
</div>`
});
libTimings.addEventListener('click', () => {
    alwaysChange.innerHTML = `<div class="maxHeight" id="libTimings">
    <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Library Timings</h2>
    <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
</div>`
});
libRules.addEventListener('click', () => {
    alwaysChange.innerHTML = `
    <div class="maxHeight" id="libRules">
                <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Rules and Regulations</h2>
                <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>
    `
});
libFacilities.addEventListener('click', function () {
    alwaysChange.innerHTML = `
    <div class="maxHeight" id="libfacilities">
                <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Library Facilities</h2>
                <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
});
libCollections.addEventListener('click', function () {
    alwaysChange.innerHTML = `
            <div class="maxHeight" id="libCollections">
            <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Library Collections</h2>
            <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})
libJournel.addEventListener('click', function () {
    alwaysChange.innerHTML = `
            <div class="maxHeight" id="libJournel">
            <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Journel Content</h2>
            <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})
libSubscribed.addEventListener('click', function () {
    alwaysChange.innerHTML = `
            <div class="maxHeight" id="libSubscribed">
            <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Subscribed E-Resources</h2>
            <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})
libNews.addEventListener('click', function () {
    alwaysChange.innerHTML = `
            <div class="maxHeight" id="libNews">
            <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Newspapers, Journel, and Magazines</h2>
            <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})
libPR.addEventListener('click', function () {
    alwaysChange.innerHTML = `
            <div class="maxHeight" id="libPR">
            <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Project Reports</h2>
            <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})
libCareer.addEventListener('click', function () {
    alwaysChange.innerHTML = `
            <div class="maxHeight" id="libCareer">
            <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Career Development</h2>
            <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})
libEResources.addEventListener('click', function () {
    alwaysChange.innerHTML = `
            <div class="maxHeight" id="libEResources">
            <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">E-Resources</h2>
            <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})
libStaff.addEventListener('click', function () {
    alwaysChange.innerHTML = `
            <div class="maxHeight" id="libStaff">
            <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Staff</h2>
            <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})
libContactUs.addEventListener('click', function () {
    alwaysChange.innerHTML = `
            <div class="maxHeight" id="libContactUs">
            <h2 style="margin: 20px 0; text-align: center; padding: 20px 0;">Contact Us</h2>
            <p style="padding: 20px;">Information is yet to come, will be available soon. It is just a sample model.</p>
            </div>`
})  