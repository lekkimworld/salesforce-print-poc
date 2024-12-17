public with sharing class JWTApexController {
    private ApexPages.StandardController c;

    public JWTApexController(ApexPages.StandardController stdController) {
        this.c = stdController;
    }

    public String getJWT() {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    }

    public String getSvg() {
        Http h=new Http();
        HttpRequest req=new HttpRequest();
        req.setEndpoint('https://shielded-castle-53358-66ecc2b45c83.herokuapp.com/svg-circle');
        req.setMethod('GET');

        HttpResponse res=h.send(req);
        return res.getBody();
    }
}