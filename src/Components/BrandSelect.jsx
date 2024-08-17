const BrandSelect = ({ products, register, reset }) => {  
  return (
    <>
      <label className='text-xl font-semibold mb-3 mt-8 text-[#419577]'>Brand</label>
      <select {...register('brand')} className="select select-warning w-full max-w-xs">
        <option value="">All Brands</option>
        <option value="SoundMax">SoundMax</option>
        <option value="FitFeet">FitFeet</option>
        <option value="CarryAll">CarryAll</option>
        <option value="GamerPro">GamerPro</option>
        <option value="HealthTrack">HealthTrack</option>
        <option value="GameComfort">GameComfort</option>
        <option value="VisionPlus">VisionPlus</option>
        <option value="WristTech">WristTech</option>
        <option value="PowerPlus">PowerPlus</option>
        <option value="BlendMaster">BlendMaster</option>
        <option value="TabTech">TabTech</option>
        <option value="BrightLight">BrightLight</option>
        <option value="SmileCare">SmileCare</option>
        <option value="CrispCook">CrispCook</option>
        <option value="AdventureCam">AdventureCam</option>
        <option value="EcoRide">EcoRide</option>
        <option value="GroomPro">GroomPro</option>
        <option value="CampSafe">CampSafe</option>
        <option value="SafeHome">SafeHome</option>
        <option value="QuickCook">QuickCook</option>
        <option value="StrongFit">StrongFit</option>
        <option value="CleanWave">CleanWave</option>
        <option value="RunPro">RunPro</option>
        <option value="WorkEase">WorkEase</option>
        <option value="CoolBreeze">CoolBreeze</option>
        <option value="FoodMaster">FoodMaster</option>
        <option value="GlowLight">GlowLight</option>
        <option value="WeatherGuard">WeatherGuard</option>
        <option value="CleanBot">CleanBot</option>
        <option value="CoolAir">CoolAir</option>
        <option value="GrillMaster">GrillMaster</option>
        <option value="EcoTherm">EcoTherm</option>
        <option value="GamePro">GamePro</option>
        <option value="PureAir">PureAir</option>
        <option value="ChargeFast">ChargeFast</option>
        <option value="SmilePro">SmilePro</option>
        <option value="ChargeMax">ChargeMax</option>
        <option value="BrightLife">BrightLife</option>
        <option value="FitFlex">FitFlex</option>
        <option value="ClickPro">ClickPro</option>
        <option value="SecureHome">SecureHome</option>
        <option value="RingSafe">RingSafe</option>
        <option value="BassBoom">BassBoom</option>
        <option value="ReflectTech">ReflectTech</option>
        
      </select>
    </>
  );
};




export default BrandSelect;