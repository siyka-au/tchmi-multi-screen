var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.ActivateRecipe=function(ctx,recipeReference){recipeReference?TcHmi.Server.RecipeManagement.activate(recipeReference,null,(function(data){return data.error?void ctx.error(data.error,{code:data.error,message:TcHmi.Errors[data.error],reason:"Function: ActivateRecipe, Recipe "+recipeReference+" activation failed",domain:"Function",errors:data.details?[data.details]:void 0}):(TCHMI_CONSOLE_LOG_LEVEL>=3&&TcHmi.Log.info("Recipe "+recipeReference+" activated successfull."),void ctx.success())})):ctx.success()}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={})),Functions.registerFunctionEx("ActivateRecipe","TcHmi.Functions.Beckhoff",Beckhoff.ActivateRecipe)}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={}));