@IsTest
private class TransactionGuidGeneratorTest {
    private static testMethod void coverEverything(){
        Account acc = new Account(Name='Ololoev');
        insert acc;
        Opportunity opp = new Opportunity(Name = 'Test',AccountId = acc.id);
        opp.StageName = 'test';
        opp.CloseDate = Date.today();
        insert opp;
        Transaction__c t = new Transaction__c();
        t.Amount__c = 134;
        t.Opportunity__c = opp.id;
        Test.startTest();
        	insert t;
        Test.stopTest();
        Transaction__c updated_transaction = [SELECT id,Transaction_GUID__c
                                              FROM Transaction__c 
                                              WHERE id = :t.id];
        System.assertNotEquals(null, updated_transaction.Transaction_GUID__c, 'GUID should be specified');
    }
}