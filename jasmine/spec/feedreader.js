/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* The first test loops through each feed
         * in the allFeeds object, ensures it has a URL defined
         * and that the URL is not empty.
         */
it('url defined', function() {
for(let feed of allFeeds) {
    expect(feed.url).toBeDefined();
    expect(feed.url).not.toBe(0);
        }
        });

        /* The second test loops through each feed
         * in the allFeeds object, ensures it has a name defined
         * and that the name is not empty.
         */

         it('name defined', function() {
allFeeds.forEach(function(feed) {
    expect(feed.name).toBeDefined();
    expect(feed.name.length).not.toBe(0);
        });
        });
        });


    /* This test suite is named "The menu" */

describe('The menu', function() {

it('is hidden', function() {
    const body = document.querySelector('body');
    expect(body.classList.contains('menu-hidden')).toBe(true);
       });

        /* This test ensures the menu element is
         * hidden by default. We have analyzed the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         I consulted Matthew Cranford tuorial on menu suite, then wrote my code:
         https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/*/

it('toggles on and off', function() {
    const body = document.querySelector('body');
    const menu = document.querySelector('.menu-icon-link');
    /* click to show menu*/
    $(menu).click();
    expect(body.classList.contains('menu-hidden')).toBe(false);
    /* click again to close menu */
    $(menu).click();
    expect(body.classList.contains('menu-hidden')).toBe(true);
       });
       });

         /*  The test above ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: the menu displays when
          * clicked and it hides when clicked again.
          */

    /* The next test suite is named "Initial Entries" */
    /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * As the loadFeed() is asynchronous, this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         /* Resource: i read Matthew Cranford's tutorial at
         https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/  */

describe('Initial Entries', function() {
    beforeEach(function(done) {
    loadFeed(0, done);
       });

it('completes work', function() {
    const feed = document.querySelector('.feed');
    const feedContainer = document.querySelectorAll('.feed .entry');
    expect(feed.children.length >0).toBe(true);
       });
       });



        /* This test suite is named "New Feed Selection" */
        /* The test ensures that when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         * The loadFeed() is asynchronous */
         /* I consulted lines 105- 110 as reference at : https://github.com/aviaryan/ud-feed-reader-testing/blob/master/jasmine/spec/feedreader.js */

         describe('New Feed Selection', function() {
var firstFeed;
           beforeEach(function(done) {
           loadFeed(0, function() {
           firstFeed=$('.feed').html();
           loadFeed(1, done);
          });
          });
           it('content changes', function() {


             /* i consulted line 115 for this: https://github.com/aviaryan/ud-feed-reader-testing/blob/master/jasmine/spec/feedreader.js */
           expect($('.feed').html()).not.toBe(firstFeed);
           });
           });
           }());
