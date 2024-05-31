({
    doInit: function(component, event, helper) {
        console.log("testAura - doInit called");
        console.log(`testAura - Record ID: ${component.get("v.recordId")}`);
    }
})
