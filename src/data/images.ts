/**
 * Image manifest — every asset used by the Phase 1 rebuild.
 *
 * Images currently live on the GoHighLevel CDN. `assetUrl()` returns the CDN URL
 * by default, or a local /images/... path when NEXT_PUBLIC_LOCAL_IMAGES=true.
 *
 * To go local: run `npm run images:download`, then set NEXT_PUBLIC_LOCAL_IMAGES=true.
 * Do this before the GHL subscription is cancelled or every image on the site dies.
 */

const CDN = "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1600/u_https://assets.cdn.filesafe.space";

const T1 = "u9ciSTR8mTJMRaTFrJoT"; // main media tenant
const T2 = "kE4TGUMBTY9IdnbBAXaR"; // secondary tenant (logo, ornaments, some photos)

const useLocal = process.env.NEXT_PUBLIC_LOCAL_IMAGES === "true";

export function assetUrl(tenant: string, file: string): string {
  if (useLocal) return `/images/${file}`;
  return `${CDN}/${tenant}/media/${file}`;
}

export const brand = {
  logo: () => assetUrl(T2, "64249b8d335457a8a2e50668.png"),
  ornament: () => assetUrl(T2, "642534e75cd63e4a9b0ecee6.png"),
  sectionMark: () => assetUrl(T1, "28f3abb0-70cf-402d-86c9-73a65accf11d.png"),
  ogImage: () => assetUrl(T1, "a2089b74-fa50-4d63-8b4d-99c3ed02d5da.png"),
};

export const furnitureImages = [
  { file: "d356f0fc-3416-4e5d-a78c-1a128d42953d.jpeg", tenant: T1, alt: "Reupholstered fine furniture by Fred's Upholstery in Santa Barbara" },
  { file: "6488e7a05b1dfe6359fbb06c.jpeg", tenant: T1, alt: "Custom upholstered chair completed in the Fred's Upholstery shop" },
  { file: "16f8ef0f-8e6e-4394-86d1-e3496765bd99.jpeg", tenant: T1, alt: "Premium grade foam and fabric used on a furniture reupholstery job" },
  { file: "33b653ee-3e2f-492c-a2e5-a8c858c6b26e.jpeg", tenant: T1, alt: "Finished sofa reupholstery project" },
];

export const marineImages = [
  { file: "e8360586-4ba4-449e-b2c6-3d6236e83f7e.png", tenant: T1, alt: "Marine upholstery work in Santa Barbara harbor" },
  { file: "e331e227-314c-41a6-86ae-fd9bb7b7cdc2.jpeg", tenant: T1, alt: "Boat seat cushions recovered in Sunbrella marine fabric" },
  { file: "2a856fac-b519-487e-a3dc-7a69b60b69c0.jpeg", tenant: T1, alt: "Custom boat cushion set" },
  { file: "b3c9aa63-2a40-44a0-bcba-7bc8dfc89d46.jpeg", tenant: T1, alt: "Marine vinyl cushion covers" },
  { file: "cb508f8b-23b8-458c-8d68-85f8a10b47d8.jpeg", tenant: T1, alt: "Boat interior upholstery detail" },
];

export const commercialImages = [
  { file: "a9a7c741-9bae-418b-973f-4ab95a150ae8.jpeg", tenant: T1, alt: "Commercial seating reupholstered for a Santa Barbara business" },
  { file: "45003257-acb1-4546-b8d1-51a2d8cb315a.png", tenant: T1, alt: "Office waiting room upholstery" },
  { file: "536236f6-c751-4afe-b6f7-1052102198e4.jpeg", tenant: T1, alt: "Restaurant booth upholstery" },
  { file: "4ee6d78c-e363-493c-99b9-b17df144b4fe.jpeg", tenant: T1, alt: "Custom commercial interior upholstery" },
  { file: "64268234f2c7c2a68d46b4ba.jpeg", tenant: T2, alt: "Restaurant dining chairs reupholstered" },
  { file: "64268234f2c7c2fdb046b4bc.png", tenant: T2, alt: "Bar stool upholstery for a local venue" },
  { file: "64268234ab3428662051e272.jpeg", tenant: T2, alt: "Upholstered commercial booth seating" },
  { file: "64268234f2c7c2315346b4bb.jpeg", tenant: T2, alt: "Nightclub interior upholstery project" },
];

export const outdoorImages = [
  { file: "163cfbb2-f7a8-4e3a-ad09-1052201bd3d2.jpeg", tenant: T1, alt: "Outdoor patio cushions in Sunbrella fabric" },
  { file: "f940f63f-6ca0-438b-a7b0-f48287869a86.jpeg", tenant: T1, alt: "Chaise lounge cushions recovered for a Santa Barbara pool deck" },
  { file: "0550eb9c-3db8-4f05-8146-6a55394c08a4.jpeg", tenant: T1, alt: "Custom outdoor furniture cushions" },
  { file: "d07835e5-f76b-47b9-87c5-2ebd5d98162d.jpeg", tenant: T1, alt: "Poolside cushion set" },
];

export const aboutImages = [
  { file: "bdb12238-dfce-4c6c-aa7c-f73398bbf78b.jpeg", tenant: T1, alt: "Inside the Fred's Upholstery workshop on Garden Street" },
  { file: "75c0269e-1668-4251-9fa8-6f560d4cc67a.png", tenant: T1, alt: "Upholstery work in progress" },
  { file: "e8c86064-23b9-4e09-8b61-69030cff17f6.jpeg", tenant: T1, alt: "Hand-finished upholstery detail" },
  { file: "dcc06146-a3c4-4b58-910e-8119411a0cea.jpeg", tenant: T1, alt: "Completed reupholstery project" },
  { file: "6425a1cb430d3b1d01fb360c.jpeg", tenant: T2, alt: "Fred's Upholstery craftsmanship" },
  { file: "6425a1cd34089463a736f52c.png", tenant: T2, alt: "Fabric selection at Fred's Upholstery" },
  { file: "6425a1ce8f356e9b3ca62110.jpeg", tenant: T2, alt: "Antique furniture reupholstery" },
  { file: "6425a1d0f2c7c2d80f45ad38.jpeg", tenant: T2, alt: "Two generations of upholstery experience" },
];

export const reviewAvatars = [
  assetUrl(T1, "279bfde8-74cc-433d-aa81-3b9d1aebe6cf.jpeg"),
  assetUrl(T1, "6dc3849a-d44e-48d4-bf17-48335ecd0eba.jpeg"),
  assetUrl(T1, "8a909d79-28da-4ffa-b7f1-7f94477d7950.jpeg"),
];

/** Full gallery — 52 unique project photos pulled from the live /gallery page. */
export const galleryImages = [
  { file: "026bcb40-ecb7-454a-950a-b69e84de9fbe.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 1" },
  { file: "03b69b6a-e231-45b7-b2b0-d8089c49d072.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 2" },
  { file: "05bf5775-9a1a-4b58-b33d-ff3219c4499f.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 3" },
  { file: "1222972f-3f30-4754-91d4-86284d68676c.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 4" },
  { file: "16fa11a0-4a3b-435f-b367-7bb0838de234.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 5" },
  { file: "1adcdb27-4b2c-43ba-a7f4-cb1c853d4a3a.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 6" },
  { file: "1af65ebb-cadf-44c7-bc2a-174c9012d110.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 7" },
  { file: "1dddbff8-9223-4a2d-acfc-4a83c3314a36.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 8" },
  { file: "23ab7041-471f-4f79-bfad-764bbef10cb7.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 9" },
  { file: "26d42f9f-6c86-47d8-a916-39f50b3fc469.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 10" },
  { file: "2ee68c0a-c493-4f94-90b5-b3b80a3842f1.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 11" },
  { file: "37db6062-7cd9-47b4-9f22-69c7e2516de6.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 12" },
  { file: "3ad2cf8a-8181-4daa-9f00-5a683364df26.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 13" },
  { file: "431ad5a7-402b-4c4d-b076-e8bb896bfa69.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 14" },
  { file: "44496b44-ef65-4424-8777-ea762a884a3e.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 15" },
  { file: "4745647c-db0f-4460-bfae-44f2da389358.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 16" },
  { file: "509ad1c7-ccb5-4ddb-b732-7f5f4cc2cb9a.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 17" },
  { file: "519c720d-3ebc-48bf-9c85-74b02423426d.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 18" },
  { file: "55190800-c0c1-4a5f-8961-a2ee09a13d16.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 19" },
  { file: "56eef25e-37d0-4413-b7f3-b157769ad4e1.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 20" },
  { file: "5a5ad82f-19c9-42a0-ba96-ce03e0c1fa62.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 21" },
  { file: "624ececb-23df-4bc3-80ea-7330fc830837.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 22" },
  { file: "638a2b562ad4ef7a6fbb5219.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 23" },
  { file: "643f0b5f-c594-4725-804c-1ad5e9b0ffc1.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 24" },
  { file: "6462f250-2362-45c1-96b7-dbb53b2a89b5.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 25" },
  { file: "6488e7a05b1dfe6359fbb06c.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 26" },
  { file: "6e58d45e-b35f-4d49-b266-dc72f866cdbd.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 27" },
  { file: "6fd59b22-f094-4e78-9a2f-7a2d55f7fe17.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 28" },
  { file: "70ce0ead-613f-4182-a7d2-f9569b6c0fcb.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 29" },
  { file: "70f8e7b8-646f-4da7-9f32-a74698abf846.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 30" },
  { file: "7704c460-a05b-45a8-8272-2346a0d7cfc0.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 31" },
  { file: "7dadf8db-872c-4763-8ef6-402601ad1e0c.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 32" },
  { file: "7dcac9ac-c741-40d1-b613-8f9faadb1952.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 33" },
  { file: "7f44e2b0-5ac6-4d12-93c0-1a64af4adda9.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 34" },
  { file: "800463fb-7982-4074-a91b-e93d4c7463b1.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 35" },
  { file: "84406716-2724-4ccf-a389-b4694d6630fe.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 36" },
  { file: "862c06f5-7cd6-4e55-a49a-37b34a219dbc.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 37" },
  { file: "8a1b14da-e0f8-493b-809b-b36f00c9a030.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 38" },
  { file: "8ca7e13d-7322-49bd-bacc-15b39e388a6d.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 39" },
  { file: "902cbee3-cd6b-4d98-ade9-fa5472d98ee8.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 40" },
  { file: "9a58162e-70b3-447d-b4b8-74317b3191d9.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 41" },
  { file: "9cad768a-03db-47eb-82b1-c02045df6b9f.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 42" },
  { file: "ab8ee51c-7254-41ae-aea8-e36efbb06c8f.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 43" },
  { file: "abb5be0d-3ec7-4fbb-acca-5b6189a52e39.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 44" },
  { file: "b4ac688f-3d88-4bba-b566-a4993ededb0e.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 45" },
  { file: "cc5a2e93-b91f-423e-acc9-d56692396742.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 46" },
  { file: "cea3c01a-f1d2-450c-b135-31ef8b8f5220.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 47" },
  { file: "d19fa13e-564e-43e7-94c2-ba00fc3cc88f.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 48" },
  { file: "e375d998-b4e4-45f0-b0c9-fa99ff804f59.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 49" },
  { file: "e45f7521-e7f8-4ae5-995e-aa3e63c68f4f.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 50" },
  { file: "f7f942d8-4c04-4656-afc9-c314c130bb14.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 51" },
  { file: "f8477228-08d4-4802-9bf4-4c5be4c2024a.jpeg", tenant: T1, alt: "Fred's Upholstery project photo 52" },
];

/** Flat list of every asset, used by scripts/download-images.mjs */
export const allAssets = [
  { tenant: T2, file: "64249b8d335457a8a2e50668.png" },
  { tenant: T2, file: "642534e75cd63e4a9b0ecee6.png" },
  { tenant: T1, file: "28f3abb0-70cf-402d-86c9-73a65accf11d.png" },
  { tenant: T1, file: "a2089b74-fa50-4d63-8b4d-99c3ed02d5da.png" },
  { tenant: T1, file: "279bfde8-74cc-433d-aa81-3b9d1aebe6cf.jpeg" },
  { tenant: T1, file: "6dc3849a-d44e-48d4-bf17-48335ecd0eba.jpeg" },
  { tenant: T1, file: "8a909d79-28da-4ffa-b7f1-7f94477d7950.jpeg" },
  ...furnitureImages.map((i) => ({ tenant: i.tenant, file: i.file })),
  ...marineImages.map((i) => ({ tenant: i.tenant, file: i.file })),
  ...commercialImages.map((i) => ({ tenant: i.tenant, file: i.file })),
  ...outdoorImages.map((i) => ({ tenant: i.tenant, file: i.file })),
  ...aboutImages.map((i) => ({ tenant: i.tenant, file: i.file })),
  ...galleryImages.map((i) => ({ tenant: i.tenant, file: i.file })),
];
