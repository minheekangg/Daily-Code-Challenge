
describe('examples', function () {
    it('should format correctly', function () {
        Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
        Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
        Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
        Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
        Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
    });
});

